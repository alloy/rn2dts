/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
import { WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type NativeProps = UniqueBranding & Readonly<ViewProps & {
    /**
     * Whether the indicator should hide when not animating (true by default).
     *
     * See http://facebook.github.io/react-native/docs/activityindicator.html#hideswhenstopped
     */
    hidesWhenStopped?: WithDefault<boolean, false>;
    /**
     * Whether to show the indicator (true, the default) or hide it (false).
     *
     * See http://facebook.github.io/react-native/docs/activityindicator.html#animating
     */
    animating?: WithDefault<boolean, false>;
    /**
     * The foreground color of the spinner (default is gray).
     *
     * See http://facebook.github.io/react-native/docs/activityindicator.html#color
     */
    color?: ColorValue | null | undefined;
    /**
     * Size of the indicator (default is 'small').
     * Passing a number to the size prop is only supported on Android.
     *
     * See http://facebook.github.io/react-native/docs/activityindicator.html#size
     */
    size?: WithDefault<"small" | "large", "small">;
}>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
