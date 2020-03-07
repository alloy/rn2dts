import { Stringish, UniqueBranding } from "flow-builtin-types";
import Pressability from "../../Pressability/Pressability.js";

import { AccessibilityActionEvent } from "../../Components/View/ViewAccessibility";
import { AccessibilityActionInfo } from "../../Components/View/ViewAccessibility";
import { AccessibilityRole } from "../../Components/View/ViewAccessibility";
import { AccessibilityState } from "../../Components/View/ViewAccessibility";
import { AccessibilityValue } from "../../Components/View/ViewAccessibility";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { BlurEvent } from "../../Types/CoreEventTypes";
import { FocusEvent } from "../../Types/CoreEventTypes";
import { LayoutEvent } from "../../Types/CoreEventTypes";
import { PressEvent } from "../../Types/CoreEventTypes";

import * as React from "react";

type Props = UniqueBranding & Readonly<{
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
  children?: React.ReactNode | null | undefined;
  delayLongPress?: number | null | undefined;
  delayPressIn?: number | null | undefined;
  delayPressOut?: number | null | undefined;
  disabled?: boolean | null | undefined;
  focusable?: boolean | null | undefined;
  hitSlop?: EdgeInsetsProp | null | undefined;
  importantForAccessibility?: ("auto" | "yes" | "no" | "no-hide-descendants") | null | undefined;
  nativeID?: string | null | undefined;
  onAccessibilityAction?: ((event: AccessibilityActionEvent) => unknown) | null | undefined;
  onBlur?: ((event: BlurEvent) => unknown) | null | undefined;
  onFocus?: ((event: FocusEvent) => unknown) | null | undefined;
  onLayout?: ((event: LayoutEvent) => unknown) | null | undefined;
  onLongPress?: ((event: PressEvent) => unknown) | null | undefined;
  onPress?: ((event: PressEvent) => unknown) | null | undefined;
  onPressIn?: ((event: PressEvent) => unknown) | null | undefined;
  onPressOut?: ((event: PressEvent) => unknown) | null | undefined;
  pressRetentionOffset?: EdgeInsetsProp | null | undefined;
  rejectResponderTermination?: boolean | null | undefined;
  testID?: string | null | undefined;
  touchSoundDisabled?: boolean | null | undefined;
}>;

type State = UniqueBranding & Readonly<{pressability: Pressability;}>;

declare class TouchableWithoutFeedback extends React.Component<Props, State> {
  state: State;
  render(): React.ReactNode;
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentWillUnmount(): void;
}

declare module.exports: typeof TouchableWithoutFeedback