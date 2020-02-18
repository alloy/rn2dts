import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
import { WithDefault, BubblingEventHandler } from "react-native/Libraries/Types/CodegenTypes";
import { HostComponent } from "react-native/Libraries/Renderer/shims/ReactNativeTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type SwitchChangeEvent = UniqueBranding & Readonly<{
    value: boolean;
}>;
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    disabled?: WithDefault<boolean, false>;
    enabled?: WithDefault<boolean, true>;
    thumbColor?: ColorValue | null | undefined;
    trackColorForFalse?: ColorValue | null | undefined;
    trackColorForTrue?: ColorValue | null | undefined;
    value?: WithDefault<boolean, false>;
    on?: WithDefault<boolean, false>;
    thumbTintColor?: ColorValue | null | undefined;
    trackTintColor?: ColorValue | null | undefined;
    onChange?: BubblingEventHandler<SwitchChangeEvent>;
}>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setNativeValue: ((viewRef: React.ElementRef<NativeType>, value: boolean) => void);
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
