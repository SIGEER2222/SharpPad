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
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
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
            }
            if (message.displayText != null && message.hasOwnProperty("displayText"))
                object.displayText = message.displayText;
            if (message.insertText != null && message.hasOwnProperty("insertText"))
                object.insertText = message.insertText;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
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
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
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
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
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
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
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
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
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
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
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
            if (options.defaults) {
                object.code = "";
                object.position = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
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
            if (options.defaults) {
                object.code = "";
                object.typeName = "";
                object.methodName = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.typeName != null && message.hasOwnProperty("typeName"))
                object.typeName = message.typeName;
            if (message.methodName != null && message.hasOwnProperty("methodName"))
                object.methodName = message.methodName;
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

    return editor;
})();

export { $root as default };
