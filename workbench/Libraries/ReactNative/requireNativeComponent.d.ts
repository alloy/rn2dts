import { HostComponent } from "../Renderer/shims/ReactNativeTypes";

declare var requireNativeComponent: (<T>(uiViewClassName: string) => HostComponent<T>);

declare module.exports: typeof requireNativeComponent