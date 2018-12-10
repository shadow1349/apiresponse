/**
 * @file IAPIParams.ts
 * @author Sam Redmond
 * @license MIT
 */

import { Status } from './Status';

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