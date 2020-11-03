(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./mail.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/has-flag/index.js":
/*!*****************************************!*\
  !*** ../node_modules/has-flag/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ "../node_modules/postmark/dist/client/AccountClient.js":
/*!*************************************************************!*\
  !*** ../node_modules/postmark/dist/client/AccountClient.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseClient_1 = __webpack_require__(/*! ./BaseClient */ "../node_modules/postmark/dist/client/BaseClient.js");
var models_1 = __webpack_require__(/*! ./models */ "../node_modules/postmark/dist/client/models/index.js");
var models_2 = __webpack_require__(/*! ./models */ "../node_modules/postmark/dist/client/models/index.js");
var AccountClient = /** @class */ (function (_super) {
    __extends(AccountClient, _super);
    /**
     * Create a new AccountClient
     * @param accountToken The account token that should be used with requests.
     * @param configOptions Various options to customize client behavior.
     */
    function AccountClient(accountToken, configOptions) {
        return _super.call(this, accountToken, models_1.ClientOptions.DefaultHeaderNames.ACCOUNT_TOKEN, configOptions) || this;
    }
    /**
     * Retrieve a list of Servers.
     *
     * @param filter - An optional filter for which data is retrieved.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.getServers = function (filter, callback) {
        if (filter === void 0) { filter = new models_2.ServerFilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.GET, "/servers", filter, callback);
    };
    /**
     * Retrieve a single server by ID.
     *
     * @param id - The ID of the Server for which you wish to retrieve details.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.getServer = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.GET, "/servers/" + id, {}, callback);
    };
    /**
     * Create a new Server.
     *
     * @param options - The options to be used to create new Server.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.createServer = function (options, callback) {
        return this.processRequestWithBody(models_1.ClientOptions.HttpMethod.POST, "/servers", options, callback);
    };
    /**
     * Modify the Server associated with this Client.
     *
     * @param id - The ID of the Server you wish to update.
     * @param options - The options to be used to create new Server.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.editServer = function (id, options, callback) {
        return this.processRequestWithBody(models_1.ClientOptions.HttpMethod.PUT, "/servers/" + id, options, callback);
    };
    /**
     * Modify the Server associated with this Client.
     *
     * @param id - The ID of the Domain you wish to delete.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.deleteServer = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.DELETE, "/servers/" + id, {}, callback);
    };
    /**
     * Retrieve a batch of Domains.
     *
     * @param filter - An optional filter for which data is retrieved.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.getDomains = function (filter, callback) {
        if (filter === void 0) { filter = new models_1.FilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.GET, "/domains", filter, callback);
    };
    /**
     * Retrieve a single Domain by ID.
     *
     * @param id - The ID of the Domain for which you wish to retrieve details.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.getDomain = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.GET, "/domains/" + id, {}, callback);
    };
    /**
     * Create a new Domain.
     *
     * @param options - The options to be used to create new Domain.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.createDomain = function (options, callback) {
        return this.processRequestWithBody(models_1.ClientOptions.HttpMethod.POST, "/domains/", options, callback);
    };
    /**
     * Update a Domain.
     *
     * @param id - The ID of the Domain you wish to update.
     * @param domain - The values on the Domain you wish to update.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.editDomain = function (id, options, callback) {
        return this.processRequestWithBody(models_1.ClientOptions.HttpMethod.PUT, "/domains/" + id, options, callback);
    };
    /**
     * Delete a Domain.
     *
     * @param id - The ID of the Domain you wish to delete.
     * @param options - The options to be used in create Domain.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.deleteDomain = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.DELETE, "/domains/" + id, {}, callback);
    };
    /**
     * Trigger Domain DKIM key verification.
     *
     * @param id - The ID of the Domain you wish to trigger DKIM verification for.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.verifyDomainDKIM = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.PUT, "/domains/" + id + "/verifyDKIM", {}, callback);
    };
    /**
     * Trigger Domain DKIM key verification.
     *
     * @param id - The ID of the Domain you wish to trigger DKIM verification for.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.verifyDomainReturnPath = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.PUT, "/domains/" + id + "/verifyReturnPath", {}, callback);
    };
    /**
     * Trigger Domain DKIM key verification.
     *
     * @param id - The ID of the Domain you wish to trigger DKIM verification for.
     * @param callback If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.verifyDomainSPF = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.PUT, "/domains/" + id + "/verifySPF", {}, callback);
    };
    /**
     * Trigger Domain DKIM key verification.
     *
     * @param id - The ID of the Domain you wish to trigger DKIM verification for.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.rotateDomainDKIM = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.PUT, "/domains/" + id + "/rotateDKIM", {}, callback);
    };
    /**
     * Retrieve a single Sender Signature by ID.
     *
     * @param id - The ID of the Sender Signature for which you wish to retrieve details.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.getSenderSignature = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.GET, "/senders/" + id, {}, callback);
    };
    /**
     * Retrieve a batch of Sender Signatures.
     *
     * @param filter - An optional filter for which data is retrieved.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.getSenderSignatures = function (filter, callback) {
        if (filter === void 0) { filter = new models_1.FilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.GET, "/senders", filter, callback);
    };
    /**
     * Create a new Sender Signature.
     *
     * @param options - The options to be used to create new Sender Signature.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.createSenderSignature = function (options, callback) {
        return this.processRequestWithBody(models_1.ClientOptions.HttpMethod.POST, "/senders/", options, callback);
    };
    /**
     * Update a Sender Signature.
     *
     * @param id - The ID of the Sender Signature for which you wish to update.
     * @param options - The values on the Sender Signature you wish to update.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.editSenderSignature = function (id, options, callback) {
        return this.processRequestWithBody(models_1.ClientOptions.HttpMethod.PUT, "/senders/" + id, options, callback);
    };
    /**
     * Delete a Domain.
     *
     * @param id - The ID of the Domain you wish to delete.
     * @param options - The options to be used in create Domain.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.deleteSenderSignature = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.DELETE, "/senders/" + id, {}, callback);
    };
    /**
     * Request a new confirmation email to be sent to the email address associated with a Sender Signature.
     *
     * @param id - The ID of the Sender Signature.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.resendSenderSignatureConfirmation = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.POST, "/senders/" + id + "/resend", {}, callback);
    };
    /**
     * Request that the SPF records for Sender Signature be verified.
     *
     * @param id - The ID of the Sender Signature.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.verifySenderSignatureSPF = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.POST, "/senders/" + id + "/verifySpf", {}, callback);
    };
    /**
     * Request that the SPF records for Sender Signature be verified.
     *
     * @param id - The ID of the Sender Signature.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.requestNewDKIMForSenderSignature = function (id, callback) {
        return this.processRequestWithoutBody(models_1.ClientOptions.HttpMethod.POST, "/senders/" + id + "/requestNewDkim", {}, callback);
    };
    /**
     * Request a push of templates from one server to another.
     *
     * @param options - details for pushing templates from one place to another.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    AccountClient.prototype.pushTemplates = function (options, callback) {
        return this.processRequestWithBody(models_1.ClientOptions.HttpMethod.PUT, "/templates/push", options, callback);
    };
    return AccountClient;
}(BaseClient_1.default));
exports.default = AccountClient;
//# sourceMappingURL=AccountClient.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/BaseClient.js":
/*!**********************************************************!*\
  !*** ../node_modules/postmark/dist/client/BaseClient.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "../node_modules/postmark/node_modules/axios/index.js");
var ErrorHandler_1 = __webpack_require__(/*! ./ErrorHandler */ "../node_modules/postmark/dist/client/ErrorHandler.js");
var packageJson = __webpack_require__(/*! ../../package.json */ "../node_modules/postmark/package.json");
var CLIENT_VERSION = packageJson.version;
/**
 * Base client class from which client classes can be implemented, in our case, AccountClient and ServerClient classes.
 * This class is NOT intended to be instantiated directly.
 */
var BaseClient = /** @class */ (function () {
    function BaseClient(token, authHeader, configOptions) {
        this.clientVersion = CLIENT_VERSION;
        this.token = token.trim();
        this.authHeader = authHeader;
        this.clientOptions = __assign({}, BaseClient.DefaultOptions, configOptions);
        this.httpClient = this.buildDefaultHttpClient();
        this.errorHandler = new ErrorHandler_1.ErrorHandler();
        this.verifyToken(token);
    }
    BaseClient.prototype.setClientOptions = function (configOptions) {
        this.clientOptions = configOptions;
        this.buildDefaultHttpClient();
    };
    BaseClient.prototype.getClientOptions = function () {
        return this.clientOptions;
    };
    /**
     * JSON object with default headers sent by HTTP request.
     */
    BaseClient.prototype.getComposedHttpRequestHeaders = function () {
        var _a;
        return _a = {},
            _a[this.authHeader] = this.token,
            _a["Accept"] = "application/json",
            _a["User-Agent"] = "Postmark.JS - " + this.clientVersion,
            _a;
    };
    /**
     * Process http request with sending body - data.
     *
     * @see processRequest for more details.
     */
    BaseClient.prototype.processRequestWithBody = function (method, path, body, callback) {
        return this.processRequest(method, path, {}, body, callback);
    };
    /**
     * Process http request without sending body - data.
     *
     * @see processRequest for more details.
     */
    BaseClient.prototype.processRequestWithoutBody = function (method, path, queryParameters, callback) {
        if (queryParameters === void 0) { queryParameters = {}; }
        return this.processRequest(method, path, queryParameters, null, callback);
    };
    /**
     * Set default values for count and offset when doing filtering with API requests if they are not specified by filter.
     */
    BaseClient.prototype.setDefaultPaginationValues = function (filter) {
        filter.count = filter.count || 100;
        filter.offset = filter.offset || 0;
    };
    /**
     * Process request for Postmark ClientOptions.
     *
     * @param method - see processHttpRequest for details
     * @param path - see processHttpRequest for details
     * @param queryParameters - see processHttpRequest for details
     * @param body - see processHttpRequest for details
     * @param callback - callback function to be executed.
     *
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    BaseClient.prototype.processRequest = function (method, path, queryParameters, body, callback) {
        var httpRequest = this.processHttpRequest(method, path, queryParameters, body);
        this.processCallbackRequest(httpRequest, callback);
        return httpRequest;
    };
    /**
     * Process HTTP request.
     *
     * @param method - Which type of http request will be executed.
     * @param path - API URL endpoint.
     * @param queryParameters - Querystring parameters used for http request.
     * @param body - Data sent with http request.
     *
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    BaseClient.prototype.processHttpRequest = function (method, path, queryParameters, body) {
        var _this = this;
        return this.httpRequest(method, path, queryParameters, body)
            .then(function (response) { return response; })
            .catch(function (error) {
            throw _this.errorHandler.buildRequestError(error);
        });
    };
    /**
     * Process callback function for HTTP request.
     *
     * @param httpRequest - HTTP request for which callback will be executed
     * @param callback - callback function to be executed.
     */
    BaseClient.prototype.processCallbackRequest = function (httpRequest, callback) {
        if (callback) {
            httpRequest
                .then(function (response) { return callback(null, response); })
                .catch(function (error) { return callback(error, null); });
        }
    };
    /**
     * Process http request.
     *
     * @param method - Which type of http request will be executed.
     * @param path - API URL endpoint.
     * @param queryParameters - Querystring parameters used for http request.
     * @param body - Data sent with http request.
     */
    BaseClient.prototype.httpRequest = function (method, path, queryParameters, body) {
        return this.httpClient.request({
            method: method,
            url: path,
            data: body,
            headers: this.getComposedHttpRequestHeaders(),
            params: queryParameters,
        });
    };
    /**
     * Create http client instance with default settings.
     *
     * @return {AxiosInstance}
     */
    BaseClient.prototype.buildDefaultHttpClient = function () {
        var httpClient = axios_1.default.create({
            baseURL: this.getBaseHttpRequestURL(),
            timeout: this.getRequestTimeoutInSeconds(),
            responseType: "json",
            maxContentLength: Infinity,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });
        httpClient.interceptors.response.use(function (response) { return (response.data); });
        return httpClient;
    };
    BaseClient.prototype.getRequestTimeoutInSeconds = function () {
        return (this.clientOptions.timeout || 60) * 1000;
    };
    BaseClient.prototype.getBaseHttpRequestURL = function () {
        var scheme = this.clientOptions.useHttps ? "https" : "http";
        return scheme + "://" + this.clientOptions.requestHost;
    };
    /**
     * Token can't be empty.
     *
     * @param {string} token - HTTP request token
     */
    BaseClient.prototype.verifyToken = function (token) {
        if (!token || token.trim() === "") {
            throw this.errorHandler.buildGeneralError("A valid API token must be provided.");
        }
    };
    /**
     * Client connection configuration options.
     * You may modify these values and new clients will use them.
     * Any values provided to a Client constructor will override default options.
     */
    BaseClient.DefaultOptions = {
        useHttps: true,
        requestHost: "api.postmarkapp.com",
        timeout: 60,
    };
    return BaseClient;
}());
exports.default = BaseClient;
//# sourceMappingURL=BaseClient.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/ErrorHandler.js":
/*!************************************************************!*\
  !*** ../node_modules/postmark/dist/client/ErrorHandler.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Errors = __webpack_require__(/*! ./models/client/Errors */ "../node_modules/postmark/dist/client/models/client/Errors.js");
