/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { ReservationList } from './worker/reservation';
import { ReservationListInstance } from './worker/reservation';
import { SerializableClass } from '../../../../interfaces';
import { WorkerChannelList } from './worker/workerChannel';
import { WorkerChannelListInstance } from './worker/workerChannel';
import { WorkerStatisticsList } from './worker/workerStatistics';
import { WorkerStatisticsListInstance } from './worker/workerStatistics';
import { WorkersCumulativeStatisticsList } from './worker/workersCumulativeStatistics';
import { WorkersCumulativeStatisticsListInstance } from './worker/workersCumulativeStatistics';
import { WorkersRealTimeStatisticsList } from './worker/workersRealTimeStatistics';
import { WorkersRealTimeStatisticsListInstance } from './worker/workersRealTimeStatistics';

/**
 * Initialize the WorkerList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workflow this worker is associated with
 */
declare function WorkerList(version: V1, workspaceSid: string): WorkerListInstance;

/**
 * Options to pass to update
 *
 * @property activitySid - The activity_sid
 * @property attributes - The attributes
 * @property friendlyName - The friendly_name
 * @property rejectPendingReservations - The reject_pending_reservations
 */
interface WorkerInstanceUpdateOptions {
  activitySid?: string;
  attributes?: string;
  friendlyName?: string;
  rejectPendingReservations?: boolean;
}

interface WorkerListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkerContext;
  /**
   * create a WorkerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: WorkerListInstanceCreateOptions, callback?: (error: Error | null, item: WorkerInstance) => any): Promise<WorkerInstance>;
  /**
   * Streams WorkerInstance records from the API.
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
  each(opts?: WorkerListInstanceEachOptions, callback?: (item: WorkerInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a worker
   *
   * @param sid - The sid
   */
  get(sid: string): WorkerContext;
  /**
   * Retrieve a single target page of WorkerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
  /**
   * Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: WorkerListInstanceOptions, callback?: (error: Error | null, items: WorkerInstance[]) => any): Promise<WorkerInstance[]>;
  /**
   * Retrieve a single page of WorkerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: WorkerListInstancePageOptions, callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
  statistics?: object;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property activitySid - A valid Activity describing the worker's initial state.
 * @property attributes - JSON object describing this worker.
 * @property friendlyName - String representing user-friendly name for the Worker.
 */
interface WorkerListInstanceCreateOptions {
  activitySid?: string;
  attributes?: string;
  friendlyName: string;
}

/**
 * Options to pass to each
 *
 * @property activityName - Filter by workers that are in a particular Activity by Friendly Name
 * @property activitySid - Filter by workers that are in a particular Activity by SID
 * @property available - Filter by workers that are available or unavailable.
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - Filter by a worker's friendly name
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
 * @property targetWorkersExpression - Filter by workers that would match an expression on a TaskQueue.
 * @property taskQueueName - Filter by workers that are eligible for a TaskQueue by Friendly Name
 * @property taskQueueSid - Filter by workers that are eligible for a TaskQueue by SID
 */
