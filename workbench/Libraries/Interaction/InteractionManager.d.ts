import { $FlowFixMe } from "flow-builtin-types";
type Handle = number;
import { Task } from "./TaskQueue";

declare var InteractionManager: {
  Events: {
    interactionStart: "interactionStart";
    interactionComplete: "interactionComplete";
  };

  /**
     * Schedule a function to run after all interactions have completed. Returns a cancellable
     * "promise".
     */
  runAfterInteractions(task: Task | null | undefined): {then: ((...args: any) => any);done: ((...args: any) => any);cancel: ((...args: any) => any);};

  /**
     * Notify manager that an interaction has started.
     */
  createInteractionHandle(): Handle;

  /**
     * Notify manager that an interaction has completed.
     */
  clearInteractionHandle(handle: Handle): void;
  addListener: $FlowFixMe;

  /**
     * A positive number will use setTimeout to schedule any tasks after the
     * eventLoopRunningTime hits the deadline value, otherwise all tasks will be
     * executed in one setImmediate batch (default).
     */
  setDeadline(deadline: number): void;
};
export { Handle };

declare module.exports: typeof InteractionManager