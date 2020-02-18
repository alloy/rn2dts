import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
import { DirectEventHandler, Int32, WithDefault } from "../../Types/CodegenTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../../Components/View/ViewPropTypes";
declare type PickerItem = UniqueBranding & Readonly<{
    label: string;
    color?: Int32 | null | undefined;
}>;
declare type PickerItemSelectEvent = UniqueBranding & Readonly<{
    position: Int32;
}>;
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    style?: TextStyleProp | null | undefined;
    color?: ColorValue | null | undefined;
    enabled?: WithDefault<boolean, true>;
    items: ReadonlyArray<PickerItem>;
    prompt?: WithDefault<string, "">;
    selected: Int32;
    onSelect?: DirectEventHandler<PickerItemSelectEvent>;
}>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setNativeSelectedPosition: ((viewRef: React.ElementRef<NativeType>, index: number) => void);
}
export declare const Commands: NativeCommands;
declare const _default: React.AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