/**
 * Handles general errors and all client request errors.
 * Client response errors are classified so that proper response error is generated.
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    /**
     * Process callback function for HTTP request.
     *
     * @param error - request error that needs to be transformed to proper Postmark error.
     *
     * @return {PostmarkError} - formatted Postmark error
     */
    ErrorHandler.prototype.buildRequestError = function (error) {
        var response = error.response;
        if (response !== undefined) {
            return this.buildErrorForResponse(response, error.message);
        }
        else if (error.message !== undefined) {
            return this.buildGeneralError(error.message);
        }
        else {
            return this.buildGeneralError(JSON.stringify(error, Object.getOwnPropertyNames(error)));
        }
    };
    /**
     * Build general Postmark error.
     *
     * @param errorMessage - error message that needs to be identified and transformed to proper Postmark error.
     *
     * @returns properly formatted Postmark error.
     */
    ErrorHandler.prototype.buildGeneralError = function (errorMessage) {
        return new Errors.PostmarkError(errorMessage);
    };
    /**
     * Build Postmark error based on response from http client.
     *
     * @param {AxiosResponse} response - request response used to transform to Postmark error.
     * @return {PostmarkError} - formatted Postmark error
     */
    ErrorHandler.prototype.buildErrorForResponse = function (response, errorMessage) {
        var data = response.data;
        var errorCode = this.retrieveDefaultOrValue(0, data.ErrorCode);
        var status = this.retrieveDefaultOrValue(0, response.status);
        var message = this.retrieveDefaultOrValue(errorMessage, data.Message);
        return this.buildRequestErrorByStatus(message, errorCode, status);
    };
    ErrorHandler.prototype.retrieveDefaultOrValue = function (defaultValue, data) {
        return (data === undefined) ? defaultValue : data;
    };
    /**
     * Build Postmark error based on HTTP request status.
     *
     * @param error - http request library error, that will be transformed to Postmark error.
     *
     * @returns properly formatted Postmark error.
     */
    ErrorHandler.prototype.buildRequestErrorByStatus = function (errorMessage, errorCode, errorStatusCode) {
        switch (errorStatusCode) {
            case 401:
                return new Errors.InvalidAPIKeyError(errorMessage, errorCode, errorStatusCode);
            case 404:
                return new Errors.PostmarkError(errorMessage, errorCode, errorStatusCode);
            case 422:
                return new Errors.ApiInputError(errorMessage, errorCode, errorStatusCode);
            case 500:
                return new Errors.InternalServerError(errorMessage, errorCode, errorStatusCode);
            case 503:
                return new Errors.ServiceUnavailablerError(errorMessage, errorCode, errorStatusCode);
            default:
                return new Errors.UnknownError(errorMessage, errorCode, errorStatusCode);
        }
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/ServerClient.js":
/*!************************************************************!*\
  !*** ../node_modules/postmark/dist/client/ServerClient.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseClient_1 = __webpack_require__(/*! ./BaseClient */ "../node_modules/postmark/dist/client/BaseClient.js");
var index_1 = __webpack_require__(/*! ./models/index */ "../node_modules/postmark/dist/client/models/index.js");
var index_2 = __webpack_require__(/*! ./models/index */ "../node_modules/postmark/dist/client/models/index.js");
/**
 * Server client class that can be used to interact with an individual Postmark Server.
 */
