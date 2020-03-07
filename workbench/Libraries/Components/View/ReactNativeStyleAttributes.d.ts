import { UniqueBranding } from "flow-builtin-types";
const DeprecatedImageStylePropTypes = require("../../DeprecatedPropTypes/DeprecatedImageStylePropTypes");
const DeprecatedTextStylePropTypes = require("../../DeprecatedPropTypes/DeprecatedTextStylePropTypes");
const DeprecatedViewStylePropTypes = require("../../DeprecatedPropTypes/DeprecatedViewStylePropTypes");

const processColor = require("../../StyleSheet/processColor");
const processTransform = require("../../StyleSheet/processTransform");
const sizesDiffer = require("../../Utilities/differ/sizesDiffer");

type ReturnBoolType = (<V>(arg0: V) => true);
type BoolifiedDeprecatedViewStylePropTypes = $ObjMap<typeof DeprecatedViewStylePropTypes, ReturnBoolType>;
type BoolifiedDeprecatedTextStylePropTypes = $ObjMapi<typeof DeprecatedTextStylePropTypes, ReturnBoolType>;
type BoolifiedDeprecatedImageStylePropTypes = $ObjMapi<typeof DeprecatedImageStylePropTypes, ReturnBoolType>;

type StyleAttributesType = BoolifiedDeprecatedViewStylePropTypes & BoolifiedDeprecatedTextStylePropTypes & BoolifiedDeprecatedImageStylePropTypes & {
  transform: (UniqueBranding & Readonly<{process: typeof processTransform;}>) | true;
  shadowOffset: (UniqueBranding & Readonly<{diff: typeof sizesDiffer;}>) | true;
  backgroundColor: typeof colorAttributes | true;
  borderBottomColor: typeof colorAttributes | true;
  borderColor: typeof colorAttributes | true;
  borderLeftColor: typeof colorAttributes | true;
  borderRightColor: typeof colorAttributes | true;
  borderTopColor: typeof colorAttributes | true;
  borderStartColor: typeof colorAttributes | true;
  borderEndColor: typeof colorAttributes | true;
  color: typeof colorAttributes | true;
  shadowColor: typeof colorAttributes | true;
  textDecorationColor: typeof colorAttributes | true;
  tintColor: typeof colorAttributes | true;
  textShadowColor: typeof colorAttributes | true;
  overlayColor: typeof colorAttributes | true;
};

declare var ReactNativeStyleAttributes: StyleAttributesType;

declare var colorAttributes: {process: typeof processColor;};

declare module.exports: typeof ReactNativeStyleAttributes