import { Response } from 'express';
import { Codes } from './Codes';
import { IAPIParams, IAPIResponse, IMessage, Status } from './Models';

/**
 * @class
 * @description Implementation of the IAPIResponse interface
 */
export default class APIResponse implements IAPIResponse {
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
