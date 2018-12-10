/**
 * @file IMessage.ts
 * @author Sam Redmond
 * @license MIT
 */

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
