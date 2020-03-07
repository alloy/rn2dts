import { UniqueBranding } from "flow-builtin-types";
import { $Keys } from "utility-types";
const React = require("react");

type StatusBarStyle = $Keys<{

  /**
     * Default status bar style (dark for iOS, light for Android)
     */
  default: string;
  "light-content": string;
  "dark-content": string;

}>;

type StatusBarAnimation = $Keys<{

  /**
     * No animation
     */
  none: string;

  /**
     * Fade animation
     */
  fade: string;

  /**
     * Slide animation
     */
  slide: string;

}>;

type AndroidProps = UniqueBranding & Readonly<{

  /**
     * The background color of the status bar.
     * @platform android
     */
  backgroundColor?: string | null | undefined;

  /**
     * If the status bar is translucent.
     * When translucent is set to true, the app will draw under the status bar.
     * This is useful when using a semi transparent status bar color.
     *
     * @platform android
     */
  translucent?: boolean | null | undefined;
}>;

type IOSProps = UniqueBranding & Readonly<{

  /**
     * If the network activity indicator should be visible.
     *
     * @platform ios
     */
  networkActivityIndicatorVisible?: boolean | null | undefined;

  /**
     * The transition effect when showing and hiding the status bar using the `hidden`
     * prop. Defaults to 'fade'.
     *
     * @platform ios
     */
  showHideTransition?: ("fade" | "slide") | null | undefined;
}>;

type Props = UniqueBranding & Readonly<AndroidProps & IOSProps & {
  /**
     * If the status bar is hidden.
     */
  hidden?: boolean | null | undefined;

  /**
     * If the transition between status bar property changes should be animated.
     * Supported for backgroundColor, barStyle and hidden.
     */
  animated?: boolean | null | undefined;

  /**
     * Sets the color of the status bar text.
     */
  barStyle?: ("default" | "light-content" | "dark-content") | null | undefined;
}>;

declare class StatusBar extends React.Component<Props> {
  currentHeight: number | null | undefined;
  setHidden(hidden: boolean, animation?: StatusBarAnimation): void;
  setBarStyle(style: StatusBarStyle, animated?: boolean): void;
  setNetworkActivityIndicatorVisible(visible: boolean): void;
  setBackgroundColor(color: string, animated?: boolean): void;
  setTranslucent(translucent: boolean): void;
  pushStackEntry(props: any): any;
  popStackEntry(entry: any): void;
  replaceStackEntry(entry: any, props: any): any;
  defaultProps: {animated: boolean;showHideTransition: string;};
  componentDidMount(): void;
  componentWillUnmount(): void;
  componentDidUpdate(): void;
  render(): React.ReactNode;
}
export { StatusBarStyle };

export { StatusBarAnimation };

declare module.exports: typeof StatusBar