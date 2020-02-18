import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import AndroidCheckBoxNativeComponent from "./AndroidCheckBoxNativeComponent";
import { ViewProps } from "../View/ViewPropTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
declare type CheckBoxEvent = React.SyntheticEvent<UniqueBranding & Readonly<{
    target: number;
    value: boolean;
}>>;
declare type CommonProps = UniqueBranding & Readonly<ViewProps & {
    /**
     * Used in case the props change removes the component.
     */
    onChange?: ((event: CheckBoxEvent) => unknown) | null | undefined;
    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: ((value: boolean) => unknown) | null | undefined;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | null | undefined;
}>;
declare type Props = UniqueBranding & Readonly<CommonProps & {
    /**
     * The value of the checkbox.  If true the checkbox will be turned on.
     * Default value is false.
     */
    value?: boolean | null | undefined;
    /**
     * If true the user won't be able to toggle the checkbox.
     * Default value is false.
     */
    disabled?: boolean | null | undefined;
    /**
     * Used to get the ref for the native checkbox
     */
    forwardedRef?: React.Ref<typeof AndroidCheckBoxNativeComponent> | null | undefined;
    /**
     * Controls the colors the checkbox has in checked and unchecked states.
     */
    tintColors?: {
        true?: ColorValue | null | undefined;
        false?: ColorValue | null | undefined;
    };
}>;
declare const _default: React.AbstractComponent<Props, (UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods> & React.ComponentMethods<UniqueBranding & Readonly<UniqueBranding & Readonly<UniqueBranding & Readonly<{
    onBlur?: ((event: import("../../Types/CoreEventTypes").BlurEvent) => unknown) | null | undefined;
    onFocus?: ((event: import("../../Types/CoreEventTypes").FocusEvent) => unknown) | null | undefined;
}> & Readonly<{
    onAccessibilityAction?: ((event: import("../View/ViewAccessibility").AccessibilityActionEvent) => unknown) | null | undefined;
    onAccessibilityTap?: (() => unknown) | null | undefined;
    onLayout?: ((event: import("../../Types/CoreEventTypes").LayoutEvent) => unknown) | null | undefined;
    onMagicTap?: (() => unknown) | null | undefined;
    onAccessibilityEscape?: (() => unknown) | null | undefined;
}> & Readonly<{
    onMoveShouldSetResponder?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onMoveShouldSetResponderCapture?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onResponderGrant?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean | void) | null | undefined;
    onResponderMove?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderReject?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderRelease?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderStart?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderEnd?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderTerminate?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderTerminationRequest?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onStartShouldSetResponder?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onStartShouldSetResponderCapture?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
}> & Readonly<{
    onMouseEnter?: ((event: import("../../Types/CoreEventTypes").MouseEvent) => void) | undefined;
    onMouseLeave?: ((event: import("../../Types/CoreEventTypes").MouseEvent) => void) | undefined;
}> & Readonly<{
    onTouchCancel?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchCancelCapture?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchEnd?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchEndCapture?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchMove?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchMoveCapture?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchStart?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchStartCapture?: ((e: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
}> & Readonly<{
    nativeBackgroundAndroid?: (UniqueBranding & Readonly<{
        type: "ThemeAttrAndroid";
        attribute: string;
    }>) | (UniqueBranding & Readonly<{
        type: "RippleAndroid";
        color?: number | null | undefined;
        borderless?: boolean | null | undefined;
    }>) | null | undefined;
    nativeForegroundAndroid?: (UniqueBranding & Readonly<{
        type: "ThemeAttrAndroid";
        attribute: string;
    }>) | (UniqueBranding & Readonly<{
        type: "RippleAndroid";
        color?: number | null | undefined;
        borderless?: boolean | null | undefined;
    }>) | null | undefined;
    renderToHardwareTextureAndroid?: boolean | null | undefined;
    collapsable?: boolean | null | undefined;
    needsOffscreenAlphaCompositing?: boolean | null | undefined;
    accessibilityLiveRegion?: "none" | "assertive" | "polite" | null | undefined;
    importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants" | null | undefined;
    hasTVPreferredFocus?: boolean | null | undefined;
    nextFocusDown?: number | null | undefined;
    nextFocusForward?: number | null | undefined;
    nextFocusLeft?: number | null | undefined;
    nextFocusRight?: number | null | undefined;
    nextFocusUp?: number | null | undefined;
    focusable?: boolean | undefined;
    onClick?: ((event: import("../../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => unknown) | null | undefined;
}> & Readonly<{
    accessibilityIgnoresInvertColors?: boolean | null | undefined;
    accessibilityViewIsModal?: boolean | null | undefined;
    accessibilityElementsHidden?: boolean | null | undefined;
    shouldRasterizeIOS?: boolean | null | undefined;
}> & {
    children?: any;
    style?: false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
    accessible?: boolean | null | undefined;
    accessibilityLabel?: string | null | undefined;
    accessibilityHint?: string | null | undefined;
    accessibilityRole?: "search" | "link" | "none" | "button" | "header" | "menu" | "summary" | "image" | "switch" | "text" | "checkbox" | "radio" | "menubar" | "menuitem" | "progressbar" | "tab" | "toolbar" | "scrollbar" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "combobox" | "radiogroup" | "spinbutton" | "tablist" | "timer" | null | undefined;
    accessibilityState?: import("../View/ViewAccessibility").AccessibilityState | null | undefined;
    accessibilityValue?: import("../View/ViewAccessibility").AccessibilityValue | null | undefined;
    accessibilityActions?: readonly import("../View/ViewAccessibility").AccessibilityActionInfo[] | null | undefined;
    testID?: string | null | undefined;
    nativeID?: string | null | undefined;
    hitSlop?: import("../../StyleSheet/EdgeInsetsPropType").EdgeInsetsProp | null | undefined;
    pointerEvents?: "auto" | "none" | "box-none" | "box-only" | null | undefined;
    removeClippedSubviews?: boolean | null | undefined;
}> & {
    onChange?: ((event: React.SyntheticEvent<UniqueBranding & Readonly<{
        target: number;
        value: boolean;
    }>, Event>) => unknown) | null | undefined;
    onValueChange?: ((value: boolean) => unknown) | null | undefined;
    testID?: string | null | undefined;
    on?: boolean | null | undefined;
    enabled?: boolean | undefined;
    tintColors: {
        true: number | null | undefined;
        false: number | null | undefined;
    } | undefined;
}>>) | undefined>;
export default _default;
