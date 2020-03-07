import { ClassOrType, UniqueBranding } from "flow-builtin-types";
import { $Diff } from "utility-types";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet.js";

import _valueof_TouchableWithoutFeedback from "./TouchableWithoutFeedback";
type _typeof_TouchableWithoutFeedback = typeof _valueof_TouchableWithoutFeedback & UniqueBranding;
type TouchableWithoutFeedback = ClassOrType<_typeof_TouchableWithoutFeedback>;

import { Animated } from "react-native";

import * as React from "react";
type Props = UniqueBranding & Readonly<React.ElementConfig<TouchableWithoutFeedback> & {
  onPressAnimationComplete?: (() => void) | null | undefined;
  onPressWithCompletion?: ((callback: (() => void)) => void) | null | undefined;
  releaseBounciness?: number | null | undefined;
  releaseVelocity?: number | null | undefined;
  style?: ViewStyleProp | null | undefined;
  hostRef: React.Ref<typeof Animated.View>;
}>;
declare module.exports: React.ComponentType<UniqueBranding & Readonly<$Diff<Props, {hostRef: unknown;}>>>