/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { Double, WithDefault } from "../../Types/CodegenTypes";
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    styleAttr?: string;
    typeAttr?: string;
    indeterminate: boolean;
    progress?: WithDefault<Double, 0>;
    animating?: WithDefault<boolean, true>;
    color?: ColorValue | null | undefined;
    testID?: WithDefault<string, "">;
}>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
