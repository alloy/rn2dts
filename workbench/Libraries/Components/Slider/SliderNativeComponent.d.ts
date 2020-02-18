/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
import { BubblingEventHandler, DirectEventHandler, Double, WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ImageSource } from "../../Image/ImageSource";
import { ViewProps } from "../View/ViewPropTypes";
declare type Event = UniqueBranding & Readonly<{
    value: Double;
    fromUser?: boolean;
}>;
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    disabled?: WithDefault<boolean, false>;
    enabled?: WithDefault<boolean, true>;
    maximumTrackImage?: ImageSource | null | undefined;
    maximumTrackTintColor?: ColorValue | null | undefined;
    maximumValue?: WithDefault<Double, 1>;
    minimumTrackImage?: ImageSource | null | undefined;
    minimumTrackTintColor?: ColorValue | null | undefined;
    minimumValue?: WithDefault<Double, 0>;
    step?: WithDefault<Double, 0>;
    testID?: WithDefault<string, "">;
    thumbImage?: ImageSource | null | undefined;
    thumbTintColor?: ColorValue | null | undefined;
    trackImage?: ImageSource | null | undefined;
    value?: WithDefault<Double, 0>;
    onChange?: BubblingEventHandler<Event> | null | undefined;
    onValueChange?: BubblingEventHandler<Event, "paperValueChange"> | null | undefined;
    onSlidingComplete?: DirectEventHandler<Event, "paperSlidingComplete"> | null | undefined;
}>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