var ServerClient = /** @class */ (function (_super) {
    __extends(ServerClient, _super);
    /**
     * Create a client.
     *
     * @param serverToken - The token for the server that you wish to interact with.
     * @param configOptions - Options to customize the behavior of the this client.
     */
    function ServerClient(serverToken, configOptions) {
        return _super.call(this, serverToken, index_1.ClientOptions.DefaultHeaderNames.SERVER_TOKEN, configOptions) || this;
    }
    /** Send a single email message.
     *
     * @param email - Email message to send.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.sendEmail = function (email, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/email", email, callback);
    };
    /**
     * Send a batch of email messages.
     *
     * @param emails - An array of messages to send.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.sendEmailBatch = function (emails, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/email/batch", emails, callback);
    };
    /**
     * Send a message using a template.
     *
     * @param template - Message you wish to send.
     * @param callback If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.sendEmailWithTemplate = function (template, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/email/withTemplate", template, callback);
    };
    /**
     * Send a batch of template email messages.
     *
     * @param templates - An array of templated messages you wish to send using this Client.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.sendEmailBatchWithTemplates = function (templates, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/email/batchWithTemplates", { Messages: templates }, callback);
    };
    /**
     * Get bounce statistic information for the associated Server.
     *
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getDeliveryStatistics = function (callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/deliveryStats", {}, callback);
    };
    /**
     * Get a batch of bounces.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getBounces = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.BounceFilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/bounces", filter, callback);
    };
    /**
     * Get details for a specific Bounce.
     *
     * @param id - The ID of the Bounce you wish to retrieve.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getBounce = function (id, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/bounces/" + id, {}, callback);
    };
    /**
     * Get a Bounce Dump for a specific Bounce.
     *
     * @param id - The ID of the Bounce for which you wish to retrieve Bounce Dump.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getBounceDump = function (id, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/bounces/" + id + "/dump", {}, callback);
    };
    /**
     * Activate email address that was deactivated due to a Bounce.
     *
     * @param id - The ID of the Bounce for which you wish to activate the associated email.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.activateBounce = function (id, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.PUT, "/bounces/" + id + "/activate", {}, callback);
    };
    /**
     * Get the list of templates associated with this server.
     *
     * @param filter - Optional filtering options.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getTemplates = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.TemplateFilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/templates", filter, callback);
    };
    /**
     * Get the a specific template associated with this server.
     *
     * @param idOrAlias - ID or alias for the template you wish to retrieve.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getTemplate = function (idOrAlias, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/templates/" + idOrAlias, {}, callback);
    };
    /**
     * Delete a template associated with this server.
     *
     * @param idOrAlias - ID or template alias you wish to delete.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.deleteTemplate = function (idOrAlias, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.DELETE, "/templates/" + idOrAlias, {}, callback);
    };
    /**
     * Create a new template on the associated server.
     *
     * @param options - Configuration options to be used to create the Template.
     * @param callback If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.createTemplate = function (options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/templates/", options, callback);
    };
    /**
     * Update a template on the associated server.
     *
     * @param idOrAlias - Id or alias of the template you wish to update.
     * @param options - Template options you wish to update.
     * @param callback If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.editTemplate = function (idOrAlias, options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.PUT, "/templates/" + idOrAlias, options, callback);
    };
    /**
     * Validate template markup to verify that it will be parsed. Also provides a recommended template
     * model to be used when sending using the specified template content.
     *
     * @param options - The template content you wish to validate.
     * @param callback If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.validateTemplate = function (options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/templates/validate", options, callback);
    };
    /**
     * Get the information for the Server associated with this Client.
     *
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getServer = function (callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/server", {}, callback);
    };
    /**
     * Modify the Server associated with this Client.
     *
     * @param options - The options you wish to modify.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.editServer = function (options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.PUT, "/server", options, callback);
    };
    /**
     * Get a batch of Outbound Messages.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getOutboundMessages = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.OutboundMessagesFilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/messages/outbound", filter, callback);
    };
    /**
     * Get details for a specific Outbound Message.
     *
     * @param messageId - The ID of the OutboundMessage you wish to retrieve.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getOutboundMessageDetails = function (messageId, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/messages/outbound/" + messageId, {}, callback);
    };
    /**
     * Get details for a specific Outbound Message.
     *
     * @param messageId - The ID of the OutboundMessage you wish to retrieve.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getOutboundMessageDump = function (messageId, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/messages/outbound/" + messageId + "/dump", {}, callback);
    };
    /**
     * Get a batch of Inbound Messages.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getInboundMessages = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.InboundMessagesFilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/messages/inbound", filter, callback);
    };
    /**
     * Get details for a specific Inbound Message.
     *
     * @param messageId - The ID of the Inbound Message you wish to retrieve.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getInboundMessageDetails = function (messageId, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/messages/inbound/" + messageId + "/details", {}, callback);
    };
    /**
     * Cause an Inbound Message to bypass filtering rules defined on this Client's associated Server.
     *
     * @param messageId - The ID of the Inbound Message for which you wish to bypass the filtering rules.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.bypassBlockedInboundMessage = function (messageId, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.PUT, "/messages/inbound/" + messageId + "/bypass", {}, callback);
    };
    /**
     * Request that Postmark retry POSTing to the Inbound Hook for the specified message.
     *
     * @param messageId - The ID of the Inbound Message for which you wish to retry the inbound hook.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.retryInboundHookForMessage = function (messageId, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.PUT, "/messages/inbound/" + messageId + "/retry", {}, callback);
    };
    /**
     * Get the Opens for Outbound Messages.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getMessageOpens = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.OutboundMessageOpensFilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/messages/outbound/opens", filter, callback);
    };
    /**
     * Get details of Opens for specific Outbound Message.
     *
     * @param messageId - Message ID of the message for which you wish to retrieve Opens.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getMessageOpensForSingleMessage = function (messageId, filter, callback) {
        if (filter === void 0) { filter = new index_2.OutboundMessageOpensFilteringParameters(50, 0); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/messages/outbound/opens/" + messageId, filter, callback);
    };
    /**
     * Get the Clicks for Outbound Messages.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getMessageClicks = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.OutboundMessageClicksFilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/messages/outbound/clicks", filter, callback);
    };
    /**
     * Get Click information for a single Outbound Message.
     *
     * @param messageId - The MessageID for which clicks should be retrieved.
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getMessageClicksForSingleMessage = function (messageId, filter, callback) {
        if (filter === void 0) { filter = new index_2.OutboundMessageClicksFilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/messages/outbound/clicks/" + messageId, filter, callback);
    };
    /**
     * Get overview statistics on Outbound Messages sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getOutboundOverview = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound", filter, callback);
    };
    /**
     * Get statistics on email sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getSentCounts = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/sends", filter, callback);
    };
    /**
     * Get statistiscs on emails that bounced after being sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getBounceCounts = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/bounces", filter, callback);
    };
    /**
     * Get SPAM complaint statistics for email sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getSpamComplaintsCounts = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/spam", filter, callback);
    };
    /**
     * Get email tracking statistics for messages sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getTrackedEmailCounts = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/tracked", filter, callback);
    };
    /**
     * Get Open statistics for messages sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getEmailOpenCounts = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/opens", filter, callback);
    };
    /**
     * Get Email Client Platform statistics for messages sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getEmailOpenPlatformUsage = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/opens/platforms", filter, callback);
    };
    /**
     * Get statistics on which Email Clients were used to open messages sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getEmailOpenClientUsage = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/opens/emailClients", filter, callback);
    };
    /**
     * Get Read Time statistics for messages sent from the Server associated with this Client.
     * @param filter Optional filtering parameters.
     * @param callback If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getEmailOpenReadTimes = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/opens/readTimes", filter, callback);
    };
    /**
     * Get total clicks statistics for tracked links for messages sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getClickCounts = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/clicks", filter, callback);
    };
    /**
     * Get browser family statistics for tracked links for messages sent from the Server associated with this Client.
     * @param filter Optional filtering parameters.
     * @param callback If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getClickBrowserUsage = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/clicks/browserFamilies", filter, callback);
    };
    /**
     * Get browser platform statistics for tracked links for messages sent from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getClickPlatformUsage = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/clicks/platforms", filter, callback);
    };
    /**
     * Get click location (in HTML or Text body of the email) statistics for tracked links for messages sent
     * from the Server associated with this Client.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getClickLocation = function (filter, callback) {
        if (filter === void 0) { filter = new index_2.StatisticsFilteringParameters(); }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/stats/outbound/clicks/location", filter, callback);
    };
    /**
     * Create an Inbound Rule Trigger.
     *
     * @param options - Configuration options to be used when creating this Trigger.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.createInboundRuleTrigger = function (options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/triggers/inboundRules", options, callback);
    };
    /**
     * Delete an Inbound Rule Trigger.
     *
     * @param id - The ID of the Inbound Rule Trigger you wish to delete.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.deleteInboundRuleTrigger = function (id, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.DELETE, "/triggers/inboundRules/" + id, {}, callback);
    };
    /**
     * Get a list of Inbound Rule Triggers.
     *
     * @param filter - Optional filtering parameters.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getInboundRuleTriggers = function (filter, callback) {
        if (filter === void 0) { filter = new index_1.FilteringParameters(); }
        this.setDefaultPaginationValues(filter);
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/triggers/inboundRules", filter, callback);
    };
    /**
     * Get the list of Webhooks for specific server.
     *
     * @param filter - Optional filtering parameters
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getWebhooks = function (filter, callback) {
        if (filter === void 0) { filter = {}; }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/webhooks", filter, callback);
    };
    /**
     * Get details for a specific Webhook.
     *
     * @param id - The ID of the Webhook you wish to retrieve.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getWebhook = function (id, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/webhooks/" + id, {}, callback);
    };
    /**
     * Create a Webhook on the associated server.
     *
     * @param options - Configuration options to be used when creating Webhook trigger.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.createWebhook = function (options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/webhooks", options, callback);
    };
    /**
     * Update Webhook on the associated server.
     *
     * @param id - Id of the webhook you wish to update.
     * @param options - Webhook options you wish to update.
     * @param callback If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.editWebhook = function (id, options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.PUT, "/webhooks/" + id, options, callback);
    };
    /**
     * Delete an existing Webhook.
     *
     * @param id - The ID of the Webhook you wish to delete.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.deleteWebhook = function (id, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.DELETE, "/webhooks/" + id, {}, callback);
    };
    /**
     * Get the list of message streams on a server.
     *
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getMessageStreams = function (filter, callback) {
        if (filter === void 0) { filter = {}; }
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/message-streams", filter, callback);
    };
    /**
     * Get details for a specific message stream on a server.
     *
     * @param id - The ID of the message stream you wish to retrieve.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getMessageStream = function (id, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/message-streams/" + id, {}, callback);
    };
    /**
     * Update message stream on the associated server.
     *
     * @param id - Id of the webhook you wish to update.
     * @param options - Webhook options you wish to update.
     * @param callback If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.editMessageStream = function (id, options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.PATCH, "/message-streams/" + id, options, callback);
    };
    /**
     * Create a message stream on the associated server.
     *
     * @param options - Configuration options to be used when creating message stream on the server.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.createMessageStream = function (options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/message-streams", options, callback);
    };
    /**
     * Archive a message stream on the associated server.
     *
     * @param options - Configuration options to be used when creating message stream on the server.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.archiveMessageStream = function (id, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/message-streams/" + id + "/archive", {}, callback);
    };
    /**
     * Unrchive a message stream on the associated server.
     *
     * @param options - Configuration options to be used when creating message stream on the server.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.unarchiveMessageStream = function (id, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/message-streams/" + id + "/unarchive", {}, callback);
    };
    /**
     * Get the list of suppressions for a message stream on a server.
     *
     * @param messageStream - Select message stream
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.getSuppressions = function (messageStream, callback) {
        return this.processRequestWithoutBody(index_1.ClientOptions.HttpMethod.GET, "/message-streams/" + messageStream + "/suppressions/dump", callback);
    };
    /**
     * Add email addresses to a suppressions list on a message stream on a server.
     *
     * @param messageStream - Select message stream
     * @param options - Suppressions you wish to add.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.createSuppressions = function (messageStream, options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/message-streams/" + messageStream + "/suppressions", options, callback);
    };
    /**
     * Delete email addresses from a suppressions list on a message stream on a server.
     *
     * @param messageStream - Select message stream
     * @param options - Suppressions you wish to delete.
     * @param callback - If the callback is provided, it will be passed to the resulting promise as a continuation.
     * @returns A promise that will complete when the API responds (or an error occurs).
     */
    ServerClient.prototype.deleteSuppressions = function (messageStream, options, callback) {
        return this.processRequestWithBody(index_1.ClientOptions.HttpMethod.POST, "/message-streams/" + messageStream + "/suppressions/delete", options, callback);
    };
    return ServerClient;
}(BaseClient_1.default));
exports.default = ServerClient;
//# sourceMappingURL=ServerClient.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/bounces/BounceFilteringParameters.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/bounces/BounceFilteringParameters.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilteringParameters_1 = __webpack_require__(/*! ../client/FilteringParameters */ "../node_modules/postmark/dist/client/models/client/FilteringParameters.js");
var BounceType;
(function (BounceType) {
    BounceType["HardBounce"] = "HardBounce";
    BounceType["Transient"] = "Transient";
    BounceType["Unsubscribe"] = "Unsubscribe";
    BounceType["Subscribe"] = "Subscribe";
    BounceType["AutoResponder"] = "AutoResponder";
    BounceType["AddressChange"] = "AddressChange";
    BounceType["DnsError"] = "DnsError";
    BounceType["SpamNotification"] = "SpamNotification";
    BounceType["OpenRelayTest"] = "OpenRelayTest";
    BounceType["Unknown"] = "Unknown";
    BounceType["SoftBounce"] = "SoftBounce";
    BounceType["VirusNotification"] = "VirusNotification";
    BounceType["ChallengeVerification"] = "ChallengeVerification";
    BounceType["BadEmailAddress"] = "BadEmailAddress";
    BounceType["SpamComplaint"] = "SpamComplaint";
    BounceType["ManuallyDeactivated"] = "ManuallyDeactivated";
    BounceType["Unconfirmed"] = "Unconfirmed";
    BounceType["Blocked"] = "Blocked";
    BounceType["SMTPApiError"] = "SMTPApiError";
    BounceType["InboundError"] = "InboundError";
    BounceType["DMARCPolicy"] = "DMARCPolicy";
    BounceType["TemplateRenderingFailed"] = "TemplateRenderingFailed";
})(BounceType = exports.BounceType || (exports.BounceType = {}));
/**
 * Describes filtering parameters that can be used when retrieving bounces.
 * When pagination parameters are not specified, default values are set.
 */
