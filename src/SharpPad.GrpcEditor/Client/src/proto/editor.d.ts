import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace editor. */
export namespace editor {

    /** Represents an EditorService */
    class EditorService extends $protobuf.rpc.Service {

        /**
         * Constructs a new EditorService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EditorService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EditorService;

        /**
         * Calls Initialize.
         * @param request InitializeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and InitializeReply
         */
        public initialize(request: editor.IInitializeRequest, callback: editor.EditorService.InitializeCallback): void;

        /**
         * Calls Initialize.
         * @param request InitializeRequest message or plain object
         * @returns Promise
         */
        public initialize(request: editor.IInitializeRequest): Promise<editor.InitializeReply>;

        /**
         * Calls GetCompletions.
         * @param request CompletionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CompletionReply
         */
        public getCompletions(request: editor.ICompletionRequest, callback: editor.EditorService.GetCompletionsCallback): void;

        /**
         * Calls GetCompletions.
         * @param request CompletionRequest message or plain object
         * @returns Promise
         */
        public getCompletions(request: editor.ICompletionRequest): Promise<editor.CompletionReply>;

        /**
         * Calls GetHoverInfo.
         * @param request HoverInfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HoverInfoReply
         */
        public getHoverInfo(request: editor.IHoverInfoRequest, callback: editor.EditorService.GetHoverInfoCallback): void;

        /**
         * Calls GetHoverInfo.
         * @param request HoverInfoRequest message or plain object
         * @returns Promise
         */
        public getHoverInfo(request: editor.IHoverInfoRequest): Promise<editor.HoverInfoReply>;

        /**
         * Calls GetSignatureHelp.
         * @param request SignatureHelpRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SignatureHelpReply
         */
        public getSignatureHelp(request: editor.ISignatureHelpRequest, callback: editor.EditorService.GetSignatureHelpCallback): void;

        /**
         * Calls GetSignatureHelp.
         * @param request SignatureHelpRequest message or plain object
         * @returns Promise
         */
        public getSignatureHelp(request: editor.ISignatureHelpRequest): Promise<editor.SignatureHelpReply>;

        /**
         * Calls GetDefinition.
         * @param request DefinitionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DefinitionReply
         */
        public getDefinition(request: editor.IDefinitionRequest, callback: editor.EditorService.GetDefinitionCallback): void;

        /**
         * Calls GetDefinition.
         * @param request DefinitionRequest message or plain object
         * @returns Promise
         */
        public getDefinition(request: editor.IDefinitionRequest): Promise<editor.DefinitionReply>;

        /**
         * Calls GetSemanticTokens.
         * @param request SemanticTokensRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SemanticTokensReply
         */
        public getSemanticTokens(request: editor.ISemanticTokensRequest, callback: editor.EditorService.GetSemanticTokensCallback): void;

        /**
         * Calls GetSemanticTokens.
         * @param request SemanticTokensRequest message or plain object
         * @returns Promise
         */
        public getSemanticTokens(request: editor.ISemanticTokensRequest): Promise<editor.SemanticTokensReply>;

        /**
         * Calls FormatCode.
         * @param request FormatCodeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FormatCodeReply
         */
        public formatCode(request: editor.IFormatCodeRequest, callback: editor.EditorService.FormatCodeCallback): void;

        /**
         * Calls FormatCode.
         * @param request FormatCodeRequest message or plain object
         * @returns Promise
         */
        public formatCode(request: editor.IFormatCodeRequest): Promise<editor.FormatCodeReply>;

        /**
         * Calls GetDiagnostics.
         * @param request DiagnosticsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DiagnosticsReply
         */
        public getDiagnostics(request: editor.IDiagnosticsRequest, callback: editor.EditorService.GetDiagnosticsCallback): void;

        /**
         * Calls GetDiagnostics.
         * @param request DiagnosticsRequest message or plain object
         * @returns Promise
         */
        public getDiagnostics(request: editor.IDiagnosticsRequest): Promise<editor.DiagnosticsReply>;

        /**
         * Calls GetQuickFixes.
         * @param request QuickFixRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QuickFixReply
         */
        public getQuickFixes(request: editor.IQuickFixRequest, callback: editor.EditorService.GetQuickFixesCallback): void;

        /**
         * Calls GetQuickFixes.
         * @param request QuickFixRequest message or plain object
         * @returns Promise
         */
        public getQuickFixes(request: editor.IQuickFixRequest): Promise<editor.QuickFixReply>;

        /**
         * Calls ExecuteCode.
         * @param request ExecuteCodeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ExecuteCodeReply
         */
        public executeCode(request: editor.IExecuteCodeRequest, callback: editor.EditorService.ExecuteCodeCallback): void;

        /**
         * Calls ExecuteCode.
         * @param request ExecuteCodeRequest message or plain object
         * @returns Promise
         */
        public executeCode(request: editor.IExecuteCodeRequest): Promise<editor.ExecuteCodeReply>;

        /**
         * Calls GetConnections.
         * @param request GetConnectionsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetConnectionsReply
         */
        public getConnections(request: editor.IGetConnectionsRequest, callback: editor.EditorService.GetConnectionsCallback): void;

        /**
         * Calls GetConnections.
         * @param request GetConnectionsRequest message or plain object
         * @returns Promise
         */
        public getConnections(request: editor.IGetConnectionsRequest): Promise<editor.GetConnectionsReply>;

        /**
         * Calls SaveConnection.
         * @param request SaveConnectionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SaveConnectionReply
         */
        public saveConnection(request: editor.ISaveConnectionRequest, callback: editor.EditorService.SaveConnectionCallback): void;

        /**
         * Calls SaveConnection.
         * @param request SaveConnectionRequest message or plain object
         * @returns Promise
         */
        public saveConnection(request: editor.ISaveConnectionRequest): Promise<editor.SaveConnectionReply>;

        /**
         * Calls DeleteConnection.
         * @param request DeleteConnectionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteConnectionReply
         */
        public deleteConnection(request: editor.IDeleteConnectionRequest, callback: editor.EditorService.DeleteConnectionCallback): void;

        /**
         * Calls DeleteConnection.
         * @param request DeleteConnectionRequest message or plain object
         * @returns Promise
         */
        public deleteConnection(request: editor.IDeleteConnectionRequest): Promise<editor.DeleteConnectionReply>;

        /**
         * Calls TestConnection.
         * @param request TestConnectionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and TestConnectionReply
         */
        public testConnection(request: editor.ITestConnectionRequest, callback: editor.EditorService.TestConnectionCallback): void;

        /**
         * Calls TestConnection.
         * @param request TestConnectionRequest message or plain object
         * @returns Promise
         */
        public testConnection(request: editor.ITestConnectionRequest): Promise<editor.TestConnectionReply>;

        /**
         * Calls GetDatabaseSchema.
         * @param request GetDatabaseSchemaRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetDatabaseSchemaReply
         */
        public getDatabaseSchema(request: editor.IGetDatabaseSchemaRequest, callback: editor.EditorService.GetDatabaseSchemaCallback): void;

        /**
         * Calls GetDatabaseSchema.
         * @param request GetDatabaseSchemaRequest message or plain object
         * @returns Promise
         */
        public getDatabaseSchema(request: editor.IGetDatabaseSchemaRequest): Promise<editor.GetDatabaseSchemaReply>;

        /**
         * Calls GenerateModels.
         * @param request GenerateModelsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GenerateModelsReply
         */
        public generateModels(request: editor.IGenerateModelsRequest, callback: editor.EditorService.GenerateModelsCallback): void;

        /**
         * Calls GenerateModels.
         * @param request GenerateModelsRequest message or plain object
         * @returns Promise
         */
        public generateModels(request: editor.IGenerateModelsRequest): Promise<editor.GenerateModelsReply>;

        /**
         * Calls GetGeneratedModels.
         * @param request GetGeneratedModelsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGeneratedModelsReply
         */
        public getGeneratedModels(request: editor.IGetGeneratedModelsRequest, callback: editor.EditorService.GetGeneratedModelsCallback): void;

        /**
         * Calls GetGeneratedModels.
         * @param request GetGeneratedModelsRequest message or plain object
         * @returns Promise
         */
        public getGeneratedModels(request: editor.IGetGeneratedModelsRequest): Promise<editor.GetGeneratedModelsReply>;

        /**
         * Calls ConnectToDatabase.
         * @param request ConnectRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ConnectReply
         */
        public connectToDatabase(request: editor.IConnectRequest, callback: editor.EditorService.ConnectToDatabaseCallback): void;

        /**
         * Calls ConnectToDatabase.
         * @param request ConnectRequest message or plain object
         * @returns Promise
         */
        public connectToDatabase(request: editor.IConnectRequest): Promise<editor.ConnectReply>;
    }

    namespace EditorService {

