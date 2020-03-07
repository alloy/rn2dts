import { ClassOrType, UniqueBranding } from "flow-builtin-types";
import { $Diff } from "utility-types";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet.js";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes.js";

import _valueof_TouchableWithoutFeedback from "./TouchableWithoutFeedback";

type _typeof_TouchableWithoutFeedback = typeof _valueof_TouchableWithoutFeedback & UniqueBranding;
type TouchableWithoutFeedback = ClassOrType<_typeof_TouchableWithoutFeedback>;

import View from "../../Components/View/View";

import * as React from "react";

type AndroidProps = UniqueBranding & Readonly<{
  nextFocusDown?: number | null | undefined;
  nextFocusForward?: number | null | undefined;
  nextFocusLeft?: number | null | undefined;
  nextFocusRight?: number | null | undefined;
  nextFocusUp?: number | null | undefined;
}>;

type IOSProps = UniqueBranding & Readonly<{hasTVPreferredFocus?: boolean | null | undefined;}>;
type Props = UniqueBranding & Readonly<React.ElementConfig<TouchableWithoutFeedback> & AndroidProps & IOSProps & {
  activeOpacity?: number | null | undefined;
  underlayColor?: ColorValue | null | undefined;
  style?: ViewStyleProp | null | undefined;
  onShowUnderlay?: (() => void) | null | undefined;
  onHideUnderlay?: (() => void) | null | undefined;
  testOnly_pressed?: boolean | null | undefined;
  hostRef: React.Ref<typeof View>;
}>;
declare module.exports: React.ComponentType<UniqueBranding & Readonly<$Diff<Props, {hostRef: unknown;}>>>