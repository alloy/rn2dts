import { UniqueBranding, React$PropType$Primitive } from "flow-builtin-types";
const React = require("react");

import { ViewProps } from "../Components/View/ViewPropTypes";
import { DirectEventHandler } from "../Types/CodegenTypes";

type OrientationChangeEvent = UniqueBranding & Readonly<{orientation: "portrait" | "landscape";}>;

type Props = UniqueBranding & Readonly<ViewProps & {
  /**
     * The `animationType` prop controls how the modal animates.
     *
     * See https://reactnative.dev/docs/modal.html#animationtype
     */
  animationType?: ("none" | "slide" | "fade") | null | undefined;

  /**
     * The `presentationStyle` prop controls how the modal appears.
     *
     * See https://reactnative.dev/docs/modal.html#presentationstyle
     */
  presentationStyle?: ("fullScreen" | "pageSheet" | "formSheet" | "overFullScreen") | null | undefined;

  /**
     * The `transparent` prop determines whether your modal will fill the
     * entire view.
     *
     * See https://reactnative.dev/docs/modal.html#transparent
     */
  transparent?: boolean | null | undefined;

  /**
     * The `statusBarTranslucent` prop determines whether your modal should go under
     * the system statusbar.
     *
     * See https://reactnative.dev/docs/modal.html#transparent
     */
  statusBarTranslucent?: boolean | null | undefined;

  /**
     * The `hardwareAccelerated` prop controls whether to force hardware
     * acceleration for the underlying window.
     *
     * This prop works inly on Android.
     *
     * See https://reactnative.dev/docs/modal.html#hardwareaccelerated
     */
  hardwareAccelerated?: boolean | null | undefined;

  /**
     * The `visible` prop determines whether your modal is visible.
     *
     * See https://reactnative.dev/docs/modal.html#visible
     */
  visible?: boolean | null | undefined;

  /**
     * The `onRequestClose` callback is called when the user taps the hardware
     * back button on Android or the menu button on Apple TV.
     *
     * This is required on Apple TV and Android.
     *
     * See https://reactnative.dev/docs/modal.html#onrequestclose
     */
  onRequestClose?: DirectEventHandler<null> | null | undefined;

  /**
     * The `onShow` prop allows passing a function that will be called once the
     * modal has been shown.
     *
     * See https://reactnative.dev/docs/modal.html#onshow
     */
  onShow?: DirectEventHandler<null> | null | undefined;

  /**
     * The `onDismiss` prop allows passing a function that will be called once
     * the modal has been dismissed.
     *
     * See https://reactnative.dev/docs/modal.html#ondismiss
     */
  onDismiss?: (() => unknown) | null | undefined;

  /**
     * The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.
     *
     * See https://reactnative.dev/docs/modal.html#supportedorientations
     */
  supportedOrientations?: ReadonlyArray<"portrait" | "portrait-upside-down" | "landscape" | "landscape-left" | "landscape-right"> | null | undefined;

  /**
     * The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.
     *
     * See https://reactnative.dev/docs/modal.html#onorientationchange
     */
  onOrientationChange?: DirectEventHandler<OrientationChangeEvent> | null | undefined;
}>;

declare class Modal extends React.Component<Props> {
  defaultProps: {hardwareAccelerated: boolean;visible: boolean;};
  contextTypes: any | {rootTag: React$PropType$Primitive<number>;};
  constructor(props: Props): void;
  childContextTypes: any | {virtualizedList: React$PropType$Primitive<any>;};
  getChildContext(): {virtualizedList: null;};
  componentWillUnmount(): void;
  UNSAFE_componentWillReceiveProps(nextProps: Props): void;
  render(): React.ReactNode;
}
export { Props };

declare module.exports: typeof Modal