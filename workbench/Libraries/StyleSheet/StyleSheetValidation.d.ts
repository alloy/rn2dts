import { $FlowFixMe } from "flow-builtin-types";
const DeprecatedImageStylePropTypes = require("../DeprecatedPropTypes/DeprecatedImageStylePropTypes");
const DeprecatedTextStylePropTypes = require("../DeprecatedPropTypes/DeprecatedTextStylePropTypes");
const DeprecatedViewStylePropTypes = require("../DeprecatedPropTypes/DeprecatedViewStylePropTypes");

const invariant = require("invariant");

declare var ReactPropTypesSecret: string;

declare class StyleSheetValidation {
  validateStyleProp(prop: string, style: any, caller: string): void;
  validateStyle(name: string, styles: any): void;
  addValidStylePropTypes(stylePropTypes: $FlowFixMe): void;
}

declare var styleError: ((message1: $FlowFixMe, style: $FlowFixMe, caller?: $FlowFixMe, message2?: $FlowFixMe) => void);

declare var allStylePropTypes: $FlowFixMe;

declare module.exports: typeof StyleSheetValidation