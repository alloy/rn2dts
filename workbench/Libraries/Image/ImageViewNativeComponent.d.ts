/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
import { DangerouslyImpreciseStyle } from "../StyleSheet/StyleSheet";
import { ResolvedAssetSource } from "./AssetSourceResolver";
import { ImageProps } from "./ImageProps";
import { ViewProps } from "../Components/View/ViewPropTypes";
import { ImageStyleProp } from "../StyleSheet/StyleSheet";
import { ColorValue } from "../StyleSheet/StyleSheetTypes";
declare type NativeProps = UniqueBranding & Readonly<ImageProps & ViewProps & {
    style?: ImageStyleProp | DangerouslyImpreciseStyle;
    tintColor?: ColorValue;
    shouldNotifyLoadEvents?: boolean;
    src?: (ResolvedAssetSource | null | undefined) | ReadonlyArray<{
        uri: string;
    }>;
    headers?: string | null | undefined;
    defaultSrc?: string | null | undefined;
    loadingIndicatorSrc?: string | null | undefined;
}>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
