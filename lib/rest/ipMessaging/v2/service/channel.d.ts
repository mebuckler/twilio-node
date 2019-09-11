/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import serialize = require('../../../../base/serialize');
import { InviteList } from './channel/invite';
import { InviteListInstance } from './channel/invite';
import { MemberList } from './channel/member';
import { MemberListInstance } from './channel/member';
import { MessageList } from './channel/message';
import { MessageListInstance } from './channel/message';
import { SerializableClass } from '../../../../interfaces';
import { WebhookList } from './channel/webhook';
import { WebhookListInstance } from './channel/webhook';

type ChannelChannelType = 'public'|'private';

type ChannelWebhookEnabledType = 'true'|'false';

/**
 * Initialize the ChannelList
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the resource is associated with
 */
declare function ChannelList(version: V2, serviceSid: string): ChannelListInstance;

/**
 * Options to pass to update
 *
 * @property attributes - A valid JSON string that contains application-specific data
 * @property createdBy - The identity of the User that created the Channel
 * @property dateCreated - The ISO 8601 date and time in GMT when the resource was created
 * @property dateUpdated - The ISO 8601 date and time in GMT when the resource was updated
 * @property friendlyName - A string to describe the resource
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 */
interface ChannelInstanceUpdateOptions {
  attributes?: string;
  createdBy?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
  uniqueName?: string;
}

interface ChannelListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ChannelContext;
  /**
   * create a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: ChannelListInstanceCreateOptions, callback?: (error: Error | null, item: ChannelInstance) => any): Promise<ChannelInstance>;
  /**
   * Streams ChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ChannelListInstanceEachOptions, callback?: (item: ChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a channel
   *
   * @param sid - The SID of the resource
   */
  get(sid: string): ChannelContext;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ChannelListInstanceOptions, callback?: (error: Error | null, items: ChannelInstance[]) => any): Promise<ChannelInstance[]>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ChannelListInstancePageOptions, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property attributes - A valid JSON string that contains application-specific data
 * @property createdBy - The identity of the User that created the Channel
 * @property dateCreated - The ISO 8601 date and time in GMT when the resource was created
 * @property dateUpdated - The ISO 8601 date and time in GMT when the resource was updated
 * @property friendlyName - A string to describe the new resource
 * @property type - The visibility of the channel
 * @property uniqueName - An application-defined string that uniquely identifies the Channel resource
 */
interface ChannelListInstanceCreateOptions {
  attributes?: string;
  createdBy?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
  type?: ChannelChannelType;
  uniqueName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property type - The visibility of the channel to read
 */
interface ChannelListInstanceEachOptions {
  callback?: (item: ChannelInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
  type?: ChannelChannelType | ChannelChannelType[];
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property type - The visibility of the channel to read
 */
interface ChannelListInstanceOptions {
  limit?: number;
  pageSize?: number;
  type?: ChannelChannelType | ChannelChannelType[];
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property type - The visibility of the channel to read
 */
interface ChannelListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  type?: ChannelChannelType | ChannelChannelType[];
}

interface ChannelPayload extends ChannelResource, Page.TwilioResponsePayload {
}

interface ChannelResource {
  account_sid: string;
  attributes: string;
  created_by: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  members_count: number;
  messages_count: number;
  service_sid: string;
  sid: string;
  type: ChannelChannelType;
  unique_name: string;
  url: string;
}

interface ChannelSolution {
  serviceSid?: string;
}


declare class ChannelContext {
  /**
   * Initialize the ChannelContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the resource from
   * @param sid - The SID of the resource
   */
  constructor(version: V2, serviceSid: string, sid: string);

  /**
   * fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ChannelInstance) => any): Promise<ChannelInstance>;
  invites: InviteListInstance;
  members: MemberListInstance;
  messages: MessageListInstance;
  /**
   * remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ChannelInstanceUpdateOptions, callback?: (error: Error | null, items: ChannelInstance) => any): Promise<ChannelInstance>;
  webhooks: WebhookListInstance;
}


declare class ChannelInstance extends SerializableClass {
  /**
   * Initialize the ChannelContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the resource is associated with
   * @param sid - The SID of the resource
   */
  constructor(version: V2, payload: ChannelPayload, serviceSid: string, sid: string);

  private _proxy: ChannelContext;
  accountSid: string;
  attributes: string;
  createdBy: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  friendlyName: string;
  /**
   * Access the invites
   */
  invites(): InviteListInstance;
  links: string;
  /**
   * Access the members
   */
  members(): MemberListInstance;
  membersCount: number;
  /**
   * Access the messages
   */
  messages(): MessageListInstance;
  messagesCount: number;
  /**
   * remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: ChannelChannelType;
  uniqueName: string;
  /**
   * update a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ChannelInstanceUpdateOptions, callback?: (error: Error | null, items: ChannelInstance) => any): void;
  url: string;
  /**
   * Access the webhooks
   */
  webhooks(): WebhookListInstance;
}


declare class ChannelPage extends Page<V2, ChannelPayload, ChannelResource, ChannelInstance> {
  /**
   * Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: ChannelSolution);

  /**
   * Build an instance of ChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChannelPayload): ChannelInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ChannelContext, ChannelInstance, ChannelInstanceUpdateOptions, ChannelList, ChannelListInstance, ChannelListInstanceCreateOptions, ChannelListInstanceEachOptions, ChannelListInstanceOptions, ChannelListInstancePageOptions, ChannelPage, ChannelPayload, ChannelResource, ChannelSolution }
