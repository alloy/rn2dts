/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
import { WithDefault } from "../../Types/CodegenTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    name?: WithDefault<string, "">;
}>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
