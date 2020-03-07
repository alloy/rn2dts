import { React$ComponentType } from "flow-builtin-types";
import { IPerformanceLogger } from "../Utilities/createPerformanceLogger";

type Task = ((taskData: any) => Promise<void>);
type TaskProvider = (() => Task);
type TaskCanceller = (() => void);
type TaskCancelProvider = (() => TaskCanceller);

type ComponentProvider = (() => React$ComponentType<any>);
type ComponentProviderInstrumentationHook = ((component: ComponentProvider, scopedPerformanceLogger: IPerformanceLogger) => React$ComponentType<any>);
type AppConfig = {
  appKey: string;
  component?: ComponentProvider;
  run?: ((...args: any) => any);
  section?: boolean;

};
type Runnable = {component?: ComponentProvider;run: ((...args: any) => any);};
type Runnables = {
  [appKey: string]: Runnable;
};
type Registry = {sections: Array<string>;runnables: Runnables;};
type WrapperComponentProvider = ((arg0: any) => React$ComponentType<any>);

declare var AppRegistry: {
  setWrapperComponentProvider(provider: WrapperComponentProvider): void;
  enableArchitectureIndicator(enabled: boolean): void;
  registerConfig(config: Array<AppConfig>): void;

  /**
     * Registers an app's root component.
     *
     * See https://reactnative.dev/docs/appregistry.html#registercomponent
     */
  registerComponent(appKey: string, componentProvider: ComponentProvider, section?: boolean): string;
  registerRunnable(appKey: string, run: ((...args: any) => any)): string;
  registerSection(appKey: string, component: ComponentProvider): void;
  getAppKeys(): Array<string>;
  getSectionKeys(): Array<string>;
  getSections(): Runnables;
  getRunnable(appKey: string): Runnable | null | undefined;
  getRegistry(): Registry;
  setComponentProviderInstrumentationHook(hook: ComponentProviderInstrumentationHook): void;

  /**
     * Loads the JavaScript bundle and runs the app.
     *
     * See https://reactnative.dev/docs/appregistry.html#runapplication
     */
  runApplication(appKey: string, appParameters: any): void;

  /**
     * Stops an application when a view should be destroyed.
     *
     * See https://reactnative.dev/docs/appregistry.html#unmountapplicationcomponentatroottag
     */
  unmountApplicationComponentAtRootTag(rootTag: number): void;

  /**
     * Register a headless task. A headless task is a bit of code that runs without a UI.
     *
     * See https://reactnative.dev/docs/appregistry.html#registerheadlesstask
     */
  registerHeadlessTask(taskKey: string, taskProvider: TaskProvider): void;

  /**
     * Register a cancellable headless task. A headless task is a bit of code that runs without a UI.
     *
     * See https://reactnative.dev/docs/appregistry.html#registercancellableheadlesstask
     */
  registerCancellableHeadlessTask(taskKey: string, taskProvider: TaskProvider, taskCancelProvider: TaskCancelProvider): void;

  /**
     * Only called from native code. Starts a headless task.
     *
     * See https://reactnative.dev/docs/appregistry.html#startheadlesstask
     */
  startHeadlessTask(taskId: number, taskKey: string, data: any): void;

  /**
     * Only called from native code. Cancels a headless task.
     *
     * See https://reactnative.dev/docs/appregistry.html#cancelheadlesstask
     */
  cancelHeadlessTask(taskId: number, taskKey: string): void;
};
export { TaskProvider };

export { ComponentProvider };
export { ComponentProviderInstrumentationHook };
export { AppConfig };
export { Runnable };
export { Runnables };
export { Registry };
export { WrapperComponentProvider };

declare module.exports: typeof AppRegistry