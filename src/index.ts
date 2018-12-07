import { Response } from 'express';

export interface IApiResponse {
  success: boolean;
  body?: any;
  message: { code: string; message: string };
  status: number;

  /**
   * @function Send
   * @param {Response} res
   * @returns {Response}
   * @description Sends an HTTP response back to the requester
   */
  Send(res: Response): Response;
}

export class APIResponse implements IApiResponse {
  success: boolean;
  body?: any;
  message: { code: string; message: string };
  status: number;

  /**
   * @constructor
   * @param {boolean} success If the request was successful or not
   * @param {number} status HTTP status i.e. 200, 400, 500. Defaults to 200
   * @param {any} body Optionally send any kind of body back to the user
   */
  constructor(params: { success: boolean; body?: any; status?: number }) {
    this.success = params.success;
    this.body = params.body;
    this.status = params.status ? params.status : 200;

    if (this.status != 200) {
      switch (this.status) {
        case 401:
          this.message = {
            code: 'auth/unauthorized',
            message: 'You are not authorized to access this route.'
          };
          break;
        case 403:
          this.message = {
            code: 'auth/forbidden',
            message: 'You are forbidden from accessing this route'
          };
          break;
        case 500:
          this.message = {
            code: 'api/error',
            message: 'Internal Server Error. Please try again later.'
          };
          break;
        case 400:
          this.message = {
            code: 'api/request',
            message: 'Invalid Request. Review your request and try again.'
          };
          break;
        default:
          this.message = {
            code: 'api/error',
            message: 'An error occured with your request. Please try again later.'
          };
      }
    } else {
      this.message = this.success
        ? { code: 'api/success', message: 'Request Successful' }
        : { code: 'api/error', message: 'Request Failed' };
    }
  }

  /**
   * @function Send
   * @param {Response} res
   * @returns {Response}
   * @description Sends an HTTP response back to the requester
   */
  Send(res: Response): Response {
    const payload = {
      message: this.message,
      success: this.success,
      body: this.body
    };

    return res.status(this.status).json(payload);
  }
}
