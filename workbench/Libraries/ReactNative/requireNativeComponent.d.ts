/// <reference types="react" />
/**
 * Creates values that can be used like React components which represent native
 * view managers. You should create JavaScript modules that wrap these values so
 * that the results are memoized. Example:
 *
 *   const View = requireNativeComponent('RCTView');
 *
 */
declare const requireNativeComponent: <T>(uiViewClassName: string) => import("react").AbstractComponent<T, import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
    blur: () => void;
    focus: () => void;
    measure: (callback: import("../Renderer/shims/ReactNativeTypes").MeasureOnSuccessCallback) => void;
    measureInWindow: (callback: import("../Renderer/shims/ReactNativeTypes").MeasureInWindowOnSuccessCallback) => void;
    measureLayout: (relativeToNativeNode: number | undefined, onSuccess: import("../Renderer/shims/ReactNativeTypes").MeasureLayoutOnSuccessCallback, onFail?: (() => void) | undefined) => void;
    setNativeProps: (nativeProps: any) => void;
}>>;
export default requireNativeComponent;