        /**
         * Callback as used by {@link editor.EditorService#initialize}.
         * @param error Error, if any
         * @param [response] InitializeReply
         */
        type InitializeCallback = (error: (Error|null), response?: editor.InitializeReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getCompletions}.
         * @param error Error, if any
         * @param [response] CompletionReply
         */
        type GetCompletionsCallback = (error: (Error|null), response?: editor.CompletionReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getHoverInfo}.
         * @param error Error, if any
         * @param [response] HoverInfoReply
         */
        type GetHoverInfoCallback = (error: (Error|null), response?: editor.HoverInfoReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getSignatureHelp}.
         * @param error Error, if any
         * @param [response] SignatureHelpReply
         */
        type GetSignatureHelpCallback = (error: (Error|null), response?: editor.SignatureHelpReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getDefinition}.
         * @param error Error, if any
         * @param [response] DefinitionReply
         */
        type GetDefinitionCallback = (error: (Error|null), response?: editor.DefinitionReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getSemanticTokens}.
         * @param error Error, if any
         * @param [response] SemanticTokensReply
         */
        type GetSemanticTokensCallback = (error: (Error|null), response?: editor.SemanticTokensReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#formatCode}.
         * @param error Error, if any
         * @param [response] FormatCodeReply
         */
        type FormatCodeCallback = (error: (Error|null), response?: editor.FormatCodeReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getDiagnostics}.
         * @param error Error, if any
         * @param [response] DiagnosticsReply
         */
        type GetDiagnosticsCallback = (error: (Error|null), response?: editor.DiagnosticsReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getQuickFixes}.
         * @param error Error, if any
         * @param [response] QuickFixReply
         */
        type GetQuickFixesCallback = (error: (Error|null), response?: editor.QuickFixReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#executeCode}.
         * @param error Error, if any
         * @param [response] ExecuteCodeReply
         */
        type ExecuteCodeCallback = (error: (Error|null), response?: editor.ExecuteCodeReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getConnections}.
         * @param error Error, if any
         * @param [response] GetConnectionsReply
         */
        type GetConnectionsCallback = (error: (Error|null), response?: editor.GetConnectionsReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#saveConnection}.
         * @param error Error, if any
         * @param [response] SaveConnectionReply
         */
        type SaveConnectionCallback = (error: (Error|null), response?: editor.SaveConnectionReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#deleteConnection}.
         * @param error Error, if any
         * @param [response] DeleteConnectionReply
         */
        type DeleteConnectionCallback = (error: (Error|null), response?: editor.DeleteConnectionReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#testConnection}.
         * @param error Error, if any
         * @param [response] TestConnectionReply
         */
        type TestConnectionCallback = (error: (Error|null), response?: editor.TestConnectionReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getDatabaseSchema}.
         * @param error Error, if any
         * @param [response] GetDatabaseSchemaReply
         */
        type GetDatabaseSchemaCallback = (error: (Error|null), response?: editor.GetDatabaseSchemaReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#generateModels}.
         * @param error Error, if any
         * @param [response] GenerateModelsReply
         */
        type GenerateModelsCallback = (error: (Error|null), response?: editor.GenerateModelsReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#getGeneratedModels}.
         * @param error Error, if any
         * @param [response] GetGeneratedModelsReply
         */
        type GetGeneratedModelsCallback = (error: (Error|null), response?: editor.GetGeneratedModelsReply) => void;

        /**
         * Callback as used by {@link editor.EditorService#connectToDatabase}.
         * @param error Error, if any
         * @param [response] ConnectReply
         */
        type ConnectToDatabaseCallback = (error: (Error|null), response?: editor.ConnectReply) => void;
    }

    /** Properties of an InitializeRequest. */
    interface IInitializeRequest {

        /** InitializeRequest projectPath */
        projectPath?: (string|null);

        /** InitializeRequest assemblyPaths */
        assemblyPaths?: (string[]|null);
    }

    /** Represents an InitializeRequest. */
    class InitializeRequest implements IInitializeRequest {

        /**
         * Constructs a new InitializeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IInitializeRequest);

        /** InitializeRequest projectPath. */
        public projectPath: string;

        /** InitializeRequest assemblyPaths. */
        public assemblyPaths: string[];

        /**
         * Creates a new InitializeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitializeRequest instance
         */
        public static create(properties?: editor.IInitializeRequest): editor.InitializeRequest;

        /**
         * Encodes the specified InitializeRequest message. Does not implicitly {@link editor.InitializeRequest.verify|verify} messages.
         * @param message InitializeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IInitializeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitializeRequest message, length delimited. Does not implicitly {@link editor.InitializeRequest.verify|verify} messages.
         * @param message InitializeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IInitializeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitializeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitializeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.InitializeRequest;

        /**
         * Decodes an InitializeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitializeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.InitializeRequest;

        /**
         * Verifies an InitializeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitializeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitializeRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.InitializeRequest;

        /**
         * Creates a plain object from an InitializeRequest message. Also converts values to other types if specified.
         * @param message InitializeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.InitializeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitializeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InitializeRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InitializeReply. */
    interface IInitializeReply {

        /** InitializeReply success */
        success?: (boolean|null);

        /** InitializeReply errorMessage */
        errorMessage?: (string|null);
    }

    /** Represents an InitializeReply. */
    class InitializeReply implements IInitializeReply {

        /**
         * Constructs a new InitializeReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IInitializeReply);

        /** InitializeReply success. */
        public success: boolean;

        /** InitializeReply errorMessage. */
        public errorMessage: string;

        /**
         * Creates a new InitializeReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitializeReply instance
         */
        public static create(properties?: editor.IInitializeReply): editor.InitializeReply;

        /**
         * Encodes the specified InitializeReply message. Does not implicitly {@link editor.InitializeReply.verify|verify} messages.
         * @param message InitializeReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IInitializeReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitializeReply message, length delimited. Does not implicitly {@link editor.InitializeReply.verify|verify} messages.
         * @param message InitializeReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IInitializeReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitializeReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitializeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.InitializeReply;

        /**
         * Decodes an InitializeReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitializeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.InitializeReply;

        /**
         * Verifies an InitializeReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitializeReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitializeReply
         */
        public static fromObject(object: { [k: string]: any }): editor.InitializeReply;

        /**
         * Creates a plain object from an InitializeReply message. Also converts values to other types if specified.
         * @param message InitializeReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.InitializeReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitializeReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InitializeReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CompletionRequest. */
    interface ICompletionRequest {

        /** CompletionRequest code */
        code?: (string|null);

        /** CompletionRequest position */
        position?: (number|null);

        /** CompletionRequest extraFiles */
        extraFiles?: (editor.ISourceFile[]|null);
    }

    /** Represents a CompletionRequest. */
    class CompletionRequest implements ICompletionRequest {

        /**
         * Constructs a new CompletionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ICompletionRequest);

        /** CompletionRequest code. */
        public code: string;

        /** CompletionRequest position. */
        public position: number;

        /** CompletionRequest extraFiles. */
        public extraFiles: editor.ISourceFile[];

        /**
         * Creates a new CompletionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompletionRequest instance
         */
        public static create(properties?: editor.ICompletionRequest): editor.CompletionRequest;

        /**
         * Encodes the specified CompletionRequest message. Does not implicitly {@link editor.CompletionRequest.verify|verify} messages.
         * @param message CompletionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ICompletionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompletionRequest message, length delimited. Does not implicitly {@link editor.CompletionRequest.verify|verify} messages.
         * @param message CompletionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ICompletionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompletionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CompletionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.CompletionRequest;

        /**
         * Decodes a CompletionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CompletionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.CompletionRequest;

        /**
         * Verifies a CompletionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompletionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompletionRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.CompletionRequest;

        /**
         * Creates a plain object from a CompletionRequest message. Also converts values to other types if specified.
         * @param message CompletionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.CompletionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompletionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CompletionRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CompletionReply. */
    interface ICompletionReply {

        /** CompletionReply items */
        items?: (editor.ICompletionItem[]|null);
    }

    /** Represents a CompletionReply. */
    class CompletionReply implements ICompletionReply {

        /**
         * Constructs a new CompletionReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ICompletionReply);

        /** CompletionReply items. */
        public items: editor.ICompletionItem[];

        /**
         * Creates a new CompletionReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompletionReply instance
         */
        public static create(properties?: editor.ICompletionReply): editor.CompletionReply;

        /**
         * Encodes the specified CompletionReply message. Does not implicitly {@link editor.CompletionReply.verify|verify} messages.
         * @param message CompletionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ICompletionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompletionReply message, length delimited. Does not implicitly {@link editor.CompletionReply.verify|verify} messages.
         * @param message CompletionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ICompletionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompletionReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CompletionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.CompletionReply;

        /**
         * Decodes a CompletionReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CompletionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.CompletionReply;

        /**
         * Verifies a CompletionReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompletionReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompletionReply
         */
        public static fromObject(object: { [k: string]: any }): editor.CompletionReply;

        /**
         * Creates a plain object from a CompletionReply message. Also converts values to other types if specified.
         * @param message CompletionReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.CompletionReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompletionReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CompletionReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CompletionItem. */
    interface ICompletionItem {

        /** CompletionItem displayText */
        displayText?: (string|null);

        /** CompletionItem insertText */
        insertText?: (string|null);

        /** CompletionItem kind */
        kind?: (string|null);

        /** CompletionItem sortText */
        sortText?: (string|null);
    }

    /** Represents a CompletionItem. */
    class CompletionItem implements ICompletionItem {

        /**
         * Constructs a new CompletionItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ICompletionItem);

        /** CompletionItem displayText. */
        public displayText: string;

        /** CompletionItem insertText. */
        public insertText: string;

        /** CompletionItem kind. */
        public kind: string;

        /** CompletionItem sortText. */
        public sortText: string;

        /**
         * Creates a new CompletionItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompletionItem instance
         */
        public static create(properties?: editor.ICompletionItem): editor.CompletionItem;

        /**
         * Encodes the specified CompletionItem message. Does not implicitly {@link editor.CompletionItem.verify|verify} messages.
         * @param message CompletionItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ICompletionItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompletionItem message, length delimited. Does not implicitly {@link editor.CompletionItem.verify|verify} messages.
         * @param message CompletionItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ICompletionItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompletionItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CompletionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.CompletionItem;

        /**
         * Decodes a CompletionItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CompletionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.CompletionItem;

        /**
         * Verifies a CompletionItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompletionItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompletionItem
         */
        public static fromObject(object: { [k: string]: any }): editor.CompletionItem;

        /**
         * Creates a plain object from a CompletionItem message. Also converts values to other types if specified.
         * @param message CompletionItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.CompletionItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompletionItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CompletionItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HoverInfoRequest. */
    interface IHoverInfoRequest {

        /** HoverInfoRequest code */
        code?: (string|null);

        /** HoverInfoRequest position */
        position?: (number|null);

        /** HoverInfoRequest extraFiles */
        extraFiles?: (editor.ISourceFile[]|null);
    }

    /** Represents a HoverInfoRequest. */
    class HoverInfoRequest implements IHoverInfoRequest {

        /**
         * Constructs a new HoverInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IHoverInfoRequest);

        /** HoverInfoRequest code. */
        public code: string;

        /** HoverInfoRequest position. */
        public position: number;

        /** HoverInfoRequest extraFiles. */
        public extraFiles: editor.ISourceFile[];

        /**
         * Creates a new HoverInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HoverInfoRequest instance
         */
        public static create(properties?: editor.IHoverInfoRequest): editor.HoverInfoRequest;

        /**
         * Encodes the specified HoverInfoRequest message. Does not implicitly {@link editor.HoverInfoRequest.verify|verify} messages.
         * @param message HoverInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IHoverInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HoverInfoRequest message, length delimited. Does not implicitly {@link editor.HoverInfoRequest.verify|verify} messages.
         * @param message HoverInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IHoverInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HoverInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HoverInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.HoverInfoRequest;

        /**
         * Decodes a HoverInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HoverInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.HoverInfoRequest;

        /**
         * Verifies a HoverInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HoverInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HoverInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.HoverInfoRequest;

        /**
         * Creates a plain object from a HoverInfoRequest message. Also converts values to other types if specified.
         * @param message HoverInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.HoverInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HoverInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HoverInfoRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HoverInfoReply. */
    interface IHoverInfoReply {

        /** HoverInfoReply hasInfo */
        hasInfo?: (boolean|null);

        /** HoverInfoReply information */
        information?: (string|null);

        /** HoverInfoReply offsetFrom */
        offsetFrom?: (number|null);

        /** HoverInfoReply offsetTo */
        offsetTo?: (number|null);
    }

    /** Represents a HoverInfoReply. */
    class HoverInfoReply implements IHoverInfoReply {

        /**
         * Constructs a new HoverInfoReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IHoverInfoReply);

        /** HoverInfoReply hasInfo. */
        public hasInfo: boolean;

        /** HoverInfoReply information. */
        public information: string;

        /** HoverInfoReply offsetFrom. */
        public offsetFrom: number;

        /** HoverInfoReply offsetTo. */
        public offsetTo: number;

        /**
         * Creates a new HoverInfoReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HoverInfoReply instance
         */
        public static create(properties?: editor.IHoverInfoReply): editor.HoverInfoReply;

        /**
         * Encodes the specified HoverInfoReply message. Does not implicitly {@link editor.HoverInfoReply.verify|verify} messages.
         * @param message HoverInfoReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IHoverInfoReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HoverInfoReply message, length delimited. Does not implicitly {@link editor.HoverInfoReply.verify|verify} messages.
         * @param message HoverInfoReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IHoverInfoReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HoverInfoReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HoverInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.HoverInfoReply;

        /**
         * Decodes a HoverInfoReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HoverInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.HoverInfoReply;

        /**
         * Verifies a HoverInfoReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HoverInfoReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HoverInfoReply
         */
        public static fromObject(object: { [k: string]: any }): editor.HoverInfoReply;

        /**
         * Creates a plain object from a HoverInfoReply message. Also converts values to other types if specified.
         * @param message HoverInfoReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.HoverInfoReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HoverInfoReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HoverInfoReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignatureHelpRequest. */
    interface ISignatureHelpRequest {

        /** SignatureHelpRequest code */
        code?: (string|null);

        /** SignatureHelpRequest position */
        position?: (number|null);

        /** SignatureHelpRequest extraFiles */
        extraFiles?: (editor.ISourceFile[]|null);
    }

    /** Represents a SignatureHelpRequest. */
    class SignatureHelpRequest implements ISignatureHelpRequest {

        /**
         * Constructs a new SignatureHelpRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ISignatureHelpRequest);

        /** SignatureHelpRequest code. */
        public code: string;

        /** SignatureHelpRequest position. */
        public position: number;

        /** SignatureHelpRequest extraFiles. */
        public extraFiles: editor.ISourceFile[];

        /**
         * Creates a new SignatureHelpRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignatureHelpRequest instance
         */
        public static create(properties?: editor.ISignatureHelpRequest): editor.SignatureHelpRequest;

        /**
         * Encodes the specified SignatureHelpRequest message. Does not implicitly {@link editor.SignatureHelpRequest.verify|verify} messages.
         * @param message SignatureHelpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ISignatureHelpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignatureHelpRequest message, length delimited. Does not implicitly {@link editor.SignatureHelpRequest.verify|verify} messages.
         * @param message SignatureHelpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ISignatureHelpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignatureHelpRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignatureHelpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.SignatureHelpRequest;

        /**
         * Decodes a SignatureHelpRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignatureHelpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.SignatureHelpRequest;

        /**
         * Verifies a SignatureHelpRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignatureHelpRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignatureHelpRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.SignatureHelpRequest;

        /**
         * Creates a plain object from a SignatureHelpRequest message. Also converts values to other types if specified.
         * @param message SignatureHelpRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.SignatureHelpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignatureHelpRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignatureHelpRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignatureHelpReply. */
    interface ISignatureHelpReply {

        /** SignatureHelpReply hasHelp */
        hasHelp?: (boolean|null);

        /** SignatureHelpReply signatures */
        signatures?: (editor.ISignatureItem[]|null);

        /** SignatureHelpReply activeParameter */
        activeParameter?: (number|null);

        /** SignatureHelpReply activeSignature */
        activeSignature?: (number|null);
    }

    /** Represents a SignatureHelpReply. */
    class SignatureHelpReply implements ISignatureHelpReply {

        /**
         * Constructs a new SignatureHelpReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ISignatureHelpReply);

        /** SignatureHelpReply hasHelp. */
        public hasHelp: boolean;

        /** SignatureHelpReply signatures. */
        public signatures: editor.ISignatureItem[];

        /** SignatureHelpReply activeParameter. */
        public activeParameter: number;

        /** SignatureHelpReply activeSignature. */
        public activeSignature: number;

        /**
         * Creates a new SignatureHelpReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignatureHelpReply instance
         */
        public static create(properties?: editor.ISignatureHelpReply): editor.SignatureHelpReply;

        /**
         * Encodes the specified SignatureHelpReply message. Does not implicitly {@link editor.SignatureHelpReply.verify|verify} messages.
         * @param message SignatureHelpReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ISignatureHelpReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignatureHelpReply message, length delimited. Does not implicitly {@link editor.SignatureHelpReply.verify|verify} messages.
         * @param message SignatureHelpReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ISignatureHelpReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignatureHelpReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignatureHelpReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.SignatureHelpReply;

        /**
         * Decodes a SignatureHelpReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignatureHelpReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.SignatureHelpReply;

        /**
         * Verifies a SignatureHelpReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignatureHelpReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignatureHelpReply
         */
        public static fromObject(object: { [k: string]: any }): editor.SignatureHelpReply;

        /**
         * Creates a plain object from a SignatureHelpReply message. Also converts values to other types if specified.
         * @param message SignatureHelpReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.SignatureHelpReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignatureHelpReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignatureHelpReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignatureItem. */
    interface ISignatureItem {

        /** SignatureItem label */
        label?: (string|null);

        /** SignatureItem documentation */
        documentation?: (string|null);

        /** SignatureItem parameters */
        parameters?: (editor.IParameterItem[]|null);
    }

    /** Represents a SignatureItem. */
    class SignatureItem implements ISignatureItem {

        /**
         * Constructs a new SignatureItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ISignatureItem);

        /** SignatureItem label. */
        public label: string;

        /** SignatureItem documentation. */
        public documentation: string;

        /** SignatureItem parameters. */
        public parameters: editor.IParameterItem[];

        /**
         * Creates a new SignatureItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignatureItem instance
         */
        public static create(properties?: editor.ISignatureItem): editor.SignatureItem;

        /**
         * Encodes the specified SignatureItem message. Does not implicitly {@link editor.SignatureItem.verify|verify} messages.
         * @param message SignatureItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ISignatureItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignatureItem message, length delimited. Does not implicitly {@link editor.SignatureItem.verify|verify} messages.
         * @param message SignatureItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ISignatureItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignatureItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignatureItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.SignatureItem;

        /**
         * Decodes a SignatureItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignatureItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.SignatureItem;

        /**
         * Verifies a SignatureItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignatureItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignatureItem
         */
        public static fromObject(object: { [k: string]: any }): editor.SignatureItem;

        /**
         * Creates a plain object from a SignatureItem message. Also converts values to other types if specified.
         * @param message SignatureItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.SignatureItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignatureItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignatureItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ParameterItem. */
    interface IParameterItem {

        /** ParameterItem label */
        label?: (string|null);

        /** ParameterItem documentation */
        documentation?: (string|null);
    }

    /** Represents a ParameterItem. */
    class ParameterItem implements IParameterItem {

        /**
         * Constructs a new ParameterItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IParameterItem);

        /** ParameterItem label. */
        public label: string;

        /** ParameterItem documentation. */
        public documentation: string;

        /**
         * Creates a new ParameterItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParameterItem instance
         */
        public static create(properties?: editor.IParameterItem): editor.ParameterItem;

        /**
         * Encodes the specified ParameterItem message. Does not implicitly {@link editor.ParameterItem.verify|verify} messages.
         * @param message ParameterItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IParameterItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParameterItem message, length delimited. Does not implicitly {@link editor.ParameterItem.verify|verify} messages.
         * @param message ParameterItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IParameterItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParameterItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParameterItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.ParameterItem;

        /**
         * Decodes a ParameterItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParameterItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.ParameterItem;

        /**
         * Verifies a ParameterItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParameterItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParameterItem
         */
        public static fromObject(object: { [k: string]: any }): editor.ParameterItem;

        /**
         * Creates a plain object from a ParameterItem message. Also converts values to other types if specified.
         * @param message ParameterItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.ParameterItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParameterItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ParameterItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DefinitionRequest. */
    interface IDefinitionRequest {

        /** DefinitionRequest code */
        code?: (string|null);

        /** DefinitionRequest position */
        position?: (number|null);

        /** DefinitionRequest extraFiles */
        extraFiles?: (editor.ISourceFile[]|null);
    }

    /** Represents a DefinitionRequest. */
    class DefinitionRequest implements IDefinitionRequest {

        /**
         * Constructs a new DefinitionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IDefinitionRequest);

        /** DefinitionRequest code. */
        public code: string;

        /** DefinitionRequest position. */
        public position: number;

        /** DefinitionRequest extraFiles. */
        public extraFiles: editor.ISourceFile[];

        /**
         * Creates a new DefinitionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DefinitionRequest instance
         */
        public static create(properties?: editor.IDefinitionRequest): editor.DefinitionRequest;

        /**
         * Encodes the specified DefinitionRequest message. Does not implicitly {@link editor.DefinitionRequest.verify|verify} messages.
         * @param message DefinitionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IDefinitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DefinitionRequest message, length delimited. Does not implicitly {@link editor.DefinitionRequest.verify|verify} messages.
         * @param message DefinitionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IDefinitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DefinitionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DefinitionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.DefinitionRequest;

        /**
         * Decodes a DefinitionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DefinitionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.DefinitionRequest;

        /**
         * Verifies a DefinitionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DefinitionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DefinitionRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.DefinitionRequest;

        /**
         * Creates a plain object from a DefinitionRequest message. Also converts values to other types if specified.
         * @param message DefinitionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.DefinitionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DefinitionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DefinitionRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DefinitionReply. */
    interface IDefinitionReply {

        /** DefinitionReply hasDefinition */
        hasDefinition?: (boolean|null);

        /** DefinitionReply filePath */
        filePath?: (string|null);

        /** DefinitionReply line */
        line?: (number|null);

        /** DefinitionReply column */
        column?: (number|null);
    }

    /** Represents a DefinitionReply. */
    class DefinitionReply implements IDefinitionReply {

        /**
         * Constructs a new DefinitionReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IDefinitionReply);

        /** DefinitionReply hasDefinition. */
        public hasDefinition: boolean;

        /** DefinitionReply filePath. */
        public filePath: string;

        /** DefinitionReply line. */
        public line: number;

        /** DefinitionReply column. */
        public column: number;

        /**
         * Creates a new DefinitionReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DefinitionReply instance
         */
        public static create(properties?: editor.IDefinitionReply): editor.DefinitionReply;

        /**
         * Encodes the specified DefinitionReply message. Does not implicitly {@link editor.DefinitionReply.verify|verify} messages.
         * @param message DefinitionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IDefinitionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DefinitionReply message, length delimited. Does not implicitly {@link editor.DefinitionReply.verify|verify} messages.
         * @param message DefinitionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IDefinitionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DefinitionReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DefinitionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.DefinitionReply;

        /**
         * Decodes a DefinitionReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DefinitionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.DefinitionReply;

        /**
         * Verifies a DefinitionReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DefinitionReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DefinitionReply
         */
        public static fromObject(object: { [k: string]: any }): editor.DefinitionReply;

        /**
         * Creates a plain object from a DefinitionReply message. Also converts values to other types if specified.
         * @param message DefinitionReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.DefinitionReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DefinitionReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DefinitionReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SemanticTokensRequest. */
    interface ISemanticTokensRequest {

        /** SemanticTokensRequest code */
        code?: (string|null);

        /** SemanticTokensRequest extraFiles */
        extraFiles?: (editor.ISourceFile[]|null);
    }

    /** Represents a SemanticTokensRequest. */
    class SemanticTokensRequest implements ISemanticTokensRequest {

        /**
         * Constructs a new SemanticTokensRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ISemanticTokensRequest);

        /** SemanticTokensRequest code. */
        public code: string;

        /** SemanticTokensRequest extraFiles. */
        public extraFiles: editor.ISourceFile[];

        /**
         * Creates a new SemanticTokensRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SemanticTokensRequest instance
         */
        public static create(properties?: editor.ISemanticTokensRequest): editor.SemanticTokensRequest;

        /**
         * Encodes the specified SemanticTokensRequest message. Does not implicitly {@link editor.SemanticTokensRequest.verify|verify} messages.
         * @param message SemanticTokensRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ISemanticTokensRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SemanticTokensRequest message, length delimited. Does not implicitly {@link editor.SemanticTokensRequest.verify|verify} messages.
         * @param message SemanticTokensRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ISemanticTokensRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SemanticTokensRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SemanticTokensRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.SemanticTokensRequest;

        /**
         * Decodes a SemanticTokensRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SemanticTokensRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.SemanticTokensRequest;

        /**
         * Verifies a SemanticTokensRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SemanticTokensRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SemanticTokensRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.SemanticTokensRequest;

        /**
         * Creates a plain object from a SemanticTokensRequest message. Also converts values to other types if specified.
         * @param message SemanticTokensRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.SemanticTokensRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SemanticTokensRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SemanticTokensRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SemanticTokensReply. */
    interface ISemanticTokensReply {

        /** SemanticTokensReply data */
        data?: (number[]|null);
    }

    /** Represents a SemanticTokensReply. */
    class SemanticTokensReply implements ISemanticTokensReply {

        /**
         * Constructs a new SemanticTokensReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ISemanticTokensReply);

        /** SemanticTokensReply data. */
        public data: number[];

        /**
         * Creates a new SemanticTokensReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SemanticTokensReply instance
         */
        public static create(properties?: editor.ISemanticTokensReply): editor.SemanticTokensReply;

        /**
         * Encodes the specified SemanticTokensReply message. Does not implicitly {@link editor.SemanticTokensReply.verify|verify} messages.
         * @param message SemanticTokensReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ISemanticTokensReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SemanticTokensReply message, length delimited. Does not implicitly {@link editor.SemanticTokensReply.verify|verify} messages.
         * @param message SemanticTokensReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ISemanticTokensReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SemanticTokensReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SemanticTokensReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.SemanticTokensReply;

        /**
         * Decodes a SemanticTokensReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SemanticTokensReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.SemanticTokensReply;

        /**
         * Verifies a SemanticTokensReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SemanticTokensReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SemanticTokensReply
         */
        public static fromObject(object: { [k: string]: any }): editor.SemanticTokensReply;

        /**
         * Creates a plain object from a SemanticTokensReply message. Also converts values to other types if specified.
         * @param message SemanticTokensReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.SemanticTokensReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SemanticTokensReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SemanticTokensReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FormatCodeRequest. */
    interface IFormatCodeRequest {

        /** FormatCodeRequest code */
        code?: (string|null);
    }

    /** Represents a FormatCodeRequest. */
    class FormatCodeRequest implements IFormatCodeRequest {

        /**
         * Constructs a new FormatCodeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IFormatCodeRequest);

        /** FormatCodeRequest code. */
        public code: string;

        /**
         * Creates a new FormatCodeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FormatCodeRequest instance
         */
        public static create(properties?: editor.IFormatCodeRequest): editor.FormatCodeRequest;

        /**
         * Encodes the specified FormatCodeRequest message. Does not implicitly {@link editor.FormatCodeRequest.verify|verify} messages.
         * @param message FormatCodeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IFormatCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FormatCodeRequest message, length delimited. Does not implicitly {@link editor.FormatCodeRequest.verify|verify} messages.
         * @param message FormatCodeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IFormatCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FormatCodeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FormatCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.FormatCodeRequest;

        /**
         * Decodes a FormatCodeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FormatCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.FormatCodeRequest;

        /**
         * Verifies a FormatCodeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FormatCodeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FormatCodeRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.FormatCodeRequest;

        /**
         * Creates a plain object from a FormatCodeRequest message. Also converts values to other types if specified.
         * @param message FormatCodeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.FormatCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FormatCodeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FormatCodeRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FormatCodeReply. */
    interface IFormatCodeReply {

        /** FormatCodeReply formattedCode */
        formattedCode?: (string|null);
    }

    /** Represents a FormatCodeReply. */
    class FormatCodeReply implements IFormatCodeReply {

        /**
         * Constructs a new FormatCodeReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IFormatCodeReply);

        /** FormatCodeReply formattedCode. */
        public formattedCode: string;

        /**
         * Creates a new FormatCodeReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FormatCodeReply instance
         */
        public static create(properties?: editor.IFormatCodeReply): editor.FormatCodeReply;

        /**
         * Encodes the specified FormatCodeReply message. Does not implicitly {@link editor.FormatCodeReply.verify|verify} messages.
         * @param message FormatCodeReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IFormatCodeReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FormatCodeReply message, length delimited. Does not implicitly {@link editor.FormatCodeReply.verify|verify} messages.
         * @param message FormatCodeReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IFormatCodeReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FormatCodeReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FormatCodeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.FormatCodeReply;

        /**
         * Decodes a FormatCodeReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FormatCodeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.FormatCodeReply;

        /**
         * Verifies a FormatCodeReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FormatCodeReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FormatCodeReply
         */
        public static fromObject(object: { [k: string]: any }): editor.FormatCodeReply;

        /**
         * Creates a plain object from a FormatCodeReply message. Also converts values to other types if specified.
         * @param message FormatCodeReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.FormatCodeReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FormatCodeReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FormatCodeReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiagnosticsRequest. */
    interface IDiagnosticsRequest {

        /** DiagnosticsRequest code */
        code?: (string|null);

        /** DiagnosticsRequest extraFiles */
        extraFiles?: (editor.ISourceFile[]|null);
    }

    /** Represents a DiagnosticsRequest. */
    class DiagnosticsRequest implements IDiagnosticsRequest {

        /**
         * Constructs a new DiagnosticsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IDiagnosticsRequest);

        /** DiagnosticsRequest code. */
        public code: string;

        /** DiagnosticsRequest extraFiles. */
        public extraFiles: editor.ISourceFile[];

        /**
         * Creates a new DiagnosticsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiagnosticsRequest instance
         */
        public static create(properties?: editor.IDiagnosticsRequest): editor.DiagnosticsRequest;

        /**
         * Encodes the specified DiagnosticsRequest message. Does not implicitly {@link editor.DiagnosticsRequest.verify|verify} messages.
         * @param message DiagnosticsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IDiagnosticsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiagnosticsRequest message, length delimited. Does not implicitly {@link editor.DiagnosticsRequest.verify|verify} messages.
         * @param message DiagnosticsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IDiagnosticsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiagnosticsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiagnosticsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.DiagnosticsRequest;

        /**
         * Decodes a DiagnosticsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiagnosticsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.DiagnosticsRequest;

        /**
         * Verifies a DiagnosticsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiagnosticsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiagnosticsRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.DiagnosticsRequest;

        /**
         * Creates a plain object from a DiagnosticsRequest message. Also converts values to other types if specified.
         * @param message DiagnosticsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.DiagnosticsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiagnosticsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiagnosticsRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiagnosticsReply. */
    interface IDiagnosticsReply {

        /** DiagnosticsReply diagnostics */
        diagnostics?: (editor.IDiagnosticItem[]|null);
    }

    /** Represents a DiagnosticsReply. */
    class DiagnosticsReply implements IDiagnosticsReply {

        /**
         * Constructs a new DiagnosticsReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IDiagnosticsReply);

        /** DiagnosticsReply diagnostics. */
        public diagnostics: editor.IDiagnosticItem[];

        /**
         * Creates a new DiagnosticsReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiagnosticsReply instance
         */
        public static create(properties?: editor.IDiagnosticsReply): editor.DiagnosticsReply;

        /**
         * Encodes the specified DiagnosticsReply message. Does not implicitly {@link editor.DiagnosticsReply.verify|verify} messages.
         * @param message DiagnosticsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IDiagnosticsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiagnosticsReply message, length delimited. Does not implicitly {@link editor.DiagnosticsReply.verify|verify} messages.
         * @param message DiagnosticsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IDiagnosticsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiagnosticsReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiagnosticsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.DiagnosticsReply;

        /**
         * Decodes a DiagnosticsReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiagnosticsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.DiagnosticsReply;

        /**
         * Verifies a DiagnosticsReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiagnosticsReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiagnosticsReply
         */
        public static fromObject(object: { [k: string]: any }): editor.DiagnosticsReply;

        /**
         * Creates a plain object from a DiagnosticsReply message. Also converts values to other types if specified.
         * @param message DiagnosticsReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.DiagnosticsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiagnosticsReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiagnosticsReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a QuickFixRequest. */
    interface IQuickFixRequest {

        /** QuickFixRequest code */
        code?: (string|null);

        /** QuickFixRequest position */
        position?: (number|null);

        /** QuickFixRequest extraFiles */
        extraFiles?: (editor.ISourceFile[]|null);
    }

    /** Represents a QuickFixRequest. */
    class QuickFixRequest implements IQuickFixRequest {

        /**
         * Constructs a new QuickFixRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IQuickFixRequest);

        /** QuickFixRequest code. */
        public code: string;

        /** QuickFixRequest position. */
        public position: number;

        /** QuickFixRequest extraFiles. */
        public extraFiles: editor.ISourceFile[];

        /**
         * Creates a new QuickFixRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuickFixRequest instance
         */
        public static create(properties?: editor.IQuickFixRequest): editor.QuickFixRequest;

        /**
         * Encodes the specified QuickFixRequest message. Does not implicitly {@link editor.QuickFixRequest.verify|verify} messages.
         * @param message QuickFixRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IQuickFixRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuickFixRequest message, length delimited. Does not implicitly {@link editor.QuickFixRequest.verify|verify} messages.
         * @param message QuickFixRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IQuickFixRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuickFixRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuickFixRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.QuickFixRequest;

        /**
         * Decodes a QuickFixRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuickFixRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.QuickFixRequest;

        /**
         * Verifies a QuickFixRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuickFixRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuickFixRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.QuickFixRequest;

        /**
         * Creates a plain object from a QuickFixRequest message. Also converts values to other types if specified.
         * @param message QuickFixRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.QuickFixRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuickFixRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QuickFixRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a QuickFixReply. */
    interface IQuickFixReply {

        /** QuickFixReply fixes */
        fixes?: (editor.IQuickFixItem[]|null);
    }

    /** Represents a QuickFixReply. */
    class QuickFixReply implements IQuickFixReply {

        /**
         * Constructs a new QuickFixReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IQuickFixReply);

        /** QuickFixReply fixes. */
        public fixes: editor.IQuickFixItem[];

        /**
         * Creates a new QuickFixReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuickFixReply instance
         */
        public static create(properties?: editor.IQuickFixReply): editor.QuickFixReply;

        /**
         * Encodes the specified QuickFixReply message. Does not implicitly {@link editor.QuickFixReply.verify|verify} messages.
         * @param message QuickFixReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IQuickFixReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuickFixReply message, length delimited. Does not implicitly {@link editor.QuickFixReply.verify|verify} messages.
         * @param message QuickFixReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IQuickFixReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuickFixReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuickFixReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.QuickFixReply;

        /**
         * Decodes a QuickFixReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuickFixReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.QuickFixReply;

        /**
         * Verifies a QuickFixReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuickFixReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuickFixReply
         */
        public static fromObject(object: { [k: string]: any }): editor.QuickFixReply;

        /**
         * Creates a plain object from a QuickFixReply message. Also converts values to other types if specified.
         * @param message QuickFixReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.QuickFixReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuickFixReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QuickFixReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a QuickFixItem. */
    interface IQuickFixItem {

        /** QuickFixItem title */
        title?: (string|null);

        /** QuickFixItem newText */
        newText?: (string|null);

        /** QuickFixItem spanStart */
        spanStart?: (number|null);

        /** QuickFixItem spanLength */
        spanLength?: (number|null);
    }

    /** Represents a QuickFixItem. */
    class QuickFixItem implements IQuickFixItem {

        /**
         * Constructs a new QuickFixItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IQuickFixItem);

        /** QuickFixItem title. */
        public title: string;

        /** QuickFixItem newText. */
        public newText: string;

        /** QuickFixItem spanStart. */
        public spanStart: number;

        /** QuickFixItem spanLength. */
        public spanLength: number;

        /**
         * Creates a new QuickFixItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuickFixItem instance
         */
        public static create(properties?: editor.IQuickFixItem): editor.QuickFixItem;

        /**
         * Encodes the specified QuickFixItem message. Does not implicitly {@link editor.QuickFixItem.verify|verify} messages.
         * @param message QuickFixItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IQuickFixItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuickFixItem message, length delimited. Does not implicitly {@link editor.QuickFixItem.verify|verify} messages.
         * @param message QuickFixItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IQuickFixItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuickFixItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuickFixItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.QuickFixItem;

        /**
         * Decodes a QuickFixItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuickFixItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.QuickFixItem;

        /**
         * Verifies a QuickFixItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuickFixItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuickFixItem
         */
        public static fromObject(object: { [k: string]: any }): editor.QuickFixItem;

        /**
         * Creates a plain object from a QuickFixItem message. Also converts values to other types if specified.
         * @param message QuickFixItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.QuickFixItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuickFixItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QuickFixItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ExecuteCodeRequest. */
    interface IExecuteCodeRequest {

        /** ExecuteCodeRequest code */
        code?: (string|null);

        /** ExecuteCodeRequest typeName */
        typeName?: (string|null);

        /** ExecuteCodeRequest methodName */
        methodName?: (string|null);

        /** ExecuteCodeRequest extraFiles */
        extraFiles?: (editor.ISourceFile[]|null);

        /** ExecuteCodeRequest connectionId */
        connectionId?: (string|null);
    }

    /** Represents an ExecuteCodeRequest. */
    class ExecuteCodeRequest implements IExecuteCodeRequest {

        /**
         * Constructs a new ExecuteCodeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IExecuteCodeRequest);

        /** ExecuteCodeRequest code. */
        public code: string;

        /** ExecuteCodeRequest typeName. */
        public typeName: string;

        /** ExecuteCodeRequest methodName. */
        public methodName: string;

        /** ExecuteCodeRequest extraFiles. */
        public extraFiles: editor.ISourceFile[];

        /** ExecuteCodeRequest connectionId. */
        public connectionId: string;

        /**
         * Creates a new ExecuteCodeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecuteCodeRequest instance
         */
        public static create(properties?: editor.IExecuteCodeRequest): editor.ExecuteCodeRequest;

        /**
         * Encodes the specified ExecuteCodeRequest message. Does not implicitly {@link editor.ExecuteCodeRequest.verify|verify} messages.
         * @param message ExecuteCodeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IExecuteCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecuteCodeRequest message, length delimited. Does not implicitly {@link editor.ExecuteCodeRequest.verify|verify} messages.
         * @param message ExecuteCodeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IExecuteCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecuteCodeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecuteCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.ExecuteCodeRequest;

        /**
         * Decodes an ExecuteCodeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExecuteCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.ExecuteCodeRequest;

        /**
         * Verifies an ExecuteCodeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExecuteCodeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExecuteCodeRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.ExecuteCodeRequest;

        /**
         * Creates a plain object from an ExecuteCodeRequest message. Also converts values to other types if specified.
         * @param message ExecuteCodeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.ExecuteCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExecuteCodeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExecuteCodeRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SourceFile. */
    interface ISourceFile {

        /** SourceFile fileName */
        fileName?: (string|null);

        /** SourceFile content */
        content?: (string|null);
    }

    /** Represents a SourceFile. */
    class SourceFile implements ISourceFile {

        /**
         * Constructs a new SourceFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ISourceFile);

        /** SourceFile fileName. */
        public fileName: string;

        /** SourceFile content. */
        public content: string;

        /**
         * Creates a new SourceFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SourceFile instance
         */
        public static create(properties?: editor.ISourceFile): editor.SourceFile;

        /**
         * Encodes the specified SourceFile message. Does not implicitly {@link editor.SourceFile.verify|verify} messages.
         * @param message SourceFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ISourceFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SourceFile message, length delimited. Does not implicitly {@link editor.SourceFile.verify|verify} messages.
         * @param message SourceFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ISourceFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SourceFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SourceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.SourceFile;

        /**
         * Decodes a SourceFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SourceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.SourceFile;

        /**
         * Verifies a SourceFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SourceFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SourceFile
         */
        public static fromObject(object: { [k: string]: any }): editor.SourceFile;

        /**
         * Creates a plain object from a SourceFile message. Also converts values to other types if specified.
         * @param message SourceFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.SourceFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SourceFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SourceFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ExecuteCodeReply. */
    interface IExecuteCodeReply {

        /** ExecuteCodeReply success */
        success?: (boolean|null);

        /** ExecuteCodeReply output */
        output?: (string|null);

        /** ExecuteCodeReply errorMessage */
        errorMessage?: (string|null);

        /** ExecuteCodeReply diagnostics */
        diagnostics?: (editor.IDiagnosticItem[]|null);

        /** ExecuteCodeReply consoleOutput */
        consoleOutput?: (string|null);
    }

    /** Represents an ExecuteCodeReply. */
    class ExecuteCodeReply implements IExecuteCodeReply {

        /**
         * Constructs a new ExecuteCodeReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IExecuteCodeReply);

        /** ExecuteCodeReply success. */
        public success: boolean;

        /** ExecuteCodeReply output. */
        public output: string;

        /** ExecuteCodeReply errorMessage. */
        public errorMessage: string;

        /** ExecuteCodeReply diagnostics. */
        public diagnostics: editor.IDiagnosticItem[];

        /** ExecuteCodeReply consoleOutput. */
        public consoleOutput: string;

        /**
         * Creates a new ExecuteCodeReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecuteCodeReply instance
         */
        public static create(properties?: editor.IExecuteCodeReply): editor.ExecuteCodeReply;

        /**
         * Encodes the specified ExecuteCodeReply message. Does not implicitly {@link editor.ExecuteCodeReply.verify|verify} messages.
         * @param message ExecuteCodeReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IExecuteCodeReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecuteCodeReply message, length delimited. Does not implicitly {@link editor.ExecuteCodeReply.verify|verify} messages.
         * @param message ExecuteCodeReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IExecuteCodeReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecuteCodeReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecuteCodeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.ExecuteCodeReply;

        /**
         * Decodes an ExecuteCodeReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExecuteCodeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.ExecuteCodeReply;

        /**
         * Verifies an ExecuteCodeReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExecuteCodeReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExecuteCodeReply
         */
        public static fromObject(object: { [k: string]: any }): editor.ExecuteCodeReply;

        /**
         * Creates a plain object from an ExecuteCodeReply message. Also converts values to other types if specified.
         * @param message ExecuteCodeReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.ExecuteCodeReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExecuteCodeReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExecuteCodeReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiagnosticItem. */
    interface IDiagnosticItem {

        /** DiagnosticItem id */
        id?: (string|null);

        /** DiagnosticItem message */
        message?: (string|null);

        /** DiagnosticItem severity */
        severity?: (string|null);

        /** DiagnosticItem line */
        line?: (number|null);

        /** DiagnosticItem column */
        column?: (number|null);
    }

    /** Represents a DiagnosticItem. */
    class DiagnosticItem implements IDiagnosticItem {

        /**
         * Constructs a new DiagnosticItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IDiagnosticItem);

        /** DiagnosticItem id. */
        public id: string;

        /** DiagnosticItem message. */
        public message: string;

        /** DiagnosticItem severity. */
        public severity: string;

        /** DiagnosticItem line. */
        public line: number;

        /** DiagnosticItem column. */
        public column: number;

        /**
         * Creates a new DiagnosticItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiagnosticItem instance
         */
        public static create(properties?: editor.IDiagnosticItem): editor.DiagnosticItem;

        /**
         * Encodes the specified DiagnosticItem message. Does not implicitly {@link editor.DiagnosticItem.verify|verify} messages.
         * @param message DiagnosticItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IDiagnosticItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiagnosticItem message, length delimited. Does not implicitly {@link editor.DiagnosticItem.verify|verify} messages.
         * @param message DiagnosticItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IDiagnosticItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiagnosticItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiagnosticItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.DiagnosticItem;

        /**
         * Decodes a DiagnosticItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiagnosticItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.DiagnosticItem;

        /**
         * Verifies a DiagnosticItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiagnosticItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiagnosticItem
         */
        public static fromObject(object: { [k: string]: any }): editor.DiagnosticItem;

        /**
         * Creates a plain object from a DiagnosticItem message. Also converts values to other types if specified.
         * @param message DiagnosticItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.DiagnosticItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiagnosticItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiagnosticItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectionInfo. */
    interface IConnectionInfo {

        /** ConnectionInfo id */
        id?: (string|null);

        /** ConnectionInfo name */
        name?: (string|null);

        /** ConnectionInfo provider */
        provider?: (string|null);

        /** ConnectionInfo connectionString */
        connectionString?: (string|null);

        /** ConnectionInfo lastGeneratedDate */
        lastGeneratedDate?: (string|null);
    }

    /** Represents a ConnectionInfo. */
    class ConnectionInfo implements IConnectionInfo {

        /**
         * Constructs a new ConnectionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IConnectionInfo);

        /** ConnectionInfo id. */
        public id: string;

        /** ConnectionInfo name. */
        public name: string;

        /** ConnectionInfo provider. */
        public provider: string;

        /** ConnectionInfo connectionString. */
        public connectionString: string;

        /** ConnectionInfo lastGeneratedDate. */
        public lastGeneratedDate: string;

        /**
         * Creates a new ConnectionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectionInfo instance
         */
        public static create(properties?: editor.IConnectionInfo): editor.ConnectionInfo;

        /**
         * Encodes the specified ConnectionInfo message. Does not implicitly {@link editor.ConnectionInfo.verify|verify} messages.
         * @param message ConnectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IConnectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectionInfo message, length delimited. Does not implicitly {@link editor.ConnectionInfo.verify|verify} messages.
         * @param message ConnectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IConnectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.ConnectionInfo;

        /**
         * Decodes a ConnectionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.ConnectionInfo;

        /**
         * Verifies a ConnectionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectionInfo
         */
        public static fromObject(object: { [k: string]: any }): editor.ConnectionInfo;

        /**
         * Creates a plain object from a ConnectionInfo message. Also converts values to other types if specified.
         * @param message ConnectionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.ConnectionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectionInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetConnectionsRequest. */
    interface IGetConnectionsRequest {
    }

    /** Represents a GetConnectionsRequest. */
    class GetConnectionsRequest implements IGetConnectionsRequest {

        /**
         * Constructs a new GetConnectionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IGetConnectionsRequest);

        /**
         * Creates a new GetConnectionsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetConnectionsRequest instance
         */
        public static create(properties?: editor.IGetConnectionsRequest): editor.GetConnectionsRequest;

        /**
         * Encodes the specified GetConnectionsRequest message. Does not implicitly {@link editor.GetConnectionsRequest.verify|verify} messages.
         * @param message GetConnectionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IGetConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetConnectionsRequest message, length delimited. Does not implicitly {@link editor.GetConnectionsRequest.verify|verify} messages.
         * @param message GetConnectionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IGetConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetConnectionsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetConnectionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.GetConnectionsRequest;

        /**
         * Decodes a GetConnectionsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetConnectionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.GetConnectionsRequest;

        /**
         * Verifies a GetConnectionsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetConnectionsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetConnectionsRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.GetConnectionsRequest;

        /**
         * Creates a plain object from a GetConnectionsRequest message. Also converts values to other types if specified.
         * @param message GetConnectionsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.GetConnectionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetConnectionsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetConnectionsRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetConnectionsReply. */
    interface IGetConnectionsReply {

        /** GetConnectionsReply connections */
        connections?: (editor.IConnectionInfo[]|null);
    }

    /** Represents a GetConnectionsReply. */
    class GetConnectionsReply implements IGetConnectionsReply {

        /**
         * Constructs a new GetConnectionsReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IGetConnectionsReply);

        /** GetConnectionsReply connections. */
        public connections: editor.IConnectionInfo[];

        /**
         * Creates a new GetConnectionsReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetConnectionsReply instance
         */
        public static create(properties?: editor.IGetConnectionsReply): editor.GetConnectionsReply;

        /**
         * Encodes the specified GetConnectionsReply message. Does not implicitly {@link editor.GetConnectionsReply.verify|verify} messages.
         * @param message GetConnectionsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IGetConnectionsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetConnectionsReply message, length delimited. Does not implicitly {@link editor.GetConnectionsReply.verify|verify} messages.
         * @param message GetConnectionsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IGetConnectionsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetConnectionsReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetConnectionsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.GetConnectionsReply;

        /**
         * Decodes a GetConnectionsReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetConnectionsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.GetConnectionsReply;

        /**
         * Verifies a GetConnectionsReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetConnectionsReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetConnectionsReply
         */
        public static fromObject(object: { [k: string]: any }): editor.GetConnectionsReply;

        /**
         * Creates a plain object from a GetConnectionsReply message. Also converts values to other types if specified.
         * @param message GetConnectionsReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.GetConnectionsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetConnectionsReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetConnectionsReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaveConnectionRequest. */
    interface ISaveConnectionRequest {

        /** SaveConnectionRequest connection */
        connection?: (editor.IConnectionInfo|null);
    }

    /** Represents a SaveConnectionRequest. */
    class SaveConnectionRequest implements ISaveConnectionRequest {

        /**
         * Constructs a new SaveConnectionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ISaveConnectionRequest);

        /** SaveConnectionRequest connection. */
        public connection?: (editor.IConnectionInfo|null);

        /**
         * Creates a new SaveConnectionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveConnectionRequest instance
         */
        public static create(properties?: editor.ISaveConnectionRequest): editor.SaveConnectionRequest;

        /**
         * Encodes the specified SaveConnectionRequest message. Does not implicitly {@link editor.SaveConnectionRequest.verify|verify} messages.
         * @param message SaveConnectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ISaveConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaveConnectionRequest message, length delimited. Does not implicitly {@link editor.SaveConnectionRequest.verify|verify} messages.
         * @param message SaveConnectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ISaveConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaveConnectionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.SaveConnectionRequest;

        /**
         * Decodes a SaveConnectionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.SaveConnectionRequest;

        /**
         * Verifies a SaveConnectionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveConnectionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveConnectionRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.SaveConnectionRequest;

        /**
         * Creates a plain object from a SaveConnectionRequest message. Also converts values to other types if specified.
         * @param message SaveConnectionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.SaveConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveConnectionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaveConnectionRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaveConnectionReply. */
    interface ISaveConnectionReply {

        /** SaveConnectionReply success */
        success?: (boolean|null);

        /** SaveConnectionReply errorMessage */
        errorMessage?: (string|null);

        /** SaveConnectionReply id */
        id?: (string|null);
    }

    /** Represents a SaveConnectionReply. */
    class SaveConnectionReply implements ISaveConnectionReply {

        /**
         * Constructs a new SaveConnectionReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ISaveConnectionReply);

        /** SaveConnectionReply success. */
        public success: boolean;

        /** SaveConnectionReply errorMessage. */
        public errorMessage: string;

        /** SaveConnectionReply id. */
        public id: string;

        /**
         * Creates a new SaveConnectionReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveConnectionReply instance
         */
        public static create(properties?: editor.ISaveConnectionReply): editor.SaveConnectionReply;

        /**
         * Encodes the specified SaveConnectionReply message. Does not implicitly {@link editor.SaveConnectionReply.verify|verify} messages.
         * @param message SaveConnectionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ISaveConnectionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaveConnectionReply message, length delimited. Does not implicitly {@link editor.SaveConnectionReply.verify|verify} messages.
         * @param message SaveConnectionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ISaveConnectionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaveConnectionReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.SaveConnectionReply;

        /**
         * Decodes a SaveConnectionReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.SaveConnectionReply;

        /**
         * Verifies a SaveConnectionReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveConnectionReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveConnectionReply
         */
        public static fromObject(object: { [k: string]: any }): editor.SaveConnectionReply;

        /**
         * Creates a plain object from a SaveConnectionReply message. Also converts values to other types if specified.
         * @param message SaveConnectionReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.SaveConnectionReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveConnectionReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaveConnectionReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteConnectionRequest. */
    interface IDeleteConnectionRequest {

        /** DeleteConnectionRequest id */
        id?: (string|null);
    }

    /** Represents a DeleteConnectionRequest. */
    class DeleteConnectionRequest implements IDeleteConnectionRequest {

        /**
         * Constructs a new DeleteConnectionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IDeleteConnectionRequest);

        /** DeleteConnectionRequest id. */
        public id: string;

        /**
         * Creates a new DeleteConnectionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteConnectionRequest instance
         */
        public static create(properties?: editor.IDeleteConnectionRequest): editor.DeleteConnectionRequest;

        /**
         * Encodes the specified DeleteConnectionRequest message. Does not implicitly {@link editor.DeleteConnectionRequest.verify|verify} messages.
         * @param message DeleteConnectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IDeleteConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteConnectionRequest message, length delimited. Does not implicitly {@link editor.DeleteConnectionRequest.verify|verify} messages.
         * @param message DeleteConnectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IDeleteConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteConnectionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.DeleteConnectionRequest;

        /**
         * Decodes a DeleteConnectionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.DeleteConnectionRequest;

        /**
         * Verifies a DeleteConnectionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteConnectionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteConnectionRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.DeleteConnectionRequest;

        /**
         * Creates a plain object from a DeleteConnectionRequest message. Also converts values to other types if specified.
         * @param message DeleteConnectionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.DeleteConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteConnectionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteConnectionRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteConnectionReply. */
    interface IDeleteConnectionReply {

        /** DeleteConnectionReply success */
        success?: (boolean|null);

        /** DeleteConnectionReply errorMessage */
        errorMessage?: (string|null);
    }

    /** Represents a DeleteConnectionReply. */
    class DeleteConnectionReply implements IDeleteConnectionReply {

        /**
         * Constructs a new DeleteConnectionReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IDeleteConnectionReply);

        /** DeleteConnectionReply success. */
        public success: boolean;

        /** DeleteConnectionReply errorMessage. */
        public errorMessage: string;

        /**
         * Creates a new DeleteConnectionReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteConnectionReply instance
         */
        public static create(properties?: editor.IDeleteConnectionReply): editor.DeleteConnectionReply;

        /**
         * Encodes the specified DeleteConnectionReply message. Does not implicitly {@link editor.DeleteConnectionReply.verify|verify} messages.
         * @param message DeleteConnectionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IDeleteConnectionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteConnectionReply message, length delimited. Does not implicitly {@link editor.DeleteConnectionReply.verify|verify} messages.
         * @param message DeleteConnectionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IDeleteConnectionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteConnectionReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.DeleteConnectionReply;

        /**
         * Decodes a DeleteConnectionReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.DeleteConnectionReply;

        /**
         * Verifies a DeleteConnectionReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteConnectionReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteConnectionReply
         */
        public static fromObject(object: { [k: string]: any }): editor.DeleteConnectionReply;

        /**
         * Creates a plain object from a DeleteConnectionReply message. Also converts values to other types if specified.
         * @param message DeleteConnectionReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.DeleteConnectionReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteConnectionReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteConnectionReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TestConnectionRequest. */
    interface ITestConnectionRequest {

        /** TestConnectionRequest connectionString */
        connectionString?: (string|null);

        /** TestConnectionRequest provider */
        provider?: (string|null);
    }

    /** Represents a TestConnectionRequest. */
    class TestConnectionRequest implements ITestConnectionRequest {

        /**
         * Constructs a new TestConnectionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ITestConnectionRequest);

        /** TestConnectionRequest connectionString. */
        public connectionString: string;

        /** TestConnectionRequest provider. */
        public provider: string;

        /**
         * Creates a new TestConnectionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestConnectionRequest instance
         */
        public static create(properties?: editor.ITestConnectionRequest): editor.TestConnectionRequest;

        /**
         * Encodes the specified TestConnectionRequest message. Does not implicitly {@link editor.TestConnectionRequest.verify|verify} messages.
         * @param message TestConnectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ITestConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestConnectionRequest message, length delimited. Does not implicitly {@link editor.TestConnectionRequest.verify|verify} messages.
         * @param message TestConnectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ITestConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestConnectionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.TestConnectionRequest;

        /**
         * Decodes a TestConnectionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.TestConnectionRequest;

        /**
         * Verifies a TestConnectionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestConnectionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestConnectionRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.TestConnectionRequest;

        /**
         * Creates a plain object from a TestConnectionRequest message. Also converts values to other types if specified.
         * @param message TestConnectionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.TestConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestConnectionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TestConnectionRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TestConnectionReply. */
    interface ITestConnectionReply {

        /** TestConnectionReply success */
        success?: (boolean|null);

        /** TestConnectionReply message */
        message?: (string|null);
    }

    /** Represents a TestConnectionReply. */
    class TestConnectionReply implements ITestConnectionReply {

        /**
         * Constructs a new TestConnectionReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ITestConnectionReply);

        /** TestConnectionReply success. */
        public success: boolean;

        /** TestConnectionReply message. */
        public message: string;

        /**
         * Creates a new TestConnectionReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestConnectionReply instance
         */
        public static create(properties?: editor.ITestConnectionReply): editor.TestConnectionReply;

        /**
         * Encodes the specified TestConnectionReply message. Does not implicitly {@link editor.TestConnectionReply.verify|verify} messages.
         * @param message TestConnectionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ITestConnectionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestConnectionReply message, length delimited. Does not implicitly {@link editor.TestConnectionReply.verify|verify} messages.
         * @param message TestConnectionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ITestConnectionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestConnectionReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.TestConnectionReply;

        /**
         * Decodes a TestConnectionReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.TestConnectionReply;

        /**
         * Verifies a TestConnectionReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestConnectionReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestConnectionReply
         */
        public static fromObject(object: { [k: string]: any }): editor.TestConnectionReply;

        /**
         * Creates a plain object from a TestConnectionReply message. Also converts values to other types if specified.
         * @param message TestConnectionReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.TestConnectionReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestConnectionReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TestConnectionReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetDatabaseSchemaRequest. */
    interface IGetDatabaseSchemaRequest {

        /** GetDatabaseSchemaRequest connectionId */
        connectionId?: (string|null);

        /** GetDatabaseSchemaRequest tableName */
        tableName?: (string|null);

        /** GetDatabaseSchemaRequest tablesOnly */
        tablesOnly?: (boolean|null);
    }

    /** Represents a GetDatabaseSchemaRequest. */
    class GetDatabaseSchemaRequest implements IGetDatabaseSchemaRequest {

        /**
         * Constructs a new GetDatabaseSchemaRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IGetDatabaseSchemaRequest);

        /** GetDatabaseSchemaRequest connectionId. */
        public connectionId: string;

        /** GetDatabaseSchemaRequest tableName. */
        public tableName: string;

        /** GetDatabaseSchemaRequest tablesOnly. */
        public tablesOnly: boolean;

        /**
         * Creates a new GetDatabaseSchemaRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetDatabaseSchemaRequest instance
         */
        public static create(properties?: editor.IGetDatabaseSchemaRequest): editor.GetDatabaseSchemaRequest;

        /**
         * Encodes the specified GetDatabaseSchemaRequest message. Does not implicitly {@link editor.GetDatabaseSchemaRequest.verify|verify} messages.
         * @param message GetDatabaseSchemaRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IGetDatabaseSchemaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDatabaseSchemaRequest message, length delimited. Does not implicitly {@link editor.GetDatabaseSchemaRequest.verify|verify} messages.
         * @param message GetDatabaseSchemaRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IGetDatabaseSchemaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDatabaseSchemaRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetDatabaseSchemaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.GetDatabaseSchemaRequest;

        /**
         * Decodes a GetDatabaseSchemaRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetDatabaseSchemaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.GetDatabaseSchemaRequest;

        /**
         * Verifies a GetDatabaseSchemaRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetDatabaseSchemaRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetDatabaseSchemaRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.GetDatabaseSchemaRequest;

        /**
         * Creates a plain object from a GetDatabaseSchemaRequest message. Also converts values to other types if specified.
         * @param message GetDatabaseSchemaRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.GetDatabaseSchemaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetDatabaseSchemaRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetDatabaseSchemaRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetDatabaseSchemaReply. */
    interface IGetDatabaseSchemaReply {

        /** GetDatabaseSchemaReply success */
        success?: (boolean|null);

        /** GetDatabaseSchemaReply errorMessage */
        errorMessage?: (string|null);

        /** GetDatabaseSchemaReply schema */
        schema?: (editor.IDatabaseSchema|null);
    }

    /** Represents a GetDatabaseSchemaReply. */
    class GetDatabaseSchemaReply implements IGetDatabaseSchemaReply {

        /**
         * Constructs a new GetDatabaseSchemaReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IGetDatabaseSchemaReply);

        /** GetDatabaseSchemaReply success. */
        public success: boolean;

        /** GetDatabaseSchemaReply errorMessage. */
        public errorMessage: string;

        /** GetDatabaseSchemaReply schema. */
        public schema?: (editor.IDatabaseSchema|null);

        /**
         * Creates a new GetDatabaseSchemaReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetDatabaseSchemaReply instance
         */
        public static create(properties?: editor.IGetDatabaseSchemaReply): editor.GetDatabaseSchemaReply;

        /**
         * Encodes the specified GetDatabaseSchemaReply message. Does not implicitly {@link editor.GetDatabaseSchemaReply.verify|verify} messages.
         * @param message GetDatabaseSchemaReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IGetDatabaseSchemaReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDatabaseSchemaReply message, length delimited. Does not implicitly {@link editor.GetDatabaseSchemaReply.verify|verify} messages.
         * @param message GetDatabaseSchemaReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IGetDatabaseSchemaReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDatabaseSchemaReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetDatabaseSchemaReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.GetDatabaseSchemaReply;

        /**
         * Decodes a GetDatabaseSchemaReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetDatabaseSchemaReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.GetDatabaseSchemaReply;

        /**
         * Verifies a GetDatabaseSchemaReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetDatabaseSchemaReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetDatabaseSchemaReply
         */
        public static fromObject(object: { [k: string]: any }): editor.GetDatabaseSchemaReply;

        /**
         * Creates a plain object from a GetDatabaseSchemaReply message. Also converts values to other types if specified.
         * @param message GetDatabaseSchemaReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.GetDatabaseSchemaReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetDatabaseSchemaReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetDatabaseSchemaReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DatabaseSchema. */
    interface IDatabaseSchema {

        /** DatabaseSchema name */
        name?: (string|null);

        /** DatabaseSchema tables */
        tables?: (editor.ITableSchema[]|null);
    }

    /** Represents a DatabaseSchema. */
    class DatabaseSchema implements IDatabaseSchema {

        /**
         * Constructs a new DatabaseSchema.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IDatabaseSchema);

        /** DatabaseSchema name. */
        public name: string;

        /** DatabaseSchema tables. */
        public tables: editor.ITableSchema[];

        /**
         * Creates a new DatabaseSchema instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DatabaseSchema instance
         */
        public static create(properties?: editor.IDatabaseSchema): editor.DatabaseSchema;

        /**
         * Encodes the specified DatabaseSchema message. Does not implicitly {@link editor.DatabaseSchema.verify|verify} messages.
         * @param message DatabaseSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IDatabaseSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DatabaseSchema message, length delimited. Does not implicitly {@link editor.DatabaseSchema.verify|verify} messages.
         * @param message DatabaseSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IDatabaseSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DatabaseSchema message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DatabaseSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.DatabaseSchema;

        /**
         * Decodes a DatabaseSchema message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DatabaseSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.DatabaseSchema;

        /**
         * Verifies a DatabaseSchema message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DatabaseSchema message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DatabaseSchema
         */
        public static fromObject(object: { [k: string]: any }): editor.DatabaseSchema;

        /**
         * Creates a plain object from a DatabaseSchema message. Also converts values to other types if specified.
         * @param message DatabaseSchema
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.DatabaseSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DatabaseSchema to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DatabaseSchema
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TableSchema. */
    interface ITableSchema {

        /** TableSchema name */
        name?: (string|null);

        /** TableSchema columns */
        columns?: (editor.IColumnSchema[]|null);
    }

    /** Represents a TableSchema. */
    class TableSchema implements ITableSchema {

        /**
         * Constructs a new TableSchema.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.ITableSchema);

        /** TableSchema name. */
        public name: string;

        /** TableSchema columns. */
        public columns: editor.IColumnSchema[];

        /**
         * Creates a new TableSchema instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableSchema instance
         */
        public static create(properties?: editor.ITableSchema): editor.TableSchema;

        /**
         * Encodes the specified TableSchema message. Does not implicitly {@link editor.TableSchema.verify|verify} messages.
         * @param message TableSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.ITableSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableSchema message, length delimited. Does not implicitly {@link editor.TableSchema.verify|verify} messages.
         * @param message TableSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.ITableSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableSchema message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.TableSchema;

        /**
         * Decodes a TableSchema message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.TableSchema;

        /**
         * Verifies a TableSchema message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableSchema message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableSchema
         */
        public static fromObject(object: { [k: string]: any }): editor.TableSchema;

        /**
         * Creates a plain object from a TableSchema message. Also converts values to other types if specified.
         * @param message TableSchema
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.TableSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableSchema to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TableSchema
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ColumnSchema. */
    interface IColumnSchema {

        /** ColumnSchema name */
        name?: (string|null);

        /** ColumnSchema dataType */
        dataType?: (string|null);

        /** ColumnSchema isNullable */
        isNullable?: (boolean|null);

        /** ColumnSchema isPrimaryKey */
        isPrimaryKey?: (boolean|null);
    }

    /** Represents a ColumnSchema. */
    class ColumnSchema implements IColumnSchema {

        /**
         * Constructs a new ColumnSchema.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IColumnSchema);

        /** ColumnSchema name. */
        public name: string;

        /** ColumnSchema dataType. */
        public dataType: string;

        /** ColumnSchema isNullable. */
        public isNullable: boolean;

        /** ColumnSchema isPrimaryKey. */
        public isPrimaryKey: boolean;

        /**
         * Creates a new ColumnSchema instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ColumnSchema instance
         */
        public static create(properties?: editor.IColumnSchema): editor.ColumnSchema;

        /**
         * Encodes the specified ColumnSchema message. Does not implicitly {@link editor.ColumnSchema.verify|verify} messages.
         * @param message ColumnSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IColumnSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ColumnSchema message, length delimited. Does not implicitly {@link editor.ColumnSchema.verify|verify} messages.
         * @param message ColumnSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IColumnSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ColumnSchema message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ColumnSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.ColumnSchema;

        /**
         * Decodes a ColumnSchema message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ColumnSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.ColumnSchema;

        /**
         * Verifies a ColumnSchema message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ColumnSchema message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ColumnSchema
         */
        public static fromObject(object: { [k: string]: any }): editor.ColumnSchema;

        /**
         * Creates a plain object from a ColumnSchema message. Also converts values to other types if specified.
         * @param message ColumnSchema
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.ColumnSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ColumnSchema to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ColumnSchema
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GenerateModelsRequest. */
    interface IGenerateModelsRequest {

        /** GenerateModelsRequest connectionId */
        connectionId?: (string|null);

        /** GenerateModelsRequest namespace */
        namespace?: (string|null);
    }

    /** Represents a GenerateModelsRequest. */
    class GenerateModelsRequest implements IGenerateModelsRequest {

        /**
         * Constructs a new GenerateModelsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IGenerateModelsRequest);

        /** GenerateModelsRequest connectionId. */
        public connectionId: string;

        /** GenerateModelsRequest namespace. */
        public namespace: string;

        /**
         * Creates a new GenerateModelsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GenerateModelsRequest instance
         */
        public static create(properties?: editor.IGenerateModelsRequest): editor.GenerateModelsRequest;

        /**
         * Encodes the specified GenerateModelsRequest message. Does not implicitly {@link editor.GenerateModelsRequest.verify|verify} messages.
         * @param message GenerateModelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IGenerateModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GenerateModelsRequest message, length delimited. Does not implicitly {@link editor.GenerateModelsRequest.verify|verify} messages.
         * @param message GenerateModelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IGenerateModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GenerateModelsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GenerateModelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.GenerateModelsRequest;

        /**
         * Decodes a GenerateModelsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GenerateModelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.GenerateModelsRequest;

        /**
         * Verifies a GenerateModelsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GenerateModelsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GenerateModelsRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.GenerateModelsRequest;

        /**
         * Creates a plain object from a GenerateModelsRequest message. Also converts values to other types if specified.
         * @param message GenerateModelsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.GenerateModelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GenerateModelsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GenerateModelsRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GenerateModelsReply. */
    interface IGenerateModelsReply {

        /** GenerateModelsReply success */
        success?: (boolean|null);

        /** GenerateModelsReply errorMessage */
        errorMessage?: (string|null);

        /** GenerateModelsReply generatedFilePaths */
        generatedFilePaths?: (string[]|null);
    }

    /** Represents a GenerateModelsReply. */
    class GenerateModelsReply implements IGenerateModelsReply {

        /**
         * Constructs a new GenerateModelsReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IGenerateModelsReply);

        /** GenerateModelsReply success. */
        public success: boolean;

        /** GenerateModelsReply errorMessage. */
        public errorMessage: string;

        /** GenerateModelsReply generatedFilePaths. */
        public generatedFilePaths: string[];

        /**
         * Creates a new GenerateModelsReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GenerateModelsReply instance
         */
        public static create(properties?: editor.IGenerateModelsReply): editor.GenerateModelsReply;

        /**
         * Encodes the specified GenerateModelsReply message. Does not implicitly {@link editor.GenerateModelsReply.verify|verify} messages.
         * @param message GenerateModelsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IGenerateModelsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GenerateModelsReply message, length delimited. Does not implicitly {@link editor.GenerateModelsReply.verify|verify} messages.
         * @param message GenerateModelsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IGenerateModelsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GenerateModelsReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GenerateModelsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.GenerateModelsReply;

        /**
         * Decodes a GenerateModelsReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GenerateModelsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.GenerateModelsReply;

        /**
         * Verifies a GenerateModelsReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GenerateModelsReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GenerateModelsReply
         */
        public static fromObject(object: { [k: string]: any }): editor.GenerateModelsReply;

        /**
         * Creates a plain object from a GenerateModelsReply message. Also converts values to other types if specified.
         * @param message GenerateModelsReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.GenerateModelsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GenerateModelsReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GenerateModelsReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectRequest. */
    interface IConnectRequest {

        /** ConnectRequest connectionId */
        connectionId?: (string|null);
    }

    /** Represents a ConnectRequest. */
    class ConnectRequest implements IConnectRequest {

        /**
         * Constructs a new ConnectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IConnectRequest);

        /** ConnectRequest connectionId. */
        public connectionId: string;

        /**
         * Creates a new ConnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectRequest instance
         */
        public static create(properties?: editor.IConnectRequest): editor.ConnectRequest;

        /**
         * Encodes the specified ConnectRequest message. Does not implicitly {@link editor.ConnectRequest.verify|verify} messages.
         * @param message ConnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectRequest message, length delimited. Does not implicitly {@link editor.ConnectRequest.verify|verify} messages.
         * @param message ConnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.ConnectRequest;

        /**
         * Decodes a ConnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.ConnectRequest;

        /**
         * Verifies a ConnectRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.ConnectRequest;

        /**
         * Creates a plain object from a ConnectRequest message. Also converts values to other types if specified.
         * @param message ConnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.ConnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectReply. */
    interface IConnectReply {

        /** ConnectReply success */
        success?: (boolean|null);

        /** ConnectReply errorMessage */
        errorMessage?: (string|null);

        /** ConnectReply generatedFiles */
        generatedFiles?: (editor.ISourceFile[]|null);
    }

    /** Represents a ConnectReply. */
    class ConnectReply implements IConnectReply {

        /**
         * Constructs a new ConnectReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IConnectReply);

        /** ConnectReply success. */
        public success: boolean;

        /** ConnectReply errorMessage. */
        public errorMessage: string;

        /** ConnectReply generatedFiles. */
        public generatedFiles: editor.ISourceFile[];

        /**
         * Creates a new ConnectReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectReply instance
         */
        public static create(properties?: editor.IConnectReply): editor.ConnectReply;

        /**
         * Encodes the specified ConnectReply message. Does not implicitly {@link editor.ConnectReply.verify|verify} messages.
         * @param message ConnectReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IConnectReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectReply message, length delimited. Does not implicitly {@link editor.ConnectReply.verify|verify} messages.
         * @param message ConnectReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IConnectReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.ConnectReply;

        /**
         * Decodes a ConnectReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.ConnectReply;

        /**
         * Verifies a ConnectReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectReply
         */
        public static fromObject(object: { [k: string]: any }): editor.ConnectReply;

        /**
         * Creates a plain object from a ConnectReply message. Also converts values to other types if specified.
         * @param message ConnectReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.ConnectReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetGeneratedModelsRequest. */
    interface IGetGeneratedModelsRequest {

        /** GetGeneratedModelsRequest connectionId */
        connectionId?: (string|null);
    }

    /** Represents a GetGeneratedModelsRequest. */
    class GetGeneratedModelsRequest implements IGetGeneratedModelsRequest {

        /**
         * Constructs a new GetGeneratedModelsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IGetGeneratedModelsRequest);

        /** GetGeneratedModelsRequest connectionId. */
        public connectionId: string;

        /**
         * Creates a new GetGeneratedModelsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGeneratedModelsRequest instance
         */
        public static create(properties?: editor.IGetGeneratedModelsRequest): editor.GetGeneratedModelsRequest;

        /**
         * Encodes the specified GetGeneratedModelsRequest message. Does not implicitly {@link editor.GetGeneratedModelsRequest.verify|verify} messages.
         * @param message GetGeneratedModelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IGetGeneratedModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGeneratedModelsRequest message, length delimited. Does not implicitly {@link editor.GetGeneratedModelsRequest.verify|verify} messages.
         * @param message GetGeneratedModelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IGetGeneratedModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGeneratedModelsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGeneratedModelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.GetGeneratedModelsRequest;

        /**
         * Decodes a GetGeneratedModelsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGeneratedModelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.GetGeneratedModelsRequest;

        /**
         * Verifies a GetGeneratedModelsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGeneratedModelsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGeneratedModelsRequest
         */
        public static fromObject(object: { [k: string]: any }): editor.GetGeneratedModelsRequest;

        /**
         * Creates a plain object from a GetGeneratedModelsRequest message. Also converts values to other types if specified.
         * @param message GetGeneratedModelsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.GetGeneratedModelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGeneratedModelsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetGeneratedModelsRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetGeneratedModelsReply. */
    interface IGetGeneratedModelsReply {

        /** GetGeneratedModelsReply success */
        success?: (boolean|null);

        /** GetGeneratedModelsReply errorMessage */
        errorMessage?: (string|null);

        /** GetGeneratedModelsReply generatedFiles */
        generatedFiles?: (editor.ISourceFile[]|null);
    }

    /** Represents a GetGeneratedModelsReply. */
    class GetGeneratedModelsReply implements IGetGeneratedModelsReply {

        /**
         * Constructs a new GetGeneratedModelsReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: editor.IGetGeneratedModelsReply);

        /** GetGeneratedModelsReply success. */
        public success: boolean;

        /** GetGeneratedModelsReply errorMessage. */
        public errorMessage: string;

        /** GetGeneratedModelsReply generatedFiles. */
        public generatedFiles: editor.ISourceFile[];

        /**
         * Creates a new GetGeneratedModelsReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGeneratedModelsReply instance
         */
        public static create(properties?: editor.IGetGeneratedModelsReply): editor.GetGeneratedModelsReply;

        /**
         * Encodes the specified GetGeneratedModelsReply message. Does not implicitly {@link editor.GetGeneratedModelsReply.verify|verify} messages.
         * @param message GetGeneratedModelsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: editor.IGetGeneratedModelsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGeneratedModelsReply message, length delimited. Does not implicitly {@link editor.GetGeneratedModelsReply.verify|verify} messages.
         * @param message GetGeneratedModelsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: editor.IGetGeneratedModelsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGeneratedModelsReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGeneratedModelsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): editor.GetGeneratedModelsReply;

        /**
         * Decodes a GetGeneratedModelsReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGeneratedModelsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): editor.GetGeneratedModelsReply;

        /**
         * Verifies a GetGeneratedModelsReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGeneratedModelsReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGeneratedModelsReply
         */
        public static fromObject(object: { [k: string]: any }): editor.GetGeneratedModelsReply;

        /**
         * Creates a plain object from a GetGeneratedModelsReply message. Also converts values to other types if specified.
         * @param message GetGeneratedModelsReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: editor.GetGeneratedModelsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGeneratedModelsReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetGeneratedModelsReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
