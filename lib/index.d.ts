/**
 * @file index.ts
 * @author Sam Redmond
 * @license MIT
 */
import { Response } from 'express';
import { Status } from './httpCodes';
/**
 * @interface IMessage
 * @description Message object
 */
export interface IMessage {
    /**
     * @var {string} code A code such as auth/success quickly describing the request outcome
     */
    code: string;
    /**
     * @var {string} message A message to give the user about their request
     */
    message: string;
}
/**
 * @interface IAPIParams
 * @description Defines parameters for the APIResponse class
 */
export interface IAPIParams {
    /**
     * @var {boolean} success If the request was successful or not
     */
    success: boolean;
    /**
     * @var {any} body Optional body object of any to send back
     */
    body?: any;
    /**
     * @var {Status} status Optional HTTP status, if not set will default to 200
     */
    status?: Status;
}
/**
 * @interface IApiResponse
 * @description Interface for the API response class
 */
export interface IAPIResponse {
    /**
     * @var {boolean} success if the request was successful or not
     */
    success: boolean;
    /**
     * @var {any} body optional body of the response
     */
    body?: any;
    /**
     * @var {IMessage} message Code and Message set based on the status of the response
     */
    message: IMessage;
    /**
     * @var {Status} status The HTTP status code of the response
     */
    status?: Status;
    /**
     * @function Send
     * @param {Response} res the Express Response object
     * @param {IMessage} message optional message you can supply
     * @returns {Response}
     * @description Sends an HTTP response back to the requester
     */
    Send(res: Response, message?: IMessage): Response;
}
/**
 * @class
 * @description Implementation of the IAPIResponse interface
 */
export declare class APIResponse implements IAPIResponse {
    success: boolean;
    body?: any;
    message: IMessage;
    status: Status;
    /**
     * @constructor
     * @param {IAPIParams} params The parameters of the response
     */
    constructor(params: IAPIParams);
    /**
     * @function Send
     * @param {Response} res the Express Response object
     * @param {IMessage} message optional message you can supply
     * @returns {Response}
     * @description Sends an HTTP response back to the requester
     */
    Send(res: Response, message?: IMessage): Response;
}
