/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
import { ViewProps } from "../View/ViewPropTypes";
import { WithDefault } from "../../Types/CodegenTypes";
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    emulateUnlessSupported?: WithDefault<boolean, false>;
}>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
