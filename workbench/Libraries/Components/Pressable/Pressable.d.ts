import { UniqueBranding, Stringish } from "flow-builtin-types";
import { $ElementType } from "utility-types";
import * as React from "react";

import { AccessibilityActionEvent } from "../View/ViewAccessibility.js";
import { AccessibilityActionInfo } from "../View/ViewAccessibility.js";
import { AccessibilityRole } from "../View/ViewAccessibility.js";
import { AccessibilityState } from "../View/ViewAccessibility.js";
import { AccessibilityValue } from "../View/ViewAccessibility.js";

import { RectOrSize } from "../../StyleSheet/Rect.js";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes.js";
import { LayoutEvent } from "../../Types/CoreEventTypes.js";
import { PressEvent } from "../../Types/CoreEventTypes.js";
import View from "../View/View";

type ViewStyleProp = $ElementType<React.ElementConfig<typeof View>, "style">;

type StateCallbackType = UniqueBranding & Readonly<{pressed: boolean;}>;

type Props = UniqueBranding & Readonly<{

  /**
     * Accessibility.
     */
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | null | undefined;
  accessibilityElementsHidden?: boolean | null | undefined;
  accessibilityHint?: Stringish | null | undefined;
  accessibilityIgnoresInvertColors?: boolean | null | undefined;
  accessibilityLabel?: Stringish | null | undefined;
  accessibilityLiveRegion?: ("none" | "polite" | "assertive") | null | undefined;
  accessibilityRole?: AccessibilityRole | null | undefined;
  accessibilityState?: AccessibilityState | null | undefined;
  accessibilityValue?: AccessibilityValue | null | undefined;
  accessibilityViewIsModal?: boolean | null | undefined;
  accessible?: boolean | null | undefined;
  focusable?: boolean | null | undefined;
  importantForAccessibility?: ("auto" | "yes" | "no" | "no-hide-descendants") | null | undefined;
  onAccessibilityAction?: ((event: AccessibilityActionEvent) => unknown) | null | undefined;

  /**
     * Either children or a render prop that receives a boolean reflecting whether
     * the component is currently pressed.
     */
  children: React.ReactNode | ((state: StateCallbackType) => React.ReactNode);

  /**
     * Duration (in milliseconds) from `onPressIn` before `onLongPress` is called.
     */
  delayLongPress?: number | null | undefined;

  /**
     * Whether the press behavior is disabled.
     */
  disabled?: boolean | null | undefined;

  /**
     * Additional distance outside of this view in which a press is detected.
     */
  hitSlop?: RectOrSize | null | undefined;

  /**
     * Additional distance outside of this view in which a touch is considered a
     * press before `onPressOut` is triggered.
     */
  pressRectOffset?: RectOrSize | null | undefined;

  /**
     * Called when this view's layout changes.
     */
  onLayout?: ((event: LayoutEvent) => void) | null | undefined;

  /**
     * Called when a long-tap gesture is detected.
     */
  onLongPress?: ((event: PressEvent) => void) | null | undefined;

  /**
     * Called when a single tap gesture is detected.
     */
  onPress?: ((event: PressEvent) => void) | null | undefined;

  /**
     * Called when a touch is engaged before `onPress`.
     */
  onPressIn?: ((event: PressEvent) => void) | null | undefined;

  /**
     * Called when a touch is released before `onPress`.
     */
  onPressOut?: ((event: PressEvent) => void) | null | undefined;

  /**
     * Either view styles or a function that receives a boolean reflecting whether
     * the component is currently pressed and returns view styles.
     */
  style?: ViewStyleProp | ((state: StateCallbackType) => ViewStyleProp);

  /**
     * Identifier used to find this view in tests.
     */
  testID?: string | null | undefined;

  /**
     * If true, doesn't play system sound on touch.
     */
  android_disableSound?: boolean | null | undefined;

  /**
     * Enables the Android ripple effect and configures its color.
     */
  android_rippleColor?: ColorValue | null | undefined;

  /**
     * Used only for documentation or testing (e.g. snapshot testing).
     */
  testOnly_pressed?: boolean | null | undefined;
}>;
export { StateCallbackType };

export default React.AbstractComponent<Props, React.ElementRef<typeof View>>;