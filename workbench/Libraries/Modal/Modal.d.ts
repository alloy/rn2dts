import React from 'react';
import { UniqueBranding, React$PropType$Primitive } from "flow-builtin-types";
import { ViewProps } from "../Components/View/ViewPropTypes";
import { DirectEventHandler } from "../Types/CodegenTypes";
import EmitterSubscription from "../vendor/emitter/EmitterSubscription";
declare type OrientationChangeEvent = UniqueBranding & Readonly<{
    orientation: "portrait" | "landscape";
}>;
export declare type Props = UniqueBranding & Readonly<ViewProps & {
    /**
     * The `animationType` prop controls how the modal animates.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#animationtype
     */
    animationType?: ("none" | "slide" | "fade") | null | undefined;
    /**
     * The `presentationStyle` prop controls how the modal appears.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#presentationstyle
     */
    presentationStyle?: ("fullScreen" | "pageSheet" | "formSheet" | "overFullScreen") | null | undefined;
    /**
     * The `transparent` prop determines whether your modal will fill the
     * entire view.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#transparent
     */
    transparent?: boolean | null | undefined;
    /**
     * The `statusBarTranslucent` prop determines whether your modal should go under
     * the system statusbar.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#transparent
     */
    statusBarTranslucent?: boolean | null | undefined;
    /**
     * The `hardwareAccelerated` prop controls whether to force hardware
     * acceleration for the underlying window.
     *
     * This prop works inly on Android.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#hardwareaccelerated
     */
    hardwareAccelerated?: boolean | null | undefined;
    /**
     * The `visible` prop determines whether your modal is visible.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#visible
     */
    visible?: boolean | null | undefined;
    /**
     * The `onRequestClose` callback is called when the user taps the hardware
     * back button on Android, the menu button on Apple TV, or a modal is dismissed
     * with a gesture on iOS 13+.
     *
     * This is required on Apple TV and Android.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#onrequestclose
     */
    onRequestClose?: DirectEventHandler<null> | null | undefined;
    /**
     * The `onShow` prop allows passing a function that will be called once the
     * modal has been shown.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#onshow
     */
    onShow?: DirectEventHandler<null> | null | undefined;
    /**
     * The `onDismiss` prop allows passing a function that will be called once
     * the modal has been dismissed.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#ondismiss
     */
    onDismiss?: (() => unknown) | null | undefined;
    /**
     * Deprecated. Use the `animationType` prop instead.
     */
    animated?: boolean | null | undefined;
    /**
     * The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#supportedorientations
     */
    supportedOrientations?: ReadonlyArray<"portrait" | "portrait-upside-down" | "landscape" | "landscape-left" | "landscape-right"> | null | undefined;
    /**
     * The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#onorientationchange
     */
    onOrientationChange?: DirectEventHandler<OrientationChangeEvent> | null | undefined;
}>;
declare class Modal extends React.Component<Props> {
    static defaultProps: {
        hardwareAccelerated: boolean;
        visible: boolean;
    };
    static contextTypes: any | {
        rootTag: React$PropType$Primitive<number>;
    };
    _identifier: number;
    _eventSubscription: EmitterSubscription | null | undefined;
    constructor(props: Props);
    static childContextTypes: any | {
        virtualizedList: React$PropType$Primitive<any>;
    };
    getChildContext(): {
        virtualizedList: null;
    };
    componentWillUnmount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    static _confirmProps(props: Props): void;
    render(): React.ReactNode;
    _shouldSetResponder(): boolean;
}
export default Modal;
