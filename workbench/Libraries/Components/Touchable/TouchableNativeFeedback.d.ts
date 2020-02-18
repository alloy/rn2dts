import { ClassOrType, UniqueBranding } from "flow-builtin-types";
import Pressability from "../../Pressability/Pressability.js";
import _valueof_TouchableWithoutFeedback from "./TouchableWithoutFeedback";
declare type _typeof_TouchableWithoutFeedback = typeof _valueof_TouchableWithoutFeedback & UniqueBranding;
declare type TouchableWithoutFeedback = ClassOrType<_typeof_TouchableWithoutFeedback>;
import * as React from "react";
declare type Props = UniqueBranding & Readonly<React.ElementConfig<TouchableWithoutFeedback> & {
    /**
     * Determines the type of background drawable that's going to be used to
     * display feedback. It takes an object with `type` property and extra data
     * depending on the `type`. It's recommended to use one of the static
     * methods to generate that dictionary.
     */
    background?: ((UniqueBranding & Readonly<{
        type: "ThemeAttrAndroid";
        attribute: "selectableItemBackground" | "selectableItemBackgroundBorderless";
    }>) | (UniqueBranding & Readonly<{
        type: "RippleAndroid";
        color: number | null | undefined;
        borderless: boolean;
    }>)) | null | undefined;
    /**
     * TV preferred focus (see documentation for the View component).
     */
    hasTVPreferredFocus?: boolean | null | undefined;
    /**
     * TV next focus down (see documentation for the View component).
     */
    nextFocusDown?: number | null | undefined;
    /**
     * TV next focus forward (see documentation for the View component).
     */
    nextFocusForward?: number | null | undefined;
    /**
     * TV next focus left (see documentation for the View component).
     */
    nextFocusLeft?: number | null | undefined;
    /**
     * TV next focus right (see documentation for the View component).
     */
    nextFocusRight?: number | null | undefined;
    /**
     * TV next focus up (see documentation for the View component).
     */
    nextFocusUp?: number | null | undefined;
    /**
     * Set to true to add the ripple effect to the foreground of the view, instead
     * of the background. This is useful if one of your child views has a
     * background of its own, or you're e.g. displaying images, and you don't want
     * the ripple to be covered by them.
     *
     * Check TouchableNativeFeedback.canUseNativeForeground() first, as this is
     * only available on Android 6.0 and above. If you try to use this on older
     * versions, this will fallback to background.
     */
    useForeground?: boolean | null | undefined;
}>;
declare type State = UniqueBranding & Readonly<{
    pressability: Pressability;
}>;
declare class TouchableNativeFeedback extends React.Component<Props, State> {
    /**
     * Creates a value for the `background` prop that uses the Android theme's
     * default background for selectable elements.
     */
    static SelectableBackground: (() => UniqueBranding & Readonly<{
        attribute: "selectableItemBackground";
        type: "ThemeAttrAndroid";
    }>);
    /**
     * Creates a value for the `background` prop that uses the Android theme's
     * default background for borderless selectable elements. Requires API 21+.
     */
    static SelectableBackgroundBorderless: (() => UniqueBranding & Readonly<{
        attribute: "selectableItemBackgroundBorderless";
        type: "ThemeAttrAndroid";
    }>);
    /**
     * Creates a value for the `background` prop that uses the Android ripple with
     * the supplied color. If `borderless` is true, the ripple will render outside
     * of the view bounds. Requires API 21+.
     */
    static Ripple: ((color: string, borderless: boolean) => UniqueBranding & Readonly<{
        borderless: boolean;
        color: number | null | undefined;
        type: "RippleAndroid";
    }>);
    /**
     * Whether `useForeground` is supported.
     */
    static canUseNativeForeground: (() => boolean);
    state: State;
    render(): React.ReactNode;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export default TouchableNativeFeedback;
