import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";

type IndicatorSize = number | "small" | "large";

type IOSProps = UniqueBranding & Readonly<{

  /**
     * Whether the indicator should hide when not animating (true by default).
     *
     * See https://reactnative.dev/docs/activityindicator.html#hideswhenstopped
     */
  hidesWhenStopped?: boolean | null | undefined;
}>;
type Props = UniqueBranding & Readonly<ViewProps & IOSProps & {
  /**
     * Whether to show the indicator (true, the default) or hide it (false).
     *
     * See https://reactnative.dev/docs/activityindicator.html#animating
     */
  animating?: boolean | null | undefined;

  /**
     * The foreground color of the spinner (default is gray).
     *
     * See https://reactnative.dev/docs/activityindicator.html#color
     */
  color?: string | null | undefined;

  /**
     * Size of the indicator (default is 'small').
     * Passing a number to the size prop is only supported on Android.
     *
     * See https://reactnative.dev/docs/activityindicator.html#size
     */
  size?: IndicatorSize | null | undefined;
}>;

declare var ActivityIndicatorWithRef: React.AbstractComponent<Props, HostComponent<unknown>>;

declare module.exports: typeof ActivityIndicatorWithRef