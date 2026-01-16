/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const editor = $root.editor = (() => {

    /**
     * Namespace editor.
     * @exports editor
     * @namespace
     */
    const editor = {};

    editor.EditorService = (function() {

        /**
         * Constructs a new EditorService service.
         * @memberof editor
         * @classdesc Represents an EditorService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function EditorService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (EditorService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EditorService;

        /**
         * Creates new EditorService service using the specified rpc implementation.
         * @function create
         * @memberof editor.EditorService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {EditorService} RPC service. Useful where requests and/or responses are streamed.
         */
        EditorService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link editor.EditorService#initialize}.
         * @memberof editor.EditorService
         * @typedef InitializeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.InitializeReply} [response] InitializeReply
         */

        /**
         * Calls Initialize.
         * @function initialize
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IInitializeRequest} request InitializeRequest message or plain object
         * @param {editor.EditorService.InitializeCallback} callback Node-style callback called with the error, if any, and InitializeReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.initialize = function initialize(request, callback) {
            return this.rpcCall(initialize, $root.editor.InitializeRequest, $root.editor.InitializeReply, request, callback);
        }, "name", { value: "Initialize" });

        /**
         * Calls Initialize.
         * @function initialize
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IInitializeRequest} request InitializeRequest message or plain object
         * @returns {Promise<editor.InitializeReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getCompletions}.
         * @memberof editor.EditorService
         * @typedef GetCompletionsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.CompletionReply} [response] CompletionReply
         */

        /**
         * Calls GetCompletions.
         * @function getCompletions
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ICompletionRequest} request CompletionRequest message or plain object
         * @param {editor.EditorService.GetCompletionsCallback} callback Node-style callback called with the error, if any, and CompletionReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getCompletions = function getCompletions(request, callback) {
            return this.rpcCall(getCompletions, $root.editor.CompletionRequest, $root.editor.CompletionReply, request, callback);
        }, "name", { value: "GetCompletions" });

        /**
         * Calls GetCompletions.
         * @function getCompletions
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ICompletionRequest} request CompletionRequest message or plain object
         * @returns {Promise<editor.CompletionReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getHoverInfo}.
         * @memberof editor.EditorService
         * @typedef GetHoverInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.HoverInfoReply} [response] HoverInfoReply
         */

        /**
         * Calls GetHoverInfo.
         * @function getHoverInfo
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IHoverInfoRequest} request HoverInfoRequest message or plain object
         * @param {editor.EditorService.GetHoverInfoCallback} callback Node-style callback called with the error, if any, and HoverInfoReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getHoverInfo = function getHoverInfo(request, callback) {
            return this.rpcCall(getHoverInfo, $root.editor.HoverInfoRequest, $root.editor.HoverInfoReply, request, callback);
        }, "name", { value: "GetHoverInfo" });

        /**
         * Calls GetHoverInfo.
         * @function getHoverInfo
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IHoverInfoRequest} request HoverInfoRequest message or plain object
         * @returns {Promise<editor.HoverInfoReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getSignatureHelp}.
         * @memberof editor.EditorService
         * @typedef GetSignatureHelpCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.SignatureHelpReply} [response] SignatureHelpReply
         */

        /**
         * Calls GetSignatureHelp.
         * @function getSignatureHelp
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ISignatureHelpRequest} request SignatureHelpRequest message or plain object
         * @param {editor.EditorService.GetSignatureHelpCallback} callback Node-style callback called with the error, if any, and SignatureHelpReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getSignatureHelp = function getSignatureHelp(request, callback) {
            return this.rpcCall(getSignatureHelp, $root.editor.SignatureHelpRequest, $root.editor.SignatureHelpReply, request, callback);
        }, "name", { value: "GetSignatureHelp" });

        /**
         * Calls GetSignatureHelp.
         * @function getSignatureHelp
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ISignatureHelpRequest} request SignatureHelpRequest message or plain object
         * @returns {Promise<editor.SignatureHelpReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getDefinition}.
         * @memberof editor.EditorService
         * @typedef GetDefinitionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.DefinitionReply} [response] DefinitionReply
         */

        /**
         * Calls GetDefinition.
         * @function getDefinition
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IDefinitionRequest} request DefinitionRequest message or plain object
         * @param {editor.EditorService.GetDefinitionCallback} callback Node-style callback called with the error, if any, and DefinitionReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getDefinition = function getDefinition(request, callback) {
            return this.rpcCall(getDefinition, $root.editor.DefinitionRequest, $root.editor.DefinitionReply, request, callback);
        }, "name", { value: "GetDefinition" });

        /**
         * Calls GetDefinition.
         * @function getDefinition
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IDefinitionRequest} request DefinitionRequest message or plain object
         * @returns {Promise<editor.DefinitionReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getSemanticTokens}.
         * @memberof editor.EditorService
         * @typedef GetSemanticTokensCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.SemanticTokensReply} [response] SemanticTokensReply
         */

        /**
         * Calls GetSemanticTokens.
         * @function getSemanticTokens
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ISemanticTokensRequest} request SemanticTokensRequest message or plain object
         * @param {editor.EditorService.GetSemanticTokensCallback} callback Node-style callback called with the error, if any, and SemanticTokensReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getSemanticTokens = function getSemanticTokens(request, callback) {
            return this.rpcCall(getSemanticTokens, $root.editor.SemanticTokensRequest, $root.editor.SemanticTokensReply, request, callback);
        }, "name", { value: "GetSemanticTokens" });

        /**
         * Calls GetSemanticTokens.
         * @function getSemanticTokens
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ISemanticTokensRequest} request SemanticTokensRequest message or plain object
         * @returns {Promise<editor.SemanticTokensReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#formatCode}.
         * @memberof editor.EditorService
         * @typedef FormatCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.FormatCodeReply} [response] FormatCodeReply
         */

        /**
         * Calls FormatCode.
         * @function formatCode
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IFormatCodeRequest} request FormatCodeRequest message or plain object
         * @param {editor.EditorService.FormatCodeCallback} callback Node-style callback called with the error, if any, and FormatCodeReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.formatCode = function formatCode(request, callback) {
            return this.rpcCall(formatCode, $root.editor.FormatCodeRequest, $root.editor.FormatCodeReply, request, callback);
        }, "name", { value: "FormatCode" });

        /**
         * Calls FormatCode.
         * @function formatCode
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IFormatCodeRequest} request FormatCodeRequest message or plain object
         * @returns {Promise<editor.FormatCodeReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getDiagnostics}.
         * @memberof editor.EditorService
         * @typedef GetDiagnosticsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.DiagnosticsReply} [response] DiagnosticsReply
         */

        /**
         * Calls GetDiagnostics.
         * @function getDiagnostics
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IDiagnosticsRequest} request DiagnosticsRequest message or plain object
         * @param {editor.EditorService.GetDiagnosticsCallback} callback Node-style callback called with the error, if any, and DiagnosticsReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getDiagnostics = function getDiagnostics(request, callback) {
            return this.rpcCall(getDiagnostics, $root.editor.DiagnosticsRequest, $root.editor.DiagnosticsReply, request, callback);
        }, "name", { value: "GetDiagnostics" });

        /**
         * Calls GetDiagnostics.
         * @function getDiagnostics
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IDiagnosticsRequest} request DiagnosticsRequest message or plain object
         * @returns {Promise<editor.DiagnosticsReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getQuickFixes}.
         * @memberof editor.EditorService
         * @typedef GetQuickFixesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.QuickFixReply} [response] QuickFixReply
         */

        /**
         * Calls GetQuickFixes.
         * @function getQuickFixes
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IQuickFixRequest} request QuickFixRequest message or plain object
         * @param {editor.EditorService.GetQuickFixesCallback} callback Node-style callback called with the error, if any, and QuickFixReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getQuickFixes = function getQuickFixes(request, callback) {
            return this.rpcCall(getQuickFixes, $root.editor.QuickFixRequest, $root.editor.QuickFixReply, request, callback);
        }, "name", { value: "GetQuickFixes" });

        /**
         * Calls GetQuickFixes.
         * @function getQuickFixes
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IQuickFixRequest} request QuickFixRequest message or plain object
         * @returns {Promise<editor.QuickFixReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#executeCode}.
         * @memberof editor.EditorService
         * @typedef ExecuteCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.ExecuteCodeReply} [response] ExecuteCodeReply
         */

        /**
         * Calls ExecuteCode.
         * @function executeCode
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IExecuteCodeRequest} request ExecuteCodeRequest message or plain object
         * @param {editor.EditorService.ExecuteCodeCallback} callback Node-style callback called with the error, if any, and ExecuteCodeReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.executeCode = function executeCode(request, callback) {
            return this.rpcCall(executeCode, $root.editor.ExecuteCodeRequest, $root.editor.ExecuteCodeReply, request, callback);
        }, "name", { value: "ExecuteCode" });

        /**
         * Calls ExecuteCode.
         * @function executeCode
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IExecuteCodeRequest} request ExecuteCodeRequest message or plain object
         * @returns {Promise<editor.ExecuteCodeReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getConnections}.
         * @memberof editor.EditorService
         * @typedef GetConnectionsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.GetConnectionsReply} [response] GetConnectionsReply
         */

        /**
         * Calls GetConnections.
         * @function getConnections
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IGetConnectionsRequest} request GetConnectionsRequest message or plain object
         * @param {editor.EditorService.GetConnectionsCallback} callback Node-style callback called with the error, if any, and GetConnectionsReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getConnections = function getConnections(request, callback) {
            return this.rpcCall(getConnections, $root.editor.GetConnectionsRequest, $root.editor.GetConnectionsReply, request, callback);
        }, "name", { value: "GetConnections" });

        /**
         * Calls GetConnections.
         * @function getConnections
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IGetConnectionsRequest} request GetConnectionsRequest message or plain object
         * @returns {Promise<editor.GetConnectionsReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#saveConnection}.
         * @memberof editor.EditorService
         * @typedef SaveConnectionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.SaveConnectionReply} [response] SaveConnectionReply
         */

        /**
         * Calls SaveConnection.
         * @function saveConnection
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ISaveConnectionRequest} request SaveConnectionRequest message or plain object
         * @param {editor.EditorService.SaveConnectionCallback} callback Node-style callback called with the error, if any, and SaveConnectionReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.saveConnection = function saveConnection(request, callback) {
            return this.rpcCall(saveConnection, $root.editor.SaveConnectionRequest, $root.editor.SaveConnectionReply, request, callback);
        }, "name", { value: "SaveConnection" });

        /**
         * Calls SaveConnection.
         * @function saveConnection
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ISaveConnectionRequest} request SaveConnectionRequest message or plain object
         * @returns {Promise<editor.SaveConnectionReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#deleteConnection}.
         * @memberof editor.EditorService
         * @typedef DeleteConnectionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.DeleteConnectionReply} [response] DeleteConnectionReply
         */

        /**
         * Calls DeleteConnection.
         * @function deleteConnection
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IDeleteConnectionRequest} request DeleteConnectionRequest message or plain object
         * @param {editor.EditorService.DeleteConnectionCallback} callback Node-style callback called with the error, if any, and DeleteConnectionReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.deleteConnection = function deleteConnection(request, callback) {
            return this.rpcCall(deleteConnection, $root.editor.DeleteConnectionRequest, $root.editor.DeleteConnectionReply, request, callback);
        }, "name", { value: "DeleteConnection" });

        /**
         * Calls DeleteConnection.
         * @function deleteConnection
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IDeleteConnectionRequest} request DeleteConnectionRequest message or plain object
         * @returns {Promise<editor.DeleteConnectionReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#testConnection}.
         * @memberof editor.EditorService
         * @typedef TestConnectionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.TestConnectionReply} [response] TestConnectionReply
         */

        /**
         * Calls TestConnection.
         * @function testConnection
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ITestConnectionRequest} request TestConnectionRequest message or plain object
         * @param {editor.EditorService.TestConnectionCallback} callback Node-style callback called with the error, if any, and TestConnectionReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.testConnection = function testConnection(request, callback) {
            return this.rpcCall(testConnection, $root.editor.TestConnectionRequest, $root.editor.TestConnectionReply, request, callback);
        }, "name", { value: "TestConnection" });

        /**
         * Calls TestConnection.
         * @function testConnection
         * @memberof editor.EditorService
         * @instance
         * @param {editor.ITestConnectionRequest} request TestConnectionRequest message or plain object
         * @returns {Promise<editor.TestConnectionReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getDatabaseSchema}.
         * @memberof editor.EditorService
         * @typedef GetDatabaseSchemaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.GetDatabaseSchemaReply} [response] GetDatabaseSchemaReply
         */

        /**
         * Calls GetDatabaseSchema.
         * @function getDatabaseSchema
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IGetDatabaseSchemaRequest} request GetDatabaseSchemaRequest message or plain object
         * @param {editor.EditorService.GetDatabaseSchemaCallback} callback Node-style callback called with the error, if any, and GetDatabaseSchemaReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getDatabaseSchema = function getDatabaseSchema(request, callback) {
            return this.rpcCall(getDatabaseSchema, $root.editor.GetDatabaseSchemaRequest, $root.editor.GetDatabaseSchemaReply, request, callback);
        }, "name", { value: "GetDatabaseSchema" });

        /**
         * Calls GetDatabaseSchema.
         * @function getDatabaseSchema
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IGetDatabaseSchemaRequest} request GetDatabaseSchemaRequest message or plain object
         * @returns {Promise<editor.GetDatabaseSchemaReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#generateModels}.
         * @memberof editor.EditorService
         * @typedef GenerateModelsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.GenerateModelsReply} [response] GenerateModelsReply
         */

        /**
         * Calls GenerateModels.
         * @function generateModels
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IGenerateModelsRequest} request GenerateModelsRequest message or plain object
         * @param {editor.EditorService.GenerateModelsCallback} callback Node-style callback called with the error, if any, and GenerateModelsReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.generateModels = function generateModels(request, callback) {
            return this.rpcCall(generateModels, $root.editor.GenerateModelsRequest, $root.editor.GenerateModelsReply, request, callback);
        }, "name", { value: "GenerateModels" });

        /**
         * Calls GenerateModels.
         * @function generateModels
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IGenerateModelsRequest} request GenerateModelsRequest message or plain object
         * @returns {Promise<editor.GenerateModelsReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#getGeneratedModels}.
         * @memberof editor.EditorService
         * @typedef GetGeneratedModelsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.GetGeneratedModelsReply} [response] GetGeneratedModelsReply
         */

        /**
         * Calls GetGeneratedModels.
         * @function getGeneratedModels
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IGetGeneratedModelsRequest} request GetGeneratedModelsRequest message or plain object
         * @param {editor.EditorService.GetGeneratedModelsCallback} callback Node-style callback called with the error, if any, and GetGeneratedModelsReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.getGeneratedModels = function getGeneratedModels(request, callback) {
            return this.rpcCall(getGeneratedModels, $root.editor.GetGeneratedModelsRequest, $root.editor.GetGeneratedModelsReply, request, callback);
        }, "name", { value: "GetGeneratedModels" });

        /**
         * Calls GetGeneratedModels.
         * @function getGeneratedModels
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IGetGeneratedModelsRequest} request GetGeneratedModelsRequest message or plain object
         * @returns {Promise<editor.GetGeneratedModelsReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link editor.EditorService#connectToDatabase}.
         * @memberof editor.EditorService
         * @typedef ConnectToDatabaseCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {editor.ConnectReply} [response] ConnectReply
         */

        /**
         * Calls ConnectToDatabase.
         * @function connectToDatabase
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IConnectRequest} request ConnectRequest message or plain object
         * @param {editor.EditorService.ConnectToDatabaseCallback} callback Node-style callback called with the error, if any, and ConnectReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EditorService.prototype.connectToDatabase = function connectToDatabase(request, callback) {
            return this.rpcCall(connectToDatabase, $root.editor.ConnectRequest, $root.editor.ConnectReply, request, callback);
        }, "name", { value: "ConnectToDatabase" });

        /**
         * Calls ConnectToDatabase.
         * @function connectToDatabase
         * @memberof editor.EditorService
         * @instance
         * @param {editor.IConnectRequest} request ConnectRequest message or plain object
         * @returns {Promise<editor.ConnectReply>} Promise
         * @variation 2
         */

        return EditorService;
    })();

    editor.InitializeRequest = (function() {

        /**
         * Properties of an InitializeRequest.
         * @memberof editor
         * @interface IInitializeRequest
         * @property {string|null} [projectPath] InitializeRequest projectPath
         * @property {Array.<string>|null} [assemblyPaths] InitializeRequest assemblyPaths
         */

        /**
         * Constructs a new InitializeRequest.
         * @memberof editor
         * @classdesc Represents an InitializeRequest.
         * @implements IInitializeRequest
         * @constructor
         * @param {editor.IInitializeRequest=} [properties] Properties to set
         */
        function InitializeRequest(properties) {
            this.assemblyPaths = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitializeRequest projectPath.
         * @member {string} projectPath
         * @memberof editor.InitializeRequest
         * @instance
         */
        InitializeRequest.prototype.projectPath = "";

        /**
         * InitializeRequest assemblyPaths.
         * @member {Array.<string>} assemblyPaths
         * @memberof editor.InitializeRequest
         * @instance
         */
        InitializeRequest.prototype.assemblyPaths = $util.emptyArray;

        /**
         * Creates a new InitializeRequest instance using the specified properties.
         * @function create
         * @memberof editor.InitializeRequest
         * @static
         * @param {editor.IInitializeRequest=} [properties] Properties to set
         * @returns {editor.InitializeRequest} InitializeRequest instance
         */
        InitializeRequest.create = function create(properties) {
            return new InitializeRequest(properties);
        };

        /**
         * Encodes the specified InitializeRequest message. Does not implicitly {@link editor.InitializeRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.InitializeRequest
         * @static
         * @param {editor.IInitializeRequest} message InitializeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitializeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.projectPath != null && Object.hasOwnProperty.call(message, "projectPath"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.projectPath);
            if (message.assemblyPaths != null && message.assemblyPaths.length)
                for (let i = 0; i < message.assemblyPaths.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.assemblyPaths[i]);
            return writer;
        };

        /**
         * Encodes the specified InitializeRequest message, length delimited. Does not implicitly {@link editor.InitializeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.InitializeRequest
         * @static
         * @param {editor.IInitializeRequest} message InitializeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitializeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitializeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.InitializeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.InitializeRequest} InitializeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitializeRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.InitializeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.projectPath = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.assemblyPaths && message.assemblyPaths.length))
                            message.assemblyPaths = [];
                        message.assemblyPaths.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InitializeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.InitializeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.InitializeRequest} InitializeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitializeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitializeRequest message.
         * @function verify
         * @memberof editor.InitializeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitializeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.projectPath != null && message.hasOwnProperty("projectPath"))
                if (!$util.isString(message.projectPath))
                    return "projectPath: string expected";
            if (message.assemblyPaths != null && message.hasOwnProperty("assemblyPaths")) {
                if (!Array.isArray(message.assemblyPaths))
                    return "assemblyPaths: array expected";
                for (let i = 0; i < message.assemblyPaths.length; ++i)
                    if (!$util.isString(message.assemblyPaths[i]))
                        return "assemblyPaths: string[] expected";
            }
            return null;
        };

        /**
         * Creates an InitializeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.InitializeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.InitializeRequest} InitializeRequest
         */
        InitializeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.InitializeRequest)
                return object;
            let message = new $root.editor.InitializeRequest();
            if (object.projectPath != null)
                message.projectPath = String(object.projectPath);
            if (object.assemblyPaths) {
                if (!Array.isArray(object.assemblyPaths))
                    throw TypeError(".editor.InitializeRequest.assemblyPaths: array expected");
                message.assemblyPaths = [];
                for (let i = 0; i < object.assemblyPaths.length; ++i)
                    message.assemblyPaths[i] = String(object.assemblyPaths[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an InitializeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.InitializeRequest
         * @static
         * @param {editor.InitializeRequest} message InitializeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitializeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.assemblyPaths = [];
            if (options.defaults)
                object.projectPath = "";
            if (message.projectPath != null && message.hasOwnProperty("projectPath"))
                object.projectPath = message.projectPath;
            if (message.assemblyPaths && message.assemblyPaths.length) {
                object.assemblyPaths = [];
                for (let j = 0; j < message.assemblyPaths.length; ++j)
                    object.assemblyPaths[j] = message.assemblyPaths[j];
            }
            return object;
        };

        /**
         * Converts this InitializeRequest to JSON.
         * @function toJSON
         * @memberof editor.InitializeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitializeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InitializeRequest
         * @function getTypeUrl
         * @memberof editor.InitializeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InitializeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.InitializeRequest";
        };

        return InitializeRequest;
    })();

    editor.InitializeReply = (function() {

        /**
         * Properties of an InitializeReply.
         * @memberof editor
         * @interface IInitializeReply
         * @property {boolean|null} [success] InitializeReply success
         * @property {string|null} [errorMessage] InitializeReply errorMessage
         */

        /**
         * Constructs a new InitializeReply.
         * @memberof editor
         * @classdesc Represents an InitializeReply.
         * @implements IInitializeReply
         * @constructor
         * @param {editor.IInitializeReply=} [properties] Properties to set
         */
        function InitializeReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitializeReply success.
         * @member {boolean} success
         * @memberof editor.InitializeReply
         * @instance
         */
        InitializeReply.prototype.success = false;

        /**
         * InitializeReply errorMessage.
         * @member {string} errorMessage
         * @memberof editor.InitializeReply
         * @instance
         */
        InitializeReply.prototype.errorMessage = "";

        /**
         * Creates a new InitializeReply instance using the specified properties.
         * @function create
         * @memberof editor.InitializeReply
         * @static
         * @param {editor.IInitializeReply=} [properties] Properties to set
         * @returns {editor.InitializeReply} InitializeReply instance
         */
        InitializeReply.create = function create(properties) {
            return new InitializeReply(properties);
        };

        /**
         * Encodes the specified InitializeReply message. Does not implicitly {@link editor.InitializeReply.verify|verify} messages.
         * @function encode
         * @memberof editor.InitializeReply
         * @static
         * @param {editor.IInitializeReply} message InitializeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitializeReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified InitializeReply message, length delimited. Does not implicitly {@link editor.InitializeReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.InitializeReply
         * @static
         * @param {editor.IInitializeReply} message InitializeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitializeReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitializeReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.InitializeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.InitializeReply} InitializeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitializeReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.InitializeReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InitializeReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.InitializeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.InitializeReply} InitializeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitializeReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitializeReply message.
         * @function verify
         * @memberof editor.InitializeReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitializeReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates an InitializeReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.InitializeReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.InitializeReply} InitializeReply
         */
        InitializeReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.InitializeReply)
                return object;
            let message = new $root.editor.InitializeReply();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from an InitializeReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.InitializeReply
         * @static
         * @param {editor.InitializeReply} message InitializeReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitializeReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this InitializeReply to JSON.
         * @function toJSON
         * @memberof editor.InitializeReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitializeReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InitializeReply
         * @function getTypeUrl
         * @memberof editor.InitializeReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InitializeReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.InitializeReply";
        };

        return InitializeReply;
    })();

    editor.CompletionRequest = (function() {

        /**
         * Properties of a CompletionRequest.
         * @memberof editor
         * @interface ICompletionRequest
         * @property {string|null} [code] CompletionRequest code
         * @property {number|null} [position] CompletionRequest position
         * @property {Array.<editor.ISourceFile>|null} [extraFiles] CompletionRequest extraFiles
         */

        /**
         * Constructs a new CompletionRequest.
         * @memberof editor
         * @classdesc Represents a CompletionRequest.
         * @implements ICompletionRequest
         * @constructor
         * @param {editor.ICompletionRequest=} [properties] Properties to set
         */
        function CompletionRequest(properties) {
            this.extraFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CompletionRequest code.
         * @member {string} code
         * @memberof editor.CompletionRequest
         * @instance
         */
        CompletionRequest.prototype.code = "";

        /**
         * CompletionRequest position.
         * @member {number} position
         * @memberof editor.CompletionRequest
         * @instance
         */
        CompletionRequest.prototype.position = 0;

        /**
         * CompletionRequest extraFiles.
         * @member {Array.<editor.ISourceFile>} extraFiles
         * @memberof editor.CompletionRequest
         * @instance
         */
        CompletionRequest.prototype.extraFiles = $util.emptyArray;

        /**
         * Creates a new CompletionRequest instance using the specified properties.
         * @function create
         * @memberof editor.CompletionRequest
         * @static
         * @param {editor.ICompletionRequest=} [properties] Properties to set
         * @returns {editor.CompletionRequest} CompletionRequest instance
         */
        CompletionRequest.create = function create(properties) {
            return new CompletionRequest(properties);
        };

        /**
         * Encodes the specified CompletionRequest message. Does not implicitly {@link editor.CompletionRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.CompletionRequest
         * @static
         * @param {editor.ICompletionRequest} message CompletionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompletionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.position);
            if (message.extraFiles != null && message.extraFiles.length)
                for (let i = 0; i < message.extraFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.extraFiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CompletionRequest message, length delimited. Does not implicitly {@link editor.CompletionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.CompletionRequest
         * @static
         * @param {editor.ICompletionRequest} message CompletionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompletionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CompletionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.CompletionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.CompletionRequest} CompletionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompletionRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.CompletionRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.position = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.extraFiles && message.extraFiles.length))
                            message.extraFiles = [];
                        message.extraFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CompletionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.CompletionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.CompletionRequest} CompletionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompletionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CompletionRequest message.
         * @function verify
         * @memberof editor.CompletionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CompletionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.extraFiles != null && message.hasOwnProperty("extraFiles")) {
                if (!Array.isArray(message.extraFiles))
                    return "extraFiles: array expected";
                for (let i = 0; i < message.extraFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.extraFiles[i]);
                    if (error)
                        return "extraFiles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CompletionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.CompletionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.CompletionRequest} CompletionRequest
         */
        CompletionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.CompletionRequest)
                return object;
            let message = new $root.editor.CompletionRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.extraFiles) {
                if (!Array.isArray(object.extraFiles))
                    throw TypeError(".editor.CompletionRequest.extraFiles: array expected");
                message.extraFiles = [];
                for (let i = 0; i < object.extraFiles.length; ++i) {
                    if (typeof object.extraFiles[i] !== "object")
                        throw TypeError(".editor.CompletionRequest.extraFiles: object expected");
                    message.extraFiles[i] = $root.editor.SourceFile.fromObject(object.extraFiles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CompletionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.CompletionRequest
         * @static
         * @param {editor.CompletionRequest} message CompletionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompletionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.extraFiles = [];
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.extraFiles && message.extraFiles.length) {
                object.extraFiles = [];
                for (let j = 0; j < message.extraFiles.length; ++j)
                    object.extraFiles[j] = $root.editor.SourceFile.toObject(message.extraFiles[j], options);
            }
            return object;
        };

        /**
         * Converts this CompletionRequest to JSON.
         * @function toJSON
         * @memberof editor.CompletionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompletionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CompletionRequest
         * @function getTypeUrl
         * @memberof editor.CompletionRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CompletionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.CompletionRequest";
        };

        return CompletionRequest;
    })();

    editor.CompletionReply = (function() {

        /**
         * Properties of a CompletionReply.
         * @memberof editor
         * @interface ICompletionReply
         * @property {Array.<editor.ICompletionItem>|null} [items] CompletionReply items
         */

        /**
         * Constructs a new CompletionReply.
         * @memberof editor
         * @classdesc Represents a CompletionReply.
         * @implements ICompletionReply
         * @constructor
         * @param {editor.ICompletionReply=} [properties] Properties to set
         */
        function CompletionReply(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CompletionReply items.
         * @member {Array.<editor.ICompletionItem>} items
         * @memberof editor.CompletionReply
         * @instance
         */
        CompletionReply.prototype.items = $util.emptyArray;

        /**
         * Creates a new CompletionReply instance using the specified properties.
         * @function create
         * @memberof editor.CompletionReply
         * @static
         * @param {editor.ICompletionReply=} [properties] Properties to set
         * @returns {editor.CompletionReply} CompletionReply instance
         */
        CompletionReply.create = function create(properties) {
            return new CompletionReply(properties);
        };

        /**
         * Encodes the specified CompletionReply message. Does not implicitly {@link editor.CompletionReply.verify|verify} messages.
         * @function encode
         * @memberof editor.CompletionReply
         * @static
         * @param {editor.ICompletionReply} message CompletionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompletionReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.editor.CompletionItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CompletionReply message, length delimited. Does not implicitly {@link editor.CompletionReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.CompletionReply
         * @static
         * @param {editor.ICompletionReply} message CompletionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompletionReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CompletionReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.CompletionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.CompletionReply} CompletionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompletionReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.CompletionReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.editor.CompletionItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CompletionReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.CompletionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.CompletionReply} CompletionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompletionReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CompletionReply message.
         * @function verify
         * @memberof editor.CompletionReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CompletionReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.editor.CompletionItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CompletionReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.CompletionReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.CompletionReply} CompletionReply
         */
        CompletionReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.CompletionReply)
                return object;
            let message = new $root.editor.CompletionReply();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".editor.CompletionReply.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".editor.CompletionReply.items: object expected");
                    message.items[i] = $root.editor.CompletionItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CompletionReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.CompletionReply
         * @static
         * @param {editor.CompletionReply} message CompletionReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompletionReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.editor.CompletionItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this CompletionReply to JSON.
         * @function toJSON
         * @memberof editor.CompletionReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompletionReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CompletionReply
         * @function getTypeUrl
         * @memberof editor.CompletionReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CompletionReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.CompletionReply";
        };

        return CompletionReply;
    })();

    editor.CompletionItem = (function() {

        /**
         * Properties of a CompletionItem.
         * @memberof editor
         * @interface ICompletionItem
         * @property {string|null} [displayText] CompletionItem displayText
         * @property {string|null} [insertText] CompletionItem insertText
         * @property {string|null} [kind] CompletionItem kind
         * @property {string|null} [sortText] CompletionItem sortText
         */

        /**
         * Constructs a new CompletionItem.
         * @memberof editor
         * @classdesc Represents a CompletionItem.
         * @implements ICompletionItem
         * @constructor
         * @param {editor.ICompletionItem=} [properties] Properties to set
         */
        function CompletionItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CompletionItem displayText.
         * @member {string} displayText
         * @memberof editor.CompletionItem
         * @instance
         */
        CompletionItem.prototype.displayText = "";

        /**
         * CompletionItem insertText.
         * @member {string} insertText
         * @memberof editor.CompletionItem
         * @instance
         */
        CompletionItem.prototype.insertText = "";

        /**
         * CompletionItem kind.
         * @member {string} kind
         * @memberof editor.CompletionItem
         * @instance
         */
        CompletionItem.prototype.kind = "";

        /**
         * CompletionItem sortText.
         * @member {string} sortText
         * @memberof editor.CompletionItem
         * @instance
         */
        CompletionItem.prototype.sortText = "";

        /**
         * Creates a new CompletionItem instance using the specified properties.
         * @function create
         * @memberof editor.CompletionItem
         * @static
         * @param {editor.ICompletionItem=} [properties] Properties to set
         * @returns {editor.CompletionItem} CompletionItem instance
         */
        CompletionItem.create = function create(properties) {
            return new CompletionItem(properties);
        };

        /**
         * Encodes the specified CompletionItem message. Does not implicitly {@link editor.CompletionItem.verify|verify} messages.
         * @function encode
         * @memberof editor.CompletionItem
         * @static
         * @param {editor.ICompletionItem} message CompletionItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompletionItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.displayText != null && Object.hasOwnProperty.call(message, "displayText"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayText);
            if (message.insertText != null && Object.hasOwnProperty.call(message, "insertText"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.insertText);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.kind);
            if (message.sortText != null && Object.hasOwnProperty.call(message, "sortText"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sortText);
            return writer;
        };

        /**
         * Encodes the specified CompletionItem message, length delimited. Does not implicitly {@link editor.CompletionItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.CompletionItem
         * @static
         * @param {editor.ICompletionItem} message CompletionItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompletionItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CompletionItem message from the specified reader or buffer.
         * @function decode
         * @memberof editor.CompletionItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.CompletionItem} CompletionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompletionItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.CompletionItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.displayText = reader.string();
                        break;
                    }
                case 2: {
                        message.insertText = reader.string();
                        break;
                    }
                case 3: {
                        message.kind = reader.string();
                        break;
                    }
                case 4: {
                        message.sortText = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CompletionItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.CompletionItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.CompletionItem} CompletionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompletionItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CompletionItem message.
         * @function verify
         * @memberof editor.CompletionItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CompletionItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.displayText != null && message.hasOwnProperty("displayText"))
                if (!$util.isString(message.displayText))
                    return "displayText: string expected";
            if (message.insertText != null && message.hasOwnProperty("insertText"))
                if (!$util.isString(message.insertText))
                    return "insertText: string expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isString(message.kind))
                    return "kind: string expected";
            if (message.sortText != null && message.hasOwnProperty("sortText"))
                if (!$util.isString(message.sortText))
                    return "sortText: string expected";
            return null;
        };

        /**
         * Creates a CompletionItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.CompletionItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.CompletionItem} CompletionItem
         */
        CompletionItem.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.CompletionItem)
                return object;
            let message = new $root.editor.CompletionItem();
            if (object.displayText != null)
                message.displayText = String(object.displayText);
            if (object.insertText != null)
                message.insertText = String(object.insertText);
            if (object.kind != null)
                message.kind = String(object.kind);
            if (object.sortText != null)
                message.sortText = String(object.sortText);
            return message;
        };

        /**
         * Creates a plain object from a CompletionItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.CompletionItem
         * @static
         * @param {editor.CompletionItem} message CompletionItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompletionItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.displayText = "";
                object.insertText = "";
                object.kind = "";
                object.sortText = "";
            }
            if (message.displayText != null && message.hasOwnProperty("displayText"))
                object.displayText = message.displayText;
            if (message.insertText != null && message.hasOwnProperty("insertText"))
                object.insertText = message.insertText;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.sortText != null && message.hasOwnProperty("sortText"))
                object.sortText = message.sortText;
            return object;
        };

        /**
         * Converts this CompletionItem to JSON.
         * @function toJSON
         * @memberof editor.CompletionItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompletionItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CompletionItem
         * @function getTypeUrl
         * @memberof editor.CompletionItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CompletionItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.CompletionItem";
        };

        return CompletionItem;
    })();

    editor.HoverInfoRequest = (function() {

        /**
         * Properties of a HoverInfoRequest.
         * @memberof editor
         * @interface IHoverInfoRequest
         * @property {string|null} [code] HoverInfoRequest code
         * @property {number|null} [position] HoverInfoRequest position
         * @property {Array.<editor.ISourceFile>|null} [extraFiles] HoverInfoRequest extraFiles
         */

        /**
         * Constructs a new HoverInfoRequest.
         * @memberof editor
         * @classdesc Represents a HoverInfoRequest.
         * @implements IHoverInfoRequest
         * @constructor
         * @param {editor.IHoverInfoRequest=} [properties] Properties to set
         */
        function HoverInfoRequest(properties) {
            this.extraFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HoverInfoRequest code.
         * @member {string} code
         * @memberof editor.HoverInfoRequest
         * @instance
         */
        HoverInfoRequest.prototype.code = "";

        /**
         * HoverInfoRequest position.
         * @member {number} position
         * @memberof editor.HoverInfoRequest
         * @instance
         */
        HoverInfoRequest.prototype.position = 0;

        /**
         * HoverInfoRequest extraFiles.
         * @member {Array.<editor.ISourceFile>} extraFiles
         * @memberof editor.HoverInfoRequest
         * @instance
         */
        HoverInfoRequest.prototype.extraFiles = $util.emptyArray;

        /**
         * Creates a new HoverInfoRequest instance using the specified properties.
         * @function create
         * @memberof editor.HoverInfoRequest
         * @static
         * @param {editor.IHoverInfoRequest=} [properties] Properties to set
         * @returns {editor.HoverInfoRequest} HoverInfoRequest instance
         */
        HoverInfoRequest.create = function create(properties) {
            return new HoverInfoRequest(properties);
        };

        /**
         * Encodes the specified HoverInfoRequest message. Does not implicitly {@link editor.HoverInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.HoverInfoRequest
         * @static
         * @param {editor.IHoverInfoRequest} message HoverInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HoverInfoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.position);
            if (message.extraFiles != null && message.extraFiles.length)
                for (let i = 0; i < message.extraFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.extraFiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HoverInfoRequest message, length delimited. Does not implicitly {@link editor.HoverInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.HoverInfoRequest
         * @static
         * @param {editor.IHoverInfoRequest} message HoverInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HoverInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HoverInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.HoverInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.HoverInfoRequest} HoverInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HoverInfoRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.HoverInfoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.position = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.extraFiles && message.extraFiles.length))
                            message.extraFiles = [];
                        message.extraFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HoverInfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.HoverInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.HoverInfoRequest} HoverInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HoverInfoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HoverInfoRequest message.
         * @function verify
         * @memberof editor.HoverInfoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HoverInfoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.extraFiles != null && message.hasOwnProperty("extraFiles")) {
                if (!Array.isArray(message.extraFiles))
                    return "extraFiles: array expected";
                for (let i = 0; i < message.extraFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.extraFiles[i]);
                    if (error)
                        return "extraFiles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HoverInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.HoverInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.HoverInfoRequest} HoverInfoRequest
         */
        HoverInfoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.HoverInfoRequest)
                return object;
            let message = new $root.editor.HoverInfoRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.extraFiles) {
                if (!Array.isArray(object.extraFiles))
                    throw TypeError(".editor.HoverInfoRequest.extraFiles: array expected");
                message.extraFiles = [];
                for (let i = 0; i < object.extraFiles.length; ++i) {
                    if (typeof object.extraFiles[i] !== "object")
                        throw TypeError(".editor.HoverInfoRequest.extraFiles: object expected");
                    message.extraFiles[i] = $root.editor.SourceFile.fromObject(object.extraFiles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HoverInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.HoverInfoRequest
         * @static
         * @param {editor.HoverInfoRequest} message HoverInfoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HoverInfoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.extraFiles = [];
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.extraFiles && message.extraFiles.length) {
                object.extraFiles = [];
                for (let j = 0; j < message.extraFiles.length; ++j)
                    object.extraFiles[j] = $root.editor.SourceFile.toObject(message.extraFiles[j], options);
            }
            return object;
        };

        /**
         * Converts this HoverInfoRequest to JSON.
         * @function toJSON
         * @memberof editor.HoverInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HoverInfoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HoverInfoRequest
         * @function getTypeUrl
         * @memberof editor.HoverInfoRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HoverInfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.HoverInfoRequest";
        };

        return HoverInfoRequest;
    })();

    editor.HoverInfoReply = (function() {

        /**
         * Properties of a HoverInfoReply.
         * @memberof editor
         * @interface IHoverInfoReply
         * @property {boolean|null} [hasInfo] HoverInfoReply hasInfo
         * @property {string|null} [information] HoverInfoReply information
         * @property {number|null} [offsetFrom] HoverInfoReply offsetFrom
         * @property {number|null} [offsetTo] HoverInfoReply offsetTo
         */

        /**
         * Constructs a new HoverInfoReply.
         * @memberof editor
         * @classdesc Represents a HoverInfoReply.
         * @implements IHoverInfoReply
         * @constructor
         * @param {editor.IHoverInfoReply=} [properties] Properties to set
         */
        function HoverInfoReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HoverInfoReply hasInfo.
         * @member {boolean} hasInfo
         * @memberof editor.HoverInfoReply
         * @instance
         */
        HoverInfoReply.prototype.hasInfo = false;

        /**
         * HoverInfoReply information.
         * @member {string} information
         * @memberof editor.HoverInfoReply
         * @instance
         */
        HoverInfoReply.prototype.information = "";

        /**
         * HoverInfoReply offsetFrom.
         * @member {number} offsetFrom
         * @memberof editor.HoverInfoReply
         * @instance
         */
        HoverInfoReply.prototype.offsetFrom = 0;

        /**
         * HoverInfoReply offsetTo.
         * @member {number} offsetTo
         * @memberof editor.HoverInfoReply
         * @instance
         */
        HoverInfoReply.prototype.offsetTo = 0;

        /**
         * Creates a new HoverInfoReply instance using the specified properties.
         * @function create
         * @memberof editor.HoverInfoReply
         * @static
         * @param {editor.IHoverInfoReply=} [properties] Properties to set
         * @returns {editor.HoverInfoReply} HoverInfoReply instance
         */
        HoverInfoReply.create = function create(properties) {
            return new HoverInfoReply(properties);
        };

        /**
         * Encodes the specified HoverInfoReply message. Does not implicitly {@link editor.HoverInfoReply.verify|verify} messages.
         * @function encode
         * @memberof editor.HoverInfoReply
         * @static
         * @param {editor.IHoverInfoReply} message HoverInfoReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HoverInfoReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hasInfo != null && Object.hasOwnProperty.call(message, "hasInfo"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hasInfo);
            if (message.information != null && Object.hasOwnProperty.call(message, "information"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.information);
            if (message.offsetFrom != null && Object.hasOwnProperty.call(message, "offsetFrom"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.offsetFrom);
            if (message.offsetTo != null && Object.hasOwnProperty.call(message, "offsetTo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.offsetTo);
            return writer;
        };

        /**
         * Encodes the specified HoverInfoReply message, length delimited. Does not implicitly {@link editor.HoverInfoReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.HoverInfoReply
         * @static
         * @param {editor.IHoverInfoReply} message HoverInfoReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HoverInfoReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HoverInfoReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.HoverInfoReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.HoverInfoReply} HoverInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HoverInfoReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.HoverInfoReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.hasInfo = reader.bool();
                        break;
                    }
                case 2: {
                        message.information = reader.string();
                        break;
                    }
                case 3: {
                        message.offsetFrom = reader.int32();
                        break;
                    }
                case 4: {
                        message.offsetTo = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HoverInfoReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.HoverInfoReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.HoverInfoReply} HoverInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HoverInfoReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HoverInfoReply message.
         * @function verify
         * @memberof editor.HoverInfoReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HoverInfoReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hasInfo != null && message.hasOwnProperty("hasInfo"))
                if (typeof message.hasInfo !== "boolean")
                    return "hasInfo: boolean expected";
            if (message.information != null && message.hasOwnProperty("information"))
                if (!$util.isString(message.information))
                    return "information: string expected";
            if (message.offsetFrom != null && message.hasOwnProperty("offsetFrom"))
                if (!$util.isInteger(message.offsetFrom))
                    return "offsetFrom: integer expected";
            if (message.offsetTo != null && message.hasOwnProperty("offsetTo"))
                if (!$util.isInteger(message.offsetTo))
                    return "offsetTo: integer expected";
            return null;
        };

        /**
         * Creates a HoverInfoReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.HoverInfoReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.HoverInfoReply} HoverInfoReply
         */
        HoverInfoReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.HoverInfoReply)
                return object;
            let message = new $root.editor.HoverInfoReply();
            if (object.hasInfo != null)
                message.hasInfo = Boolean(object.hasInfo);
            if (object.information != null)
                message.information = String(object.information);
            if (object.offsetFrom != null)
                message.offsetFrom = object.offsetFrom | 0;
            if (object.offsetTo != null)
                message.offsetTo = object.offsetTo | 0;
            return message;
        };

        /**
         * Creates a plain object from a HoverInfoReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.HoverInfoReply
         * @static
         * @param {editor.HoverInfoReply} message HoverInfoReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HoverInfoReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.hasInfo = false;
                object.information = "";
                object.offsetFrom = 0;
                object.offsetTo = 0;
            }
            if (message.hasInfo != null && message.hasOwnProperty("hasInfo"))
                object.hasInfo = message.hasInfo;
            if (message.information != null && message.hasOwnProperty("information"))
                object.information = message.information;
            if (message.offsetFrom != null && message.hasOwnProperty("offsetFrom"))
                object.offsetFrom = message.offsetFrom;
            if (message.offsetTo != null && message.hasOwnProperty("offsetTo"))
                object.offsetTo = message.offsetTo;
            return object;
        };

        /**
         * Converts this HoverInfoReply to JSON.
         * @function toJSON
         * @memberof editor.HoverInfoReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HoverInfoReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HoverInfoReply
         * @function getTypeUrl
         * @memberof editor.HoverInfoReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HoverInfoReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.HoverInfoReply";
        };

        return HoverInfoReply;
    })();

    editor.SignatureHelpRequest = (function() {

        /**
         * Properties of a SignatureHelpRequest.
         * @memberof editor
         * @interface ISignatureHelpRequest
         * @property {string|null} [code] SignatureHelpRequest code
         * @property {number|null} [position] SignatureHelpRequest position
         * @property {Array.<editor.ISourceFile>|null} [extraFiles] SignatureHelpRequest extraFiles
         */

        /**
         * Constructs a new SignatureHelpRequest.
         * @memberof editor
         * @classdesc Represents a SignatureHelpRequest.
         * @implements ISignatureHelpRequest
         * @constructor
         * @param {editor.ISignatureHelpRequest=} [properties] Properties to set
         */
        function SignatureHelpRequest(properties) {
            this.extraFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignatureHelpRequest code.
         * @member {string} code
         * @memberof editor.SignatureHelpRequest
         * @instance
         */
        SignatureHelpRequest.prototype.code = "";

        /**
         * SignatureHelpRequest position.
         * @member {number} position
         * @memberof editor.SignatureHelpRequest
         * @instance
         */
        SignatureHelpRequest.prototype.position = 0;

        /**
         * SignatureHelpRequest extraFiles.
         * @member {Array.<editor.ISourceFile>} extraFiles
         * @memberof editor.SignatureHelpRequest
         * @instance
         */
        SignatureHelpRequest.prototype.extraFiles = $util.emptyArray;

        /**
         * Creates a new SignatureHelpRequest instance using the specified properties.
         * @function create
         * @memberof editor.SignatureHelpRequest
         * @static
         * @param {editor.ISignatureHelpRequest=} [properties] Properties to set
         * @returns {editor.SignatureHelpRequest} SignatureHelpRequest instance
         */
        SignatureHelpRequest.create = function create(properties) {
            return new SignatureHelpRequest(properties);
        };

        /**
         * Encodes the specified SignatureHelpRequest message. Does not implicitly {@link editor.SignatureHelpRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.SignatureHelpRequest
         * @static
         * @param {editor.ISignatureHelpRequest} message SignatureHelpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureHelpRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.position);
            if (message.extraFiles != null && message.extraFiles.length)
                for (let i = 0; i < message.extraFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.extraFiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SignatureHelpRequest message, length delimited. Does not implicitly {@link editor.SignatureHelpRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.SignatureHelpRequest
         * @static
         * @param {editor.ISignatureHelpRequest} message SignatureHelpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureHelpRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignatureHelpRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.SignatureHelpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.SignatureHelpRequest} SignatureHelpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureHelpRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.SignatureHelpRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.position = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.extraFiles && message.extraFiles.length))
                            message.extraFiles = [];
                        message.extraFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignatureHelpRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.SignatureHelpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.SignatureHelpRequest} SignatureHelpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureHelpRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignatureHelpRequest message.
         * @function verify
         * @memberof editor.SignatureHelpRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignatureHelpRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.extraFiles != null && message.hasOwnProperty("extraFiles")) {
                if (!Array.isArray(message.extraFiles))
                    return "extraFiles: array expected";
                for (let i = 0; i < message.extraFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.extraFiles[i]);
                    if (error)
                        return "extraFiles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SignatureHelpRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.SignatureHelpRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.SignatureHelpRequest} SignatureHelpRequest
         */
        SignatureHelpRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.SignatureHelpRequest)
                return object;
            let message = new $root.editor.SignatureHelpRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.extraFiles) {
                if (!Array.isArray(object.extraFiles))
                    throw TypeError(".editor.SignatureHelpRequest.extraFiles: array expected");
                message.extraFiles = [];
                for (let i = 0; i < object.extraFiles.length; ++i) {
                    if (typeof object.extraFiles[i] !== "object")
                        throw TypeError(".editor.SignatureHelpRequest.extraFiles: object expected");
                    message.extraFiles[i] = $root.editor.SourceFile.fromObject(object.extraFiles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SignatureHelpRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.SignatureHelpRequest
         * @static
         * @param {editor.SignatureHelpRequest} message SignatureHelpRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignatureHelpRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.extraFiles = [];
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.extraFiles && message.extraFiles.length) {
                object.extraFiles = [];
                for (let j = 0; j < message.extraFiles.length; ++j)
                    object.extraFiles[j] = $root.editor.SourceFile.toObject(message.extraFiles[j], options);
            }
            return object;
        };

        /**
         * Converts this SignatureHelpRequest to JSON.
         * @function toJSON
         * @memberof editor.SignatureHelpRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignatureHelpRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignatureHelpRequest
         * @function getTypeUrl
         * @memberof editor.SignatureHelpRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignatureHelpRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.SignatureHelpRequest";
        };

        return SignatureHelpRequest;
    })();

    editor.SignatureHelpReply = (function() {

        /**
         * Properties of a SignatureHelpReply.
         * @memberof editor
         * @interface ISignatureHelpReply
         * @property {boolean|null} [hasHelp] SignatureHelpReply hasHelp
         * @property {Array.<editor.ISignatureItem>|null} [signatures] SignatureHelpReply signatures
         * @property {number|null} [activeParameter] SignatureHelpReply activeParameter
         * @property {number|null} [activeSignature] SignatureHelpReply activeSignature
         */

        /**
         * Constructs a new SignatureHelpReply.
         * @memberof editor
         * @classdesc Represents a SignatureHelpReply.
         * @implements ISignatureHelpReply
         * @constructor
         * @param {editor.ISignatureHelpReply=} [properties] Properties to set
         */
        function SignatureHelpReply(properties) {
            this.signatures = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignatureHelpReply hasHelp.
         * @member {boolean} hasHelp
         * @memberof editor.SignatureHelpReply
         * @instance
         */
        SignatureHelpReply.prototype.hasHelp = false;

        /**
         * SignatureHelpReply signatures.
         * @member {Array.<editor.ISignatureItem>} signatures
         * @memberof editor.SignatureHelpReply
         * @instance
         */
        SignatureHelpReply.prototype.signatures = $util.emptyArray;

        /**
         * SignatureHelpReply activeParameter.
         * @member {number} activeParameter
         * @memberof editor.SignatureHelpReply
         * @instance
         */
        SignatureHelpReply.prototype.activeParameter = 0;

        /**
         * SignatureHelpReply activeSignature.
         * @member {number} activeSignature
         * @memberof editor.SignatureHelpReply
         * @instance
         */
        SignatureHelpReply.prototype.activeSignature = 0;

        /**
         * Creates a new SignatureHelpReply instance using the specified properties.
         * @function create
         * @memberof editor.SignatureHelpReply
         * @static
         * @param {editor.ISignatureHelpReply=} [properties] Properties to set
         * @returns {editor.SignatureHelpReply} SignatureHelpReply instance
         */
        SignatureHelpReply.create = function create(properties) {
            return new SignatureHelpReply(properties);
        };

        /**
         * Encodes the specified SignatureHelpReply message. Does not implicitly {@link editor.SignatureHelpReply.verify|verify} messages.
         * @function encode
         * @memberof editor.SignatureHelpReply
         * @static
         * @param {editor.ISignatureHelpReply} message SignatureHelpReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureHelpReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hasHelp != null && Object.hasOwnProperty.call(message, "hasHelp"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hasHelp);
            if (message.signatures != null && message.signatures.length)
                for (let i = 0; i < message.signatures.length; ++i)
                    $root.editor.SignatureItem.encode(message.signatures[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.activeParameter != null && Object.hasOwnProperty.call(message, "activeParameter"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.activeParameter);
            if (message.activeSignature != null && Object.hasOwnProperty.call(message, "activeSignature"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.activeSignature);
            return writer;
        };

        /**
         * Encodes the specified SignatureHelpReply message, length delimited. Does not implicitly {@link editor.SignatureHelpReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.SignatureHelpReply
         * @static
         * @param {editor.ISignatureHelpReply} message SignatureHelpReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureHelpReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignatureHelpReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.SignatureHelpReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.SignatureHelpReply} SignatureHelpReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureHelpReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.SignatureHelpReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.hasHelp = reader.bool();
                        break;
                    }
                case 2: {
                        if (!(message.signatures && message.signatures.length))
                            message.signatures = [];
                        message.signatures.push($root.editor.SignatureItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.activeParameter = reader.int32();
                        break;
                    }
                case 4: {
                        message.activeSignature = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignatureHelpReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.SignatureHelpReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.SignatureHelpReply} SignatureHelpReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureHelpReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignatureHelpReply message.
         * @function verify
         * @memberof editor.SignatureHelpReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignatureHelpReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hasHelp != null && message.hasOwnProperty("hasHelp"))
                if (typeof message.hasHelp !== "boolean")
                    return "hasHelp: boolean expected";
            if (message.signatures != null && message.hasOwnProperty("signatures")) {
                if (!Array.isArray(message.signatures))
                    return "signatures: array expected";
                for (let i = 0; i < message.signatures.length; ++i) {
                    let error = $root.editor.SignatureItem.verify(message.signatures[i]);
                    if (error)
                        return "signatures." + error;
                }
            }
            if (message.activeParameter != null && message.hasOwnProperty("activeParameter"))
                if (!$util.isInteger(message.activeParameter))
                    return "activeParameter: integer expected";
            if (message.activeSignature != null && message.hasOwnProperty("activeSignature"))
                if (!$util.isInteger(message.activeSignature))
                    return "activeSignature: integer expected";
            return null;
        };

        /**
         * Creates a SignatureHelpReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.SignatureHelpReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.SignatureHelpReply} SignatureHelpReply
         */
        SignatureHelpReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.SignatureHelpReply)
                return object;
            let message = new $root.editor.SignatureHelpReply();
            if (object.hasHelp != null)
                message.hasHelp = Boolean(object.hasHelp);
            if (object.signatures) {
                if (!Array.isArray(object.signatures))
                    throw TypeError(".editor.SignatureHelpReply.signatures: array expected");
                message.signatures = [];
                for (let i = 0; i < object.signatures.length; ++i) {
                    if (typeof object.signatures[i] !== "object")
                        throw TypeError(".editor.SignatureHelpReply.signatures: object expected");
                    message.signatures[i] = $root.editor.SignatureItem.fromObject(object.signatures[i]);
                }
            }
            if (object.activeParameter != null)
                message.activeParameter = object.activeParameter | 0;
            if (object.activeSignature != null)
                message.activeSignature = object.activeSignature | 0;
            return message;
        };

        /**
         * Creates a plain object from a SignatureHelpReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.SignatureHelpReply
         * @static
         * @param {editor.SignatureHelpReply} message SignatureHelpReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignatureHelpReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.signatures = [];
            if (options.defaults) {
                object.hasHelp = false;
                object.activeParameter = 0;
                object.activeSignature = 0;
            }
            if (message.hasHelp != null && message.hasOwnProperty("hasHelp"))
                object.hasHelp = message.hasHelp;
            if (message.signatures && message.signatures.length) {
                object.signatures = [];
                for (let j = 0; j < message.signatures.length; ++j)
                    object.signatures[j] = $root.editor.SignatureItem.toObject(message.signatures[j], options);
            }
            if (message.activeParameter != null && message.hasOwnProperty("activeParameter"))
                object.activeParameter = message.activeParameter;
            if (message.activeSignature != null && message.hasOwnProperty("activeSignature"))
                object.activeSignature = message.activeSignature;
            return object;
        };

        /**
         * Converts this SignatureHelpReply to JSON.
         * @function toJSON
         * @memberof editor.SignatureHelpReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignatureHelpReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignatureHelpReply
         * @function getTypeUrl
         * @memberof editor.SignatureHelpReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignatureHelpReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.SignatureHelpReply";
        };

        return SignatureHelpReply;
    })();

    editor.SignatureItem = (function() {

        /**
         * Properties of a SignatureItem.
         * @memberof editor
         * @interface ISignatureItem
         * @property {string|null} [label] SignatureItem label
         * @property {string|null} [documentation] SignatureItem documentation
         * @property {Array.<editor.IParameterItem>|null} [parameters] SignatureItem parameters
         */

        /**
         * Constructs a new SignatureItem.
         * @memberof editor
         * @classdesc Represents a SignatureItem.
         * @implements ISignatureItem
         * @constructor
         * @param {editor.ISignatureItem=} [properties] Properties to set
         */
        function SignatureItem(properties) {
            this.parameters = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignatureItem label.
         * @member {string} label
         * @memberof editor.SignatureItem
         * @instance
         */
        SignatureItem.prototype.label = "";

        /**
         * SignatureItem documentation.
         * @member {string} documentation
         * @memberof editor.SignatureItem
         * @instance
         */
        SignatureItem.prototype.documentation = "";

        /**
         * SignatureItem parameters.
         * @member {Array.<editor.IParameterItem>} parameters
         * @memberof editor.SignatureItem
         * @instance
         */
        SignatureItem.prototype.parameters = $util.emptyArray;

        /**
         * Creates a new SignatureItem instance using the specified properties.
         * @function create
         * @memberof editor.SignatureItem
         * @static
         * @param {editor.ISignatureItem=} [properties] Properties to set
         * @returns {editor.SignatureItem} SignatureItem instance
         */
        SignatureItem.create = function create(properties) {
            return new SignatureItem(properties);
        };

        /**
         * Encodes the specified SignatureItem message. Does not implicitly {@link editor.SignatureItem.verify|verify} messages.
         * @function encode
         * @memberof editor.SignatureItem
         * @static
         * @param {editor.ISignatureItem} message SignatureItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
            if (message.documentation != null && Object.hasOwnProperty.call(message, "documentation"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.documentation);
            if (message.parameters != null && message.parameters.length)
                for (let i = 0; i < message.parameters.length; ++i)
                    $root.editor.ParameterItem.encode(message.parameters[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SignatureItem message, length delimited. Does not implicitly {@link editor.SignatureItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.SignatureItem
         * @static
         * @param {editor.ISignatureItem} message SignatureItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignatureItem message from the specified reader or buffer.
         * @function decode
         * @memberof editor.SignatureItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.SignatureItem} SignatureItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.SignatureItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.label = reader.string();
                        break;
                    }
                case 2: {
                        message.documentation = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.parameters && message.parameters.length))
                            message.parameters = [];
                        message.parameters.push($root.editor.ParameterItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignatureItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.SignatureItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.SignatureItem} SignatureItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignatureItem message.
         * @function verify
         * @memberof editor.SignatureItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignatureItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.documentation != null && message.hasOwnProperty("documentation"))
                if (!$util.isString(message.documentation))
                    return "documentation: string expected";
            if (message.parameters != null && message.hasOwnProperty("parameters")) {
                if (!Array.isArray(message.parameters))
                    return "parameters: array expected";
                for (let i = 0; i < message.parameters.length; ++i) {
                    let error = $root.editor.ParameterItem.verify(message.parameters[i]);
                    if (error)
                        return "parameters." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SignatureItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.SignatureItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.SignatureItem} SignatureItem
         */
        SignatureItem.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.SignatureItem)
                return object;
            let message = new $root.editor.SignatureItem();
            if (object.label != null)
                message.label = String(object.label);
            if (object.documentation != null)
                message.documentation = String(object.documentation);
            if (object.parameters) {
                if (!Array.isArray(object.parameters))
                    throw TypeError(".editor.SignatureItem.parameters: array expected");
                message.parameters = [];
                for (let i = 0; i < object.parameters.length; ++i) {
                    if (typeof object.parameters[i] !== "object")
                        throw TypeError(".editor.SignatureItem.parameters: object expected");
                    message.parameters[i] = $root.editor.ParameterItem.fromObject(object.parameters[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SignatureItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.SignatureItem
         * @static
         * @param {editor.SignatureItem} message SignatureItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignatureItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.parameters = [];
            if (options.defaults) {
                object.label = "";
                object.documentation = "";
            }
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.documentation != null && message.hasOwnProperty("documentation"))
                object.documentation = message.documentation;
            if (message.parameters && message.parameters.length) {
                object.parameters = [];
                for (let j = 0; j < message.parameters.length; ++j)
                    object.parameters[j] = $root.editor.ParameterItem.toObject(message.parameters[j], options);
            }
            return object;
        };

        /**
         * Converts this SignatureItem to JSON.
         * @function toJSON
         * @memberof editor.SignatureItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignatureItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignatureItem
         * @function getTypeUrl
         * @memberof editor.SignatureItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignatureItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.SignatureItem";
        };

        return SignatureItem;
    })();

    editor.ParameterItem = (function() {

        /**
         * Properties of a ParameterItem.
         * @memberof editor
         * @interface IParameterItem
         * @property {string|null} [label] ParameterItem label
         * @property {string|null} [documentation] ParameterItem documentation
         */

        /**
         * Constructs a new ParameterItem.
         * @memberof editor
         * @classdesc Represents a ParameterItem.
         * @implements IParameterItem
         * @constructor
         * @param {editor.IParameterItem=} [properties] Properties to set
         */
        function ParameterItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParameterItem label.
         * @member {string} label
         * @memberof editor.ParameterItem
         * @instance
         */
        ParameterItem.prototype.label = "";

        /**
         * ParameterItem documentation.
         * @member {string} documentation
         * @memberof editor.ParameterItem
         * @instance
         */
        ParameterItem.prototype.documentation = "";

        /**
         * Creates a new ParameterItem instance using the specified properties.
         * @function create
         * @memberof editor.ParameterItem
         * @static
         * @param {editor.IParameterItem=} [properties] Properties to set
         * @returns {editor.ParameterItem} ParameterItem instance
         */
        ParameterItem.create = function create(properties) {
            return new ParameterItem(properties);
        };

        /**
         * Encodes the specified ParameterItem message. Does not implicitly {@link editor.ParameterItem.verify|verify} messages.
         * @function encode
         * @memberof editor.ParameterItem
         * @static
         * @param {editor.IParameterItem} message ParameterItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParameterItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
            if (message.documentation != null && Object.hasOwnProperty.call(message, "documentation"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.documentation);
            return writer;
        };

        /**
         * Encodes the specified ParameterItem message, length delimited. Does not implicitly {@link editor.ParameterItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.ParameterItem
         * @static
         * @param {editor.IParameterItem} message ParameterItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParameterItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParameterItem message from the specified reader or buffer.
         * @function decode
         * @memberof editor.ParameterItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.ParameterItem} ParameterItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParameterItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.ParameterItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.label = reader.string();
                        break;
                    }
                case 2: {
                        message.documentation = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParameterItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.ParameterItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.ParameterItem} ParameterItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParameterItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParameterItem message.
         * @function verify
         * @memberof editor.ParameterItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParameterItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.documentation != null && message.hasOwnProperty("documentation"))
                if (!$util.isString(message.documentation))
                    return "documentation: string expected";
            return null;
        };

        /**
         * Creates a ParameterItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.ParameterItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.ParameterItem} ParameterItem
         */
        ParameterItem.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.ParameterItem)
                return object;
            let message = new $root.editor.ParameterItem();
            if (object.label != null)
                message.label = String(object.label);
            if (object.documentation != null)
                message.documentation = String(object.documentation);
            return message;
        };

        /**
         * Creates a plain object from a ParameterItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.ParameterItem
         * @static
         * @param {editor.ParameterItem} message ParameterItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParameterItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.label = "";
                object.documentation = "";
            }
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.documentation != null && message.hasOwnProperty("documentation"))
                object.documentation = message.documentation;
            return object;
        };

        /**
         * Converts this ParameterItem to JSON.
         * @function toJSON
         * @memberof editor.ParameterItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParameterItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ParameterItem
         * @function getTypeUrl
         * @memberof editor.ParameterItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ParameterItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.ParameterItem";
        };

        return ParameterItem;
    })();

    editor.DefinitionRequest = (function() {

        /**
         * Properties of a DefinitionRequest.
         * @memberof editor
         * @interface IDefinitionRequest
         * @property {string|null} [code] DefinitionRequest code
         * @property {number|null} [position] DefinitionRequest position
         * @property {Array.<editor.ISourceFile>|null} [extraFiles] DefinitionRequest extraFiles
         */

        /**
         * Constructs a new DefinitionRequest.
         * @memberof editor
         * @classdesc Represents a DefinitionRequest.
         * @implements IDefinitionRequest
         * @constructor
         * @param {editor.IDefinitionRequest=} [properties] Properties to set
         */
        function DefinitionRequest(properties) {
            this.extraFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DefinitionRequest code.
         * @member {string} code
         * @memberof editor.DefinitionRequest
         * @instance
         */
        DefinitionRequest.prototype.code = "";

        /**
         * DefinitionRequest position.
         * @member {number} position
         * @memberof editor.DefinitionRequest
         * @instance
         */
        DefinitionRequest.prototype.position = 0;

        /**
         * DefinitionRequest extraFiles.
         * @member {Array.<editor.ISourceFile>} extraFiles
         * @memberof editor.DefinitionRequest
         * @instance
         */
        DefinitionRequest.prototype.extraFiles = $util.emptyArray;

        /**
         * Creates a new DefinitionRequest instance using the specified properties.
         * @function create
         * @memberof editor.DefinitionRequest
         * @static
         * @param {editor.IDefinitionRequest=} [properties] Properties to set
         * @returns {editor.DefinitionRequest} DefinitionRequest instance
         */
        DefinitionRequest.create = function create(properties) {
            return new DefinitionRequest(properties);
        };

        /**
         * Encodes the specified DefinitionRequest message. Does not implicitly {@link editor.DefinitionRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.DefinitionRequest
         * @static
         * @param {editor.IDefinitionRequest} message DefinitionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefinitionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.position);
            if (message.extraFiles != null && message.extraFiles.length)
                for (let i = 0; i < message.extraFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.extraFiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DefinitionRequest message, length delimited. Does not implicitly {@link editor.DefinitionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.DefinitionRequest
         * @static
         * @param {editor.IDefinitionRequest} message DefinitionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefinitionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DefinitionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.DefinitionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.DefinitionRequest} DefinitionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefinitionRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.DefinitionRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.position = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.extraFiles && message.extraFiles.length))
                            message.extraFiles = [];
                        message.extraFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DefinitionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.DefinitionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.DefinitionRequest} DefinitionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefinitionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DefinitionRequest message.
         * @function verify
         * @memberof editor.DefinitionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DefinitionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.extraFiles != null && message.hasOwnProperty("extraFiles")) {
                if (!Array.isArray(message.extraFiles))
                    return "extraFiles: array expected";
                for (let i = 0; i < message.extraFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.extraFiles[i]);
                    if (error)
                        return "extraFiles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DefinitionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.DefinitionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.DefinitionRequest} DefinitionRequest
         */
        DefinitionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.DefinitionRequest)
                return object;
            let message = new $root.editor.DefinitionRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.extraFiles) {
                if (!Array.isArray(object.extraFiles))
                    throw TypeError(".editor.DefinitionRequest.extraFiles: array expected");
                message.extraFiles = [];
                for (let i = 0; i < object.extraFiles.length; ++i) {
                    if (typeof object.extraFiles[i] !== "object")
                        throw TypeError(".editor.DefinitionRequest.extraFiles: object expected");
                    message.extraFiles[i] = $root.editor.SourceFile.fromObject(object.extraFiles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DefinitionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.DefinitionRequest
         * @static
         * @param {editor.DefinitionRequest} message DefinitionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DefinitionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.extraFiles = [];
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.extraFiles && message.extraFiles.length) {
                object.extraFiles = [];
                for (let j = 0; j < message.extraFiles.length; ++j)
                    object.extraFiles[j] = $root.editor.SourceFile.toObject(message.extraFiles[j], options);
            }
            return object;
        };

        /**
         * Converts this DefinitionRequest to JSON.
         * @function toJSON
         * @memberof editor.DefinitionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DefinitionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DefinitionRequest
         * @function getTypeUrl
         * @memberof editor.DefinitionRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DefinitionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.DefinitionRequest";
        };

        return DefinitionRequest;
    })();

    editor.DefinitionReply = (function() {

        /**
         * Properties of a DefinitionReply.
         * @memberof editor
         * @interface IDefinitionReply
         * @property {boolean|null} [hasDefinition] DefinitionReply hasDefinition
         * @property {string|null} [filePath] DefinitionReply filePath
         * @property {number|null} [line] DefinitionReply line
         * @property {number|null} [column] DefinitionReply column
         */

        /**
         * Constructs a new DefinitionReply.
         * @memberof editor
         * @classdesc Represents a DefinitionReply.
         * @implements IDefinitionReply
         * @constructor
         * @param {editor.IDefinitionReply=} [properties] Properties to set
         */
        function DefinitionReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DefinitionReply hasDefinition.
         * @member {boolean} hasDefinition
         * @memberof editor.DefinitionReply
         * @instance
         */
        DefinitionReply.prototype.hasDefinition = false;

        /**
         * DefinitionReply filePath.
         * @member {string} filePath
         * @memberof editor.DefinitionReply
         * @instance
         */
        DefinitionReply.prototype.filePath = "";

        /**
         * DefinitionReply line.
         * @member {number} line
         * @memberof editor.DefinitionReply
         * @instance
         */
        DefinitionReply.prototype.line = 0;

        /**
         * DefinitionReply column.
         * @member {number} column
         * @memberof editor.DefinitionReply
         * @instance
         */
        DefinitionReply.prototype.column = 0;

        /**
         * Creates a new DefinitionReply instance using the specified properties.
         * @function create
         * @memberof editor.DefinitionReply
         * @static
         * @param {editor.IDefinitionReply=} [properties] Properties to set
         * @returns {editor.DefinitionReply} DefinitionReply instance
         */
        DefinitionReply.create = function create(properties) {
            return new DefinitionReply(properties);
        };

        /**
         * Encodes the specified DefinitionReply message. Does not implicitly {@link editor.DefinitionReply.verify|verify} messages.
         * @function encode
         * @memberof editor.DefinitionReply
         * @static
         * @param {editor.IDefinitionReply} message DefinitionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefinitionReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hasDefinition != null && Object.hasOwnProperty.call(message, "hasDefinition"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hasDefinition);
            if (message.filePath != null && Object.hasOwnProperty.call(message, "filePath"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.filePath);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.line);
            if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.column);
            return writer;
        };

        /**
         * Encodes the specified DefinitionReply message, length delimited. Does not implicitly {@link editor.DefinitionReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.DefinitionReply
         * @static
         * @param {editor.IDefinitionReply} message DefinitionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefinitionReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DefinitionReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.DefinitionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.DefinitionReply} DefinitionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefinitionReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.DefinitionReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.hasDefinition = reader.bool();
                        break;
                    }
                case 2: {
                        message.filePath = reader.string();
                        break;
                    }
                case 3: {
                        message.line = reader.int32();
                        break;
                    }
                case 4: {
                        message.column = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DefinitionReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.DefinitionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.DefinitionReply} DefinitionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefinitionReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DefinitionReply message.
         * @function verify
         * @memberof editor.DefinitionReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DefinitionReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hasDefinition != null && message.hasOwnProperty("hasDefinition"))
                if (typeof message.hasDefinition !== "boolean")
                    return "hasDefinition: boolean expected";
            if (message.filePath != null && message.hasOwnProperty("filePath"))
                if (!$util.isString(message.filePath))
                    return "filePath: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.column != null && message.hasOwnProperty("column"))
                if (!$util.isInteger(message.column))
                    return "column: integer expected";
            return null;
        };

        /**
         * Creates a DefinitionReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.DefinitionReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.DefinitionReply} DefinitionReply
         */
        DefinitionReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.DefinitionReply)
                return object;
            let message = new $root.editor.DefinitionReply();
            if (object.hasDefinition != null)
                message.hasDefinition = Boolean(object.hasDefinition);
            if (object.filePath != null)
                message.filePath = String(object.filePath);
            if (object.line != null)
                message.line = object.line | 0;
            if (object.column != null)
                message.column = object.column | 0;
            return message;
        };

        /**
         * Creates a plain object from a DefinitionReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.DefinitionReply
         * @static
         * @param {editor.DefinitionReply} message DefinitionReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DefinitionReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.hasDefinition = false;
                object.filePath = "";
                object.line = 0;
                object.column = 0;
            }
            if (message.hasDefinition != null && message.hasOwnProperty("hasDefinition"))
                object.hasDefinition = message.hasDefinition;
            if (message.filePath != null && message.hasOwnProperty("filePath"))
                object.filePath = message.filePath;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.column != null && message.hasOwnProperty("column"))
                object.column = message.column;
            return object;
        };

        /**
         * Converts this DefinitionReply to JSON.
         * @function toJSON
         * @memberof editor.DefinitionReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DefinitionReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DefinitionReply
         * @function getTypeUrl
         * @memberof editor.DefinitionReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DefinitionReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.DefinitionReply";
        };

        return DefinitionReply;
    })();

    editor.SemanticTokensRequest = (function() {

        /**
         * Properties of a SemanticTokensRequest.
         * @memberof editor
         * @interface ISemanticTokensRequest
         * @property {string|null} [code] SemanticTokensRequest code
         * @property {Array.<editor.ISourceFile>|null} [extraFiles] SemanticTokensRequest extraFiles
         */

        /**
         * Constructs a new SemanticTokensRequest.
         * @memberof editor
         * @classdesc Represents a SemanticTokensRequest.
         * @implements ISemanticTokensRequest
         * @constructor
         * @param {editor.ISemanticTokensRequest=} [properties] Properties to set
         */
        function SemanticTokensRequest(properties) {
            this.extraFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SemanticTokensRequest code.
         * @member {string} code
         * @memberof editor.SemanticTokensRequest
         * @instance
         */
        SemanticTokensRequest.prototype.code = "";

        /**
         * SemanticTokensRequest extraFiles.
         * @member {Array.<editor.ISourceFile>} extraFiles
         * @memberof editor.SemanticTokensRequest
         * @instance
         */
        SemanticTokensRequest.prototype.extraFiles = $util.emptyArray;

        /**
         * Creates a new SemanticTokensRequest instance using the specified properties.
         * @function create
         * @memberof editor.SemanticTokensRequest
         * @static
         * @param {editor.ISemanticTokensRequest=} [properties] Properties to set
         * @returns {editor.SemanticTokensRequest} SemanticTokensRequest instance
         */
        SemanticTokensRequest.create = function create(properties) {
            return new SemanticTokensRequest(properties);
        };

        /**
         * Encodes the specified SemanticTokensRequest message. Does not implicitly {@link editor.SemanticTokensRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.SemanticTokensRequest
         * @static
         * @param {editor.ISemanticTokensRequest} message SemanticTokensRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SemanticTokensRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.extraFiles != null && message.extraFiles.length)
                for (let i = 0; i < message.extraFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.extraFiles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SemanticTokensRequest message, length delimited. Does not implicitly {@link editor.SemanticTokensRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.SemanticTokensRequest
         * @static
         * @param {editor.ISemanticTokensRequest} message SemanticTokensRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SemanticTokensRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SemanticTokensRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.SemanticTokensRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.SemanticTokensRequest} SemanticTokensRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SemanticTokensRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.SemanticTokensRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.extraFiles && message.extraFiles.length))
                            message.extraFiles = [];
                        message.extraFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SemanticTokensRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.SemanticTokensRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.SemanticTokensRequest} SemanticTokensRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SemanticTokensRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SemanticTokensRequest message.
         * @function verify
         * @memberof editor.SemanticTokensRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SemanticTokensRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.extraFiles != null && message.hasOwnProperty("extraFiles")) {
                if (!Array.isArray(message.extraFiles))
                    return "extraFiles: array expected";
                for (let i = 0; i < message.extraFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.extraFiles[i]);
                    if (error)
                        return "extraFiles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SemanticTokensRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.SemanticTokensRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.SemanticTokensRequest} SemanticTokensRequest
         */
        SemanticTokensRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.SemanticTokensRequest)
                return object;
            let message = new $root.editor.SemanticTokensRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.extraFiles) {
                if (!Array.isArray(object.extraFiles))
                    throw TypeError(".editor.SemanticTokensRequest.extraFiles: array expected");
                message.extraFiles = [];
                for (let i = 0; i < object.extraFiles.length; ++i) {
                    if (typeof object.extraFiles[i] !== "object")
                        throw TypeError(".editor.SemanticTokensRequest.extraFiles: object expected");
                    message.extraFiles[i] = $root.editor.SourceFile.fromObject(object.extraFiles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SemanticTokensRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.SemanticTokensRequest
         * @static
         * @param {editor.SemanticTokensRequest} message SemanticTokensRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SemanticTokensRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.extraFiles = [];
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.extraFiles && message.extraFiles.length) {
                object.extraFiles = [];
                for (let j = 0; j < message.extraFiles.length; ++j)
                    object.extraFiles[j] = $root.editor.SourceFile.toObject(message.extraFiles[j], options);
            }
            return object;
        };

        /**
         * Converts this SemanticTokensRequest to JSON.
         * @function toJSON
         * @memberof editor.SemanticTokensRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SemanticTokensRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SemanticTokensRequest
         * @function getTypeUrl
         * @memberof editor.SemanticTokensRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SemanticTokensRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.SemanticTokensRequest";
        };

        return SemanticTokensRequest;
    })();

    editor.SemanticTokensReply = (function() {

        /**
         * Properties of a SemanticTokensReply.
         * @memberof editor
         * @interface ISemanticTokensReply
         * @property {Array.<number>|null} [data] SemanticTokensReply data
         */

        /**
         * Constructs a new SemanticTokensReply.
         * @memberof editor
         * @classdesc Represents a SemanticTokensReply.
         * @implements ISemanticTokensReply
         * @constructor
         * @param {editor.ISemanticTokensReply=} [properties] Properties to set
         */
        function SemanticTokensReply(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SemanticTokensReply data.
         * @member {Array.<number>} data
         * @memberof editor.SemanticTokensReply
         * @instance
         */
        SemanticTokensReply.prototype.data = $util.emptyArray;

        /**
         * Creates a new SemanticTokensReply instance using the specified properties.
         * @function create
         * @memberof editor.SemanticTokensReply
         * @static
         * @param {editor.ISemanticTokensReply=} [properties] Properties to set
         * @returns {editor.SemanticTokensReply} SemanticTokensReply instance
         */
        SemanticTokensReply.create = function create(properties) {
            return new SemanticTokensReply(properties);
        };

        /**
         * Encodes the specified SemanticTokensReply message. Does not implicitly {@link editor.SemanticTokensReply.verify|verify} messages.
         * @function encode
         * @memberof editor.SemanticTokensReply
         * @static
         * @param {editor.ISemanticTokensReply} message SemanticTokensReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SemanticTokensReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.data.length; ++i)
                    writer.int32(message.data[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified SemanticTokensReply message, length delimited. Does not implicitly {@link editor.SemanticTokensReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.SemanticTokensReply
         * @static
         * @param {editor.ISemanticTokensReply} message SemanticTokensReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SemanticTokensReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SemanticTokensReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.SemanticTokensReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.SemanticTokensReply} SemanticTokensReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SemanticTokensReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.SemanticTokensReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.data && message.data.length))
                            message.data = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.data.push(reader.int32());
                        } else
                            message.data.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SemanticTokensReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.SemanticTokensReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.SemanticTokensReply} SemanticTokensReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SemanticTokensReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SemanticTokensReply message.
         * @function verify
         * @memberof editor.SemanticTokensReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SemanticTokensReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (let i = 0; i < message.data.length; ++i)
                    if (!$util.isInteger(message.data[i]))
                        return "data: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a SemanticTokensReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.SemanticTokensReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.SemanticTokensReply} SemanticTokensReply
         */
        SemanticTokensReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.SemanticTokensReply)
                return object;
            let message = new $root.editor.SemanticTokensReply();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".editor.SemanticTokensReply.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i)
                    message.data[i] = object.data[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a SemanticTokensReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.SemanticTokensReply
         * @static
         * @param {editor.SemanticTokensReply} message SemanticTokensReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SemanticTokensReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = message.data[j];
            }
            return object;
        };

        /**
         * Converts this SemanticTokensReply to JSON.
         * @function toJSON
         * @memberof editor.SemanticTokensReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SemanticTokensReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SemanticTokensReply
         * @function getTypeUrl
         * @memberof editor.SemanticTokensReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SemanticTokensReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.SemanticTokensReply";
        };

        return SemanticTokensReply;
    })();

    editor.FormatCodeRequest = (function() {

        /**
         * Properties of a FormatCodeRequest.
         * @memberof editor
         * @interface IFormatCodeRequest
         * @property {string|null} [code] FormatCodeRequest code
         */

        /**
         * Constructs a new FormatCodeRequest.
         * @memberof editor
         * @classdesc Represents a FormatCodeRequest.
         * @implements IFormatCodeRequest
         * @constructor
         * @param {editor.IFormatCodeRequest=} [properties] Properties to set
         */
        function FormatCodeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormatCodeRequest code.
         * @member {string} code
         * @memberof editor.FormatCodeRequest
         * @instance
         */
        FormatCodeRequest.prototype.code = "";

        /**
         * Creates a new FormatCodeRequest instance using the specified properties.
         * @function create
         * @memberof editor.FormatCodeRequest
         * @static
         * @param {editor.IFormatCodeRequest=} [properties] Properties to set
         * @returns {editor.FormatCodeRequest} FormatCodeRequest instance
         */
        FormatCodeRequest.create = function create(properties) {
            return new FormatCodeRequest(properties);
        };

        /**
         * Encodes the specified FormatCodeRequest message. Does not implicitly {@link editor.FormatCodeRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.FormatCodeRequest
         * @static
         * @param {editor.IFormatCodeRequest} message FormatCodeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormatCodeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified FormatCodeRequest message, length delimited. Does not implicitly {@link editor.FormatCodeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.FormatCodeRequest
         * @static
         * @param {editor.IFormatCodeRequest} message FormatCodeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormatCodeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FormatCodeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.FormatCodeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.FormatCodeRequest} FormatCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormatCodeRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.FormatCodeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FormatCodeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.FormatCodeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.FormatCodeRequest} FormatCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormatCodeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FormatCodeRequest message.
         * @function verify
         * @memberof editor.FormatCodeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FormatCodeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a FormatCodeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.FormatCodeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.FormatCodeRequest} FormatCodeRequest
         */
        FormatCodeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.FormatCodeRequest)
                return object;
            let message = new $root.editor.FormatCodeRequest();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a FormatCodeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.FormatCodeRequest
         * @static
         * @param {editor.FormatCodeRequest} message FormatCodeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FormatCodeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this FormatCodeRequest to JSON.
         * @function toJSON
         * @memberof editor.FormatCodeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FormatCodeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FormatCodeRequest
         * @function getTypeUrl
         * @memberof editor.FormatCodeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FormatCodeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.FormatCodeRequest";
        };

        return FormatCodeRequest;
    })();

    editor.FormatCodeReply = (function() {

        /**
         * Properties of a FormatCodeReply.
         * @memberof editor
         * @interface IFormatCodeReply
         * @property {string|null} [formattedCode] FormatCodeReply formattedCode
         */

        /**
         * Constructs a new FormatCodeReply.
         * @memberof editor
         * @classdesc Represents a FormatCodeReply.
         * @implements IFormatCodeReply
         * @constructor
         * @param {editor.IFormatCodeReply=} [properties] Properties to set
         */
        function FormatCodeReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormatCodeReply formattedCode.
         * @member {string} formattedCode
         * @memberof editor.FormatCodeReply
         * @instance
         */
        FormatCodeReply.prototype.formattedCode = "";

        /**
         * Creates a new FormatCodeReply instance using the specified properties.
         * @function create
         * @memberof editor.FormatCodeReply
         * @static
         * @param {editor.IFormatCodeReply=} [properties] Properties to set
         * @returns {editor.FormatCodeReply} FormatCodeReply instance
         */
        FormatCodeReply.create = function create(properties) {
            return new FormatCodeReply(properties);
        };

        /**
         * Encodes the specified FormatCodeReply message. Does not implicitly {@link editor.FormatCodeReply.verify|verify} messages.
         * @function encode
         * @memberof editor.FormatCodeReply
         * @static
         * @param {editor.IFormatCodeReply} message FormatCodeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormatCodeReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.formattedCode != null && Object.hasOwnProperty.call(message, "formattedCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.formattedCode);
            return writer;
        };

        /**
         * Encodes the specified FormatCodeReply message, length delimited. Does not implicitly {@link editor.FormatCodeReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.FormatCodeReply
         * @static
         * @param {editor.IFormatCodeReply} message FormatCodeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormatCodeReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FormatCodeReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.FormatCodeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.FormatCodeReply} FormatCodeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormatCodeReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.FormatCodeReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.formattedCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FormatCodeReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.FormatCodeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.FormatCodeReply} FormatCodeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormatCodeReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FormatCodeReply message.
         * @function verify
         * @memberof editor.FormatCodeReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FormatCodeReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.formattedCode != null && message.hasOwnProperty("formattedCode"))
                if (!$util.isString(message.formattedCode))
                    return "formattedCode: string expected";
            return null;
        };

        /**
         * Creates a FormatCodeReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.FormatCodeReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.FormatCodeReply} FormatCodeReply
         */
        FormatCodeReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.FormatCodeReply)
                return object;
            let message = new $root.editor.FormatCodeReply();
            if (object.formattedCode != null)
                message.formattedCode = String(object.formattedCode);
            return message;
        };

        /**
         * Creates a plain object from a FormatCodeReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.FormatCodeReply
         * @static
         * @param {editor.FormatCodeReply} message FormatCodeReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FormatCodeReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.formattedCode = "";
            if (message.formattedCode != null && message.hasOwnProperty("formattedCode"))
                object.formattedCode = message.formattedCode;
            return object;
        };

        /**
         * Converts this FormatCodeReply to JSON.
         * @function toJSON
         * @memberof editor.FormatCodeReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FormatCodeReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FormatCodeReply
         * @function getTypeUrl
         * @memberof editor.FormatCodeReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FormatCodeReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.FormatCodeReply";
        };

        return FormatCodeReply;
    })();

    editor.DiagnosticsRequest = (function() {

        /**
         * Properties of a DiagnosticsRequest.
         * @memberof editor
         * @interface IDiagnosticsRequest
         * @property {string|null} [code] DiagnosticsRequest code
         * @property {Array.<editor.ISourceFile>|null} [extraFiles] DiagnosticsRequest extraFiles
         */

        /**
         * Constructs a new DiagnosticsRequest.
         * @memberof editor
         * @classdesc Represents a DiagnosticsRequest.
         * @implements IDiagnosticsRequest
         * @constructor
         * @param {editor.IDiagnosticsRequest=} [properties] Properties to set
         */
        function DiagnosticsRequest(properties) {
            this.extraFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiagnosticsRequest code.
         * @member {string} code
         * @memberof editor.DiagnosticsRequest
         * @instance
         */
        DiagnosticsRequest.prototype.code = "";

        /**
         * DiagnosticsRequest extraFiles.
         * @member {Array.<editor.ISourceFile>} extraFiles
         * @memberof editor.DiagnosticsRequest
         * @instance
         */
        DiagnosticsRequest.prototype.extraFiles = $util.emptyArray;

        /**
         * Creates a new DiagnosticsRequest instance using the specified properties.
         * @function create
         * @memberof editor.DiagnosticsRequest
         * @static
         * @param {editor.IDiagnosticsRequest=} [properties] Properties to set
         * @returns {editor.DiagnosticsRequest} DiagnosticsRequest instance
         */
        DiagnosticsRequest.create = function create(properties) {
            return new DiagnosticsRequest(properties);
        };

        /**
         * Encodes the specified DiagnosticsRequest message. Does not implicitly {@link editor.DiagnosticsRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.DiagnosticsRequest
         * @static
         * @param {editor.IDiagnosticsRequest} message DiagnosticsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiagnosticsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.extraFiles != null && message.extraFiles.length)
                for (let i = 0; i < message.extraFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.extraFiles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DiagnosticsRequest message, length delimited. Does not implicitly {@link editor.DiagnosticsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.DiagnosticsRequest
         * @static
         * @param {editor.IDiagnosticsRequest} message DiagnosticsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiagnosticsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiagnosticsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.DiagnosticsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.DiagnosticsRequest} DiagnosticsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiagnosticsRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.DiagnosticsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.extraFiles && message.extraFiles.length))
                            message.extraFiles = [];
                        message.extraFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiagnosticsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.DiagnosticsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.DiagnosticsRequest} DiagnosticsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiagnosticsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiagnosticsRequest message.
         * @function verify
         * @memberof editor.DiagnosticsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiagnosticsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.extraFiles != null && message.hasOwnProperty("extraFiles")) {
                if (!Array.isArray(message.extraFiles))
                    return "extraFiles: array expected";
                for (let i = 0; i < message.extraFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.extraFiles[i]);
                    if (error)
                        return "extraFiles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DiagnosticsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.DiagnosticsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.DiagnosticsRequest} DiagnosticsRequest
         */
        DiagnosticsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.DiagnosticsRequest)
                return object;
            let message = new $root.editor.DiagnosticsRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.extraFiles) {
                if (!Array.isArray(object.extraFiles))
                    throw TypeError(".editor.DiagnosticsRequest.extraFiles: array expected");
                message.extraFiles = [];
                for (let i = 0; i < object.extraFiles.length; ++i) {
                    if (typeof object.extraFiles[i] !== "object")
                        throw TypeError(".editor.DiagnosticsRequest.extraFiles: object expected");
                    message.extraFiles[i] = $root.editor.SourceFile.fromObject(object.extraFiles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DiagnosticsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.DiagnosticsRequest
         * @static
         * @param {editor.DiagnosticsRequest} message DiagnosticsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiagnosticsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.extraFiles = [];
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.extraFiles && message.extraFiles.length) {
                object.extraFiles = [];
                for (let j = 0; j < message.extraFiles.length; ++j)
                    object.extraFiles[j] = $root.editor.SourceFile.toObject(message.extraFiles[j], options);
            }
            return object;
        };

        /**
         * Converts this DiagnosticsRequest to JSON.
         * @function toJSON
         * @memberof editor.DiagnosticsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiagnosticsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DiagnosticsRequest
         * @function getTypeUrl
         * @memberof editor.DiagnosticsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiagnosticsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.DiagnosticsRequest";
        };

        return DiagnosticsRequest;
    })();

    editor.DiagnosticsReply = (function() {

        /**
         * Properties of a DiagnosticsReply.
         * @memberof editor
         * @interface IDiagnosticsReply
         * @property {Array.<editor.IDiagnosticItem>|null} [diagnostics] DiagnosticsReply diagnostics
         */

        /**
         * Constructs a new DiagnosticsReply.
         * @memberof editor
         * @classdesc Represents a DiagnosticsReply.
         * @implements IDiagnosticsReply
         * @constructor
         * @param {editor.IDiagnosticsReply=} [properties] Properties to set
         */
        function DiagnosticsReply(properties) {
            this.diagnostics = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiagnosticsReply diagnostics.
         * @member {Array.<editor.IDiagnosticItem>} diagnostics
         * @memberof editor.DiagnosticsReply
         * @instance
         */
        DiagnosticsReply.prototype.diagnostics = $util.emptyArray;

        /**
         * Creates a new DiagnosticsReply instance using the specified properties.
         * @function create
         * @memberof editor.DiagnosticsReply
         * @static
         * @param {editor.IDiagnosticsReply=} [properties] Properties to set
         * @returns {editor.DiagnosticsReply} DiagnosticsReply instance
         */
        DiagnosticsReply.create = function create(properties) {
            return new DiagnosticsReply(properties);
        };

        /**
         * Encodes the specified DiagnosticsReply message. Does not implicitly {@link editor.DiagnosticsReply.verify|verify} messages.
         * @function encode
         * @memberof editor.DiagnosticsReply
         * @static
         * @param {editor.IDiagnosticsReply} message DiagnosticsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiagnosticsReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.diagnostics != null && message.diagnostics.length)
                for (let i = 0; i < message.diagnostics.length; ++i)
                    $root.editor.DiagnosticItem.encode(message.diagnostics[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DiagnosticsReply message, length delimited. Does not implicitly {@link editor.DiagnosticsReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.DiagnosticsReply
         * @static
         * @param {editor.IDiagnosticsReply} message DiagnosticsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiagnosticsReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiagnosticsReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.DiagnosticsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.DiagnosticsReply} DiagnosticsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiagnosticsReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.DiagnosticsReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.diagnostics && message.diagnostics.length))
                            message.diagnostics = [];
                        message.diagnostics.push($root.editor.DiagnosticItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiagnosticsReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.DiagnosticsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.DiagnosticsReply} DiagnosticsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiagnosticsReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiagnosticsReply message.
         * @function verify
         * @memberof editor.DiagnosticsReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiagnosticsReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.diagnostics != null && message.hasOwnProperty("diagnostics")) {
                if (!Array.isArray(message.diagnostics))
                    return "diagnostics: array expected";
                for (let i = 0; i < message.diagnostics.length; ++i) {
                    let error = $root.editor.DiagnosticItem.verify(message.diagnostics[i]);
                    if (error)
                        return "diagnostics." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DiagnosticsReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.DiagnosticsReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.DiagnosticsReply} DiagnosticsReply
         */
        DiagnosticsReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.DiagnosticsReply)
                return object;
            let message = new $root.editor.DiagnosticsReply();
            if (object.diagnostics) {
                if (!Array.isArray(object.diagnostics))
                    throw TypeError(".editor.DiagnosticsReply.diagnostics: array expected");
                message.diagnostics = [];
                for (let i = 0; i < object.diagnostics.length; ++i) {
                    if (typeof object.diagnostics[i] !== "object")
                        throw TypeError(".editor.DiagnosticsReply.diagnostics: object expected");
                    message.diagnostics[i] = $root.editor.DiagnosticItem.fromObject(object.diagnostics[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DiagnosticsReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.DiagnosticsReply
         * @static
         * @param {editor.DiagnosticsReply} message DiagnosticsReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiagnosticsReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.diagnostics = [];
            if (message.diagnostics && message.diagnostics.length) {
                object.diagnostics = [];
                for (let j = 0; j < message.diagnostics.length; ++j)
                    object.diagnostics[j] = $root.editor.DiagnosticItem.toObject(message.diagnostics[j], options);
            }
            return object;
        };

        /**
         * Converts this DiagnosticsReply to JSON.
         * @function toJSON
         * @memberof editor.DiagnosticsReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiagnosticsReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DiagnosticsReply
         * @function getTypeUrl
         * @memberof editor.DiagnosticsReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiagnosticsReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.DiagnosticsReply";
        };

        return DiagnosticsReply;
    })();

    editor.QuickFixRequest = (function() {

        /**
         * Properties of a QuickFixRequest.
         * @memberof editor
         * @interface IQuickFixRequest
         * @property {string|null} [code] QuickFixRequest code
         * @property {number|null} [position] QuickFixRequest position
         * @property {Array.<editor.ISourceFile>|null} [extraFiles] QuickFixRequest extraFiles
         */

        /**
         * Constructs a new QuickFixRequest.
         * @memberof editor
         * @classdesc Represents a QuickFixRequest.
         * @implements IQuickFixRequest
         * @constructor
         * @param {editor.IQuickFixRequest=} [properties] Properties to set
         */
        function QuickFixRequest(properties) {
            this.extraFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuickFixRequest code.
         * @member {string} code
         * @memberof editor.QuickFixRequest
         * @instance
         */
        QuickFixRequest.prototype.code = "";

        /**
         * QuickFixRequest position.
         * @member {number} position
         * @memberof editor.QuickFixRequest
         * @instance
         */
        QuickFixRequest.prototype.position = 0;

        /**
         * QuickFixRequest extraFiles.
         * @member {Array.<editor.ISourceFile>} extraFiles
         * @memberof editor.QuickFixRequest
         * @instance
         */
        QuickFixRequest.prototype.extraFiles = $util.emptyArray;

        /**
         * Creates a new QuickFixRequest instance using the specified properties.
         * @function create
         * @memberof editor.QuickFixRequest
         * @static
         * @param {editor.IQuickFixRequest=} [properties] Properties to set
         * @returns {editor.QuickFixRequest} QuickFixRequest instance
         */
        QuickFixRequest.create = function create(properties) {
            return new QuickFixRequest(properties);
        };

        /**
         * Encodes the specified QuickFixRequest message. Does not implicitly {@link editor.QuickFixRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.QuickFixRequest
         * @static
         * @param {editor.IQuickFixRequest} message QuickFixRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickFixRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.position);
            if (message.extraFiles != null && message.extraFiles.length)
                for (let i = 0; i < message.extraFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.extraFiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QuickFixRequest message, length delimited. Does not implicitly {@link editor.QuickFixRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.QuickFixRequest
         * @static
         * @param {editor.IQuickFixRequest} message QuickFixRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickFixRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuickFixRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.QuickFixRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.QuickFixRequest} QuickFixRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickFixRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.QuickFixRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.position = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.extraFiles && message.extraFiles.length))
                            message.extraFiles = [];
                        message.extraFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuickFixRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.QuickFixRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.QuickFixRequest} QuickFixRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickFixRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuickFixRequest message.
         * @function verify
         * @memberof editor.QuickFixRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuickFixRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.extraFiles != null && message.hasOwnProperty("extraFiles")) {
                if (!Array.isArray(message.extraFiles))
                    return "extraFiles: array expected";
                for (let i = 0; i < message.extraFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.extraFiles[i]);
                    if (error)
                        return "extraFiles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a QuickFixRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.QuickFixRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.QuickFixRequest} QuickFixRequest
         */
        QuickFixRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.QuickFixRequest)
                return object;
            let message = new $root.editor.QuickFixRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.extraFiles) {
                if (!Array.isArray(object.extraFiles))
                    throw TypeError(".editor.QuickFixRequest.extraFiles: array expected");
                message.extraFiles = [];
                for (let i = 0; i < object.extraFiles.length; ++i) {
                    if (typeof object.extraFiles[i] !== "object")
                        throw TypeError(".editor.QuickFixRequest.extraFiles: object expected");
                    message.extraFiles[i] = $root.editor.SourceFile.fromObject(object.extraFiles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a QuickFixRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.QuickFixRequest
         * @static
         * @param {editor.QuickFixRequest} message QuickFixRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuickFixRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.extraFiles = [];
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.extraFiles && message.extraFiles.length) {
                object.extraFiles = [];
                for (let j = 0; j < message.extraFiles.length; ++j)
                    object.extraFiles[j] = $root.editor.SourceFile.toObject(message.extraFiles[j], options);
            }
            return object;
        };

        /**
         * Converts this QuickFixRequest to JSON.
         * @function toJSON
         * @memberof editor.QuickFixRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuickFixRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for QuickFixRequest
         * @function getTypeUrl
         * @memberof editor.QuickFixRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        QuickFixRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.QuickFixRequest";
        };

        return QuickFixRequest;
    })();

    editor.QuickFixReply = (function() {

        /**
         * Properties of a QuickFixReply.
         * @memberof editor
         * @interface IQuickFixReply
         * @property {Array.<editor.IQuickFixItem>|null} [fixes] QuickFixReply fixes
         */

        /**
         * Constructs a new QuickFixReply.
         * @memberof editor
         * @classdesc Represents a QuickFixReply.
         * @implements IQuickFixReply
         * @constructor
         * @param {editor.IQuickFixReply=} [properties] Properties to set
         */
        function QuickFixReply(properties) {
            this.fixes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuickFixReply fixes.
         * @member {Array.<editor.IQuickFixItem>} fixes
         * @memberof editor.QuickFixReply
         * @instance
         */
        QuickFixReply.prototype.fixes = $util.emptyArray;

        /**
         * Creates a new QuickFixReply instance using the specified properties.
         * @function create
         * @memberof editor.QuickFixReply
         * @static
         * @param {editor.IQuickFixReply=} [properties] Properties to set
         * @returns {editor.QuickFixReply} QuickFixReply instance
         */
        QuickFixReply.create = function create(properties) {
            return new QuickFixReply(properties);
        };

        /**
         * Encodes the specified QuickFixReply message. Does not implicitly {@link editor.QuickFixReply.verify|verify} messages.
         * @function encode
         * @memberof editor.QuickFixReply
         * @static
         * @param {editor.IQuickFixReply} message QuickFixReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickFixReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fixes != null && message.fixes.length)
                for (let i = 0; i < message.fixes.length; ++i)
                    $root.editor.QuickFixItem.encode(message.fixes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QuickFixReply message, length delimited. Does not implicitly {@link editor.QuickFixReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.QuickFixReply
         * @static
         * @param {editor.IQuickFixReply} message QuickFixReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickFixReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuickFixReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.QuickFixReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.QuickFixReply} QuickFixReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickFixReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.QuickFixReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.fixes && message.fixes.length))
                            message.fixes = [];
                        message.fixes.push($root.editor.QuickFixItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuickFixReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.QuickFixReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.QuickFixReply} QuickFixReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickFixReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuickFixReply message.
         * @function verify
         * @memberof editor.QuickFixReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuickFixReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fixes != null && message.hasOwnProperty("fixes")) {
                if (!Array.isArray(message.fixes))
                    return "fixes: array expected";
                for (let i = 0; i < message.fixes.length; ++i) {
                    let error = $root.editor.QuickFixItem.verify(message.fixes[i]);
                    if (error)
                        return "fixes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a QuickFixReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.QuickFixReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.QuickFixReply} QuickFixReply
         */
        QuickFixReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.QuickFixReply)
                return object;
            let message = new $root.editor.QuickFixReply();
            if (object.fixes) {
                if (!Array.isArray(object.fixes))
                    throw TypeError(".editor.QuickFixReply.fixes: array expected");
                message.fixes = [];
                for (let i = 0; i < object.fixes.length; ++i) {
                    if (typeof object.fixes[i] !== "object")
                        throw TypeError(".editor.QuickFixReply.fixes: object expected");
                    message.fixes[i] = $root.editor.QuickFixItem.fromObject(object.fixes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a QuickFixReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.QuickFixReply
         * @static
         * @param {editor.QuickFixReply} message QuickFixReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuickFixReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.fixes = [];
            if (message.fixes && message.fixes.length) {
                object.fixes = [];
                for (let j = 0; j < message.fixes.length; ++j)
                    object.fixes[j] = $root.editor.QuickFixItem.toObject(message.fixes[j], options);
            }
            return object;
        };

        /**
         * Converts this QuickFixReply to JSON.
         * @function toJSON
         * @memberof editor.QuickFixReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuickFixReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for QuickFixReply
         * @function getTypeUrl
         * @memberof editor.QuickFixReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        QuickFixReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.QuickFixReply";
        };

        return QuickFixReply;
    })();

    editor.QuickFixItem = (function() {

        /**
         * Properties of a QuickFixItem.
         * @memberof editor
         * @interface IQuickFixItem
         * @property {string|null} [title] QuickFixItem title
         * @property {string|null} [newText] QuickFixItem newText
         * @property {number|null} [spanStart] QuickFixItem spanStart
         * @property {number|null} [spanLength] QuickFixItem spanLength
         */

        /**
         * Constructs a new QuickFixItem.
         * @memberof editor
         * @classdesc Represents a QuickFixItem.
         * @implements IQuickFixItem
         * @constructor
         * @param {editor.IQuickFixItem=} [properties] Properties to set
         */
        function QuickFixItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuickFixItem title.
         * @member {string} title
         * @memberof editor.QuickFixItem
         * @instance
         */
        QuickFixItem.prototype.title = "";

        /**
         * QuickFixItem newText.
         * @member {string} newText
         * @memberof editor.QuickFixItem
         * @instance
         */
        QuickFixItem.prototype.newText = "";

        /**
         * QuickFixItem spanStart.
         * @member {number} spanStart
         * @memberof editor.QuickFixItem
         * @instance
         */
        QuickFixItem.prototype.spanStart = 0;

        /**
         * QuickFixItem spanLength.
         * @member {number} spanLength
         * @memberof editor.QuickFixItem
         * @instance
         */
        QuickFixItem.prototype.spanLength = 0;

        /**
         * Creates a new QuickFixItem instance using the specified properties.
         * @function create
         * @memberof editor.QuickFixItem
         * @static
         * @param {editor.IQuickFixItem=} [properties] Properties to set
         * @returns {editor.QuickFixItem} QuickFixItem instance
         */
        QuickFixItem.create = function create(properties) {
            return new QuickFixItem(properties);
        };

        /**
         * Encodes the specified QuickFixItem message. Does not implicitly {@link editor.QuickFixItem.verify|verify} messages.
         * @function encode
         * @memberof editor.QuickFixItem
         * @static
         * @param {editor.IQuickFixItem} message QuickFixItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickFixItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.newText != null && Object.hasOwnProperty.call(message, "newText"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.newText);
            if (message.spanStart != null && Object.hasOwnProperty.call(message, "spanStart"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.spanStart);
            if (message.spanLength != null && Object.hasOwnProperty.call(message, "spanLength"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.spanLength);
            return writer;
        };

        /**
         * Encodes the specified QuickFixItem message, length delimited. Does not implicitly {@link editor.QuickFixItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.QuickFixItem
         * @static
         * @param {editor.IQuickFixItem} message QuickFixItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickFixItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuickFixItem message from the specified reader or buffer.
         * @function decode
         * @memberof editor.QuickFixItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.QuickFixItem} QuickFixItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickFixItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.QuickFixItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.title = reader.string();
                        break;
                    }
                case 2: {
                        message.newText = reader.string();
                        break;
                    }
                case 3: {
                        message.spanStart = reader.int32();
                        break;
                    }
                case 4: {
                        message.spanLength = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuickFixItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.QuickFixItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.QuickFixItem} QuickFixItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickFixItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuickFixItem message.
         * @function verify
         * @memberof editor.QuickFixItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuickFixItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.newText != null && message.hasOwnProperty("newText"))
                if (!$util.isString(message.newText))
                    return "newText: string expected";
            if (message.spanStart != null && message.hasOwnProperty("spanStart"))
                if (!$util.isInteger(message.spanStart))
                    return "spanStart: integer expected";
            if (message.spanLength != null && message.hasOwnProperty("spanLength"))
                if (!$util.isInteger(message.spanLength))
                    return "spanLength: integer expected";
            return null;
        };

        /**
         * Creates a QuickFixItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.QuickFixItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.QuickFixItem} QuickFixItem
         */
        QuickFixItem.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.QuickFixItem)
                return object;
            let message = new $root.editor.QuickFixItem();
            if (object.title != null)
                message.title = String(object.title);
            if (object.newText != null)
                message.newText = String(object.newText);
            if (object.spanStart != null)
                message.spanStart = object.spanStart | 0;
            if (object.spanLength != null)
                message.spanLength = object.spanLength | 0;
            return message;
        };

        /**
         * Creates a plain object from a QuickFixItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.QuickFixItem
         * @static
         * @param {editor.QuickFixItem} message QuickFixItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuickFixItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.title = "";
                object.newText = "";
                object.spanStart = 0;
                object.spanLength = 0;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.newText != null && message.hasOwnProperty("newText"))
                object.newText = message.newText;
            if (message.spanStart != null && message.hasOwnProperty("spanStart"))
                object.spanStart = message.spanStart;
            if (message.spanLength != null && message.hasOwnProperty("spanLength"))
                object.spanLength = message.spanLength;
            return object;
        };

        /**
         * Converts this QuickFixItem to JSON.
         * @function toJSON
         * @memberof editor.QuickFixItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuickFixItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for QuickFixItem
         * @function getTypeUrl
         * @memberof editor.QuickFixItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        QuickFixItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.QuickFixItem";
        };

        return QuickFixItem;
    })();

    editor.ExecuteCodeRequest = (function() {

        /**
         * Properties of an ExecuteCodeRequest.
         * @memberof editor
         * @interface IExecuteCodeRequest
         * @property {string|null} [code] ExecuteCodeRequest code
         * @property {string|null} [typeName] ExecuteCodeRequest typeName
         * @property {string|null} [methodName] ExecuteCodeRequest methodName
         * @property {Array.<editor.ISourceFile>|null} [extraFiles] ExecuteCodeRequest extraFiles
         * @property {string|null} [connectionId] ExecuteCodeRequest connectionId
         */

        /**
         * Constructs a new ExecuteCodeRequest.
         * @memberof editor
         * @classdesc Represents an ExecuteCodeRequest.
         * @implements IExecuteCodeRequest
         * @constructor
         * @param {editor.IExecuteCodeRequest=} [properties] Properties to set
         */
        function ExecuteCodeRequest(properties) {
            this.extraFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecuteCodeRequest code.
         * @member {string} code
         * @memberof editor.ExecuteCodeRequest
         * @instance
         */
        ExecuteCodeRequest.prototype.code = "";

        /**
         * ExecuteCodeRequest typeName.
         * @member {string} typeName
         * @memberof editor.ExecuteCodeRequest
         * @instance
         */
        ExecuteCodeRequest.prototype.typeName = "";

        /**
         * ExecuteCodeRequest methodName.
         * @member {string} methodName
         * @memberof editor.ExecuteCodeRequest
         * @instance
         */
        ExecuteCodeRequest.prototype.methodName = "";

        /**
         * ExecuteCodeRequest extraFiles.
         * @member {Array.<editor.ISourceFile>} extraFiles
         * @memberof editor.ExecuteCodeRequest
         * @instance
         */
        ExecuteCodeRequest.prototype.extraFiles = $util.emptyArray;

        /**
         * ExecuteCodeRequest connectionId.
         * @member {string} connectionId
         * @memberof editor.ExecuteCodeRequest
         * @instance
         */
        ExecuteCodeRequest.prototype.connectionId = "";

        /**
         * Creates a new ExecuteCodeRequest instance using the specified properties.
         * @function create
         * @memberof editor.ExecuteCodeRequest
         * @static
         * @param {editor.IExecuteCodeRequest=} [properties] Properties to set
         * @returns {editor.ExecuteCodeRequest} ExecuteCodeRequest instance
         */
        ExecuteCodeRequest.create = function create(properties) {
            return new ExecuteCodeRequest(properties);
        };

        /**
         * Encodes the specified ExecuteCodeRequest message. Does not implicitly {@link editor.ExecuteCodeRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.ExecuteCodeRequest
         * @static
         * @param {editor.IExecuteCodeRequest} message ExecuteCodeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecuteCodeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.typeName);
            if (message.methodName != null && Object.hasOwnProperty.call(message, "methodName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.methodName);
            if (message.extraFiles != null && message.extraFiles.length)
                for (let i = 0; i < message.extraFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.extraFiles[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.connectionId != null && Object.hasOwnProperty.call(message, "connectionId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.connectionId);
            return writer;
        };

        /**
         * Encodes the specified ExecuteCodeRequest message, length delimited. Does not implicitly {@link editor.ExecuteCodeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.ExecuteCodeRequest
         * @static
         * @param {editor.IExecuteCodeRequest} message ExecuteCodeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecuteCodeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExecuteCodeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.ExecuteCodeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.ExecuteCodeRequest} ExecuteCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecuteCodeRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.ExecuteCodeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.typeName = reader.string();
                        break;
                    }
                case 3: {
                        message.methodName = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.extraFiles && message.extraFiles.length))
                            message.extraFiles = [];
                        message.extraFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.connectionId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExecuteCodeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.ExecuteCodeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.ExecuteCodeRequest} ExecuteCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecuteCodeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExecuteCodeRequest message.
         * @function verify
         * @memberof editor.ExecuteCodeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExecuteCodeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.typeName != null && message.hasOwnProperty("typeName"))
                if (!$util.isString(message.typeName))
                    return "typeName: string expected";
            if (message.methodName != null && message.hasOwnProperty("methodName"))
                if (!$util.isString(message.methodName))
                    return "methodName: string expected";
            if (message.extraFiles != null && message.hasOwnProperty("extraFiles")) {
                if (!Array.isArray(message.extraFiles))
                    return "extraFiles: array expected";
                for (let i = 0; i < message.extraFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.extraFiles[i]);
                    if (error)
                        return "extraFiles." + error;
                }
            }
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                if (!$util.isString(message.connectionId))
                    return "connectionId: string expected";
            return null;
        };

        /**
         * Creates an ExecuteCodeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.ExecuteCodeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.ExecuteCodeRequest} ExecuteCodeRequest
         */
        ExecuteCodeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.ExecuteCodeRequest)
                return object;
            let message = new $root.editor.ExecuteCodeRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.typeName != null)
                message.typeName = String(object.typeName);
            if (object.methodName != null)
                message.methodName = String(object.methodName);
            if (object.extraFiles) {
                if (!Array.isArray(object.extraFiles))
                    throw TypeError(".editor.ExecuteCodeRequest.extraFiles: array expected");
                message.extraFiles = [];
                for (let i = 0; i < object.extraFiles.length; ++i) {
                    if (typeof object.extraFiles[i] !== "object")
                        throw TypeError(".editor.ExecuteCodeRequest.extraFiles: object expected");
                    message.extraFiles[i] = $root.editor.SourceFile.fromObject(object.extraFiles[i]);
                }
            }
            if (object.connectionId != null)
                message.connectionId = String(object.connectionId);
            return message;
        };

        /**
         * Creates a plain object from an ExecuteCodeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.ExecuteCodeRequest
         * @static
         * @param {editor.ExecuteCodeRequest} message ExecuteCodeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExecuteCodeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.extraFiles = [];
            if (options.defaults) {
                object.code = "";
                object.typeName = "";
                object.methodName = "";
                object.connectionId = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.typeName != null && message.hasOwnProperty("typeName"))
                object.typeName = message.typeName;
            if (message.methodName != null && message.hasOwnProperty("methodName"))
                object.methodName = message.methodName;
            if (message.extraFiles && message.extraFiles.length) {
                object.extraFiles = [];
                for (let j = 0; j < message.extraFiles.length; ++j)
                    object.extraFiles[j] = $root.editor.SourceFile.toObject(message.extraFiles[j], options);
            }
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                object.connectionId = message.connectionId;
            return object;
        };

        /**
         * Converts this ExecuteCodeRequest to JSON.
         * @function toJSON
         * @memberof editor.ExecuteCodeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExecuteCodeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExecuteCodeRequest
         * @function getTypeUrl
         * @memberof editor.ExecuteCodeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExecuteCodeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.ExecuteCodeRequest";
        };

        return ExecuteCodeRequest;
    })();

    editor.SourceFile = (function() {

        /**
         * Properties of a SourceFile.
         * @memberof editor
         * @interface ISourceFile
         * @property {string|null} [fileName] SourceFile fileName
         * @property {string|null} [content] SourceFile content
         */

        /**
         * Constructs a new SourceFile.
         * @memberof editor
         * @classdesc Represents a SourceFile.
         * @implements ISourceFile
         * @constructor
         * @param {editor.ISourceFile=} [properties] Properties to set
         */
        function SourceFile(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SourceFile fileName.
         * @member {string} fileName
         * @memberof editor.SourceFile
         * @instance
         */
        SourceFile.prototype.fileName = "";

        /**
         * SourceFile content.
         * @member {string} content
         * @memberof editor.SourceFile
         * @instance
         */
        SourceFile.prototype.content = "";

        /**
         * Creates a new SourceFile instance using the specified properties.
         * @function create
         * @memberof editor.SourceFile
         * @static
         * @param {editor.ISourceFile=} [properties] Properties to set
         * @returns {editor.SourceFile} SourceFile instance
         */
        SourceFile.create = function create(properties) {
            return new SourceFile(properties);
        };

        /**
         * Encodes the specified SourceFile message. Does not implicitly {@link editor.SourceFile.verify|verify} messages.
         * @function encode
         * @memberof editor.SourceFile
         * @static
         * @param {editor.ISourceFile} message SourceFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileName);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified SourceFile message, length delimited. Does not implicitly {@link editor.SourceFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.SourceFile
         * @static
         * @param {editor.ISourceFile} message SourceFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SourceFile message from the specified reader or buffer.
         * @function decode
         * @memberof editor.SourceFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.SourceFile} SourceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceFile.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.SourceFile();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fileName = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SourceFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.SourceFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.SourceFile} SourceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SourceFile message.
         * @function verify
         * @memberof editor.SourceFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SourceFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fileName != null && message.hasOwnProperty("fileName"))
                if (!$util.isString(message.fileName))
                    return "fileName: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a SourceFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.SourceFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.SourceFile} SourceFile
         */
        SourceFile.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.SourceFile)
                return object;
            let message = new $root.editor.SourceFile();
            if (object.fileName != null)
                message.fileName = String(object.fileName);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a SourceFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.SourceFile
         * @static
         * @param {editor.SourceFile} message SourceFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SourceFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fileName = "";
                object.content = "";
            }
            if (message.fileName != null && message.hasOwnProperty("fileName"))
                object.fileName = message.fileName;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this SourceFile to JSON.
         * @function toJSON
         * @memberof editor.SourceFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SourceFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SourceFile
         * @function getTypeUrl
         * @memberof editor.SourceFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SourceFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.SourceFile";
        };

        return SourceFile;
    })();

    editor.ExecuteCodeReply = (function() {

        /**
         * Properties of an ExecuteCodeReply.
         * @memberof editor
         * @interface IExecuteCodeReply
         * @property {boolean|null} [success] ExecuteCodeReply success
         * @property {string|null} [output] ExecuteCodeReply output
         * @property {string|null} [errorMessage] ExecuteCodeReply errorMessage
         * @property {Array.<editor.IDiagnosticItem>|null} [diagnostics] ExecuteCodeReply diagnostics
         * @property {string|null} [consoleOutput] ExecuteCodeReply consoleOutput
         */

        /**
         * Constructs a new ExecuteCodeReply.
         * @memberof editor
         * @classdesc Represents an ExecuteCodeReply.
         * @implements IExecuteCodeReply
         * @constructor
         * @param {editor.IExecuteCodeReply=} [properties] Properties to set
         */
        function ExecuteCodeReply(properties) {
            this.diagnostics = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecuteCodeReply success.
         * @member {boolean} success
         * @memberof editor.ExecuteCodeReply
         * @instance
         */
        ExecuteCodeReply.prototype.success = false;

        /**
         * ExecuteCodeReply output.
         * @member {string} output
         * @memberof editor.ExecuteCodeReply
         * @instance
         */
        ExecuteCodeReply.prototype.output = "";

        /**
         * ExecuteCodeReply errorMessage.
         * @member {string} errorMessage
         * @memberof editor.ExecuteCodeReply
         * @instance
         */
        ExecuteCodeReply.prototype.errorMessage = "";

        /**
         * ExecuteCodeReply diagnostics.
         * @member {Array.<editor.IDiagnosticItem>} diagnostics
         * @memberof editor.ExecuteCodeReply
         * @instance
         */
        ExecuteCodeReply.prototype.diagnostics = $util.emptyArray;

        /**
         * ExecuteCodeReply consoleOutput.
         * @member {string} consoleOutput
         * @memberof editor.ExecuteCodeReply
         * @instance
         */
        ExecuteCodeReply.prototype.consoleOutput = "";

        /**
         * Creates a new ExecuteCodeReply instance using the specified properties.
         * @function create
         * @memberof editor.ExecuteCodeReply
         * @static
         * @param {editor.IExecuteCodeReply=} [properties] Properties to set
         * @returns {editor.ExecuteCodeReply} ExecuteCodeReply instance
         */
        ExecuteCodeReply.create = function create(properties) {
            return new ExecuteCodeReply(properties);
        };

        /**
         * Encodes the specified ExecuteCodeReply message. Does not implicitly {@link editor.ExecuteCodeReply.verify|verify} messages.
         * @function encode
         * @memberof editor.ExecuteCodeReply
         * @static
         * @param {editor.IExecuteCodeReply} message ExecuteCodeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecuteCodeReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.output);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorMessage);
            if (message.diagnostics != null && message.diagnostics.length)
                for (let i = 0; i < message.diagnostics.length; ++i)
                    $root.editor.DiagnosticItem.encode(message.diagnostics[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.consoleOutput != null && Object.hasOwnProperty.call(message, "consoleOutput"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.consoleOutput);
            return writer;
        };

        /**
         * Encodes the specified ExecuteCodeReply message, length delimited. Does not implicitly {@link editor.ExecuteCodeReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.ExecuteCodeReply
         * @static
         * @param {editor.IExecuteCodeReply} message ExecuteCodeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecuteCodeReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExecuteCodeReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.ExecuteCodeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.ExecuteCodeReply} ExecuteCodeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecuteCodeReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.ExecuteCodeReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.output = reader.string();
                        break;
                    }
                case 3: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.diagnostics && message.diagnostics.length))
                            message.diagnostics = [];
                        message.diagnostics.push($root.editor.DiagnosticItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.consoleOutput = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExecuteCodeReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.ExecuteCodeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.ExecuteCodeReply} ExecuteCodeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecuteCodeReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExecuteCodeReply message.
         * @function verify
         * @memberof editor.ExecuteCodeReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExecuteCodeReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.output != null && message.hasOwnProperty("output"))
                if (!$util.isString(message.output))
                    return "output: string expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.diagnostics != null && message.hasOwnProperty("diagnostics")) {
                if (!Array.isArray(message.diagnostics))
                    return "diagnostics: array expected";
                for (let i = 0; i < message.diagnostics.length; ++i) {
                    let error = $root.editor.DiagnosticItem.verify(message.diagnostics[i]);
                    if (error)
                        return "diagnostics." + error;
                }
            }
            if (message.consoleOutput != null && message.hasOwnProperty("consoleOutput"))
                if (!$util.isString(message.consoleOutput))
                    return "consoleOutput: string expected";
            return null;
        };

        /**
         * Creates an ExecuteCodeReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.ExecuteCodeReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.ExecuteCodeReply} ExecuteCodeReply
         */
        ExecuteCodeReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.ExecuteCodeReply)
                return object;
            let message = new $root.editor.ExecuteCodeReply();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.output != null)
                message.output = String(object.output);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.diagnostics) {
                if (!Array.isArray(object.diagnostics))
                    throw TypeError(".editor.ExecuteCodeReply.diagnostics: array expected");
                message.diagnostics = [];
                for (let i = 0; i < object.diagnostics.length; ++i) {
                    if (typeof object.diagnostics[i] !== "object")
                        throw TypeError(".editor.ExecuteCodeReply.diagnostics: object expected");
                    message.diagnostics[i] = $root.editor.DiagnosticItem.fromObject(object.diagnostics[i]);
                }
            }
            if (object.consoleOutput != null)
                message.consoleOutput = String(object.consoleOutput);
            return message;
        };

        /**
         * Creates a plain object from an ExecuteCodeReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.ExecuteCodeReply
         * @static
         * @param {editor.ExecuteCodeReply} message ExecuteCodeReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExecuteCodeReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.diagnostics = [];
            if (options.defaults) {
                object.success = false;
                object.output = "";
                object.errorMessage = "";
                object.consoleOutput = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.output != null && message.hasOwnProperty("output"))
                object.output = message.output;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.diagnostics && message.diagnostics.length) {
                object.diagnostics = [];
                for (let j = 0; j < message.diagnostics.length; ++j)
                    object.diagnostics[j] = $root.editor.DiagnosticItem.toObject(message.diagnostics[j], options);
            }
            if (message.consoleOutput != null && message.hasOwnProperty("consoleOutput"))
                object.consoleOutput = message.consoleOutput;
            return object;
        };

        /**
         * Converts this ExecuteCodeReply to JSON.
         * @function toJSON
         * @memberof editor.ExecuteCodeReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExecuteCodeReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExecuteCodeReply
         * @function getTypeUrl
         * @memberof editor.ExecuteCodeReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExecuteCodeReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.ExecuteCodeReply";
        };

        return ExecuteCodeReply;
    })();

    editor.DiagnosticItem = (function() {

        /**
         * Properties of a DiagnosticItem.
         * @memberof editor
         * @interface IDiagnosticItem
         * @property {string|null} [id] DiagnosticItem id
         * @property {string|null} [message] DiagnosticItem message
         * @property {string|null} [severity] DiagnosticItem severity
         * @property {number|null} [line] DiagnosticItem line
         * @property {number|null} [column] DiagnosticItem column
         */

        /**
         * Constructs a new DiagnosticItem.
         * @memberof editor
         * @classdesc Represents a DiagnosticItem.
         * @implements IDiagnosticItem
         * @constructor
         * @param {editor.IDiagnosticItem=} [properties] Properties to set
         */
        function DiagnosticItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiagnosticItem id.
         * @member {string} id
         * @memberof editor.DiagnosticItem
         * @instance
         */
        DiagnosticItem.prototype.id = "";

        /**
         * DiagnosticItem message.
         * @member {string} message
         * @memberof editor.DiagnosticItem
         * @instance
         */
        DiagnosticItem.prototype.message = "";

        /**
         * DiagnosticItem severity.
         * @member {string} severity
         * @memberof editor.DiagnosticItem
         * @instance
         */
        DiagnosticItem.prototype.severity = "";

        /**
         * DiagnosticItem line.
         * @member {number} line
         * @memberof editor.DiagnosticItem
         * @instance
         */
        DiagnosticItem.prototype.line = 0;

        /**
         * DiagnosticItem column.
         * @member {number} column
         * @memberof editor.DiagnosticItem
         * @instance
         */
        DiagnosticItem.prototype.column = 0;

        /**
         * Creates a new DiagnosticItem instance using the specified properties.
         * @function create
         * @memberof editor.DiagnosticItem
         * @static
         * @param {editor.IDiagnosticItem=} [properties] Properties to set
         * @returns {editor.DiagnosticItem} DiagnosticItem instance
         */
        DiagnosticItem.create = function create(properties) {
            return new DiagnosticItem(properties);
        };

        /**
         * Encodes the specified DiagnosticItem message. Does not implicitly {@link editor.DiagnosticItem.verify|verify} messages.
         * @function encode
         * @memberof editor.DiagnosticItem
         * @static
         * @param {editor.IDiagnosticItem} message DiagnosticItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiagnosticItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.severity != null && Object.hasOwnProperty.call(message, "severity"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.severity);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.line);
            if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.column);
            return writer;
        };

        /**
         * Encodes the specified DiagnosticItem message, length delimited. Does not implicitly {@link editor.DiagnosticItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.DiagnosticItem
         * @static
         * @param {editor.IDiagnosticItem} message DiagnosticItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiagnosticItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiagnosticItem message from the specified reader or buffer.
         * @function decode
         * @memberof editor.DiagnosticItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.DiagnosticItem} DiagnosticItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiagnosticItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.DiagnosticItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                case 3: {
                        message.severity = reader.string();
                        break;
                    }
                case 4: {
                        message.line = reader.int32();
                        break;
                    }
                case 5: {
                        message.column = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiagnosticItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.DiagnosticItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.DiagnosticItem} DiagnosticItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiagnosticItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiagnosticItem message.
         * @function verify
         * @memberof editor.DiagnosticItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiagnosticItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.severity != null && message.hasOwnProperty("severity"))
                if (!$util.isString(message.severity))
                    return "severity: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.column != null && message.hasOwnProperty("column"))
                if (!$util.isInteger(message.column))
                    return "column: integer expected";
            return null;
        };

        /**
         * Creates a DiagnosticItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.DiagnosticItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.DiagnosticItem} DiagnosticItem
         */
        DiagnosticItem.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.DiagnosticItem)
                return object;
            let message = new $root.editor.DiagnosticItem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.message != null)
                message.message = String(object.message);
            if (object.severity != null)
                message.severity = String(object.severity);
            if (object.line != null)
                message.line = object.line | 0;
            if (object.column != null)
                message.column = object.column | 0;
            return message;
        };

        /**
         * Creates a plain object from a DiagnosticItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.DiagnosticItem
         * @static
         * @param {editor.DiagnosticItem} message DiagnosticItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiagnosticItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.message = "";
                object.severity = "";
                object.line = 0;
                object.column = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.severity != null && message.hasOwnProperty("severity"))
                object.severity = message.severity;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.column != null && message.hasOwnProperty("column"))
                object.column = message.column;
            return object;
        };

        /**
         * Converts this DiagnosticItem to JSON.
         * @function toJSON
         * @memberof editor.DiagnosticItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiagnosticItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DiagnosticItem
         * @function getTypeUrl
         * @memberof editor.DiagnosticItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiagnosticItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.DiagnosticItem";
        };

        return DiagnosticItem;
    })();

    editor.ConnectionInfo = (function() {

        /**
         * Properties of a ConnectionInfo.
         * @memberof editor
         * @interface IConnectionInfo
         * @property {string|null} [id] ConnectionInfo id
         * @property {string|null} [name] ConnectionInfo name
         * @property {string|null} [provider] ConnectionInfo provider
         * @property {string|null} [connectionString] ConnectionInfo connectionString
         * @property {string|null} [lastGeneratedDate] ConnectionInfo lastGeneratedDate
         */

        /**
         * Constructs a new ConnectionInfo.
         * @memberof editor
         * @classdesc Represents a ConnectionInfo.
         * @implements IConnectionInfo
         * @constructor
         * @param {editor.IConnectionInfo=} [properties] Properties to set
         */
        function ConnectionInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectionInfo id.
         * @member {string} id
         * @memberof editor.ConnectionInfo
         * @instance
         */
        ConnectionInfo.prototype.id = "";

        /**
         * ConnectionInfo name.
         * @member {string} name
         * @memberof editor.ConnectionInfo
         * @instance
         */
        ConnectionInfo.prototype.name = "";

        /**
         * ConnectionInfo provider.
         * @member {string} provider
         * @memberof editor.ConnectionInfo
         * @instance
         */
        ConnectionInfo.prototype.provider = "";

        /**
         * ConnectionInfo connectionString.
         * @member {string} connectionString
         * @memberof editor.ConnectionInfo
         * @instance
         */
        ConnectionInfo.prototype.connectionString = "";

        /**
         * ConnectionInfo lastGeneratedDate.
         * @member {string} lastGeneratedDate
         * @memberof editor.ConnectionInfo
         * @instance
         */
        ConnectionInfo.prototype.lastGeneratedDate = "";

        /**
         * Creates a new ConnectionInfo instance using the specified properties.
         * @function create
         * @memberof editor.ConnectionInfo
         * @static
         * @param {editor.IConnectionInfo=} [properties] Properties to set
         * @returns {editor.ConnectionInfo} ConnectionInfo instance
         */
        ConnectionInfo.create = function create(properties) {
            return new ConnectionInfo(properties);
        };

        /**
         * Encodes the specified ConnectionInfo message. Does not implicitly {@link editor.ConnectionInfo.verify|verify} messages.
         * @function encode
         * @memberof editor.ConnectionInfo
         * @static
         * @param {editor.IConnectionInfo} message ConnectionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectionInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.provider != null && Object.hasOwnProperty.call(message, "provider"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.provider);
            if (message.connectionString != null && Object.hasOwnProperty.call(message, "connectionString"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.connectionString);
            if (message.lastGeneratedDate != null && Object.hasOwnProperty.call(message, "lastGeneratedDate"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.lastGeneratedDate);
            return writer;
        };

        /**
         * Encodes the specified ConnectionInfo message, length delimited. Does not implicitly {@link editor.ConnectionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.ConnectionInfo
         * @static
         * @param {editor.IConnectionInfo} message ConnectionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof editor.ConnectionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.ConnectionInfo} ConnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectionInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.ConnectionInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.provider = reader.string();
                        break;
                    }
                case 4: {
                        message.connectionString = reader.string();
                        break;
                    }
                case 5: {
                        message.lastGeneratedDate = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.ConnectionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.ConnectionInfo} ConnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectionInfo message.
         * @function verify
         * @memberof editor.ConnectionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectionInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.provider != null && message.hasOwnProperty("provider"))
                if (!$util.isString(message.provider))
                    return "provider: string expected";
            if (message.connectionString != null && message.hasOwnProperty("connectionString"))
                if (!$util.isString(message.connectionString))
                    return "connectionString: string expected";
            if (message.lastGeneratedDate != null && message.hasOwnProperty("lastGeneratedDate"))
                if (!$util.isString(message.lastGeneratedDate))
                    return "lastGeneratedDate: string expected";
            return null;
        };

        /**
         * Creates a ConnectionInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.ConnectionInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.ConnectionInfo} ConnectionInfo
         */
        ConnectionInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.ConnectionInfo)
                return object;
            let message = new $root.editor.ConnectionInfo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.provider != null)
                message.provider = String(object.provider);
            if (object.connectionString != null)
                message.connectionString = String(object.connectionString);
            if (object.lastGeneratedDate != null)
                message.lastGeneratedDate = String(object.lastGeneratedDate);
            return message;
        };

        /**
         * Creates a plain object from a ConnectionInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.ConnectionInfo
         * @static
         * @param {editor.ConnectionInfo} message ConnectionInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectionInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.provider = "";
                object.connectionString = "";
                object.lastGeneratedDate = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.provider != null && message.hasOwnProperty("provider"))
                object.provider = message.provider;
            if (message.connectionString != null && message.hasOwnProperty("connectionString"))
                object.connectionString = message.connectionString;
            if (message.lastGeneratedDate != null && message.hasOwnProperty("lastGeneratedDate"))
                object.lastGeneratedDate = message.lastGeneratedDate;
            return object;
        };

        /**
         * Converts this ConnectionInfo to JSON.
         * @function toJSON
         * @memberof editor.ConnectionInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectionInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnectionInfo
         * @function getTypeUrl
         * @memberof editor.ConnectionInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnectionInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.ConnectionInfo";
        };

        return ConnectionInfo;
    })();

    editor.GetConnectionsRequest = (function() {

        /**
         * Properties of a GetConnectionsRequest.
         * @memberof editor
         * @interface IGetConnectionsRequest
         */

        /**
         * Constructs a new GetConnectionsRequest.
         * @memberof editor
         * @classdesc Represents a GetConnectionsRequest.
         * @implements IGetConnectionsRequest
         * @constructor
         * @param {editor.IGetConnectionsRequest=} [properties] Properties to set
         */
        function GetConnectionsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetConnectionsRequest instance using the specified properties.
         * @function create
         * @memberof editor.GetConnectionsRequest
         * @static
         * @param {editor.IGetConnectionsRequest=} [properties] Properties to set
         * @returns {editor.GetConnectionsRequest} GetConnectionsRequest instance
         */
        GetConnectionsRequest.create = function create(properties) {
            return new GetConnectionsRequest(properties);
        };

        /**
         * Encodes the specified GetConnectionsRequest message. Does not implicitly {@link editor.GetConnectionsRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.GetConnectionsRequest
         * @static
         * @param {editor.IGetConnectionsRequest} message GetConnectionsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConnectionsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetConnectionsRequest message, length delimited. Does not implicitly {@link editor.GetConnectionsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.GetConnectionsRequest
         * @static
         * @param {editor.IGetConnectionsRequest} message GetConnectionsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConnectionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetConnectionsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.GetConnectionsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.GetConnectionsRequest} GetConnectionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConnectionsRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.GetConnectionsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetConnectionsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.GetConnectionsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.GetConnectionsRequest} GetConnectionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConnectionsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetConnectionsRequest message.
         * @function verify
         * @memberof editor.GetConnectionsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetConnectionsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetConnectionsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.GetConnectionsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.GetConnectionsRequest} GetConnectionsRequest
         */
        GetConnectionsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.GetConnectionsRequest)
                return object;
            return new $root.editor.GetConnectionsRequest();
        };

        /**
         * Creates a plain object from a GetConnectionsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.GetConnectionsRequest
         * @static
         * @param {editor.GetConnectionsRequest} message GetConnectionsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetConnectionsRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetConnectionsRequest to JSON.
         * @function toJSON
         * @memberof editor.GetConnectionsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetConnectionsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetConnectionsRequest
         * @function getTypeUrl
         * @memberof editor.GetConnectionsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetConnectionsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.GetConnectionsRequest";
        };

        return GetConnectionsRequest;
    })();

    editor.GetConnectionsReply = (function() {

        /**
         * Properties of a GetConnectionsReply.
         * @memberof editor
         * @interface IGetConnectionsReply
         * @property {Array.<editor.IConnectionInfo>|null} [connections] GetConnectionsReply connections
         */

        /**
         * Constructs a new GetConnectionsReply.
         * @memberof editor
         * @classdesc Represents a GetConnectionsReply.
         * @implements IGetConnectionsReply
         * @constructor
         * @param {editor.IGetConnectionsReply=} [properties] Properties to set
         */
        function GetConnectionsReply(properties) {
            this.connections = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetConnectionsReply connections.
         * @member {Array.<editor.IConnectionInfo>} connections
         * @memberof editor.GetConnectionsReply
         * @instance
         */
        GetConnectionsReply.prototype.connections = $util.emptyArray;

        /**
         * Creates a new GetConnectionsReply instance using the specified properties.
         * @function create
         * @memberof editor.GetConnectionsReply
         * @static
         * @param {editor.IGetConnectionsReply=} [properties] Properties to set
         * @returns {editor.GetConnectionsReply} GetConnectionsReply instance
         */
        GetConnectionsReply.create = function create(properties) {
            return new GetConnectionsReply(properties);
        };

        /**
         * Encodes the specified GetConnectionsReply message. Does not implicitly {@link editor.GetConnectionsReply.verify|verify} messages.
         * @function encode
         * @memberof editor.GetConnectionsReply
         * @static
         * @param {editor.IGetConnectionsReply} message GetConnectionsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConnectionsReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connections != null && message.connections.length)
                for (let i = 0; i < message.connections.length; ++i)
                    $root.editor.ConnectionInfo.encode(message.connections[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetConnectionsReply message, length delimited. Does not implicitly {@link editor.GetConnectionsReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.GetConnectionsReply
         * @static
         * @param {editor.IGetConnectionsReply} message GetConnectionsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConnectionsReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetConnectionsReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.GetConnectionsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.GetConnectionsReply} GetConnectionsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConnectionsReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.GetConnectionsReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.connections && message.connections.length))
                            message.connections = [];
                        message.connections.push($root.editor.ConnectionInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetConnectionsReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.GetConnectionsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.GetConnectionsReply} GetConnectionsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConnectionsReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetConnectionsReply message.
         * @function verify
         * @memberof editor.GetConnectionsReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetConnectionsReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connections != null && message.hasOwnProperty("connections")) {
                if (!Array.isArray(message.connections))
                    return "connections: array expected";
                for (let i = 0; i < message.connections.length; ++i) {
                    let error = $root.editor.ConnectionInfo.verify(message.connections[i]);
                    if (error)
                        return "connections." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetConnectionsReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.GetConnectionsReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.GetConnectionsReply} GetConnectionsReply
         */
        GetConnectionsReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.GetConnectionsReply)
                return object;
            let message = new $root.editor.GetConnectionsReply();
            if (object.connections) {
                if (!Array.isArray(object.connections))
                    throw TypeError(".editor.GetConnectionsReply.connections: array expected");
                message.connections = [];
                for (let i = 0; i < object.connections.length; ++i) {
                    if (typeof object.connections[i] !== "object")
                        throw TypeError(".editor.GetConnectionsReply.connections: object expected");
                    message.connections[i] = $root.editor.ConnectionInfo.fromObject(object.connections[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetConnectionsReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.GetConnectionsReply
         * @static
         * @param {editor.GetConnectionsReply} message GetConnectionsReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetConnectionsReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.connections = [];
            if (message.connections && message.connections.length) {
                object.connections = [];
                for (let j = 0; j < message.connections.length; ++j)
                    object.connections[j] = $root.editor.ConnectionInfo.toObject(message.connections[j], options);
            }
            return object;
        };

        /**
         * Converts this GetConnectionsReply to JSON.
         * @function toJSON
         * @memberof editor.GetConnectionsReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetConnectionsReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetConnectionsReply
         * @function getTypeUrl
         * @memberof editor.GetConnectionsReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetConnectionsReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.GetConnectionsReply";
        };

        return GetConnectionsReply;
    })();

    editor.SaveConnectionRequest = (function() {

        /**
         * Properties of a SaveConnectionRequest.
         * @memberof editor
         * @interface ISaveConnectionRequest
         * @property {editor.IConnectionInfo|null} [connection] SaveConnectionRequest connection
         */

        /**
         * Constructs a new SaveConnectionRequest.
         * @memberof editor
         * @classdesc Represents a SaveConnectionRequest.
         * @implements ISaveConnectionRequest
         * @constructor
         * @param {editor.ISaveConnectionRequest=} [properties] Properties to set
         */
        function SaveConnectionRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SaveConnectionRequest connection.
         * @member {editor.IConnectionInfo|null|undefined} connection
         * @memberof editor.SaveConnectionRequest
         * @instance
         */
        SaveConnectionRequest.prototype.connection = null;

        /**
         * Creates a new SaveConnectionRequest instance using the specified properties.
         * @function create
         * @memberof editor.SaveConnectionRequest
         * @static
         * @param {editor.ISaveConnectionRequest=} [properties] Properties to set
         * @returns {editor.SaveConnectionRequest} SaveConnectionRequest instance
         */
        SaveConnectionRequest.create = function create(properties) {
            return new SaveConnectionRequest(properties);
        };

        /**
         * Encodes the specified SaveConnectionRequest message. Does not implicitly {@link editor.SaveConnectionRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.SaveConnectionRequest
         * @static
         * @param {editor.ISaveConnectionRequest} message SaveConnectionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveConnectionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connection != null && Object.hasOwnProperty.call(message, "connection"))
                $root.editor.ConnectionInfo.encode(message.connection, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SaveConnectionRequest message, length delimited. Does not implicitly {@link editor.SaveConnectionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.SaveConnectionRequest
         * @static
         * @param {editor.ISaveConnectionRequest} message SaveConnectionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveConnectionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SaveConnectionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.SaveConnectionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.SaveConnectionRequest} SaveConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveConnectionRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.SaveConnectionRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.connection = $root.editor.ConnectionInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SaveConnectionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.SaveConnectionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.SaveConnectionRequest} SaveConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveConnectionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SaveConnectionRequest message.
         * @function verify
         * @memberof editor.SaveConnectionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SaveConnectionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connection != null && message.hasOwnProperty("connection")) {
                let error = $root.editor.ConnectionInfo.verify(message.connection);
                if (error)
                    return "connection." + error;
            }
            return null;
        };

        /**
         * Creates a SaveConnectionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.SaveConnectionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.SaveConnectionRequest} SaveConnectionRequest
         */
        SaveConnectionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.SaveConnectionRequest)
                return object;
            let message = new $root.editor.SaveConnectionRequest();
            if (object.connection != null) {
                if (typeof object.connection !== "object")
                    throw TypeError(".editor.SaveConnectionRequest.connection: object expected");
                message.connection = $root.editor.ConnectionInfo.fromObject(object.connection);
            }
            return message;
        };

        /**
         * Creates a plain object from a SaveConnectionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.SaveConnectionRequest
         * @static
         * @param {editor.SaveConnectionRequest} message SaveConnectionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SaveConnectionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.connection = null;
            if (message.connection != null && message.hasOwnProperty("connection"))
                object.connection = $root.editor.ConnectionInfo.toObject(message.connection, options);
            return object;
        };

        /**
         * Converts this SaveConnectionRequest to JSON.
         * @function toJSON
         * @memberof editor.SaveConnectionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SaveConnectionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SaveConnectionRequest
         * @function getTypeUrl
         * @memberof editor.SaveConnectionRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SaveConnectionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.SaveConnectionRequest";
        };

        return SaveConnectionRequest;
    })();

    editor.SaveConnectionReply = (function() {

        /**
         * Properties of a SaveConnectionReply.
         * @memberof editor
         * @interface ISaveConnectionReply
         * @property {boolean|null} [success] SaveConnectionReply success
         * @property {string|null} [errorMessage] SaveConnectionReply errorMessage
         * @property {string|null} [id] SaveConnectionReply id
         */

        /**
         * Constructs a new SaveConnectionReply.
         * @memberof editor
         * @classdesc Represents a SaveConnectionReply.
         * @implements ISaveConnectionReply
         * @constructor
         * @param {editor.ISaveConnectionReply=} [properties] Properties to set
         */
        function SaveConnectionReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SaveConnectionReply success.
         * @member {boolean} success
         * @memberof editor.SaveConnectionReply
         * @instance
         */
        SaveConnectionReply.prototype.success = false;

        /**
         * SaveConnectionReply errorMessage.
         * @member {string} errorMessage
         * @memberof editor.SaveConnectionReply
         * @instance
         */
        SaveConnectionReply.prototype.errorMessage = "";

        /**
         * SaveConnectionReply id.
         * @member {string} id
         * @memberof editor.SaveConnectionReply
         * @instance
         */
        SaveConnectionReply.prototype.id = "";

        /**
         * Creates a new SaveConnectionReply instance using the specified properties.
         * @function create
         * @memberof editor.SaveConnectionReply
         * @static
         * @param {editor.ISaveConnectionReply=} [properties] Properties to set
         * @returns {editor.SaveConnectionReply} SaveConnectionReply instance
         */
        SaveConnectionReply.create = function create(properties) {
            return new SaveConnectionReply(properties);
        };

        /**
         * Encodes the specified SaveConnectionReply message. Does not implicitly {@link editor.SaveConnectionReply.verify|verify} messages.
         * @function encode
         * @memberof editor.SaveConnectionReply
         * @static
         * @param {editor.ISaveConnectionReply} message SaveConnectionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveConnectionReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified SaveConnectionReply message, length delimited. Does not implicitly {@link editor.SaveConnectionReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.SaveConnectionReply
         * @static
         * @param {editor.ISaveConnectionReply} message SaveConnectionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveConnectionReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SaveConnectionReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.SaveConnectionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.SaveConnectionReply} SaveConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveConnectionReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.SaveConnectionReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 3: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SaveConnectionReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.SaveConnectionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.SaveConnectionReply} SaveConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveConnectionReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SaveConnectionReply message.
         * @function verify
         * @memberof editor.SaveConnectionReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SaveConnectionReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a SaveConnectionReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.SaveConnectionReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.SaveConnectionReply} SaveConnectionReply
         */
        SaveConnectionReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.SaveConnectionReply)
                return object;
            let message = new $root.editor.SaveConnectionReply();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a SaveConnectionReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.SaveConnectionReply
         * @static
         * @param {editor.SaveConnectionReply} message SaveConnectionReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SaveConnectionReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
                object.id = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this SaveConnectionReply to JSON.
         * @function toJSON
         * @memberof editor.SaveConnectionReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SaveConnectionReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SaveConnectionReply
         * @function getTypeUrl
         * @memberof editor.SaveConnectionReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SaveConnectionReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.SaveConnectionReply";
        };

        return SaveConnectionReply;
    })();

    editor.DeleteConnectionRequest = (function() {

        /**
         * Properties of a DeleteConnectionRequest.
         * @memberof editor
         * @interface IDeleteConnectionRequest
         * @property {string|null} [id] DeleteConnectionRequest id
         */

        /**
         * Constructs a new DeleteConnectionRequest.
         * @memberof editor
         * @classdesc Represents a DeleteConnectionRequest.
         * @implements IDeleteConnectionRequest
         * @constructor
         * @param {editor.IDeleteConnectionRequest=} [properties] Properties to set
         */
        function DeleteConnectionRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteConnectionRequest id.
         * @member {string} id
         * @memberof editor.DeleteConnectionRequest
         * @instance
         */
        DeleteConnectionRequest.prototype.id = "";

        /**
         * Creates a new DeleteConnectionRequest instance using the specified properties.
         * @function create
         * @memberof editor.DeleteConnectionRequest
         * @static
         * @param {editor.IDeleteConnectionRequest=} [properties] Properties to set
         * @returns {editor.DeleteConnectionRequest} DeleteConnectionRequest instance
         */
        DeleteConnectionRequest.create = function create(properties) {
            return new DeleteConnectionRequest(properties);
        };

        /**
         * Encodes the specified DeleteConnectionRequest message. Does not implicitly {@link editor.DeleteConnectionRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.DeleteConnectionRequest
         * @static
         * @param {editor.IDeleteConnectionRequest} message DeleteConnectionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteConnectionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DeleteConnectionRequest message, length delimited. Does not implicitly {@link editor.DeleteConnectionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.DeleteConnectionRequest
         * @static
         * @param {editor.IDeleteConnectionRequest} message DeleteConnectionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteConnectionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteConnectionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.DeleteConnectionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.DeleteConnectionRequest} DeleteConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteConnectionRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.DeleteConnectionRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteConnectionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.DeleteConnectionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.DeleteConnectionRequest} DeleteConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteConnectionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteConnectionRequest message.
         * @function verify
         * @memberof editor.DeleteConnectionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteConnectionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DeleteConnectionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.DeleteConnectionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.DeleteConnectionRequest} DeleteConnectionRequest
         */
        DeleteConnectionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.DeleteConnectionRequest)
                return object;
            let message = new $root.editor.DeleteConnectionRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DeleteConnectionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.DeleteConnectionRequest
         * @static
         * @param {editor.DeleteConnectionRequest} message DeleteConnectionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteConnectionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DeleteConnectionRequest to JSON.
         * @function toJSON
         * @memberof editor.DeleteConnectionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteConnectionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteConnectionRequest
         * @function getTypeUrl
         * @memberof editor.DeleteConnectionRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteConnectionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.DeleteConnectionRequest";
        };

        return DeleteConnectionRequest;
    })();

    editor.DeleteConnectionReply = (function() {

        /**
         * Properties of a DeleteConnectionReply.
         * @memberof editor
         * @interface IDeleteConnectionReply
         * @property {boolean|null} [success] DeleteConnectionReply success
         * @property {string|null} [errorMessage] DeleteConnectionReply errorMessage
         */

        /**
         * Constructs a new DeleteConnectionReply.
         * @memberof editor
         * @classdesc Represents a DeleteConnectionReply.
         * @implements IDeleteConnectionReply
         * @constructor
         * @param {editor.IDeleteConnectionReply=} [properties] Properties to set
         */
        function DeleteConnectionReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteConnectionReply success.
         * @member {boolean} success
         * @memberof editor.DeleteConnectionReply
         * @instance
         */
        DeleteConnectionReply.prototype.success = false;

        /**
         * DeleteConnectionReply errorMessage.
         * @member {string} errorMessage
         * @memberof editor.DeleteConnectionReply
         * @instance
         */
        DeleteConnectionReply.prototype.errorMessage = "";

        /**
         * Creates a new DeleteConnectionReply instance using the specified properties.
         * @function create
         * @memberof editor.DeleteConnectionReply
         * @static
         * @param {editor.IDeleteConnectionReply=} [properties] Properties to set
         * @returns {editor.DeleteConnectionReply} DeleteConnectionReply instance
         */
        DeleteConnectionReply.create = function create(properties) {
            return new DeleteConnectionReply(properties);
        };

        /**
         * Encodes the specified DeleteConnectionReply message. Does not implicitly {@link editor.DeleteConnectionReply.verify|verify} messages.
         * @function encode
         * @memberof editor.DeleteConnectionReply
         * @static
         * @param {editor.IDeleteConnectionReply} message DeleteConnectionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteConnectionReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified DeleteConnectionReply message, length delimited. Does not implicitly {@link editor.DeleteConnectionReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.DeleteConnectionReply
         * @static
         * @param {editor.IDeleteConnectionReply} message DeleteConnectionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteConnectionReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteConnectionReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.DeleteConnectionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.DeleteConnectionReply} DeleteConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteConnectionReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.DeleteConnectionReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteConnectionReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.DeleteConnectionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.DeleteConnectionReply} DeleteConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteConnectionReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteConnectionReply message.
         * @function verify
         * @memberof editor.DeleteConnectionReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteConnectionReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a DeleteConnectionReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.DeleteConnectionReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.DeleteConnectionReply} DeleteConnectionReply
         */
        DeleteConnectionReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.DeleteConnectionReply)
                return object;
            let message = new $root.editor.DeleteConnectionReply();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a DeleteConnectionReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.DeleteConnectionReply
         * @static
         * @param {editor.DeleteConnectionReply} message DeleteConnectionReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteConnectionReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this DeleteConnectionReply to JSON.
         * @function toJSON
         * @memberof editor.DeleteConnectionReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteConnectionReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteConnectionReply
         * @function getTypeUrl
         * @memberof editor.DeleteConnectionReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteConnectionReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.DeleteConnectionReply";
        };

        return DeleteConnectionReply;
    })();

    editor.TestConnectionRequest = (function() {

        /**
         * Properties of a TestConnectionRequest.
         * @memberof editor
         * @interface ITestConnectionRequest
         * @property {string|null} [connectionString] TestConnectionRequest connectionString
         * @property {string|null} [provider] TestConnectionRequest provider
         */

        /**
         * Constructs a new TestConnectionRequest.
         * @memberof editor
         * @classdesc Represents a TestConnectionRequest.
         * @implements ITestConnectionRequest
         * @constructor
         * @param {editor.ITestConnectionRequest=} [properties] Properties to set
         */
        function TestConnectionRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestConnectionRequest connectionString.
         * @member {string} connectionString
         * @memberof editor.TestConnectionRequest
         * @instance
         */
        TestConnectionRequest.prototype.connectionString = "";

        /**
         * TestConnectionRequest provider.
         * @member {string} provider
         * @memberof editor.TestConnectionRequest
         * @instance
         */
        TestConnectionRequest.prototype.provider = "";

        /**
         * Creates a new TestConnectionRequest instance using the specified properties.
         * @function create
         * @memberof editor.TestConnectionRequest
         * @static
         * @param {editor.ITestConnectionRequest=} [properties] Properties to set
         * @returns {editor.TestConnectionRequest} TestConnectionRequest instance
         */
        TestConnectionRequest.create = function create(properties) {
            return new TestConnectionRequest(properties);
        };

        /**
         * Encodes the specified TestConnectionRequest message. Does not implicitly {@link editor.TestConnectionRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.TestConnectionRequest
         * @static
         * @param {editor.ITestConnectionRequest} message TestConnectionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestConnectionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectionString != null && Object.hasOwnProperty.call(message, "connectionString"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.connectionString);
            if (message.provider != null && Object.hasOwnProperty.call(message, "provider"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.provider);
            return writer;
        };

        /**
         * Encodes the specified TestConnectionRequest message, length delimited. Does not implicitly {@link editor.TestConnectionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.TestConnectionRequest
         * @static
         * @param {editor.ITestConnectionRequest} message TestConnectionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestConnectionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestConnectionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.TestConnectionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.TestConnectionRequest} TestConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestConnectionRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.TestConnectionRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.connectionString = reader.string();
                        break;
                    }
                case 2: {
                        message.provider = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestConnectionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.TestConnectionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.TestConnectionRequest} TestConnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestConnectionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestConnectionRequest message.
         * @function verify
         * @memberof editor.TestConnectionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestConnectionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectionString != null && message.hasOwnProperty("connectionString"))
                if (!$util.isString(message.connectionString))
                    return "connectionString: string expected";
            if (message.provider != null && message.hasOwnProperty("provider"))
                if (!$util.isString(message.provider))
                    return "provider: string expected";
            return null;
        };

        /**
         * Creates a TestConnectionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.TestConnectionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.TestConnectionRequest} TestConnectionRequest
         */
        TestConnectionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.TestConnectionRequest)
                return object;
            let message = new $root.editor.TestConnectionRequest();
            if (object.connectionString != null)
                message.connectionString = String(object.connectionString);
            if (object.provider != null)
                message.provider = String(object.provider);
            return message;
        };

        /**
         * Creates a plain object from a TestConnectionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.TestConnectionRequest
         * @static
         * @param {editor.TestConnectionRequest} message TestConnectionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestConnectionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.connectionString = "";
                object.provider = "";
            }
            if (message.connectionString != null && message.hasOwnProperty("connectionString"))
                object.connectionString = message.connectionString;
            if (message.provider != null && message.hasOwnProperty("provider"))
                object.provider = message.provider;
            return object;
        };

        /**
         * Converts this TestConnectionRequest to JSON.
         * @function toJSON
         * @memberof editor.TestConnectionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestConnectionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TestConnectionRequest
         * @function getTypeUrl
         * @memberof editor.TestConnectionRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TestConnectionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.TestConnectionRequest";
        };

        return TestConnectionRequest;
    })();

    editor.TestConnectionReply = (function() {

        /**
         * Properties of a TestConnectionReply.
         * @memberof editor
         * @interface ITestConnectionReply
         * @property {boolean|null} [success] TestConnectionReply success
         * @property {string|null} [message] TestConnectionReply message
         */

        /**
         * Constructs a new TestConnectionReply.
         * @memberof editor
         * @classdesc Represents a TestConnectionReply.
         * @implements ITestConnectionReply
         * @constructor
         * @param {editor.ITestConnectionReply=} [properties] Properties to set
         */
        function TestConnectionReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestConnectionReply success.
         * @member {boolean} success
         * @memberof editor.TestConnectionReply
         * @instance
         */
        TestConnectionReply.prototype.success = false;

        /**
         * TestConnectionReply message.
         * @member {string} message
         * @memberof editor.TestConnectionReply
         * @instance
         */
        TestConnectionReply.prototype.message = "";

        /**
         * Creates a new TestConnectionReply instance using the specified properties.
         * @function create
         * @memberof editor.TestConnectionReply
         * @static
         * @param {editor.ITestConnectionReply=} [properties] Properties to set
         * @returns {editor.TestConnectionReply} TestConnectionReply instance
         */
        TestConnectionReply.create = function create(properties) {
            return new TestConnectionReply(properties);
        };

        /**
         * Encodes the specified TestConnectionReply message. Does not implicitly {@link editor.TestConnectionReply.verify|verify} messages.
         * @function encode
         * @memberof editor.TestConnectionReply
         * @static
         * @param {editor.ITestConnectionReply} message TestConnectionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestConnectionReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified TestConnectionReply message, length delimited. Does not implicitly {@link editor.TestConnectionReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.TestConnectionReply
         * @static
         * @param {editor.ITestConnectionReply} message TestConnectionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestConnectionReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestConnectionReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.TestConnectionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.TestConnectionReply} TestConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestConnectionReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.TestConnectionReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestConnectionReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.TestConnectionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.TestConnectionReply} TestConnectionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestConnectionReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestConnectionReply message.
         * @function verify
         * @memberof editor.TestConnectionReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestConnectionReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a TestConnectionReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.TestConnectionReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.TestConnectionReply} TestConnectionReply
         */
        TestConnectionReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.TestConnectionReply)
                return object;
            let message = new $root.editor.TestConnectionReply();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a TestConnectionReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.TestConnectionReply
         * @static
         * @param {editor.TestConnectionReply} message TestConnectionReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestConnectionReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this TestConnectionReply to JSON.
         * @function toJSON
         * @memberof editor.TestConnectionReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestConnectionReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TestConnectionReply
         * @function getTypeUrl
         * @memberof editor.TestConnectionReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TestConnectionReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.TestConnectionReply";
        };

        return TestConnectionReply;
    })();

    editor.GetDatabaseSchemaRequest = (function() {

        /**
         * Properties of a GetDatabaseSchemaRequest.
         * @memberof editor
         * @interface IGetDatabaseSchemaRequest
         * @property {string|null} [connectionId] GetDatabaseSchemaRequest connectionId
         * @property {string|null} [tableName] GetDatabaseSchemaRequest tableName
         * @property {boolean|null} [tablesOnly] GetDatabaseSchemaRequest tablesOnly
         */

        /**
         * Constructs a new GetDatabaseSchemaRequest.
         * @memberof editor
         * @classdesc Represents a GetDatabaseSchemaRequest.
         * @implements IGetDatabaseSchemaRequest
         * @constructor
         * @param {editor.IGetDatabaseSchemaRequest=} [properties] Properties to set
         */
        function GetDatabaseSchemaRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDatabaseSchemaRequest connectionId.
         * @member {string} connectionId
         * @memberof editor.GetDatabaseSchemaRequest
         * @instance
         */
        GetDatabaseSchemaRequest.prototype.connectionId = "";

        /**
         * GetDatabaseSchemaRequest tableName.
         * @member {string} tableName
         * @memberof editor.GetDatabaseSchemaRequest
         * @instance
         */
        GetDatabaseSchemaRequest.prototype.tableName = "";

        /**
         * GetDatabaseSchemaRequest tablesOnly.
         * @member {boolean} tablesOnly
         * @memberof editor.GetDatabaseSchemaRequest
         * @instance
         */
        GetDatabaseSchemaRequest.prototype.tablesOnly = false;

        /**
         * Creates a new GetDatabaseSchemaRequest instance using the specified properties.
         * @function create
         * @memberof editor.GetDatabaseSchemaRequest
         * @static
         * @param {editor.IGetDatabaseSchemaRequest=} [properties] Properties to set
         * @returns {editor.GetDatabaseSchemaRequest} GetDatabaseSchemaRequest instance
         */
        GetDatabaseSchemaRequest.create = function create(properties) {
            return new GetDatabaseSchemaRequest(properties);
        };

        /**
         * Encodes the specified GetDatabaseSchemaRequest message. Does not implicitly {@link editor.GetDatabaseSchemaRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.GetDatabaseSchemaRequest
         * @static
         * @param {editor.IGetDatabaseSchemaRequest} message GetDatabaseSchemaRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDatabaseSchemaRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectionId != null && Object.hasOwnProperty.call(message, "connectionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.connectionId);
            if (message.tableName != null && Object.hasOwnProperty.call(message, "tableName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableName);
            if (message.tablesOnly != null && Object.hasOwnProperty.call(message, "tablesOnly"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.tablesOnly);
            return writer;
        };

        /**
         * Encodes the specified GetDatabaseSchemaRequest message, length delimited. Does not implicitly {@link editor.GetDatabaseSchemaRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.GetDatabaseSchemaRequest
         * @static
         * @param {editor.IGetDatabaseSchemaRequest} message GetDatabaseSchemaRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDatabaseSchemaRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDatabaseSchemaRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.GetDatabaseSchemaRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.GetDatabaseSchemaRequest} GetDatabaseSchemaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDatabaseSchemaRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.GetDatabaseSchemaRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.connectionId = reader.string();
                        break;
                    }
                case 2: {
                        message.tableName = reader.string();
                        break;
                    }
                case 3: {
                        message.tablesOnly = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDatabaseSchemaRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.GetDatabaseSchemaRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.GetDatabaseSchemaRequest} GetDatabaseSchemaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDatabaseSchemaRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDatabaseSchemaRequest message.
         * @function verify
         * @memberof editor.GetDatabaseSchemaRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDatabaseSchemaRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                if (!$util.isString(message.connectionId))
                    return "connectionId: string expected";
            if (message.tableName != null && message.hasOwnProperty("tableName"))
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
            if (message.tablesOnly != null && message.hasOwnProperty("tablesOnly"))
                if (typeof message.tablesOnly !== "boolean")
                    return "tablesOnly: boolean expected";
            return null;
        };

        /**
         * Creates a GetDatabaseSchemaRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.GetDatabaseSchemaRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.GetDatabaseSchemaRequest} GetDatabaseSchemaRequest
         */
        GetDatabaseSchemaRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.GetDatabaseSchemaRequest)
                return object;
            let message = new $root.editor.GetDatabaseSchemaRequest();
            if (object.connectionId != null)
                message.connectionId = String(object.connectionId);
            if (object.tableName != null)
                message.tableName = String(object.tableName);
            if (object.tablesOnly != null)
                message.tablesOnly = Boolean(object.tablesOnly);
            return message;
        };

        /**
         * Creates a plain object from a GetDatabaseSchemaRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.GetDatabaseSchemaRequest
         * @static
         * @param {editor.GetDatabaseSchemaRequest} message GetDatabaseSchemaRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDatabaseSchemaRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.connectionId = "";
                object.tableName = "";
                object.tablesOnly = false;
            }
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                object.connectionId = message.connectionId;
            if (message.tableName != null && message.hasOwnProperty("tableName"))
                object.tableName = message.tableName;
            if (message.tablesOnly != null && message.hasOwnProperty("tablesOnly"))
                object.tablesOnly = message.tablesOnly;
            return object;
        };

        /**
         * Converts this GetDatabaseSchemaRequest to JSON.
         * @function toJSON
         * @memberof editor.GetDatabaseSchemaRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDatabaseSchemaRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetDatabaseSchemaRequest
         * @function getTypeUrl
         * @memberof editor.GetDatabaseSchemaRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetDatabaseSchemaRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.GetDatabaseSchemaRequest";
        };

        return GetDatabaseSchemaRequest;
    })();

    editor.GetDatabaseSchemaReply = (function() {

        /**
         * Properties of a GetDatabaseSchemaReply.
         * @memberof editor
         * @interface IGetDatabaseSchemaReply
         * @property {boolean|null} [success] GetDatabaseSchemaReply success
         * @property {string|null} [errorMessage] GetDatabaseSchemaReply errorMessage
         * @property {editor.IDatabaseSchema|null} [schema] GetDatabaseSchemaReply schema
         */

        /**
         * Constructs a new GetDatabaseSchemaReply.
         * @memberof editor
         * @classdesc Represents a GetDatabaseSchemaReply.
         * @implements IGetDatabaseSchemaReply
         * @constructor
         * @param {editor.IGetDatabaseSchemaReply=} [properties] Properties to set
         */
        function GetDatabaseSchemaReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDatabaseSchemaReply success.
         * @member {boolean} success
         * @memberof editor.GetDatabaseSchemaReply
         * @instance
         */
        GetDatabaseSchemaReply.prototype.success = false;

        /**
         * GetDatabaseSchemaReply errorMessage.
         * @member {string} errorMessage
         * @memberof editor.GetDatabaseSchemaReply
         * @instance
         */
        GetDatabaseSchemaReply.prototype.errorMessage = "";

        /**
         * GetDatabaseSchemaReply schema.
         * @member {editor.IDatabaseSchema|null|undefined} schema
         * @memberof editor.GetDatabaseSchemaReply
         * @instance
         */
        GetDatabaseSchemaReply.prototype.schema = null;

        /**
         * Creates a new GetDatabaseSchemaReply instance using the specified properties.
         * @function create
         * @memberof editor.GetDatabaseSchemaReply
         * @static
         * @param {editor.IGetDatabaseSchemaReply=} [properties] Properties to set
         * @returns {editor.GetDatabaseSchemaReply} GetDatabaseSchemaReply instance
         */
        GetDatabaseSchemaReply.create = function create(properties) {
            return new GetDatabaseSchemaReply(properties);
        };

        /**
         * Encodes the specified GetDatabaseSchemaReply message. Does not implicitly {@link editor.GetDatabaseSchemaReply.verify|verify} messages.
         * @function encode
         * @memberof editor.GetDatabaseSchemaReply
         * @static
         * @param {editor.IGetDatabaseSchemaReply} message GetDatabaseSchemaReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDatabaseSchemaReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                $root.editor.DatabaseSchema.encode(message.schema, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetDatabaseSchemaReply message, length delimited. Does not implicitly {@link editor.GetDatabaseSchemaReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.GetDatabaseSchemaReply
         * @static
         * @param {editor.IGetDatabaseSchemaReply} message GetDatabaseSchemaReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDatabaseSchemaReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDatabaseSchemaReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.GetDatabaseSchemaReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.GetDatabaseSchemaReply} GetDatabaseSchemaReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDatabaseSchemaReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.GetDatabaseSchemaReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 3: {
                        message.schema = $root.editor.DatabaseSchema.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDatabaseSchemaReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.GetDatabaseSchemaReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.GetDatabaseSchemaReply} GetDatabaseSchemaReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDatabaseSchemaReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDatabaseSchemaReply message.
         * @function verify
         * @memberof editor.GetDatabaseSchemaReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDatabaseSchemaReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.schema != null && message.hasOwnProperty("schema")) {
                let error = $root.editor.DatabaseSchema.verify(message.schema);
                if (error)
                    return "schema." + error;
            }
            return null;
        };

        /**
         * Creates a GetDatabaseSchemaReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.GetDatabaseSchemaReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.GetDatabaseSchemaReply} GetDatabaseSchemaReply
         */
        GetDatabaseSchemaReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.GetDatabaseSchemaReply)
                return object;
            let message = new $root.editor.GetDatabaseSchemaReply();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.schema != null) {
                if (typeof object.schema !== "object")
                    throw TypeError(".editor.GetDatabaseSchemaReply.schema: object expected");
                message.schema = $root.editor.DatabaseSchema.fromObject(object.schema);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetDatabaseSchemaReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.GetDatabaseSchemaReply
         * @static
         * @param {editor.GetDatabaseSchemaReply} message GetDatabaseSchemaReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDatabaseSchemaReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
                object.schema = null;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.schema != null && message.hasOwnProperty("schema"))
                object.schema = $root.editor.DatabaseSchema.toObject(message.schema, options);
            return object;
        };

        /**
         * Converts this GetDatabaseSchemaReply to JSON.
         * @function toJSON
         * @memberof editor.GetDatabaseSchemaReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDatabaseSchemaReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetDatabaseSchemaReply
         * @function getTypeUrl
         * @memberof editor.GetDatabaseSchemaReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetDatabaseSchemaReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.GetDatabaseSchemaReply";
        };

        return GetDatabaseSchemaReply;
    })();

    editor.DatabaseSchema = (function() {

        /**
         * Properties of a DatabaseSchema.
         * @memberof editor
         * @interface IDatabaseSchema
         * @property {string|null} [name] DatabaseSchema name
         * @property {Array.<editor.ITableSchema>|null} [tables] DatabaseSchema tables
         */

        /**
         * Constructs a new DatabaseSchema.
         * @memberof editor
         * @classdesc Represents a DatabaseSchema.
         * @implements IDatabaseSchema
         * @constructor
         * @param {editor.IDatabaseSchema=} [properties] Properties to set
         */
        function DatabaseSchema(properties) {
            this.tables = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DatabaseSchema name.
         * @member {string} name
         * @memberof editor.DatabaseSchema
         * @instance
         */
        DatabaseSchema.prototype.name = "";

        /**
         * DatabaseSchema tables.
         * @member {Array.<editor.ITableSchema>} tables
         * @memberof editor.DatabaseSchema
         * @instance
         */
        DatabaseSchema.prototype.tables = $util.emptyArray;

        /**
         * Creates a new DatabaseSchema instance using the specified properties.
         * @function create
         * @memberof editor.DatabaseSchema
         * @static
         * @param {editor.IDatabaseSchema=} [properties] Properties to set
         * @returns {editor.DatabaseSchema} DatabaseSchema instance
         */
        DatabaseSchema.create = function create(properties) {
            return new DatabaseSchema(properties);
        };

        /**
         * Encodes the specified DatabaseSchema message. Does not implicitly {@link editor.DatabaseSchema.verify|verify} messages.
         * @function encode
         * @memberof editor.DatabaseSchema
         * @static
         * @param {editor.IDatabaseSchema} message DatabaseSchema message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DatabaseSchema.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.tables != null && message.tables.length)
                for (let i = 0; i < message.tables.length; ++i)
                    $root.editor.TableSchema.encode(message.tables[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DatabaseSchema message, length delimited. Does not implicitly {@link editor.DatabaseSchema.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.DatabaseSchema
         * @static
         * @param {editor.IDatabaseSchema} message DatabaseSchema message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DatabaseSchema.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DatabaseSchema message from the specified reader or buffer.
         * @function decode
         * @memberof editor.DatabaseSchema
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.DatabaseSchema} DatabaseSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DatabaseSchema.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.DatabaseSchema();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.editor.TableSchema.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DatabaseSchema message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.DatabaseSchema
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.DatabaseSchema} DatabaseSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DatabaseSchema.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DatabaseSchema message.
         * @function verify
         * @memberof editor.DatabaseSchema
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DatabaseSchema.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.tables != null && message.hasOwnProperty("tables")) {
                if (!Array.isArray(message.tables))
                    return "tables: array expected";
                for (let i = 0; i < message.tables.length; ++i) {
                    let error = $root.editor.TableSchema.verify(message.tables[i]);
                    if (error)
                        return "tables." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DatabaseSchema message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.DatabaseSchema
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.DatabaseSchema} DatabaseSchema
         */
        DatabaseSchema.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.DatabaseSchema)
                return object;
            let message = new $root.editor.DatabaseSchema();
            if (object.name != null)
                message.name = String(object.name);
            if (object.tables) {
                if (!Array.isArray(object.tables))
                    throw TypeError(".editor.DatabaseSchema.tables: array expected");
                message.tables = [];
                for (let i = 0; i < object.tables.length; ++i) {
                    if (typeof object.tables[i] !== "object")
                        throw TypeError(".editor.DatabaseSchema.tables: object expected");
                    message.tables[i] = $root.editor.TableSchema.fromObject(object.tables[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DatabaseSchema message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.DatabaseSchema
         * @static
         * @param {editor.DatabaseSchema} message DatabaseSchema
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DatabaseSchema.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tables = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tables && message.tables.length) {
                object.tables = [];
                for (let j = 0; j < message.tables.length; ++j)
                    object.tables[j] = $root.editor.TableSchema.toObject(message.tables[j], options);
            }
            return object;
        };

        /**
         * Converts this DatabaseSchema to JSON.
         * @function toJSON
         * @memberof editor.DatabaseSchema
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DatabaseSchema.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DatabaseSchema
         * @function getTypeUrl
         * @memberof editor.DatabaseSchema
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DatabaseSchema.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.DatabaseSchema";
        };

        return DatabaseSchema;
    })();

    editor.TableSchema = (function() {

        /**
         * Properties of a TableSchema.
         * @memberof editor
         * @interface ITableSchema
         * @property {string|null} [name] TableSchema name
         * @property {Array.<editor.IColumnSchema>|null} [columns] TableSchema columns
         */

        /**
         * Constructs a new TableSchema.
         * @memberof editor
         * @classdesc Represents a TableSchema.
         * @implements ITableSchema
         * @constructor
         * @param {editor.ITableSchema=} [properties] Properties to set
         */
        function TableSchema(properties) {
            this.columns = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableSchema name.
         * @member {string} name
         * @memberof editor.TableSchema
         * @instance
         */
        TableSchema.prototype.name = "";

        /**
         * TableSchema columns.
         * @member {Array.<editor.IColumnSchema>} columns
         * @memberof editor.TableSchema
         * @instance
         */
        TableSchema.prototype.columns = $util.emptyArray;

        /**
         * Creates a new TableSchema instance using the specified properties.
         * @function create
         * @memberof editor.TableSchema
         * @static
         * @param {editor.ITableSchema=} [properties] Properties to set
         * @returns {editor.TableSchema} TableSchema instance
         */
        TableSchema.create = function create(properties) {
            return new TableSchema(properties);
        };

        /**
         * Encodes the specified TableSchema message. Does not implicitly {@link editor.TableSchema.verify|verify} messages.
         * @function encode
         * @memberof editor.TableSchema
         * @static
         * @param {editor.ITableSchema} message TableSchema message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableSchema.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.columns != null && message.columns.length)
                for (let i = 0; i < message.columns.length; ++i)
                    $root.editor.ColumnSchema.encode(message.columns[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TableSchema message, length delimited. Does not implicitly {@link editor.TableSchema.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.TableSchema
         * @static
         * @param {editor.ITableSchema} message TableSchema message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableSchema.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableSchema message from the specified reader or buffer.
         * @function decode
         * @memberof editor.TableSchema
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.TableSchema} TableSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableSchema.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.TableSchema();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.columns && message.columns.length))
                            message.columns = [];
                        message.columns.push($root.editor.ColumnSchema.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableSchema message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.TableSchema
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.TableSchema} TableSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableSchema.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableSchema message.
         * @function verify
         * @memberof editor.TableSchema
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableSchema.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.columns != null && message.hasOwnProperty("columns")) {
                if (!Array.isArray(message.columns))
                    return "columns: array expected";
                for (let i = 0; i < message.columns.length; ++i) {
                    let error = $root.editor.ColumnSchema.verify(message.columns[i]);
                    if (error)
                        return "columns." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TableSchema message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.TableSchema
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.TableSchema} TableSchema
         */
        TableSchema.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.TableSchema)
                return object;
            let message = new $root.editor.TableSchema();
            if (object.name != null)
                message.name = String(object.name);
            if (object.columns) {
                if (!Array.isArray(object.columns))
                    throw TypeError(".editor.TableSchema.columns: array expected");
                message.columns = [];
                for (let i = 0; i < object.columns.length; ++i) {
                    if (typeof object.columns[i] !== "object")
                        throw TypeError(".editor.TableSchema.columns: object expected");
                    message.columns[i] = $root.editor.ColumnSchema.fromObject(object.columns[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TableSchema message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.TableSchema
         * @static
         * @param {editor.TableSchema} message TableSchema
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableSchema.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.columns = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.columns && message.columns.length) {
                object.columns = [];
                for (let j = 0; j < message.columns.length; ++j)
                    object.columns[j] = $root.editor.ColumnSchema.toObject(message.columns[j], options);
            }
            return object;
        };

        /**
         * Converts this TableSchema to JSON.
         * @function toJSON
         * @memberof editor.TableSchema
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableSchema.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TableSchema
         * @function getTypeUrl
         * @memberof editor.TableSchema
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TableSchema.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.TableSchema";
        };

        return TableSchema;
    })();

    editor.ColumnSchema = (function() {

        /**
         * Properties of a ColumnSchema.
         * @memberof editor
         * @interface IColumnSchema
         * @property {string|null} [name] ColumnSchema name
         * @property {string|null} [dataType] ColumnSchema dataType
         * @property {boolean|null} [isNullable] ColumnSchema isNullable
         * @property {boolean|null} [isPrimaryKey] ColumnSchema isPrimaryKey
         */

        /**
         * Constructs a new ColumnSchema.
         * @memberof editor
         * @classdesc Represents a ColumnSchema.
         * @implements IColumnSchema
         * @constructor
         * @param {editor.IColumnSchema=} [properties] Properties to set
         */
        function ColumnSchema(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ColumnSchema name.
         * @member {string} name
         * @memberof editor.ColumnSchema
         * @instance
         */
        ColumnSchema.prototype.name = "";

        /**
         * ColumnSchema dataType.
         * @member {string} dataType
         * @memberof editor.ColumnSchema
         * @instance
         */
        ColumnSchema.prototype.dataType = "";

        /**
         * ColumnSchema isNullable.
         * @member {boolean} isNullable
         * @memberof editor.ColumnSchema
         * @instance
         */
        ColumnSchema.prototype.isNullable = false;

        /**
         * ColumnSchema isPrimaryKey.
         * @member {boolean} isPrimaryKey
         * @memberof editor.ColumnSchema
         * @instance
         */
        ColumnSchema.prototype.isPrimaryKey = false;

        /**
         * Creates a new ColumnSchema instance using the specified properties.
         * @function create
         * @memberof editor.ColumnSchema
         * @static
         * @param {editor.IColumnSchema=} [properties] Properties to set
         * @returns {editor.ColumnSchema} ColumnSchema instance
         */
        ColumnSchema.create = function create(properties) {
            return new ColumnSchema(properties);
        };

        /**
         * Encodes the specified ColumnSchema message. Does not implicitly {@link editor.ColumnSchema.verify|verify} messages.
         * @function encode
         * @memberof editor.ColumnSchema
         * @static
         * @param {editor.IColumnSchema} message ColumnSchema message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ColumnSchema.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.dataType);
            if (message.isNullable != null && Object.hasOwnProperty.call(message, "isNullable"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isNullable);
            if (message.isPrimaryKey != null && Object.hasOwnProperty.call(message, "isPrimaryKey"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isPrimaryKey);
            return writer;
        };

        /**
         * Encodes the specified ColumnSchema message, length delimited. Does not implicitly {@link editor.ColumnSchema.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.ColumnSchema
         * @static
         * @param {editor.IColumnSchema} message ColumnSchema message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ColumnSchema.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ColumnSchema message from the specified reader or buffer.
         * @function decode
         * @memberof editor.ColumnSchema
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.ColumnSchema} ColumnSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ColumnSchema.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.ColumnSchema();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.dataType = reader.string();
                        break;
                    }
                case 3: {
                        message.isNullable = reader.bool();
                        break;
                    }
                case 4: {
                        message.isPrimaryKey = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ColumnSchema message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.ColumnSchema
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.ColumnSchema} ColumnSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ColumnSchema.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ColumnSchema message.
         * @function verify
         * @memberof editor.ColumnSchema
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ColumnSchema.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                if (!$util.isString(message.dataType))
                    return "dataType: string expected";
            if (message.isNullable != null && message.hasOwnProperty("isNullable"))
                if (typeof message.isNullable !== "boolean")
                    return "isNullable: boolean expected";
            if (message.isPrimaryKey != null && message.hasOwnProperty("isPrimaryKey"))
                if (typeof message.isPrimaryKey !== "boolean")
                    return "isPrimaryKey: boolean expected";
            return null;
        };

        /**
         * Creates a ColumnSchema message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.ColumnSchema
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.ColumnSchema} ColumnSchema
         */
        ColumnSchema.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.ColumnSchema)
                return object;
            let message = new $root.editor.ColumnSchema();
            if (object.name != null)
                message.name = String(object.name);
            if (object.dataType != null)
                message.dataType = String(object.dataType);
            if (object.isNullable != null)
                message.isNullable = Boolean(object.isNullable);
            if (object.isPrimaryKey != null)
                message.isPrimaryKey = Boolean(object.isPrimaryKey);
            return message;
        };

        /**
         * Creates a plain object from a ColumnSchema message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.ColumnSchema
         * @static
         * @param {editor.ColumnSchema} message ColumnSchema
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ColumnSchema.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.dataType = "";
                object.isNullable = false;
                object.isPrimaryKey = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                object.dataType = message.dataType;
            if (message.isNullable != null && message.hasOwnProperty("isNullable"))
                object.isNullable = message.isNullable;
            if (message.isPrimaryKey != null && message.hasOwnProperty("isPrimaryKey"))
                object.isPrimaryKey = message.isPrimaryKey;
            return object;
        };

        /**
         * Converts this ColumnSchema to JSON.
         * @function toJSON
         * @memberof editor.ColumnSchema
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ColumnSchema.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ColumnSchema
         * @function getTypeUrl
         * @memberof editor.ColumnSchema
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ColumnSchema.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.ColumnSchema";
        };

        return ColumnSchema;
    })();

    editor.GenerateModelsRequest = (function() {

        /**
         * Properties of a GenerateModelsRequest.
         * @memberof editor
         * @interface IGenerateModelsRequest
         * @property {string|null} [connectionId] GenerateModelsRequest connectionId
         * @property {string|null} [namespace] GenerateModelsRequest namespace
         */

        /**
         * Constructs a new GenerateModelsRequest.
         * @memberof editor
         * @classdesc Represents a GenerateModelsRequest.
         * @implements IGenerateModelsRequest
         * @constructor
         * @param {editor.IGenerateModelsRequest=} [properties] Properties to set
         */
        function GenerateModelsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GenerateModelsRequest connectionId.
         * @member {string} connectionId
         * @memberof editor.GenerateModelsRequest
         * @instance
         */
        GenerateModelsRequest.prototype.connectionId = "";

        /**
         * GenerateModelsRequest namespace.
         * @member {string} namespace
         * @memberof editor.GenerateModelsRequest
         * @instance
         */
        GenerateModelsRequest.prototype.namespace = "";

        /**
         * Creates a new GenerateModelsRequest instance using the specified properties.
         * @function create
         * @memberof editor.GenerateModelsRequest
         * @static
         * @param {editor.IGenerateModelsRequest=} [properties] Properties to set
         * @returns {editor.GenerateModelsRequest} GenerateModelsRequest instance
         */
        GenerateModelsRequest.create = function create(properties) {
            return new GenerateModelsRequest(properties);
        };

        /**
         * Encodes the specified GenerateModelsRequest message. Does not implicitly {@link editor.GenerateModelsRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.GenerateModelsRequest
         * @static
         * @param {editor.IGenerateModelsRequest} message GenerateModelsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenerateModelsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectionId != null && Object.hasOwnProperty.call(message, "connectionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.connectionId);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            return writer;
        };

        /**
         * Encodes the specified GenerateModelsRequest message, length delimited. Does not implicitly {@link editor.GenerateModelsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.GenerateModelsRequest
         * @static
         * @param {editor.IGenerateModelsRequest} message GenerateModelsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenerateModelsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GenerateModelsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.GenerateModelsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.GenerateModelsRequest} GenerateModelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenerateModelsRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.GenerateModelsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.connectionId = reader.string();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GenerateModelsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.GenerateModelsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.GenerateModelsRequest} GenerateModelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenerateModelsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GenerateModelsRequest message.
         * @function verify
         * @memberof editor.GenerateModelsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GenerateModelsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                if (!$util.isString(message.connectionId))
                    return "connectionId: string expected";
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                if (!$util.isString(message.namespace))
                    return "namespace: string expected";
            return null;
        };

        /**
         * Creates a GenerateModelsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.GenerateModelsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.GenerateModelsRequest} GenerateModelsRequest
         */
        GenerateModelsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.GenerateModelsRequest)
                return object;
            let message = new $root.editor.GenerateModelsRequest();
            if (object.connectionId != null)
                message.connectionId = String(object.connectionId);
            if (object.namespace != null)
                message.namespace = String(object.namespace);
            return message;
        };

        /**
         * Creates a plain object from a GenerateModelsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.GenerateModelsRequest
         * @static
         * @param {editor.GenerateModelsRequest} message GenerateModelsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GenerateModelsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.connectionId = "";
                object.namespace = "";
            }
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                object.connectionId = message.connectionId;
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                object.namespace = message.namespace;
            return object;
        };

        /**
         * Converts this GenerateModelsRequest to JSON.
         * @function toJSON
         * @memberof editor.GenerateModelsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GenerateModelsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GenerateModelsRequest
         * @function getTypeUrl
         * @memberof editor.GenerateModelsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GenerateModelsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.GenerateModelsRequest";
        };

        return GenerateModelsRequest;
    })();

    editor.GenerateModelsReply = (function() {

        /**
         * Properties of a GenerateModelsReply.
         * @memberof editor
         * @interface IGenerateModelsReply
         * @property {boolean|null} [success] GenerateModelsReply success
         * @property {string|null} [errorMessage] GenerateModelsReply errorMessage
         * @property {Array.<string>|null} [generatedFilePaths] GenerateModelsReply generatedFilePaths
         */

        /**
         * Constructs a new GenerateModelsReply.
         * @memberof editor
         * @classdesc Represents a GenerateModelsReply.
         * @implements IGenerateModelsReply
         * @constructor
         * @param {editor.IGenerateModelsReply=} [properties] Properties to set
         */
        function GenerateModelsReply(properties) {
            this.generatedFilePaths = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GenerateModelsReply success.
         * @member {boolean} success
         * @memberof editor.GenerateModelsReply
         * @instance
         */
        GenerateModelsReply.prototype.success = false;

        /**
         * GenerateModelsReply errorMessage.
         * @member {string} errorMessage
         * @memberof editor.GenerateModelsReply
         * @instance
         */
        GenerateModelsReply.prototype.errorMessage = "";

        /**
         * GenerateModelsReply generatedFilePaths.
         * @member {Array.<string>} generatedFilePaths
         * @memberof editor.GenerateModelsReply
         * @instance
         */
        GenerateModelsReply.prototype.generatedFilePaths = $util.emptyArray;

        /**
         * Creates a new GenerateModelsReply instance using the specified properties.
         * @function create
         * @memberof editor.GenerateModelsReply
         * @static
         * @param {editor.IGenerateModelsReply=} [properties] Properties to set
         * @returns {editor.GenerateModelsReply} GenerateModelsReply instance
         */
        GenerateModelsReply.create = function create(properties) {
            return new GenerateModelsReply(properties);
        };

        /**
         * Encodes the specified GenerateModelsReply message. Does not implicitly {@link editor.GenerateModelsReply.verify|verify} messages.
         * @function encode
         * @memberof editor.GenerateModelsReply
         * @static
         * @param {editor.IGenerateModelsReply} message GenerateModelsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenerateModelsReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.generatedFilePaths != null && message.generatedFilePaths.length)
                for (let i = 0; i < message.generatedFilePaths.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.generatedFilePaths[i]);
            return writer;
        };

        /**
         * Encodes the specified GenerateModelsReply message, length delimited. Does not implicitly {@link editor.GenerateModelsReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.GenerateModelsReply
         * @static
         * @param {editor.IGenerateModelsReply} message GenerateModelsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenerateModelsReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GenerateModelsReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.GenerateModelsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.GenerateModelsReply} GenerateModelsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenerateModelsReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.GenerateModelsReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.generatedFilePaths && message.generatedFilePaths.length))
                            message.generatedFilePaths = [];
                        message.generatedFilePaths.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GenerateModelsReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.GenerateModelsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.GenerateModelsReply} GenerateModelsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenerateModelsReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GenerateModelsReply message.
         * @function verify
         * @memberof editor.GenerateModelsReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GenerateModelsReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.generatedFilePaths != null && message.hasOwnProperty("generatedFilePaths")) {
                if (!Array.isArray(message.generatedFilePaths))
                    return "generatedFilePaths: array expected";
                for (let i = 0; i < message.generatedFilePaths.length; ++i)
                    if (!$util.isString(message.generatedFilePaths[i]))
                        return "generatedFilePaths: string[] expected";
            }
            return null;
        };

        /**
         * Creates a GenerateModelsReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.GenerateModelsReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.GenerateModelsReply} GenerateModelsReply
         */
        GenerateModelsReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.GenerateModelsReply)
                return object;
            let message = new $root.editor.GenerateModelsReply();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.generatedFilePaths) {
                if (!Array.isArray(object.generatedFilePaths))
                    throw TypeError(".editor.GenerateModelsReply.generatedFilePaths: array expected");
                message.generatedFilePaths = [];
                for (let i = 0; i < object.generatedFilePaths.length; ++i)
                    message.generatedFilePaths[i] = String(object.generatedFilePaths[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GenerateModelsReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.GenerateModelsReply
         * @static
         * @param {editor.GenerateModelsReply} message GenerateModelsReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GenerateModelsReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.generatedFilePaths = [];
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.generatedFilePaths && message.generatedFilePaths.length) {
                object.generatedFilePaths = [];
                for (let j = 0; j < message.generatedFilePaths.length; ++j)
                    object.generatedFilePaths[j] = message.generatedFilePaths[j];
            }
            return object;
        };

        /**
         * Converts this GenerateModelsReply to JSON.
         * @function toJSON
         * @memberof editor.GenerateModelsReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GenerateModelsReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GenerateModelsReply
         * @function getTypeUrl
         * @memberof editor.GenerateModelsReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GenerateModelsReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.GenerateModelsReply";
        };

        return GenerateModelsReply;
    })();

    editor.ConnectRequest = (function() {

        /**
         * Properties of a ConnectRequest.
         * @memberof editor
         * @interface IConnectRequest
         * @property {string|null} [connectionId] ConnectRequest connectionId
         */

        /**
         * Constructs a new ConnectRequest.
         * @memberof editor
         * @classdesc Represents a ConnectRequest.
         * @implements IConnectRequest
         * @constructor
         * @param {editor.IConnectRequest=} [properties] Properties to set
         */
        function ConnectRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectRequest connectionId.
         * @member {string} connectionId
         * @memberof editor.ConnectRequest
         * @instance
         */
        ConnectRequest.prototype.connectionId = "";

        /**
         * Creates a new ConnectRequest instance using the specified properties.
         * @function create
         * @memberof editor.ConnectRequest
         * @static
         * @param {editor.IConnectRequest=} [properties] Properties to set
         * @returns {editor.ConnectRequest} ConnectRequest instance
         */
        ConnectRequest.create = function create(properties) {
            return new ConnectRequest(properties);
        };

        /**
         * Encodes the specified ConnectRequest message. Does not implicitly {@link editor.ConnectRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.ConnectRequest
         * @static
         * @param {editor.IConnectRequest} message ConnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectionId != null && Object.hasOwnProperty.call(message, "connectionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.connectionId);
            return writer;
        };

        /**
         * Encodes the specified ConnectRequest message, length delimited. Does not implicitly {@link editor.ConnectRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.ConnectRequest
         * @static
         * @param {editor.IConnectRequest} message ConnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.ConnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.ConnectRequest} ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.ConnectRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.connectionId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.ConnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.ConnectRequest} ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectRequest message.
         * @function verify
         * @memberof editor.ConnectRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                if (!$util.isString(message.connectionId))
                    return "connectionId: string expected";
            return null;
        };

        /**
         * Creates a ConnectRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.ConnectRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.ConnectRequest} ConnectRequest
         */
        ConnectRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.ConnectRequest)
                return object;
            let message = new $root.editor.ConnectRequest();
            if (object.connectionId != null)
                message.connectionId = String(object.connectionId);
            return message;
        };

        /**
         * Creates a plain object from a ConnectRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.ConnectRequest
         * @static
         * @param {editor.ConnectRequest} message ConnectRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.connectionId = "";
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                object.connectionId = message.connectionId;
            return object;
        };

        /**
         * Converts this ConnectRequest to JSON.
         * @function toJSON
         * @memberof editor.ConnectRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnectRequest
         * @function getTypeUrl
         * @memberof editor.ConnectRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnectRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.ConnectRequest";
        };

        return ConnectRequest;
    })();

    editor.ConnectReply = (function() {

        /**
         * Properties of a ConnectReply.
         * @memberof editor
         * @interface IConnectReply
         * @property {boolean|null} [success] ConnectReply success
         * @property {string|null} [errorMessage] ConnectReply errorMessage
         * @property {Array.<editor.ISourceFile>|null} [generatedFiles] ConnectReply generatedFiles
         */

        /**
         * Constructs a new ConnectReply.
         * @memberof editor
         * @classdesc Represents a ConnectReply.
         * @implements IConnectReply
         * @constructor
         * @param {editor.IConnectReply=} [properties] Properties to set
         */
        function ConnectReply(properties) {
            this.generatedFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectReply success.
         * @member {boolean} success
         * @memberof editor.ConnectReply
         * @instance
         */
        ConnectReply.prototype.success = false;

        /**
         * ConnectReply errorMessage.
         * @member {string} errorMessage
         * @memberof editor.ConnectReply
         * @instance
         */
        ConnectReply.prototype.errorMessage = "";

        /**
         * ConnectReply generatedFiles.
         * @member {Array.<editor.ISourceFile>} generatedFiles
         * @memberof editor.ConnectReply
         * @instance
         */
        ConnectReply.prototype.generatedFiles = $util.emptyArray;

        /**
         * Creates a new ConnectReply instance using the specified properties.
         * @function create
         * @memberof editor.ConnectReply
         * @static
         * @param {editor.IConnectReply=} [properties] Properties to set
         * @returns {editor.ConnectReply} ConnectReply instance
         */
        ConnectReply.create = function create(properties) {
            return new ConnectReply(properties);
        };

        /**
         * Encodes the specified ConnectReply message. Does not implicitly {@link editor.ConnectReply.verify|verify} messages.
         * @function encode
         * @memberof editor.ConnectReply
         * @static
         * @param {editor.IConnectReply} message ConnectReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.generatedFiles != null && message.generatedFiles.length)
                for (let i = 0; i < message.generatedFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.generatedFiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ConnectReply message, length delimited. Does not implicitly {@link editor.ConnectReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.ConnectReply
         * @static
         * @param {editor.IConnectReply} message ConnectReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.ConnectReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.ConnectReply} ConnectReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.ConnectReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.generatedFiles && message.generatedFiles.length))
                            message.generatedFiles = [];
                        message.generatedFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.ConnectReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.ConnectReply} ConnectReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectReply message.
         * @function verify
         * @memberof editor.ConnectReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.generatedFiles != null && message.hasOwnProperty("generatedFiles")) {
                if (!Array.isArray(message.generatedFiles))
                    return "generatedFiles: array expected";
                for (let i = 0; i < message.generatedFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.generatedFiles[i]);
                    if (error)
                        return "generatedFiles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ConnectReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.ConnectReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.ConnectReply} ConnectReply
         */
        ConnectReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.ConnectReply)
                return object;
            let message = new $root.editor.ConnectReply();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.generatedFiles) {
                if (!Array.isArray(object.generatedFiles))
                    throw TypeError(".editor.ConnectReply.generatedFiles: array expected");
                message.generatedFiles = [];
                for (let i = 0; i < object.generatedFiles.length; ++i) {
                    if (typeof object.generatedFiles[i] !== "object")
                        throw TypeError(".editor.ConnectReply.generatedFiles: object expected");
                    message.generatedFiles[i] = $root.editor.SourceFile.fromObject(object.generatedFiles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ConnectReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.ConnectReply
         * @static
         * @param {editor.ConnectReply} message ConnectReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.generatedFiles = [];
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.generatedFiles && message.generatedFiles.length) {
                object.generatedFiles = [];
                for (let j = 0; j < message.generatedFiles.length; ++j)
                    object.generatedFiles[j] = $root.editor.SourceFile.toObject(message.generatedFiles[j], options);
            }
            return object;
        };

        /**
         * Converts this ConnectReply to JSON.
         * @function toJSON
         * @memberof editor.ConnectReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnectReply
         * @function getTypeUrl
         * @memberof editor.ConnectReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnectReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.ConnectReply";
        };

        return ConnectReply;
    })();

    editor.GetGeneratedModelsRequest = (function() {

        /**
         * Properties of a GetGeneratedModelsRequest.
         * @memberof editor
         * @interface IGetGeneratedModelsRequest
         * @property {string|null} [connectionId] GetGeneratedModelsRequest connectionId
         */

        /**
         * Constructs a new GetGeneratedModelsRequest.
         * @memberof editor
         * @classdesc Represents a GetGeneratedModelsRequest.
         * @implements IGetGeneratedModelsRequest
         * @constructor
         * @param {editor.IGetGeneratedModelsRequest=} [properties] Properties to set
         */
        function GetGeneratedModelsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGeneratedModelsRequest connectionId.
         * @member {string} connectionId
         * @memberof editor.GetGeneratedModelsRequest
         * @instance
         */
        GetGeneratedModelsRequest.prototype.connectionId = "";

        /**
         * Creates a new GetGeneratedModelsRequest instance using the specified properties.
         * @function create
         * @memberof editor.GetGeneratedModelsRequest
         * @static
         * @param {editor.IGetGeneratedModelsRequest=} [properties] Properties to set
         * @returns {editor.GetGeneratedModelsRequest} GetGeneratedModelsRequest instance
         */
        GetGeneratedModelsRequest.create = function create(properties) {
            return new GetGeneratedModelsRequest(properties);
        };

        /**
         * Encodes the specified GetGeneratedModelsRequest message. Does not implicitly {@link editor.GetGeneratedModelsRequest.verify|verify} messages.
         * @function encode
         * @memberof editor.GetGeneratedModelsRequest
         * @static
         * @param {editor.IGetGeneratedModelsRequest} message GetGeneratedModelsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGeneratedModelsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectionId != null && Object.hasOwnProperty.call(message, "connectionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.connectionId);
            return writer;
        };

        /**
         * Encodes the specified GetGeneratedModelsRequest message, length delimited. Does not implicitly {@link editor.GetGeneratedModelsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.GetGeneratedModelsRequest
         * @static
         * @param {editor.IGetGeneratedModelsRequest} message GetGeneratedModelsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGeneratedModelsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGeneratedModelsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof editor.GetGeneratedModelsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.GetGeneratedModelsRequest} GetGeneratedModelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGeneratedModelsRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.GetGeneratedModelsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.connectionId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGeneratedModelsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.GetGeneratedModelsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.GetGeneratedModelsRequest} GetGeneratedModelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGeneratedModelsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGeneratedModelsRequest message.
         * @function verify
         * @memberof editor.GetGeneratedModelsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGeneratedModelsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                if (!$util.isString(message.connectionId))
                    return "connectionId: string expected";
            return null;
        };

        /**
         * Creates a GetGeneratedModelsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.GetGeneratedModelsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.GetGeneratedModelsRequest} GetGeneratedModelsRequest
         */
        GetGeneratedModelsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.GetGeneratedModelsRequest)
                return object;
            let message = new $root.editor.GetGeneratedModelsRequest();
            if (object.connectionId != null)
                message.connectionId = String(object.connectionId);
            return message;
        };

        /**
         * Creates a plain object from a GetGeneratedModelsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.GetGeneratedModelsRequest
         * @static
         * @param {editor.GetGeneratedModelsRequest} message GetGeneratedModelsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGeneratedModelsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.connectionId = "";
            if (message.connectionId != null && message.hasOwnProperty("connectionId"))
                object.connectionId = message.connectionId;
            return object;
        };

        /**
         * Converts this GetGeneratedModelsRequest to JSON.
         * @function toJSON
         * @memberof editor.GetGeneratedModelsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGeneratedModelsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGeneratedModelsRequest
         * @function getTypeUrl
         * @memberof editor.GetGeneratedModelsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGeneratedModelsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.GetGeneratedModelsRequest";
        };

        return GetGeneratedModelsRequest;
    })();

    editor.GetGeneratedModelsReply = (function() {

        /**
         * Properties of a GetGeneratedModelsReply.
         * @memberof editor
         * @interface IGetGeneratedModelsReply
         * @property {boolean|null} [success] GetGeneratedModelsReply success
         * @property {string|null} [errorMessage] GetGeneratedModelsReply errorMessage
         * @property {Array.<editor.ISourceFile>|null} [generatedFiles] GetGeneratedModelsReply generatedFiles
         */

        /**
         * Constructs a new GetGeneratedModelsReply.
         * @memberof editor
         * @classdesc Represents a GetGeneratedModelsReply.
         * @implements IGetGeneratedModelsReply
         * @constructor
         * @param {editor.IGetGeneratedModelsReply=} [properties] Properties to set
         */
        function GetGeneratedModelsReply(properties) {
            this.generatedFiles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGeneratedModelsReply success.
         * @member {boolean} success
         * @memberof editor.GetGeneratedModelsReply
         * @instance
         */
        GetGeneratedModelsReply.prototype.success = false;

        /**
         * GetGeneratedModelsReply errorMessage.
         * @member {string} errorMessage
         * @memberof editor.GetGeneratedModelsReply
         * @instance
         */
        GetGeneratedModelsReply.prototype.errorMessage = "";

        /**
         * GetGeneratedModelsReply generatedFiles.
         * @member {Array.<editor.ISourceFile>} generatedFiles
         * @memberof editor.GetGeneratedModelsReply
         * @instance
         */
        GetGeneratedModelsReply.prototype.generatedFiles = $util.emptyArray;

        /**
         * Creates a new GetGeneratedModelsReply instance using the specified properties.
         * @function create
         * @memberof editor.GetGeneratedModelsReply
         * @static
         * @param {editor.IGetGeneratedModelsReply=} [properties] Properties to set
         * @returns {editor.GetGeneratedModelsReply} GetGeneratedModelsReply instance
         */
        GetGeneratedModelsReply.create = function create(properties) {
            return new GetGeneratedModelsReply(properties);
        };

        /**
         * Encodes the specified GetGeneratedModelsReply message. Does not implicitly {@link editor.GetGeneratedModelsReply.verify|verify} messages.
         * @function encode
         * @memberof editor.GetGeneratedModelsReply
         * @static
         * @param {editor.IGetGeneratedModelsReply} message GetGeneratedModelsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGeneratedModelsReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.generatedFiles != null && message.generatedFiles.length)
                for (let i = 0; i < message.generatedFiles.length; ++i)
                    $root.editor.SourceFile.encode(message.generatedFiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGeneratedModelsReply message, length delimited. Does not implicitly {@link editor.GetGeneratedModelsReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof editor.GetGeneratedModelsReply
         * @static
         * @param {editor.IGetGeneratedModelsReply} message GetGeneratedModelsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGeneratedModelsReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGeneratedModelsReply message from the specified reader or buffer.
         * @function decode
         * @memberof editor.GetGeneratedModelsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {editor.GetGeneratedModelsReply} GetGeneratedModelsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGeneratedModelsReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.editor.GetGeneratedModelsReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.generatedFiles && message.generatedFiles.length))
                            message.generatedFiles = [];
                        message.generatedFiles.push($root.editor.SourceFile.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGeneratedModelsReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof editor.GetGeneratedModelsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {editor.GetGeneratedModelsReply} GetGeneratedModelsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGeneratedModelsReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGeneratedModelsReply message.
         * @function verify
         * @memberof editor.GetGeneratedModelsReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGeneratedModelsReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.generatedFiles != null && message.hasOwnProperty("generatedFiles")) {
                if (!Array.isArray(message.generatedFiles))
                    return "generatedFiles: array expected";
                for (let i = 0; i < message.generatedFiles.length; ++i) {
                    let error = $root.editor.SourceFile.verify(message.generatedFiles[i]);
                    if (error)
                        return "generatedFiles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGeneratedModelsReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof editor.GetGeneratedModelsReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {editor.GetGeneratedModelsReply} GetGeneratedModelsReply
         */
        GetGeneratedModelsReply.fromObject = function fromObject(object) {
            if (object instanceof $root.editor.GetGeneratedModelsReply)
                return object;
            let message = new $root.editor.GetGeneratedModelsReply();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.generatedFiles) {
                if (!Array.isArray(object.generatedFiles))
                    throw TypeError(".editor.GetGeneratedModelsReply.generatedFiles: array expected");
                message.generatedFiles = [];
                for (let i = 0; i < object.generatedFiles.length; ++i) {
                    if (typeof object.generatedFiles[i] !== "object")
                        throw TypeError(".editor.GetGeneratedModelsReply.generatedFiles: object expected");
                    message.generatedFiles[i] = $root.editor.SourceFile.fromObject(object.generatedFiles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGeneratedModelsReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof editor.GetGeneratedModelsReply
         * @static
         * @param {editor.GetGeneratedModelsReply} message GetGeneratedModelsReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGeneratedModelsReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.generatedFiles = [];
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.generatedFiles && message.generatedFiles.length) {
                object.generatedFiles = [];
                for (let j = 0; j < message.generatedFiles.length; ++j)
                    object.generatedFiles[j] = $root.editor.SourceFile.toObject(message.generatedFiles[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGeneratedModelsReply to JSON.
         * @function toJSON
         * @memberof editor.GetGeneratedModelsReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGeneratedModelsReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGeneratedModelsReply
         * @function getTypeUrl
         * @memberof editor.GetGeneratedModelsReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGeneratedModelsReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/editor.GetGeneratedModelsReply";
        };

        return GetGeneratedModelsReply;
    })();

    return editor;
})();

export { $root as default };
