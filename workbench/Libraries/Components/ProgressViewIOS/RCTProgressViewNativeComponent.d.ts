/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
import { Float, WithDefault } from "../../Types/CodegenTypes";
import { ImageSource } from "../../Image/ImageSource";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    progressViewStyle?: WithDefault<"default" | "bar", "default">;
    progress?: WithDefault<Float, 0>;
    progressTintColor?: ColorValue | null | undefined;
    trackTintColor?: ColorValue | null | undefined;
    progressImage?: ImageSource | null | undefined;
    trackImage?: ImageSource | null | undefined;
}>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
