using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using SharpPad.SqlCore.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace SharpPad.SqlCore.Implementations
{
    internal class SemanticTokensBuilder
    {
        public static List<int> Build(SyntaxNode root, SemanticModel semanticModel, CancellationToken cancellationToken)
        {
            var tokens = new List<SemanticToken>();
            CollectSemanticTokens(root, semanticModel, tokens, cancellationToken);

            tokens.Sort((a, b) =>
            {
                var lineCompare = a.Line.CompareTo(b.Line);
                return lineCompare != 0 ? lineCompare : a.Character.CompareTo(b.Character);
            });

            return EncodeSemanticTokens(tokens);
        }

        private static void CollectSemanticTokens(SyntaxNode node, SemanticModel semanticModel, List<SemanticToken> tokens, CancellationToken cancellationToken)
        {
            foreach (var childNode in node.ChildNodesAndTokens())
            {
                if (childNode.IsNode)
                {
                    ProcessSyntaxNode(childNode.AsNode()!, semanticModel, tokens, cancellationToken);
                    CollectSemanticTokens(childNode.AsNode()!, semanticModel, tokens, cancellationToken);
                }
                else if (childNode.IsToken)
                {
                    ProcessSyntaxToken(childNode.AsToken(), semanticModel, tokens, cancellationToken);
                }
            }
        }

        private static void ProcessSyntaxNode(SyntaxNode node, SemanticModel semanticModel, List<SemanticToken> tokens, CancellationToken cancellationToken)
        {
            switch (node)
            {
                case ClassDeclarationSyntax classDecl:
                    AddToken(tokens, classDecl.Identifier, SemanticTokenType.Class, GetTypeModifiers(classDecl.Modifiers));
                    break;

                case InterfaceDeclarationSyntax interfaceDecl:
                    AddToken(tokens, interfaceDecl.Identifier, SemanticTokenType.Interface, GetTypeModifiers(interfaceDecl.Modifiers));
                    break;

                case StructDeclarationSyntax structDecl:
                    AddToken(tokens, structDecl.Identifier, SemanticTokenType.Struct, GetTypeModifiers(structDecl.Modifiers));
                    break;

                case EnumDeclarationSyntax enumDecl:
                    AddToken(tokens, enumDecl.Identifier, SemanticTokenType.Enum, GetTypeModifiers(enumDecl.Modifiers));
                    break;

                case MethodDeclarationSyntax methodDecl:
                    AddToken(tokens, methodDecl.Identifier, SemanticTokenType.Method, GetMemberModifiers(methodDecl.Modifiers));
                    break;

                case PropertyDeclarationSyntax propertyDecl:
                    AddToken(tokens, propertyDecl.Identifier, SemanticTokenType.Property, GetMemberModifiers(propertyDecl.Modifiers));
                    break;

                case FieldDeclarationSyntax fieldDecl:
                    foreach (var variable in fieldDecl.Declaration.Variables)
                    {
                        AddToken(tokens, variable.Identifier, SemanticTokenType.Variable, GetMemberModifiers(fieldDecl.Modifiers));
                    }
                    break;

                case VariableDeclarationSyntax varDecl:
                    foreach (var variable in varDecl.Variables)
                    {
                        AddToken(tokens, variable.Identifier, SemanticTokenType.Variable, SemanticTokenModifier.Declaration);
                    }
                    break;

                case ParameterSyntax parameter:
                    AddToken(tokens, parameter.Identifier, SemanticTokenType.Parameter, SemanticTokenModifier.Declaration);
                    break;
            }
        }

        private static void ProcessSyntaxToken(SyntaxToken token, SemanticModel semanticModel, List<SemanticToken> tokens, CancellationToken cancellationToken)
        {
            if (token.IsKind(SyntaxKind.IdentifierToken) && token.Parent != null)
            {
                if (IsProcessedBySyntaxNode(token.Parent))
                {
                    return;
                }

                var symbol = semanticModel.GetSymbolInfo(token.Parent, cancellationToken).Symbol;
                if (symbol != null)
                {
                    var (tokenType, modifiers) = GetSymbolTokenTypeAndModifiers(symbol);
                    if (tokenType.HasValue)
                    {
                        AddToken(tokens, token, tokenType.Value, modifiers);
                    }
                }
                else
                {
                    symbol = semanticModel.GetDeclaredSymbol(token.Parent, cancellationToken);
                    if (symbol != null)
                    {
                        var (tokenType, modifiers) = GetSymbolTokenTypeAndModifiers(symbol);
                        if (tokenType.HasValue)
                        {
                            AddToken(tokens, token, tokenType.Value, modifiers);
                        }
                    }
                }
            }
        }

        private static bool IsProcessedBySyntaxNode(SyntaxNode node)
        {
            return node is ClassDeclarationSyntax ||
                   node is InterfaceDeclarationSyntax ||
                   node is StructDeclarationSyntax ||
                   node is EnumDeclarationSyntax ||
                   node is MethodDeclarationSyntax ||
                   node is PropertyDeclarationSyntax ||
                   node is VariableDeclaratorSyntax ||
                   node is ParameterSyntax;
        }

        private static (SemanticTokenType?, SemanticTokenModifier) GetSymbolTokenTypeAndModifiers(ISymbol symbol)
        {
            var modifiers = SemanticTokenModifier.Declaration;

            if (symbol.IsStatic)
                modifiers |= SemanticTokenModifier.Static;
            if (symbol.IsAbstract)
                modifiers |= SemanticTokenModifier.Abstract;
            if (symbol.IsSealed)
                modifiers |= SemanticTokenModifier.Readonly;

            return symbol.Kind switch
            {
                SymbolKind.Namespace => (SemanticTokenType.Namespace, modifiers),
                SymbolKind.NamedType => GetNamedTypeToken((INamedTypeSymbol)symbol, modifiers),
                SymbolKind.Method => (SemanticTokenType.Method, modifiers),
                SymbolKind.Property => (SemanticTokenType.Property, modifiers),
                SymbolKind.Field => GetFieldToken((IFieldSymbol)symbol, modifiers),
                SymbolKind.Local => (SemanticTokenType.Variable, modifiers & ~SemanticTokenModifier.Static),
                SymbolKind.Parameter => (SemanticTokenType.Parameter, modifiers & ~SemanticTokenModifier.Static),
                SymbolKind.Event => (SemanticTokenType.Event, modifiers),
                _ => (null, modifiers)
            };
        }

        private static (SemanticTokenType?, SemanticTokenModifier) GetFieldToken(IFieldSymbol fieldSymbol, SemanticTokenModifier modifiers)
        {
            if (fieldSymbol.ContainingType?.TypeKind == TypeKind.Enum)
            {
                return (SemanticTokenType.EnumMember, modifiers);
            }

            if (fieldSymbol.IsReadOnly)
                modifiers |= SemanticTokenModifier.Readonly;
            if (fieldSymbol.IsConst)
                modifiers |= SemanticTokenModifier.Readonly | SemanticTokenModifier.Static;

            return (SemanticTokenType.Variable, modifiers);
        }

        private static (SemanticTokenType?, SemanticTokenModifier) GetNamedTypeToken(INamedTypeSymbol typeSymbol, SemanticTokenModifier modifiers)
        {
            return typeSymbol.TypeKind switch
            {
                TypeKind.Class => (SemanticTokenType.Class, modifiers),
                TypeKind.Interface => (SemanticTokenType.Interface, modifiers),
                TypeKind.Struct => (SemanticTokenType.Struct, modifiers),
                TypeKind.Enum => (SemanticTokenType.Enum, modifiers),
                _ => (SemanticTokenType.Class, modifiers)
            };
        }

        private static SemanticTokenModifier GetTypeModifiers(SyntaxTokenList modifiers)
        {
            var result = SemanticTokenModifier.Declaration | SemanticTokenModifier.Definition;

            if (modifiers.Any(m => m.IsKind(SyntaxKind.StaticKeyword)))
                result |= SemanticTokenModifier.Static;
            if (modifiers.Any(m => m.IsKind(SyntaxKind.AbstractKeyword)))
                result |= SemanticTokenModifier.Abstract;
            if (modifiers.Any(m => m.IsKind(SyntaxKind.SealedKeyword)))
                result |= SemanticTokenModifier.Readonly;

            return result;
        }

        private static SemanticTokenModifier GetMemberModifiers(SyntaxTokenList modifiers)
        {
            var result = SemanticTokenModifier.Declaration | SemanticTokenModifier.Definition;

            if (modifiers.Any(m => m.IsKind(SyntaxKind.StaticKeyword)))
                result |= SemanticTokenModifier.Static;
            if (modifiers.Any(m => m.IsKind(SyntaxKind.ReadOnlyKeyword)))
                result |= SemanticTokenModifier.Readonly;
            if (modifiers.Any(m => m.IsKind(SyntaxKind.AbstractKeyword)))
                result |= SemanticTokenModifier.Abstract;
            if (modifiers.Any(m => m.IsKind(SyntaxKind.AsyncKeyword)))
                result |= SemanticTokenModifier.Async;

            return result;
        }

        private static void AddToken(List<SemanticToken> tokens, SyntaxToken token, SemanticTokenType tokenType, SemanticTokenModifier modifiers)
        {
            var syntaxTree = token.SyntaxTree;
            if (syntaxTree != null)
            {
                var lineSpan = syntaxTree.GetLineSpan(token.Span);
                tokens.Add(new SemanticToken
                {
                    Line = lineSpan.StartLinePosition.Line,
                    Character = lineSpan.StartLinePosition.Character,
                    Length = token.Span.Length,
                    TokenType = (int)tokenType,
                    TokenModifiers = (int)modifiers
                });
            }
        }

        private static List<int> EncodeSemanticTokens(List<SemanticToken> tokens)
        {
            var data = new List<int>();
            int previousLine = 0;
            int previousCharacter = 0;

            foreach (var token in tokens)
            {
                var deltaLine = token.Line - previousLine;
                var deltaStart = deltaLine == 0 ? token.Character - previousCharacter : token.Character;

                data.Add(deltaLine);
                data.Add(deltaStart);
                data.Add(token.Length);
                data.Add(token.TokenType);
                data.Add(token.TokenModifiers);

                previousLine = token.Line;
                previousCharacter = token.Character;
            }

            return data;
        }
    }
}
