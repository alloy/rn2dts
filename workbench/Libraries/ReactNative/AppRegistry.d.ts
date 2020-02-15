import { React$ComponentType } from "flow-builtin-types";
import { IPerformanceLogger } from "../Utilities/createPerformanceLogger";
declare type Task = ((taskData: any) => Promise<void>);
export declare type TaskProvider = (() => Task);
declare type TaskCanceller = (() => void);
declare type TaskCancelProvider = (() => TaskCanceller);
export declare type ComponentProvider = (() => React$ComponentType<any>);
export declare type ComponentProviderInstrumentationHook = ((component: ComponentProvider, scopedPerformanceLogger: IPerformanceLogger) => React$ComponentType<any>);
export declare type AppConfig = {
    appKey: string;
    component?: ComponentProvider;
    run?: ((...args: any) => any);
    section?: boolean;
};
export declare type Runnable = {
    component?: ComponentProvider;
    run: ((...args: any) => any);
};
export declare type Runnables = {
    [appKey: string]: Runnable;
};
export declare type Registry = {
    sections: Array<string>;
    runnables: Runnables;
};
export declare type WrapperComponentProvider = ((arg0: any) => React$ComponentType<any>);
/**
 * `AppRegistry` is the JavaScript entry point to running all React Native apps.
 *
 * See http://facebook.github.io/react-native/docs/appregistry.html
 */
declare const AppRegistry: {
    setWrapperComponentProvider(provider: WrapperComponentProvider): void;
    enableArchitectureIndicator(enabled: boolean): void;
    registerConfig(config: AppConfig[]): void;
    /**
     * Registers an app's root component.
     *
     * See http://facebook.github.io/react-native/docs/appregistry.html#registercomponent
     */
    registerComponent(appKey: string, componentProvider: ComponentProvider, section?: boolean | undefined): string;
    registerRunnable(appKey: string, run: (...args: any) => any): string;
    registerSection(appKey: string, component: ComponentProvider): void;
    getAppKeys(): string[];
    getSectionKeys(): string[];
    getSections(): Runnables;
    getRunnable(appKey: string): Runnable | null | undefined;
    getRegistry(): Registry;
    setComponentProviderInstrumentationHook(hook: ComponentProviderInstrumentationHook): void;
    /**
     * Loads the JavaScript bundle and runs the app.
     *
     * See http://facebook.github.io/react-native/docs/appregistry.html#runapplication
     */
    runApplication(appKey: string, appParameters: any): void;
    /**
     * Stops an application when a view should be destroyed.
     *
     * See http://facebook.github.io/react-native/docs/appregistry.html#unmountapplicationcomponentatroottag
     */
    unmountApplicationComponentAtRootTag(rootTag: number): void;
    /**
     * Register a headless task. A headless task is a bit of code that runs without a UI.
     *
     * See http://facebook.github.io/react-native/docs/appregistry.html#registerheadlesstask
     */
    registerHeadlessTask(taskKey: string, taskProvider: TaskProvider): void;
    /**
     * Register a cancellable headless task. A headless task is a bit of code that runs without a UI.
     *
     * See http://facebook.github.io/react-native/docs/appregistry.html#registercancellableheadlesstask
     */
    registerCancellableHeadlessTask(taskKey: string, taskProvider: TaskProvider, taskCancelProvider: TaskCancelProvider): void;
    /**
     * Only called from native code. Starts a headless task.
     *
     * See http://facebook.github.io/react-native/docs/appregistry.html#startheadlesstask
     */
    startHeadlessTask(taskId: number, taskKey: string, data: any): void;
    /**
     * Only called from native code. Cancels a headless task.
     *
     * See http://facebook.github.io/react-native/docs/appregistry.html#cancelheadlesstask
     */
    cancelHeadlessTask(taskId: number, taskKey: string): void;
};
export default AppRegistry;