var BounceFilteringParameters = /** @class */ (function (_super) {
    __extends(BounceFilteringParameters, _super);
    function BounceFilteringParameters(count, offset, type, inactive, emailFilter, tag, messageID, fromDate, toDate, messageStream) {
        if (count === void 0) { count = 100; }
        if (offset === void 0) { offset = 0; }
        var _this = _super.call(this, count, offset) || this;
        _this.type = type;
        _this.inactive = inactive;
        _this.emailFilter = emailFilter;
        _this.tag = tag;
        _this.messageID = messageID;
        _this.fromDate = fromDate;
        _this.toDate = toDate;
        _this.messageStream = messageStream;
        return _this;
    }
    return BounceFilteringParameters;
}(FilteringParameters_1.FilteringParameters));
exports.BounceFilteringParameters = BounceFilteringParameters;
//# sourceMappingURL=BounceFilteringParameters.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/client/ClientOptions.js":
/*!***************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/client/ClientOptions.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClientOptions;
(function (ClientOptions) {
    var Configuration = /** @class */ (function () {
        function Configuration(useHttps, requestHost, timeout) {
            this.useHttps = useHttps;
            this.requestHost = requestHost;
            this.timeout = timeout;
        }
        return Configuration;
    }());
    ClientOptions.Configuration = Configuration;
    var HttpMethod;
    (function (HttpMethod) {
        HttpMethod["GET"] = "GET";
        HttpMethod["POST"] = "POST";
        HttpMethod["DELETE"] = "DELETE";
        HttpMethod["PUT"] = "PUT";
        HttpMethod["OPTIONS"] = "OPTIONS";
        HttpMethod["HEAD"] = "HEAD";
        HttpMethod["PATCH"] = "PATCH";
    })(HttpMethod = ClientOptions.HttpMethod || (ClientOptions.HttpMethod = {}));
    var DefaultHeaderNames;
    (function (DefaultHeaderNames) {
        DefaultHeaderNames["SERVER_TOKEN"] = "X-Postmark-Server-Token";
        DefaultHeaderNames["ACCOUNT_TOKEN"] = "X-Postmark-Account-Token";
    })(DefaultHeaderNames = ClientOptions.DefaultHeaderNames || (ClientOptions.DefaultHeaderNames = {}));
})(ClientOptions = exports.ClientOptions || (exports.ClientOptions = {}));
//# sourceMappingURL=ClientOptions.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/client/Errors.js":
/*!********************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/client/Errors.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Standard Postmark error on which all sub-errors are based.
 */
var PostmarkError = /** @class */ (function (_super) {
    __extends(PostmarkError, _super);
    function PostmarkError(message, code, statusCode) {
        if (code === void 0) { code = 0; }
        if (statusCode === void 0) { statusCode = 0; }
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        _this.code = code;
        // this is mandatory due:
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, PostmarkError.prototype);
        _this.setUpStackTrace();
        return _this;
    }
    PostmarkError.prototype.setUpStackTrace = function () {
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    };
    return PostmarkError;
}(Error));
exports.PostmarkError = PostmarkError;
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(message, code, statusCode) {
        var _this = _super.call(this, message, code, statusCode) || this;
        Object.setPrototypeOf(_this, HttpError.prototype);
        _this.setUpStackTrace();
        return _this;
    }
    return HttpError;
}(PostmarkError));
exports.HttpError = HttpError;
var InvalidAPIKeyError = /** @class */ (function (_super) {
    __extends(InvalidAPIKeyError, _super);
    function InvalidAPIKeyError(message, code, statusCode) {
        var _this = _super.call(this, message, code, statusCode) || this;
        Object.setPrototypeOf(_this, InvalidAPIKeyError.prototype);
        _this.setUpStackTrace();
        return _this;
    }
    return InvalidAPIKeyError;
}(HttpError));
exports.InvalidAPIKeyError = InvalidAPIKeyError;
var ApiInputError = /** @class */ (function (_super) {
    __extends(ApiInputError, _super);
    function ApiInputError(message, code, statusCode) {
        var _this = _super.call(this, message, code, statusCode) || this;
        Object.setPrototypeOf(_this, ApiInputError.prototype);
        _this.setUpStackTrace();
        return _this;
    }
    return ApiInputError;
}(HttpError));
exports.ApiInputError = ApiInputError;
var InternalServerError = /** @class */ (function (_super) {
    __extends(InternalServerError, _super);
    function InternalServerError(message, code, statusCode) {
        var _this = _super.call(this, message, code, statusCode) || this;
        Object.setPrototypeOf(_this, InternalServerError.prototype);
        _this.setUpStackTrace();
        return _this;
    }
    return InternalServerError;
}(HttpError));
exports.InternalServerError = InternalServerError;
var ServiceUnavailablerError = /** @class */ (function (_super) {
    __extends(ServiceUnavailablerError, _super);
    function ServiceUnavailablerError(message, code, statusCode) {
        var _this = _super.call(this, message, code, statusCode) || this;
        Object.setPrototypeOf(_this, ServiceUnavailablerError.prototype);
        _this.setUpStackTrace();
        return _this;
    }
    return ServiceUnavailablerError;
}(HttpError));
exports.ServiceUnavailablerError = ServiceUnavailablerError;
var UnknownError = /** @class */ (function (_super) {
    __extends(UnknownError, _super);
    function UnknownError(message, code, statusCode) {
        var _this = _super.call(this, message, code, statusCode) || this;
        Object.setPrototypeOf(_this, UnknownError.prototype);
        _this.setUpStackTrace();
        return _this;
    }
    return UnknownError;
}(HttpError));
exports.UnknownError = UnknownError;
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/client/FilteringParameters.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/client/FilteringParameters.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes default filtering parameters that can be used.
 * When pagination parameters are not specified, default values are set.
 */
