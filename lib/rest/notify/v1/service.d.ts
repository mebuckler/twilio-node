/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { BindingList } from './service/binding';
import { BindingListInstance } from './service/binding';
import { NotificationList } from './service/notification';
import { NotificationListInstance } from './service/notification';
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the ServiceList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property alexaSkillId - Deprecated
 * @property apnCredentialSid - The SID of the Credential to use for APN Bindings
 * @property defaultAlexaNotificationProtocolVersion - Deprecated
 * @property defaultApnNotificationProtocolVersion - The protocol version to use for sending APNS notifications
 * @property defaultFcmNotificationProtocolVersion - The protocol version to use for sending FCM notifications
 * @property defaultGcmNotificationProtocolVersion - The protocol version to use for sending GCM notifications
 * @property facebookMessengerPageId - Deprecated
 * @property fcmCredentialSid - The SID of the Credential to use for FCM Bindings
 * @property friendlyName - A string to describe the resource
 * @property gcmCredentialSid - The SID of the Credential to use for GCM Bindings
 * @property logEnabled - Whether to log notifications
 * @property messagingServiceSid - The SID of the Messaging Service to use for SMS Bindings
 */
interface ServiceInstanceUpdateOptions {
  alexaSkillId?: string;
  apnCredentialSid?: string;
  defaultAlexaNotificationProtocolVersion?: string;
  defaultApnNotificationProtocolVersion?: string;
  defaultFcmNotificationProtocolVersion?: string;
  defaultGcmNotificationProtocolVersion?: string;
  facebookMessengerPageId?: string;
  fcmCredentialSid?: string;
  friendlyName?: string;
  gcmCredentialSid?: string;
  logEnabled?: boolean;
  messagingServiceSid?: string;
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a service
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property alexaSkillId - Deprecated
 * @property apnCredentialSid - The SID of the Credential to use for APN Bindings
 * @property defaultAlexaNotificationProtocolVersion - Deprecated
 * @property defaultApnNotificationProtocolVersion - The protocol version to use for sending APNS notifications
 * @property defaultFcmNotificationProtocolVersion - The protocol version to use for sending FCM notifications
 * @property defaultGcmNotificationProtocolVersion - The protocol version to use for sending GCM notifications
 * @property facebookMessengerPageId - Deprecated
 * @property fcmCredentialSid - The SID of the Credential to use for FCM Bindings
 * @property friendlyName - A string to describe the resource
 * @property gcmCredentialSid - The SID of the Credential to use for GCM Bindings
 * @property logEnabled - Whether to log notifications
 * @property messagingServiceSid - The SID of the Messaging Service to use for SMS Bindings
 */
interface ServiceListInstanceCreateOptions {
  alexaSkillId?: string;
  apnCredentialSid?: string;
  defaultAlexaNotificationProtocolVersion?: string;
  defaultApnNotificationProtocolVersion?: string;
  defaultFcmNotificationProtocolVersion?: string;
  defaultGcmNotificationProtocolVersion?: string;
  facebookMessengerPageId?: string;
  fcmCredentialSid?: string;
  friendlyName?: string;
  gcmCredentialSid?: string;
  logEnabled?: boolean;
  messagingServiceSid?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - The string that identifies the Service resources to read
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
 */
interface ServiceListInstanceEachOptions {
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - The string that identifies the Service resources to read
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
 */
interface ServiceListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - The string that identifies the Service resources to read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ServiceListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  account_sid: string;
  alexa_skill_id: string;
  apn_credential_sid: string;
  date_created: Date;
  date_updated: Date;
  default_alexa_notification_protocol_version: string;
  default_apn_notification_protocol_version: string;
  default_fcm_notification_protocol_version: string;
  default_gcm_notification_protocol_version: string;
  facebook_messenger_page_id: string;
  fcm_credential_sid: string;
  friendly_name: string;
  gcm_credential_sid: string;
  links: string;
  log_enabled: boolean;
  messaging_service_sid: string;
  sid: string;
  url: string;
}

interface ServiceSolution {
}


declare class ServiceContext {
  /**
   * Initialize the ServiceContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, sid: string);

  bindings: BindingListInstance;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  notifications: NotificationListInstance;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
}


declare class ServiceInstance extends SerializableClass {
  /**
   * Initialize the ServiceContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  accountSid: string;
  alexaSkillId: string;
  apnCredentialSid: string;
  /**
   * Access the bindings
   */
  bindings(): BindingListInstance;
  dateCreated: Date;
  dateUpdated: Date;
  defaultAlexaNotificationProtocolVersion: string;
  defaultApnNotificationProtocolVersion: string;
  defaultFcmNotificationProtocolVersion: string;
  defaultGcmNotificationProtocolVersion: string;
  facebookMessengerPageId: string;
  fcmCredentialSid: string;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  friendlyName: string;
  gcmCredentialSid: string;
  links: string;
  logEnabled: boolean;
  messagingServiceSid: string;
  /**
   * Access the notifications
   */
  notifications(): NotificationListInstance;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  url: string;
}


declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
  /**
   * Initialize the ServicePage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ServiceContext, ServiceInstance, ServiceInstanceUpdateOptions, ServiceList, ServiceListInstance, ServiceListInstanceCreateOptions, ServiceListInstanceEachOptions, ServiceListInstanceOptions, ServiceListInstancePageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
