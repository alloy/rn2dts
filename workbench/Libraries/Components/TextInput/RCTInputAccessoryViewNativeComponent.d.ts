/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    backgroundColor?: ColorValue | null | undefined;
}>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
