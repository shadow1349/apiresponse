import { Response } from 'express';

/**
 * @interface IMessage
 * @description Message object
 */
export interface IMessage {
  /**
   * @var {string} code A code such as auth/success quickly describing the request outcome
   */
  code?: string;
  /**
   * @var {string} message A message to give the user about their request
   */
  message: string;
}

/**
 * @type Status
 * @description Defines all the possible HTTP Status codes
 */
export type Status =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 218
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 419
  | 420
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 440
  | 444
  | 449
  | 450
  | 451
  | 494
  | 495
  | 496
  | 497
  | 498
  | 499
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 509
  | 510
  | 511
  | 520
  | 521
  | 522
  | 523
  | 524
  | 525
  | 526
  | 527
  | 530
  | 598;

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
 * @interface IAPIResponse
 * @description API Response Model
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