var FilteringParameters = /** @class */ (function () {
    function FilteringParameters(count, offset) {
        if (count === void 0) { count = 100; }
        if (offset === void 0) { offset = 0; }
        this.count = count;
        this.offset = offset;
    }
    return FilteringParameters;
}());
exports.FilteringParameters = FilteringParameters;
//# sourceMappingURL=FilteringParameters.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/domains/Domain.js":
/*!*********************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/domains/Domain.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CreateDomainRequest = /** @class */ (function () {
    function CreateDomainRequest(Name, ReturnPathDomain) {
        this.Name = Name;
        this.ReturnPathDomain = ReturnPathDomain;
    }
    return CreateDomainRequest;
}());
exports.CreateDomainRequest = CreateDomainRequest;
var UpdateDomainRequest = /** @class */ (function () {
    function UpdateDomainRequest(ReturnPathDomain) {
        this.ReturnPathDomain = ReturnPathDomain;
    }
    return UpdateDomainRequest;
}());
exports.UpdateDomainRequest = UpdateDomainRequest;
//# sourceMappingURL=Domain.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/index.js":
/*!************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./client/ClientOptions */ "../node_modules/postmark/dist/client/models/client/ClientOptions.js"));
__export(__webpack_require__(/*! ./client/FilteringParameters */ "../node_modules/postmark/dist/client/models/client/FilteringParameters.js"));
__export(__webpack_require__(/*! ./bounces/BounceFilteringParameters */ "../node_modules/postmark/dist/client/models/bounces/BounceFilteringParameters.js"));
__export(__webpack_require__(/*! ./message/Message */ "../node_modules/postmark/dist/client/models/message/Message.js"));
__export(__webpack_require__(/*! ./message/SupportingTypes */ "../node_modules/postmark/dist/client/models/message/SupportingTypes.js"));
__export(__webpack_require__(/*! ./messages/MessageFilteringParameters */ "../node_modules/postmark/dist/client/models/messages/MessageFilteringParameters.js"));
__export(__webpack_require__(/*! ./templates/Template */ "../node_modules/postmark/dist/client/models/templates/Template.js"));
__export(__webpack_require__(/*! ./server/Server */ "../node_modules/postmark/dist/client/models/server/Server.js"));
__export(__webpack_require__(/*! ./server/ServerFilteringParameters */ "../node_modules/postmark/dist/client/models/server/ServerFilteringParameters.js"));
__export(__webpack_require__(/*! ./domains/Domain */ "../node_modules/postmark/dist/client/models/domains/Domain.js"));
__export(__webpack_require__(/*! ./senders/Signature */ "../node_modules/postmark/dist/client/models/senders/Signature.js"));
__export(__webpack_require__(/*! ./stats/StatsFilteringParameters */ "../node_modules/postmark/dist/client/models/stats/StatsFilteringParameters.js"));
__export(__webpack_require__(/*! ./triggers/InboundRule */ "../node_modules/postmark/dist/client/models/triggers/InboundRule.js"));
__export(__webpack_require__(/*! ./webhooks/Webhook */ "../node_modules/postmark/dist/client/models/webhooks/Webhook.js"));
__export(__webpack_require__(/*! ./webhooks/WebhookFilteringParameters */ "../node_modules/postmark/dist/client/models/webhooks/WebhookFilteringParameters.js"));
__export(__webpack_require__(/*! ./streams/MessageStream */ "../node_modules/postmark/dist/client/models/streams/MessageStream.js"));
__export(__webpack_require__(/*! ./streams/MessageStreamsFilteringParameters */ "../node_modules/postmark/dist/client/models/streams/MessageStreamsFilteringParameters.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/message/Message.js":
/*!**********************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/message/Message.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(From, Subject, HtmlBody, TextBody, To, Cc, Bcc, ReplyTo, Tag, TrackOpens, TrackLinks, Headers, Attachments, Metadata) {
        this.From = From;
        this.To = To;
        this.Cc = Cc;
        this.Bcc = Bcc;
        this.Subject = Subject;
        this.ReplyTo = ReplyTo;
        this.HtmlBody = HtmlBody;
        this.TextBody = TextBody;
        this.Tag = Tag;
        this.TrackOpens = TrackOpens;
        this.TrackLinks = TrackLinks;
        this.Headers = Headers;
        this.Attachments = Attachments;
        this.Metadata = Metadata;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/message/SupportingTypes.js":
/*!******************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/message/SupportingTypes.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkTrackingOptions;
(function (LinkTrackingOptions) {
    LinkTrackingOptions["TextOnly"] = "TextOnly";
    LinkTrackingOptions["HtmlOnly"] = "HtmlOnly";
    LinkTrackingOptions["HtmlAndText"] = "HtmlAndText";
    LinkTrackingOptions["None"] = "None";
})(LinkTrackingOptions = exports.LinkTrackingOptions || (exports.LinkTrackingOptions = {}));
var LinkClickLocation;
(function (LinkClickLocation) {
    LinkClickLocation["HTML"] = "HTML";
    LinkClickLocation["Text"] = "Text";
})(LinkClickLocation = exports.LinkClickLocation || (exports.LinkClickLocation = {}));
var Header = /** @class */ (function () {
    function Header(Name, Value) {
        this.Name = Name;
        this.Value = Value;
    }
    return Header;
}());
exports.Header = Header;
/**
 * Attachment content
 *
 * @param Name - name of the attachment, for example book.pdf
 * @param Content - Base64 encoded content, for example: fs.readFileSync('/Folder/book.pdf').toString('base64')
 * @param ContentID - id of the attachment, in case we are referencing it, for example: cid:123book.pdf
 */
var Attachment = /** @class */ (function () {
    function Attachment(Name, Content, ContentType, ContentID) {
        if (ContentID === void 0) { ContentID = null; }
        this.Name = Name;
        this.Content = Content;
        this.ContentType = ContentType;
        this.ContentID = ContentID;
    }
    return Attachment;
}());
exports.Attachment = Attachment;
//# sourceMappingURL=SupportingTypes.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/messages/MessageFilteringParameters.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/messages/MessageFilteringParameters.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilteringParameters_1 = __webpack_require__(/*! ../client/FilteringParameters */ "../node_modules/postmark/dist/client/models/client/FilteringParameters.js");
var OutboundMessageStatus;
(function (OutboundMessageStatus) {
    OutboundMessageStatus["Queued"] = "queued";
    OutboundMessageStatus["Sent"] = "sent";
    OutboundMessageStatus["Processed"] = "processed";
})(OutboundMessageStatus = exports.OutboundMessageStatus || (exports.OutboundMessageStatus = {}));
var InboundMessageStatus;
(function (InboundMessageStatus) {
    InboundMessageStatus["Queued"] = "queued";
    InboundMessageStatus["Sent"] = "sent";
    InboundMessageStatus["Processed"] = "processed";
    InboundMessageStatus["Blocked"] = "blocked";
    InboundMessageStatus["Failed"] = "failed";
    InboundMessageStatus["Scheduled"] = "scheduled";
})(InboundMessageStatus = exports.InboundMessageStatus || (exports.InboundMessageStatus = {}));
/**
 * Describes filtering parameters that can be used when retrieving outbound messages.
 * When pagination parameters are not specified, default values are set.
 */
var OutboundMessagesFilteringParameters = /** @class */ (function (_super) {
    __extends(OutboundMessagesFilteringParameters, _super);
    function OutboundMessagesFilteringParameters(count, offset, recipient, fromEmail, tag, status, fromDate, toDate, subject, messageStream) {
        if (count === void 0) { count = 100; }
        if (offset === void 0) { offset = 0; }
        var _this = _super.call(this, count, offset) || this;
        _this.recipient = recipient;
        _this.fromEmail = fromEmail;
        _this.tag = tag;
        _this.status = status;
        _this.fromDate = fromDate;
        _this.toDate = toDate;
        _this.subject = subject;
        _this.messageStream = messageStream;
        return _this;
    }
    return OutboundMessagesFilteringParameters;
}(FilteringParameters_1.FilteringParameters));
exports.OutboundMessagesFilteringParameters = OutboundMessagesFilteringParameters;
/**
 * Describes filtering parameters that can be used when retrieving inbound messages.
 * When pagination parameters are not specified, default values are set.
 */
var InboundMessagesFilteringParameters = /** @class */ (function (_super) {
    __extends(InboundMessagesFilteringParameters, _super);
    function InboundMessagesFilteringParameters(count, offset, mailboxHash, recipient, fromEmail, tag, status, fromDate, toDate, subject) {
        if (count === void 0) { count = 100; }
        if (offset === void 0) { offset = 0; }
        var _this = _super.call(this, count, offset) || this;
        _this.status = status;
        _this.mailboxHash = mailboxHash;
        _this.recipient = recipient;
        _this.fromEmail = fromEmail;
        _this.tag = tag;
        _this.fromDate = fromDate;
        _this.toDate = toDate;
        _this.subject = subject;
        return _this;
    }
    return InboundMessagesFilteringParameters;
}(FilteringParameters_1.FilteringParameters));
exports.InboundMessagesFilteringParameters = InboundMessagesFilteringParameters;
/**
 * Describes filtering parameters that can be used when retrieving tracked outbound messages.
 * When pagination parameters are not specified, default values are set.
 */
var OutboundMessageTrackingFilteringParameters = /** @class */ (function (_super) {
    __extends(OutboundMessageTrackingFilteringParameters, _super);
    function OutboundMessageTrackingFilteringParameters(count, offset, recipient, tag, client_name, client_company, client_family, os_name, os_family, os_company, platform, country, region, city, messageStream) {
        if (count === void 0) { count = 100; }
        if (offset === void 0) { offset = 0; }
        var _this = _super.call(this, count, offset) || this;
        _this.recipient = recipient;
        _this.tag = tag;
        _this.client_name = client_name;
        _this.client_company = client_company;
        _this.client_family = client_family;
        _this.os_name = os_name;
        _this.os_family = os_family;
        _this.os_company = os_company;
        _this.platform = platform;
        _this.country = country;
        _this.region = region;
        _this.city = city;
        _this.messageStream = messageStream;
        return _this;
    }
    return OutboundMessageTrackingFilteringParameters;
}(FilteringParameters_1.FilteringParameters));
exports.OutboundMessageTrackingFilteringParameters = OutboundMessageTrackingFilteringParameters;
var OutboundMessageOpensFilteringParameters = /** @class */ (function (_super) {
    __extends(OutboundMessageOpensFilteringParameters, _super);
    function OutboundMessageOpensFilteringParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutboundMessageOpensFilteringParameters;
}(OutboundMessageTrackingFilteringParameters));
exports.OutboundMessageOpensFilteringParameters = OutboundMessageOpensFilteringParameters;
var OutboundMessageClicksFilteringParameters = /** @class */ (function (_super) {
    __extends(OutboundMessageClicksFilteringParameters, _super);
    function OutboundMessageClicksFilteringParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutboundMessageClicksFilteringParameters;
}(OutboundMessageTrackingFilteringParameters));
exports.OutboundMessageClicksFilteringParameters = OutboundMessageClicksFilteringParameters;
//# sourceMappingURL=MessageFilteringParameters.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/senders/Signature.js":
/*!************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/senders/Signature.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UpdateSignatureRequest = /** @class */ (function () {
    function UpdateSignatureRequest(Name, ReplyToEmail, ReturnPathDomain) {
        this.Name = Name;
        this.ReplyToEmail = ReplyToEmail;
        this.ReturnPathDomain = ReturnPathDomain;
    }
    return UpdateSignatureRequest;
}());
exports.UpdateSignatureRequest = UpdateSignatureRequest;
var CreateSignatureRequest = /** @class */ (function () {
    function CreateSignatureRequest(name, fromEmail, replyToEmail, returnPathDomain) {
        this.Name = name;
        this.ReplyToEmail = replyToEmail;
        this.ReturnPathDomain = returnPathDomain;
        this.FromEmail = fromEmail;
    }
    return CreateSignatureRequest;
}());
exports.CreateSignatureRequest = CreateSignatureRequest;
//# sourceMappingURL=Signature.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/server/Server.js":
/*!********************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/server/Server.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateServerRequest = /** @class */ (function () {
    function UpdateServerRequest(Name, Color, SmtpApiActivated, RawEmailEnabled, InboundHookUrl, BounceHookUrl, OpenHookUrl, DeliveryHookUrl, ClickHookUrl, PostFirstOpenOnly, InboundSpamThreshold, TrackOpens, TrackLinks, IncludeBounceContentInHook, EnableSmtpApiErrorHooks) {
        this.Name = Name;
        this.Color = Color;
        this.SmtpApiActivated = SmtpApiActivated;
        this.RawEmailEnabled = RawEmailEnabled;
        this.InboundHookUrl = InboundHookUrl;
        this.BounceHookUrl = BounceHookUrl;
        this.OpenHookUrl = OpenHookUrl;
        this.DeliveryHookUrl = DeliveryHookUrl;
        this.ClickHookUrl = ClickHookUrl;
        this.PostFirstOpenOnly = PostFirstOpenOnly;
        this.InboundSpamThreshold = InboundSpamThreshold;
        this.TrackOpens = TrackOpens;
        this.TrackLinks = TrackLinks;
        this.IncludeBounceContentInHook = IncludeBounceContentInHook;
        this.EnableSmtpApiErrorHooks = EnableSmtpApiErrorHooks;
    }
    return UpdateServerRequest;
}());
exports.UpdateServerRequest = UpdateServerRequest;
var CreateServerRequest = /** @class */ (function (_super) {
    __extends(CreateServerRequest, _super);
    function CreateServerRequest(Name, Color, SmtpApiActivated, RawEmailEnabled, InboundHookUrl, BounceHookUrl, OpenHookUrl, DeliveryHookUrl, ClickHookUrl, PostFirstOpenOnly, InboundSpamThreshold, TrackOpens, TrackLinks, IncludeBounceContentInHook, EnableSmtpApiErrorHooks) {
        return _super.call(this, Name, Color, SmtpApiActivated, RawEmailEnabled, InboundHookUrl, BounceHookUrl, OpenHookUrl, DeliveryHookUrl, ClickHookUrl, PostFirstOpenOnly, InboundSpamThreshold, TrackOpens, TrackLinks, IncludeBounceContentInHook, EnableSmtpApiErrorHooks) || this;
    }
    return CreateServerRequest;
}(UpdateServerRequest));
exports.CreateServerRequest = CreateServerRequest;
//# sourceMappingURL=Server.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/server/ServerFilteringParameters.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/server/ServerFilteringParameters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilteringParameters_1 = __webpack_require__(/*! ../client/FilteringParameters */ "../node_modules/postmark/dist/client/models/client/FilteringParameters.js");
/**
 * Describes filtering parameters that can be used when retrieving servers.
 * When pagination parameters are not specified, default values are set.
 */
var ServerFilteringParameters = /** @class */ (function (_super) {
    __extends(ServerFilteringParameters, _super);
    function ServerFilteringParameters(count, offset, name) {
        if (count === void 0) { count = 100; }
        if (offset === void 0) { offset = 0; }
        var _this = _super.call(this, count, offset) || this;
        _this.name = name;
        return _this;
    }
    return ServerFilteringParameters;
}(FilteringParameters_1.FilteringParameters));
exports.ServerFilteringParameters = ServerFilteringParameters;
//# sourceMappingURL=ServerFilteringParameters.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/stats/StatsFilteringParameters.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/stats/StatsFilteringParameters.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StatisticsFilteringParameters = /** @class */ (function () {
    function StatisticsFilteringParameters(tag, fromDate, toDate) {
        this.tag = tag;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
    return StatisticsFilteringParameters;
}());
exports.StatisticsFilteringParameters = StatisticsFilteringParameters;
//# sourceMappingURL=StatsFilteringParameters.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/streams/MessageStream.js":
/*!****************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/streams/MessageStream.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UpdateMessageStreamRequest = /** @class */ (function () {
    function UpdateMessageStreamRequest(name, description) {
        this.Name = name;
        this.Description = description;
    }
    return UpdateMessageStreamRequest;
}());
exports.UpdateMessageStreamRequest = UpdateMessageStreamRequest;
var CreateMessageStreamRequest = /** @class */ (function () {
    function CreateMessageStreamRequest(id, name, messageStreamType, description) {
        this.Name = name;
        this.Description = description;
        this.ID = id;
        this.MessageStreamType = messageStreamType;
    }
    return CreateMessageStreamRequest;
}());
exports.CreateMessageStreamRequest = CreateMessageStreamRequest;
//# sourceMappingURL=MessageStream.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/streams/MessageStreamsFilteringParameters.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/streams/MessageStreamsFilteringParameters.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes filtering parameters that can be used when retrieving message streams.
 */
var MessageStreamsFilteringParameters = /** @class */ (function () {
    function MessageStreamsFilteringParameters(messageStreamType, includeArchivedStreams) {
        this.messageStreamType = messageStreamType;
        this.includeArchivedStreams = includeArchivedStreams;
    }
    return MessageStreamsFilteringParameters;
}());
exports.MessageStreamsFilteringParameters = MessageStreamsFilteringParameters;
//# sourceMappingURL=MessageStreamsFilteringParameters.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/templates/Template.js":
/*!*************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/templates/Template.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilteringParameters_1 = __webpack_require__(/*! ../client/FilteringParameters */ "../node_modules/postmark/dist/client/models/client/FilteringParameters.js");
var UpdateTemplateRequest = /** @class */ (function () {
    function UpdateTemplateRequest(Name, Subject, HtmlBody, TextBody, Alias, TemplateType, LayoutTemplate) {
        this.Name = Name;
        this.Subject = Subject;
        this.HtmlBody = HtmlBody;
        this.TextBody = TextBody;
        this.Alias = Alias;
        this.LayoutTemplate = LayoutTemplate;
        this.TemplateType = TemplateType;
    }
    return UpdateTemplateRequest;
}());
exports.UpdateTemplateRequest = UpdateTemplateRequest;
var CreateTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateTemplateRequest, _super);
    function CreateTemplateRequest(Name, Subject, HtmlBody, TextBody, Alias, TemplateType, LayoutTemplate) {
        return _super.call(this, Name, Subject, HtmlBody, TextBody, Alias, TemplateType, LayoutTemplate) || this;
    }
    return CreateTemplateRequest;
}(UpdateTemplateRequest));
exports.CreateTemplateRequest = CreateTemplateRequest;
var TemplateValidationOptions = /** @class */ (function () {
    function TemplateValidationOptions(Subject, HtmlBody, TextBody, TestRenderModel, TemplateType, LayoutTemplate, InlineCssForHtmlTestRender) {
        this.Subject = Subject;
        this.HtmlBody = HtmlBody;
        this.TextBody = TextBody;
        this.TestRenderModel = TestRenderModel;
        this.TemplateType = TemplateType;
        this.LayoutTemplate = LayoutTemplate;
        this.InlineCssForHtmlTestRender = InlineCssForHtmlTestRender;
    }
    return TemplateValidationOptions;
}());
exports.TemplateValidationOptions = TemplateValidationOptions;
var TemplateTypes;
(function (TemplateTypes) {
    TemplateTypes["Standard"] = "Standard";
    TemplateTypes["Layout"] = "Layout";
})(TemplateTypes = exports.TemplateTypes || (exports.TemplateTypes = {}));
var TemplatesPushRequest = /** @class */ (function () {
    function TemplatesPushRequest(SourceServerID, DestinationServerID, PerformChanges) {
        this.SourceServerID = SourceServerID;
        this.DestinationServerID = DestinationServerID;
        this.PerformChanges = PerformChanges;
    }
    return TemplatesPushRequest;
}());
exports.TemplatesPushRequest = TemplatesPushRequest;
var TemplatedMessage = /** @class */ (function () {
    function TemplatedMessage(from, templateIdOrAlias, templateModel, to, cc, bcc, replyTo, tag, trackOpens, trackLinks, headers, attachments) {
        this.From = from;
        this.TemplateModel = templateModel;
        if (typeof templateIdOrAlias === "number") {
            this.TemplateId = templateIdOrAlias;
        }
        else {
            this.TemplateAlias = templateIdOrAlias;
        }
        this.To = to;
        this.Cc = cc;
        this.Bcc = bcc;
        this.ReplyTo = replyTo;
        this.Tag = tag;
        this.TrackOpens = trackOpens;
        this.TrackLinks = trackLinks;
        this.Headers = headers;
        this.Attachments = attachments;
    }
    return TemplatedMessage;
}());
exports.TemplatedMessage = TemplatedMessage;
/**
 * Describes filtering parameters that can be used when retrieving templates.
 * When pagination parameters are not specified, default values are set.
 */
