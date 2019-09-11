/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the TaskActionsList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The SID of the Assistant that is the parent of the Task associated with the resource
 * @param taskSid - The SID of the Task associated with the resource
 */
declare function TaskActionsList(version: V1, assistantSid: string, taskSid: string): TaskActionsListInstance;

/**
 * Options to pass to update
 *
 * @property actions - The JSON string that specifies the actions that instruct the Assistant on how to perform the task
 */
interface TaskActionsInstanceUpdateOptions {
  actions?: object;
}

interface TaskActionsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TaskActionsContext;
  /**
   * Constructs a task_actions
   */
  get(): TaskActionsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface TaskActionsPayload extends TaskActionsResource, Page.TwilioResponsePayload {
}

interface TaskActionsResource {
  account_sid: string;
  assistant_sid: string;
  data: object;
  task_sid: string;
  url: string;
}

interface TaskActionsSolution {
  assistantSid?: string;
  taskSid?: string;
}


declare class TaskActionsContext {
  /**
   * Initialize the TaskActionsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The SID of the Assistant that is the parent of the Task for which the task actions to fetch were defined
   * @param taskSid - The SID of the Task for which the task actions to fetch were defined
   */
  constructor(version: V1, assistantSid: string, taskSid: string);

  /**
   * fetch a TaskActionsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a TaskActionsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskActionsInstanceUpdateOptions, callback?: (error: Error | null, items: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
}


declare class TaskActionsInstance extends SerializableClass {
  /**
   * Initialize the TaskActionsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The SID of the Assistant that is the parent of the Task associated with the resource
   * @param taskSid - The SID of the Task associated with the resource
   */
  constructor(version: V1, payload: TaskActionsPayload, assistantSid: string, taskSid: string);

  private _proxy: TaskActionsContext;
  accountSid: string;
  assistantSid: string;
  data: object;
  /**
   * fetch a TaskActionsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskActionsInstance) => any): void;
  taskSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a TaskActionsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskActionsInstanceUpdateOptions, callback?: (error: Error | null, items: TaskActionsInstance) => any): void;
  url: string;
}


declare class TaskActionsPage extends Page<V1, TaskActionsPayload, TaskActionsResource, TaskActionsInstance> {
  /**
   * Initialize the TaskActionsPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TaskActionsSolution);

  /**
   * Build an instance of TaskActionsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskActionsPayload): TaskActionsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { TaskActionsContext, TaskActionsInstance, TaskActionsInstanceUpdateOptions, TaskActionsList, TaskActionsListInstance, TaskActionsPage, TaskActionsPayload, TaskActionsResource, TaskActionsSolution }
