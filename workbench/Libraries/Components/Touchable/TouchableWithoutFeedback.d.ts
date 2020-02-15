import React from 'react';
import { Stringish } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
import { LayoutEvent, PressEvent } from "../../Types/CoreEventTypes";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { AccessibilityRole, AccessibilityStates, AccessibilityState, AccessibilityActionInfo, AccessibilityActionEvent } from "../View/ViewAccessibility";
declare type TargetEvent = React.SyntheticEvent<$ReadOnly<{
    target: number;
}>>;
declare type BlurEvent = TargetEvent;
declare type FocusEvent = TargetEvent;
export declare type Props = $ReadOnly<{
    accessible?: boolean | null | undefined;
    accessibilityLabel?: Stringish | null | undefined;
    accessibilityHint?: Stringish | null | undefined;
    accessibilityIgnoresInvertColors?: boolean | null | undefined;
    accessibilityRole?: AccessibilityRole | null | undefined;
    accessibilityStates?: AccessibilityStates | null | undefined;
    accessibilityState?: AccessibilityState | null | undefined;
    accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | null | undefined;
    children?: React.ReactNode | null | undefined;
    delayLongPress?: number | null | undefined;
    delayPressIn?: number | null | undefined;
    delayPressOut?: number | null | undefined;
    disabled?: boolean | null | undefined;
    hitSlop?: EdgeInsetsProp | null | undefined;
    nativeID?: string | null | undefined;
    touchSoundDisabled?: boolean | null | undefined;
    onBlur?: ((e: BlurEvent) => void) | null | undefined;
    onFocus?: ((e: FocusEvent) => void) | null | undefined;
    onLayout?: ((event: LayoutEvent) => unknown) | null | undefined;
    onLongPress?: ((event: PressEvent) => unknown) | null | undefined;
    onPress?: ((event: PressEvent) => unknown) | null | undefined;
    onPressIn?: ((event: PressEvent) => unknown) | null | undefined;
    onPressOut?: ((event: PressEvent) => unknown) | null | undefined;
    onAccessibilityAction?: ((event: AccessibilityActionEvent) => void) | null | undefined;
    pressRetentionOffset?: EdgeInsetsProp | null | undefined;
    rejectResponderTermination?: boolean | null | undefined;
    testID?: string | null | undefined;
}>;
/**
 * Do not use unless you have a very good reason. All elements that
 * respond to press should have a visual feedback when touched.
 *
 * TouchableWithoutFeedback supports only one child.
 * If you wish to have several child components, wrap them in a View.
 */
declare const TouchableWithoutFeedback: React.ComponentType<import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
    accessible?: boolean | null | undefined;
    accessibilityLabel?: string | null | undefined;
    accessibilityHint?: string | null | undefined;
    accessibilityIgnoresInvertColors?: boolean | null | undefined;
    accessibilityRole?: "search" | "link" | "none" | "button" | "header" | "menu" | "summary" | "image" | "switch" | "text" | "checkbox" | "radio" | "menubar" | "menuitem" | "progressbar" | "tab" | "toolbar" | "scrollbar" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "combobox" | "radiogroup" | "spinbutton" | "tablist" | "timer" | null | undefined;
    accessibilityStates?: AccessibilityStates | null | undefined;
    accessibilityState?: AccessibilityState | null | undefined;
    accessibilityActions?: readonly import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        name: any;
        label?: any;
    }>[] | null | undefined;
    children?: React.ReactNode;
    delayLongPress?: number | null | undefined;
    delayPressIn?: number | null | undefined;
    delayPressOut?: number | null | undefined;
    disabled?: boolean | null | undefined;
    hitSlop?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        top?: any;
        left?: any;
        bottom?: any;
        right?: any;
    }> | null | undefined;
    nativeID?: string | null | undefined;
    touchSoundDisabled?: boolean | null | undefined;
    onBlur?: ((e: TargetEvent) => void) | null | undefined;
    onFocus?: ((e: TargetEvent) => void) | null | undefined;
    onLayout?: ((event: LayoutEvent) => unknown) | null | undefined;
    onLongPress?: ((event: any) => unknown) | null | undefined;
    onPress?: ((event: any) => unknown) | null | undefined;
    onPressIn?: ((event: any) => unknown) | null | undefined;
    onPressOut?: ((event: any) => unknown) | null | undefined;
    onAccessibilityAction?: ((event: AccessibilityActionEvent) => void) | null | undefined;
    pressRetentionOffset?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        top?: any;
        left?: any;
        bottom?: any;
        right?: any;
    }> | null | undefined;
    rejectResponderTermination?: boolean | null | undefined;
    testID?: string | null | undefined;
}>>;
export default TouchableWithoutFeedback;