var TemplateFilteringParameters = /** @class */ (function (_super) {
    __extends(TemplateFilteringParameters, _super);
    function TemplateFilteringParameters(count, offset, templateType, layoutTemplate) {
        if (count === void 0) { count = 100; }
        if (offset === void 0) { offset = 0; }
        var _this = _super.call(this, count, offset) || this;
        _this.templateType = templateType;
        _this.layoutTemplate = layoutTemplate;
        return _this;
    }
    return TemplateFilteringParameters;
}(FilteringParameters_1.FilteringParameters));
exports.TemplateFilteringParameters = TemplateFilteringParameters;
//# sourceMappingURL=Template.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/triggers/InboundRule.js":
/*!***************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/triggers/InboundRule.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CreateInboundRuleRequest = /** @class */ (function () {
    function CreateInboundRuleRequest(Rule) {
        this.Rule = Rule;
    }
    return CreateInboundRuleRequest;
}());
exports.CreateInboundRuleRequest = CreateInboundRuleRequest;
//# sourceMappingURL=InboundRule.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/webhooks/Webhook.js":
/*!***********************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/webhooks/Webhook.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateWebhookRequest = /** @class */ (function () {
    function UpdateWebhookRequest(url, triggers, httpAuth, httpHeaders) {
        this.Url = url;
        this.HttpAuth = httpAuth;
        this.HttpHeaders = httpHeaders;
        this.Triggers = triggers;
    }
    return UpdateWebhookRequest;
}());
exports.UpdateWebhookRequest = UpdateWebhookRequest;
var CreateWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateWebhookRequest, _super);
    function CreateWebhookRequest(url, triggers, httpAuth, httpHeaders) {
        return _super.call(this, url, triggers, httpAuth, httpHeaders) || this;
    }
    return CreateWebhookRequest;
}(UpdateWebhookRequest));
exports.CreateWebhookRequest = CreateWebhookRequest;
//# sourceMappingURL=Webhook.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/client/models/webhooks/WebhookFilteringParameters.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/postmark/dist/client/models/webhooks/WebhookFilteringParameters.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes filtering parameters that can be used when retrieving webhooks.
 */
