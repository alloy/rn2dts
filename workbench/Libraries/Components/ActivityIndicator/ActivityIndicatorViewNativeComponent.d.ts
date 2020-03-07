import { UniqueBranding } from "flow-builtin-types";
import { WithDefault } from "../../Types/CodegenTypes";

import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  /**
     * Whether the indicator should hide when not animating (true by default).
     *
     * See https://reactnative.dev/docs/activityindicator.html#hideswhenstopped
     */
  hidesWhenStopped?: WithDefault<boolean, false>;

  /**
     * Whether to show the indicator (true, the default) or hide it (false).
     *
     * See https://reactnative.dev/docs/activityindicator.html#animating
     */
  animating?: WithDefault<boolean, false>;

  /**
     * The foreground color of the spinner (default is gray).
     *
     * See https://reactnative.dev/docs/activityindicator.html#color
     */
  color?: ColorValue | null | undefined;

  /**
     * Size of the indicator (default is 'small').
     * Passing a number to the size prop is only supported on Android.
     *
     * See https://reactnative.dev/docs/activityindicator.html#size
     */
  size?: WithDefault<"small" | "large", "small">;
}>;

export default HostComponent<NativeProps>;