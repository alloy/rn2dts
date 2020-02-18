import { UniqueBranding } from "flow-builtin-types";
import { BubblingEventHandler, WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import * as React from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type SwitchChangeEvent = UniqueBranding & Readonly<{
    value: boolean;
}>;
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    disabled?: WithDefault<boolean, false>;
    value?: WithDefault<boolean, false>;
    tintColor?: ColorValue | null | undefined;
    onTintColor?: ColorValue | null | undefined;
    thumbTintColor?: ColorValue | null | undefined;
    thumbColor?: ColorValue | null | undefined;
    trackColorForFalse?: ColorValue | null | undefined;
    trackColorForTrue?: ColorValue | null | undefined;
    onChange?: BubblingEventHandler<SwitchChangeEvent> | null | undefined;
}>;
declare type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setValue: ((viewRef: React.ElementRef<ComponentType>, value: boolean) => void);
}
export declare const Commands: NativeCommands;
declare const _default: React.AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