var WebhookFilteringParameters = /** @class */ (function () {
    function WebhookFilteringParameters(messageStream) {
        this.messageStream = messageStream;
    }
    return WebhookFilteringParameters;
}());
exports.WebhookFilteringParameters = WebhookFilteringParameters;
//# sourceMappingURL=WebhookFilteringParameters.js.map

/***/ }),

/***/ "../node_modules/postmark/dist/index.js":
/*!**********************************************!*\
  !*** ../node_modules/postmark/dist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AccountClient_1 = __webpack_require__(/*! ./client/AccountClient */ "../node_modules/postmark/dist/client/AccountClient.js");
exports.AccountClient = AccountClient_1.default;
exports.AdminClient = AccountClient_1.default;
var ServerClient_1 = __webpack_require__(/*! ./client/ServerClient */ "../node_modules/postmark/dist/client/ServerClient.js");
exports.ServerClient = ServerClient_1.default;
exports.Client = ServerClient_1.default;
var Models = __webpack_require__(/*! ./client/models */ "../node_modules/postmark/dist/client/models/index.js");
exports.Models = Models;
var Errors = __webpack_require__(/*! ./client/models/client/Errors */ "../node_modules/postmark/dist/client/models/client/Errors.js");
exports.Errors = Errors;
// Essential types are exposed directly
// to make working with common requests simpler.
var models_1 = __webpack_require__(/*! ./client/models */ "../node_modules/postmark/dist/client/models/index.js");
exports.Message = models_1.Message;
var models_2 = __webpack_require__(/*! ./client/models */ "../node_modules/postmark/dist/client/models/index.js");
exports.TemplatedMessage = models_2.TemplatedMessage;
var models_3 = __webpack_require__(/*! ./client/models */ "../node_modules/postmark/dist/client/models/index.js");
exports.Attachment = models_3.Attachment;
var models_4 = __webpack_require__(/*! ./client/models */ "../node_modules/postmark/dist/client/models/index.js");
exports.Header = models_4.Header;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/index.js":
/*!************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "../node_modules/postmark/node_modules/axios/lib/axios.js");

/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/adapters/http.js":
/*!************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/adapters/http.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "../node_modules/postmark/node_modules/axios/lib/core/settle.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "../node_modules/postmark/node_modules/axios/lib/core/buildFullPath.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "../node_modules/postmark/node_modules/axios/lib/helpers/buildURL.js");
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var httpFollow = __webpack_require__(/*! follow-redirects */ "../node_modules/postmark/node_modules/follow-redirects/index.js").http;
var httpsFollow = __webpack_require__(/*! follow-redirects */ "../node_modules/postmark/node_modules/follow-redirects/index.js").https;
var url = __webpack_require__(/*! url */ "url");
var zlib = __webpack_require__(/*! zlib */ "zlib");
var pkg = __webpack_require__(/*! ./../../package.json */ "../node_modules/postmark/node_modules/axios/package.json");
var createError = __webpack_require__(/*! ../core/createError */ "../node_modules/postmark/node_modules/axios/lib/core/createError.js");
var enhanceError = __webpack_require__(/*! ../core/enhanceError */ "../node_modules/postmark/node_modules/axios/lib/core/enhanceError.js");

var isHttps = /https:?/;

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }


        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxContentLength && config.maxContentLength > -1) {
      options.maxBodyLength = config.maxContentLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
      /*eslint default-case:0*/
      case 'gzip':
      case 'compress':
      case 'deflate':
        // add the unzipper to the body stream processing pipeline
        stream = (res.statusCode === 204) ? stream : stream.pipe(zlib.createUnzip());

        // remove the content-encoding in order to not confuse downstream operations
        delete res.headers['content-encoding'];
        break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/adapters/xhr.js":
/*!***********************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/adapters/xhr.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "../node_modules/postmark/node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "../node_modules/postmark/node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "../node_modules/postmark/node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "../node_modules/postmark/node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "../node_modules/postmark/node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "../node_modules/postmark/node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "../node_modules/postmark/node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/axios.js":
/*!****************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/axios.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "../node_modules/postmark/node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "../node_modules/postmark/node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "../node_modules/postmark/node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "../node_modules/postmark/node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "../node_modules/postmark/node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "../node_modules/postmark/node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "../node_modules/postmark/node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "../node_modules/postmark/node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/cancel/Cancel.js":
/*!************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/cancel/Cancel.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/cancel/CancelToken.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/cancel/CancelToken.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "../node_modules/postmark/node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/cancel/isCancel.js":
/*!**************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/cancel/isCancel.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/core/Axios.js":
/*!*********************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/core/Axios.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "../node_modules/postmark/node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "../node_modules/postmark/node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "../node_modules/postmark/node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "../node_modules/postmark/node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/core/InterceptorManager.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/core/InterceptorManager.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/core/buildFullPath.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/core/buildFullPath.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "../node_modules/postmark/node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "../node_modules/postmark/node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/core/createError.js":
/*!***************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/core/createError.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "../node_modules/postmark/node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/core/dispatchRequest.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "../node_modules/postmark/node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "../node_modules/postmark/node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "../node_modules/postmark/node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/core/enhanceError.js":
/*!****************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/core/enhanceError.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/core/mergeConfig.js":
/*!***************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/core/mergeConfig.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/core/settle.js":
/*!**********************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/core/settle.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "../node_modules/postmark/node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/core/transformData.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/core/transformData.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/defaults.js":
/*!*******************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/defaults.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "../node_modules/postmark/node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "../node_modules/postmark/node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "../node_modules/postmark/node_modules/axios/lib/adapters/http.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/helpers/bind.js":
/*!***********************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/helpers/bind.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/helpers/buildURL.js":
/*!***************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/helpers/buildURL.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/helpers/combineURLs.js":
/*!******************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/helpers/combineURLs.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/helpers/cookies.js":
/*!**************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/helpers/cookies.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!********************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/helpers/parseHeaders.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/postmark/node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/helpers/spread.js":
/*!*************************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/helpers/spread.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/lib/utils.js":
/*!****************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/lib/utils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "../node_modules/postmark/node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "../node_modules/postmark/node_modules/axios/package.json":
/*!****************************************************************!*\
  !*** ../node_modules/postmark/node_modules/axios/package.json ***!
  \****************************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, bundlesize, dependencies, deprecated, description, devDependencies, homepage, keywords, license, main, name, repository, scripts, typings, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"axios@^0.19.2\",\"_id\":\"axios@0.19.2\",\"_inBundle\":false,\"_integrity\":\"sha512-fjgm5MvRHLhx+osE2xoekY70AhARk3a6hkN+3Io1jc00jtquGvxYlKlsFUhmUET0V5te6CcZI7lcv2Ym61mjHA==\",\"_location\":\"/postmark/axios\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"axios@^0.19.2\",\"name\":\"axios\",\"escapedName\":\"axios\",\"rawSpec\":\"^0.19.2\",\"saveSpec\":null,\"fetchSpec\":\"^0.19.2\"},\"_requiredBy\":[\"/postmark\"],\"_resolved\":\"https://registry.npmjs.org/axios/-/axios-0.19.2.tgz\",\"_shasum\":\"3ea36c5d8818d0d5f8a8a97a6d36b86cdc00cb27\",\"_spec\":\"axios@^0.19.2\",\"_where\":\"C:\\\\projects\\\\portfolio\\\\vue-site\\\\node_modules\\\\postmark\",\"author\":{\"name\":\"Matt Zabriskie\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"bundleDependencies\":false,\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}],\"dependencies\":{\"follow-redirects\":\"1.5.10\"},\"deprecated\":false,\"description\":\"Promise based HTTP client for the browser and node.js\",\"devDependencies\":{\"bundlesize\":\"^0.17.0\",\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.0.2\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^20.1.0\",\"grunt-karma\":\"^2.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^1.0.18\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^1.3.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.1\",\"karma-firefox-launcher\":\"^1.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-opera-launcher\":\"^1.0.0\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^1.2.0\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-webpack\":\"^1.7.0\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^5.2.0\",\"sinon\":\"^4.5.0\",\"typescript\":\"^2.8.1\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^1.13.1\",\"webpack-dev-server\":\"^1.14.1\"},\"homepage\":\"https://github.com/axios/axios\",\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"license\":\"MIT\",\"main\":\"index.js\",\"name\":\"axios\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/axios/axios.git\"},\"scripts\":{\"build\":\"NODE_ENV=production grunt build\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"examples\":\"node ./examples/server.js\",\"fix\":\"eslint --fix lib/**/*.js\",\"postversion\":\"git push && git push --tags\",\"preversion\":\"npm test\",\"start\":\"node ./sandbox/server.js\",\"test\":\"grunt test && bundlesize\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\"},\"typings\":\"./index.d.ts\",\"version\":\"0.19.2\"}");

