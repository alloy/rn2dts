/// <reference types="react" />
/**
 * Creates values that can be used like React components which represent native
 * view managers. You should create JavaScript modules that wrap these values so
 * that the results are memoized. Example:
 *
 *   const View = requireNativeComponent('RCTView');
 *
 */
declare const requireNativeComponent: <T>(uiViewClassName: string) => import("react").AbstractComponent<T, import("flow-builtin-types").UniqueBranding & Readonly<import("../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default requireNativeComponent;
