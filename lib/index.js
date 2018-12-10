/**
 * @file index.ts
 * @author Sam Redmond
 * @license MIT
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./httpCodes"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const httpCodes_1 = require("./httpCodes");
    /**
     * @class
     * @description Implementation of the IAPIResponse interface
     */
    class APIResponse {
        /**
         * @constructor
         * @param {IAPIParams} params The parameters of the response
         */
        constructor(params) {
            this.success = params.success;
            this.body = params.body;
            this.status = params.status ? params.status : 200;
            this.message = httpCodes_1.Codes[this.status] ? httpCodes_1.Codes[this.status] : httpCodes_1.Codes[500];
        }
        /**
         * @function Send
         * @param {Response} res the Express Response object
         * @param {IMessage} message optional message you can supply
         * @returns {Response}
         * @description Sends an HTTP response back to the requester
         */
        Send(res, message) {
            const payload = {
                message: message ? message : this.message,
                success: this.success,
                body: this.body
            };
            return res.status(this.status).json(payload);
        }
    }
    exports.APIResponse = APIResponse;
});
//# sourceMappingURL=index.js.map