/***/ }),

/***/ "../node_modules/postmark/node_modules/debug/src/browser.js":
/*!******************************************************************!*\
  !*** ../node_modules/postmark/node_modules/debug/src/browser.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "../node_modules/postmark/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "../node_modules/postmark/node_modules/debug/src/debug.js":
/*!****************************************************************!*\
  !*** ../node_modules/postmark/node_modules/debug/src/debug.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "../node_modules/postmark/node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "../node_modules/postmark/node_modules/debug/src/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/postmark/node_modules/debug/src/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(/*! ./browser.js */ "../node_modules/postmark/node_modules/debug/src/browser.js");
} else {
  module.exports = __webpack_require__(/*! ./node.js */ "../node_modules/postmark/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "../node_modules/postmark/node_modules/debug/src/node.js":
/*!***************************************************************!*\
  !*** ../node_modules/postmark/node_modules/debug/src/node.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(/*! tty */ "tty");
var util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "../node_modules/postmark/node_modules/debug/src/debug.js");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = __webpack_require__(/*! supports-color */ "../node_modules/supports-color/index.js");
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),

/***/ "../node_modules/postmark/node_modules/follow-redirects/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/postmark/node_modules/follow-redirects/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(/*! url */ "url");
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var assert = __webpack_require__(/*! assert */ "assert");
var Writable = __webpack_require__(/*! stream */ "stream").Writable;
var debug = __webpack_require__(/*! debug */ "../node_modules/postmark/node_modules/debug/src/index.js")("follow-redirects");

// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg) {
    this._redirectable.emit(event, arg);
  };
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  options.headers = options.headers || {};
  this._options = options;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new Error("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data and end
  var currentRequest = this._currentRequest;
  this.write(data || "", encoding, function () {
    currentRequest.end(null, null, callback);
  });
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive", "setTimeout",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new Error("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var buffers = this._requestBodyBuffers;
    (function writeNext() {
      if (i < buffers.length) {
        var buffer = buffers[i++];
        request.write(buffer.data, buffer.encoding, writeNext);
      }
      else {
        request.end();
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: response.statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new Error("Max redirects exceeded."));
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe […],
    // since the user might not wish to redirect an unsafe request.
    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
    // that the target resource resides temporarily under a different URI
    // and the user agent MUST NOT change the request method
    // if it performs an automatic redirection to that URI.
    var header;
    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      for (header in headers) {
        if (/^content-/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Drop the Host header, as the redirect might lead to a different host
    if (!this._isRedirect) {
      for (header in headers) {
        if (/^host$/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Perform the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug("redirecting to", redirectUrl);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();

    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (options, callback) {
      if (typeof options === "string") {
        options = url.parse(options);
        options.maxRedirects = exports.maxRedirects;
      }
      else {
        options = Object.assign({
          protocol: protocol,
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength,
        }, options);
      }
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (options, callback) {
      var request = wrappedProtocol.request(options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ "../node_modules/postmark/node_modules/ms/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/postmark/node_modules/ms/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "../node_modules/postmark/package.json":
/*!*********************************************!*\
  !*** ../node_modules/postmark/package.json ***!
  \*********************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, contributors, dependencies, deprecated, description, devDependencies, directories, homepage, license, main, name, precommit, repository, scripts, tags, types, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"postmark\",\"_id\":\"postmark@2.6.0\",\"_inBundle\":false,\"_integrity\":\"sha512-zL7y+jX4gkjn+EAWKOE0z2CNdR+51iBMYtycV75Ke2r58rFpNsU86pbuCEcNxVwH9J3da/UUMpxCgasBTm7xew==\",\"_location\":\"/postmark\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"postmark\",\"name\":\"postmark\",\"escapedName\":\"postmark\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/postmark/-/postmark-2.6.0.tgz\",\"_shasum\":\"8cfdc9a73e35deb19a0e6450a15bebe850bf175a\",\"_spec\":\"postmark\",\"_where\":\"C:\\\\projects\\\\portfolio\\\\vue-site\",\"author\":{\"name\":\"Igor Balos\"},\"bugs\":{\"url\":\"https://github.com/wildbit/postmark.js/issues\"},\"bundleDependencies\":false,\"contributors\":[{\"name\":\"Aaron Blum\"},{\"name\":\"Aleksey Aleksandrov\"},{\"name\":\"Alex Shepard\"},{\"name\":\"Andrew Theken\"},{\"name\":\"Antony Jones\"},{\"name\":\"Ben Burwell\"},{\"name\":\"Ben Williamson\"},{\"name\":\"Chris Williams\"},{\"name\":\"Igor Balos\"},{\"name\":\"Jakub Borys\"},{\"name\":\"Mark Nguyen\"},{\"name\":\"Matt\"},{\"name\":\"Matthew Blackshaw\"},{\"name\":\"Matthew Conlen\"},{\"name\":\"Ryan Kirkman\"},{\"name\":\"Scott Anderson\"},{\"name\":\"Sebastien Chopin\"},{\"name\":\"Theophane RUPIN\"},{\"name\":\"codesplicer\"},{\"name\":\"francescoRubini\"}],\"dependencies\":{\"axios\":\"^0.19.2\"},\"deprecated\":false,\"description\":\"Official Node.js client library for the Postmark HTTP API - https://www.postmarkapp.com\",\"devDependencies\":{\"@types/chai\":\"^4.1.4\",\"@types/mocha\":\"^5.2.5\",\"@types/nconf\":\"0.0.37\",\"@types/request\":\"^2.47.1\",\"@types/sinon\":\"^7.5.0\",\"chai\":\"^4.1.2\",\"mocha\":\"^5.2.0\",\"nconf\":\"^0.10.0\",\"pre-commit\":\"1.2.2\",\"sinon\":\"^7.5.0\",\"ts-node\":\"^7.0.1\",\"tslint\":\"^5.12.0\",\"typedoc\":\"^0.15.0\",\"typescript\":\"^2.9.2\"},\"directories\":{\"lib\":\"./dist/index.js\"},\"homepage\":\"http://wildbit.github.io/postmark.js\",\"license\":\"MITNFA\",\"main\":\"./dist/index.js\",\"name\":\"postmark\",\"precommit\":[\"compile\",\"lint\",\"test\",\"compile-docs\"],\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/wildbit/postmark.js.git\"},\"scripts\":{\"compile\":\"rm -r -f ./dist && node_modules/.bin/tsc\",\"compile-docs\":\"echo 'Generating docs...' && mkdir -p ./docs && rm -r ./docs && node_modules/.bin/typedoc --options typedoc.json && git add -A ./docs && echo 'Generated docs!'\",\"lint\":\"tslint -c tslint.json 'src/**/*.ts'\",\"lintfix\":\"tslint -c tslint.json 'src/**/*.ts' --fix\",\"test\":\"node_modules/mocha/bin/mocha --timeout 10000 --retries 1 -r ts-node/register test/**/*test.ts\",\"unittest\":\"node_modules/mocha/bin/mocha --timeout 10000 --retries 1 -r ts-node/register test/unit/**/*test.ts\",\"watchtests\":\"mocha --timeout 10000 --retries 1 -r ts-node/register -R list -w --recursive -G test/**/*test.ts\"},\"tags\":[\"email\",\"utility\",\"postmark\",\"sending\",\"transactional\"],\"types\":\"./dist/index.d.ts\",\"version\":\"2.6.0\"}");

/***/ }),

/***/ "../node_modules/supports-color/index.js":
/*!***********************************************!*\
  !*** ../node_modules/supports-color/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(/*! os */ "os");
const tty = __webpack_require__(/*! tty */ "tty");
const hasFlag = __webpack_require__(/*! has-flag */ "../node_modules/has-flag/index.js");

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ "./mail.js":
/*!*****************!*\
  !*** ./mail.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// event is info about what triggered the action
// could be event.body//context contains info about the context the functio nwas called, like user info
// callback is used to send a respond, like success or error
const postmark = __webpack_require__(/*! postmark */ "../node_modules/postmark/dist/index.js"); // require mail service, postmark in this case


const client = new postmark.Client("53407660-0f6d-45d3-b098-b38e36e3d2e3"); // your postmark api key

const headers = {
  "Access-Control-Allow-Origin": "*",
  // better change this for production
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = function (event, context, callback) {
  // only allow POST requests
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 410,
      body: JSON.stringify({
        message: 'Only POST requests allowed.'
      })
    });
  } // parse the body to JSON so we can use it in JS


  const payload = JSON.parse(event.body); // validate the form

  if (!payload.name || !payload.subject || !payload.email || !payload.message) {
    return callback(null, {
      statusCode: 422,
      headers,
      body: JSON.stringify({
        message: 'Required information is missing.'
      })
    });
  } // finally everything is fine and we can send the mail


  return client.sendEmail({
    "From": "skm1790@gmail.com",
    "To": "skm1790@gmail.com",
    "ReplyTo": payload.email,
    "Subject": `${payload.subject}`,
    "TextBody": `
      Hey,
      ${payload.name} sent a new message from your website!
      ${payload.message}
      Cheers, your webserver!
    `
  }, (err, result) => {
    // if there happenend an error on the postmark side we send a 500 error to the client
    if (err) {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          message: "Internal Server Error: " + err
        })
      });
    } // if everything was fine we send status code 200


    return callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Message sent successfully!"
      })
    });
  });
};

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ })));