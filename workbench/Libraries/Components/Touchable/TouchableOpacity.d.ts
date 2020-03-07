import { ClassOrType, UniqueBranding } from "flow-builtin-types";
import { $Diff } from "utility-types";
import _valueof_TouchableWithoutFeedback from "./TouchableWithoutFeedback";
type _typeof_TouchableWithoutFeedback = typeof _valueof_TouchableWithoutFeedback & UniqueBranding;

type TouchableWithoutFeedback = ClassOrType<_typeof_TouchableWithoutFeedback>;

import Animated from "react-native/Libraries/Animated/src/Animated";

import { ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

import * as React from "react";

type TVProps = UniqueBranding & Readonly<{
  hasTVPreferredFocus?: boolean | null | undefined;
  nextFocusDown?: number | null | undefined;
  nextFocusForward?: number | null | undefined;
  nextFocusLeft?: number | null | undefined;
  nextFocusRight?: number | null | undefined;
  nextFocusUp?: number | null | undefined;
}>;
type Props = UniqueBranding & Readonly<React.ElementConfig<TouchableWithoutFeedback> & TVProps & {
  activeOpacity?: number | null | undefined;
  style?: ViewStyleProp | null | undefined;
  hostRef: React.Ref<typeof Animated.View>;
}>;
declare module.exports: React.ComponentType<UniqueBranding & Readonly<$Diff<Props, {hostRef: unknown;}>>>