/**
 * @file APIResponse.ts
 * @author Sam Redmond
 * @license MIT
 */

import { Response } from 'express';
import { Codes } from './Codes';
import { Status } from './Status';
import { IAPIParams } from './IAPIParams';
import { IMessage } from './IMessage';

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
export class APIResponse implements IAPIResponse {
  success: boolean;
  body?: any;
  message: IMessage;
  status: Status;

  /**
   * @constructor
   * @param {IAPIParams} params The parameters of the response
   */
  constructor(params: IAPIParams) {
    this.success = params.success;
    this.body = params.body;
    this.status = params.status ? params.status : 200;
    this.message = Codes[this.status] ? Codes[this.status] : Codes[500];
  }

  /**
   * @function Send
   * @param {Response} res the Express Response object
   * @param {IMessage} message optional message you can supply
   * @returns {Response}
   * @description Sends an HTTP response back to the requester
   */
  Send(res: Response, message?: IMessage): Response {
    const payload = {
      message: message ? message : this.message,
      success: this.success,
      body: this.body
    };

    return res.status(this.status).json(payload);
  }
}