/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Sync = require('../../Sync');
import serialize = require('../../../../base/serialize');
import { DocumentPermissionList } from './document/documentPermission';
import { DocumentPermissionListInstance } from './document/documentPermission';
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the DocumentList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function DocumentList(version: Sync, serviceSid: string): DocumentListInstance;

/**
 * Options to pass to update
 *
 * @property data - The data
 */
interface DocumentInstanceUpdateOptions {
  data: object;
}

interface DocumentListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DocumentContext;
  /**
   * create a DocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: DocumentListInstanceCreateOptions, callback?: (error: Error | null, item: DocumentInstance) => any): Promise<DocumentInstance>;
  /**
   * Streams DocumentInstance records from the API.
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
  each(opts?: DocumentListInstanceEachOptions, callback?: (item: DocumentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a document
   *
   * @param sid - The sid
   */
  get(sid: string): DocumentContext;
  /**
   * Retrieve a single target page of DocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
  /**
   * Lists DocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DocumentListInstanceOptions, callback?: (error: Error | null, items: DocumentInstance[]) => any): Promise<DocumentInstance[]>;
  /**
   * Retrieve a single page of DocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DocumentListInstancePageOptions, callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property data - The data
 * @property uniqueName - The unique_name
 */
interface DocumentListInstanceCreateOptions {
  data?: object;
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
 */
interface DocumentListInstanceEachOptions {
  callback?: (item: DocumentInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
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
 */
interface DocumentListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface DocumentListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface DocumentPayload extends DocumentResource, Page.TwilioResponsePayload {
}

interface DocumentResource {
  account_sid: string;
  created_by: string;
  data: object;
  date_created: Date;
  date_updated: Date;
  links: string;
  revision: string;
  service_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface DocumentSolution {
  serviceSid?: string;
}


declare class DocumentContext {
  /**
   * Initialize the DocumentContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Sync, serviceSid: string, sid: string);

  documentPermissions: DocumentPermissionListInstance;
  /**
   * fetch a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DocumentInstance) => any): Promise<DocumentInstance>;
  /**
   * remove a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DocumentInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a DocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentInstanceUpdateOptions, callback?: (error: Error | null, items: DocumentInstance) => any): Promise<DocumentInstance>;
}


declare class DocumentInstance extends SerializableClass {
  /**
   * Initialize the DocumentContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Sync, payload: DocumentPayload, serviceSid: string, sid: string);

  private _proxy: DocumentContext;
  accountSid: string;
  createdBy: string;
  data: object;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * Access the documentPermissions
   */
  documentPermissions(): DocumentPermissionListInstance;
  /**
   * fetch a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DocumentInstance) => any): void;
  links: string;
  /**
   * remove a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DocumentInstance) => any): void;
  revision: string;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a DocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentInstanceUpdateOptions, callback?: (error: Error | null, items: DocumentInstance) => any): void;
  url: string;
}


declare class DocumentPage extends Page<Sync, DocumentPayload, DocumentResource, DocumentInstance> {
  /**
   * Initialize the DocumentPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Sync, response: Response<string>, solution: DocumentSolution);

  /**
   * Build an instance of DocumentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DocumentPayload): DocumentInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { DocumentContext, DocumentInstance, DocumentInstanceUpdateOptions, DocumentList, DocumentListInstance, DocumentListInstanceCreateOptions, DocumentListInstanceEachOptions, DocumentListInstanceOptions, DocumentListInstancePageOptions, DocumentPage, DocumentPayload, DocumentResource, DocumentSolution }
