import { UniqueBranding, Stringish } from "flow-builtin-types";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import * as React from "react";
declare type PickerIOSChangeEvent = React.SyntheticEvent<UniqueBranding & Readonly<{
    newValue: number | string;
    newIndex: number;
}>>;
declare type RCTPickerIOSItemType = UniqueBranding & Readonly<{
    label: Label | null | undefined;
    value: (number | string) | null | undefined;
    textColor: number | null | undefined;
}>;
declare type Label = Stringish | number;
declare type NativeProps = UniqueBranding & Readonly<{
    items: ReadonlyArray<RCTPickerIOSItemType>;
    onChange: ((event: PickerIOSChangeEvent) => void);
    selectedIndex: number;
    style?: TextStyleProp | null | undefined;
    testID?: string | null | undefined;
}>;
declare type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setNativeSelectedIndex: ((viewRef: React.ElementRef<ComponentType>, index: number) => void);
}
export declare const Commands: NativeCommands;
declare const RCTPickerNativeComponent: ComponentType;
export default RCTPickerNativeComponent;
