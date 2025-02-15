/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the UserInfoList
 *
 * @param version - Version of the resource
 */
declare function UserInfoList(version: V1): UserInfoListInstance;

interface UserInfoListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): UserInfoContext;
  /**
   * Constructs a user_info
   */
  get(): UserInfoContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface UserInfoPayload extends UserInfoResource, Page.TwilioResponsePayload {
}

interface UserInfoResource {
  email: string;
  first_name: string;
  friendly_name: string;
  last_name: string;
  url: string;
  user_sid: string;
}

interface UserInfoSolution {
}


declare class UserInfoContext {
  /**
   * Initialize the UserInfoContext
   *
   * @param version - Version of the resource
   */
  constructor(version: V1);

  /**
   * fetch a UserInfoInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserInfoInstance) => any): Promise<UserInfoInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class UserInfoInstance extends SerializableClass {
  /**
   * Initialize the UserInfoContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: UserInfoPayload);

  private _proxy: UserInfoContext;
  email: string;
  /**
   * fetch a UserInfoInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserInfoInstance) => any): Promise<UserInfoInstance>;
  firstName: string;
  friendlyName: string;
  lastName: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  userSid: string;
}


declare class UserInfoPage extends Page<V1, UserInfoPayload, UserInfoResource, UserInfoInstance> {
  /**
   * Initialize the UserInfoPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: UserInfoSolution);

  /**
   * Build an instance of UserInfoInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserInfoPayload): UserInfoInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { UserInfoContext, UserInfoInstance, UserInfoList, UserInfoListInstance, UserInfoPage, UserInfoPayload, UserInfoResource, UserInfoSolution }
