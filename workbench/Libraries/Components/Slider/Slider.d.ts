import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import SliderNativeComponent from "./SliderNativeComponent";
import { ImageSource } from "../../Image/ImageSource";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type IOSProps = UniqueBranding & Readonly<{
    /**
     * Assigns a single image for the track. Only static images are supported.
     * The center pixel of the image will be stretched to fill the track.
     */
    trackImage?: ImageSource | null | undefined;
    /**
     * Assigns a minimum track image. Only static images are supported. The
     * rightmost pixel of the image will be stretched to fill the track.
     */
    minimumTrackImage?: ImageSource | null | undefined;
    /**
     * Assigns a maximum track image. Only static images are supported. The
     * leftmost pixel of the image will be stretched to fill the track.
     */
    maximumTrackImage?: ImageSource | null | undefined;
    /**
     * Sets an image for the thumb. Only static images are supported.
     */
    thumbImage?: ImageSource | null | undefined;
}>;
declare type Props = UniqueBranding & Readonly<ViewProps & IOSProps & {
    /**
     * Used to style and layout the `Slider`.  See `StyleSheet.js` and
     * `DeprecatedViewStylePropTypes.js` for more info.
     */
    style?: ViewStyleProp | null | undefined;
    /**
     * Initial value of the slider. The value should be between minimumValue
     * and maximumValue, which default to 0 and 1 respectively.
     * Default value is 0.
     *
     * *This is not a controlled component*, you don't need to update the
     * value during dragging.
     */
    value?: number | null | undefined;
    /**
     * Step value of the slider. The value should be
     * between 0 and (maximumValue - minimumValue).
     * Default value is 0.
     */
    step?: number | null | undefined;
    /**
     * Initial minimum value of the slider. Default value is 0.
     */
    minimumValue?: number | null | undefined;
    /**
     * Initial maximum value of the slider. Default value is 1.
     */
    maximumValue?: number | null | undefined;
    /**
     * The color used for the track to the left of the button.
     * Overrides the default blue gradient image on iOS.
     */
    minimumTrackTintColor?: ColorValue | null | undefined;
    /**
     * The color used for the track to the right of the button.
     * Overrides the default blue gradient image on iOS.
     */
    maximumTrackTintColor?: ColorValue | null | undefined;
    /**
     * The color used to tint the default thumb images on iOS, or the
     * color of the foreground switch grip on Android.
     */
    thumbTintColor?: ColorValue | null | undefined;
    /**
     * If true the user won't be able to move the slider.
     * Default value is false.
     */
    disabled?: boolean | null | undefined;
    /**
     * Callback continuously called while the user is dragging the slider.
     */
    onValueChange?: ((value: number) => void) | null | undefined;
    /**
     * Callback that is called when the user releases the slider,
     * regardless if the value has changed. The current value is passed
     * as an argument to the callback handler.
     */
    onSlidingComplete?: ((value: number) => void) | null | undefined;
    /**
     * Used to locate this view in UI automation tests.
     */
    testID?: string | null | undefined;
}>;
declare const SliderWithRef: React.AbstractComponent<Props, React.ElementRef<typeof SliderNativeComponent>>;
export default SliderWithRef;
