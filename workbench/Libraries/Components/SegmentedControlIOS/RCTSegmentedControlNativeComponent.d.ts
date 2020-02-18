/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
import { ViewProps } from "../View/ViewPropTypes";
import { BubblingEventHandler, WithDefault, Int32 } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
export declare type OnChangeEvent = UniqueBranding & Readonly<{
    value: Int32;
    selectedSegmentIndex: Int32;
}>;
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    values?: ReadonlyArray<string>;
    selectedIndex?: WithDefault<Int32, 0>;
    enabled?: WithDefault<boolean, true>;
    tintColor?: ColorValue | null | undefined;
    momentary?: WithDefault<boolean, false>;
    onChange?: BubblingEventHandler<OnChangeEvent> | null | undefined;
}>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