interface WorkerListInstanceEachOptions {
  activityName?: string;
  activitySid?: string;
  available?: string;
  callback?: (item: WorkerInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  targetWorkersExpression?: string;
  taskQueueName?: string;
  taskQueueSid?: string;
}

/**
 * Options to pass to list
 *
 * @property activityName - Filter by workers that are in a particular Activity by Friendly Name
 * @property activitySid - Filter by workers that are in a particular Activity by SID
 * @property available - Filter by workers that are available or unavailable.
 * @property friendlyName - Filter by a worker's friendly name
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
 * @property targetWorkersExpression - Filter by workers that would match an expression on a TaskQueue.
 * @property taskQueueName - Filter by workers that are eligible for a TaskQueue by Friendly Name
 * @property taskQueueSid - Filter by workers that are eligible for a TaskQueue by SID
 */
interface WorkerListInstanceOptions {
  activityName?: string;
  activitySid?: string;
  available?: string;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  targetWorkersExpression?: string;
  taskQueueName?: string;
  taskQueueSid?: string;
}

/**
 * Options to pass to page
 *
 * @property activityName - Filter by workers that are in a particular Activity by Friendly Name
 * @property activitySid - Filter by workers that are in a particular Activity by SID
 * @property available - Filter by workers that are available or unavailable.
 * @property friendlyName - Filter by a worker's friendly name
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property targetWorkersExpression - Filter by workers that would match an expression on a TaskQueue.
 * @property taskQueueName - Filter by workers that are eligible for a TaskQueue by Friendly Name
 * @property taskQueueSid - Filter by workers that are eligible for a TaskQueue by SID
 */
interface WorkerListInstancePageOptions {
  activityName?: string;
  activitySid?: string;
  available?: string;
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  targetWorkersExpression?: string;
  taskQueueName?: string;
  taskQueueSid?: string;
}

interface WorkerPayload extends WorkerResource, Page.TwilioResponsePayload {
}

interface WorkerResource {
  account_sid: string;
  activity_name: string;
  activity_sid: string;
  attributes: string;
  available: boolean;
  date_created: Date;
  date_status_changed: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  url: string;
  workspace_sid: string;
}

interface WorkerSolution {
  workspaceSid?: string;
}


declare class WorkerContext {
  /**
   * Initialize the WorkerContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, workspaceSid: string, sid: string);

  cumulativeStatistics: WorkersCumulativeStatisticsListInstance;
  /**
   * fetch a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkerInstance) => any): Promise<WorkerInstance>;
  realTimeStatistics: WorkersRealTimeStatisticsListInstance;
  /**
   * remove a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WorkerInstance) => any): void;
  reservations: ReservationListInstance;
  statistics: WorkerStatisticsListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WorkerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkerInstanceUpdateOptions, callback?: (error: Error | null, items: WorkerInstance) => any): Promise<WorkerInstance>;
  workerChannels: WorkerChannelListInstance;
}


declare class WorkerInstance extends SerializableClass {
  /**
   * Initialize the WorkerContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workflow this worker is associated with
   * @param sid - The sid
   */
  constructor(version: V1, payload: WorkerPayload, workspaceSid: string, sid: string);

  private _proxy: WorkerContext;
  accountSid: string;
  activityName: string;
  activitySid: string;
  attributes: string;
  available: boolean;
  /**
   * Access the cumulativeStatistics
   */
  cumulativeStatistics(): WorkersCumulativeStatisticsListInstance;
  dateCreated: Date;
  dateStatusChanged: Date;
  dateUpdated: Date;
  /**
   * fetch a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkerInstance) => any): void;
  friendlyName: string;
  links: string;
  /**
   * Access the realTimeStatistics
   */
  realTimeStatistics(): WorkersRealTimeStatisticsListInstance;
  /**
   * remove a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WorkerInstance) => any): void;
  /**
   * Access the reservations
   */
  reservations(): ReservationListInstance;
  sid: string;
  /**
   * Access the statistics
   */
  statistics(): WorkerStatisticsListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WorkerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkerInstanceUpdateOptions, callback?: (error: Error | null, items: WorkerInstance) => any): void;
  url: string;
  /**
   * Access the workerChannels
   */
  workerChannels(): WorkerChannelListInstance;
  workspaceSid: string;
}


declare class WorkerPage extends Page<V1, WorkerPayload, WorkerResource, WorkerInstance> {
  /**
   * Initialize the WorkerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkerSolution);

  /**
   * Build an instance of WorkerInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerPayload): WorkerInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkerContext, WorkerInstance, WorkerInstanceUpdateOptions, WorkerList, WorkerListInstance, WorkerListInstanceCreateOptions, WorkerListInstanceEachOptions, WorkerListInstanceOptions, WorkerListInstancePageOptions, WorkerPage, WorkerPayload, WorkerResource, WorkerSolution }
