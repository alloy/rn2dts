const React = require("react");

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
type ComponentRef = React.ElementRef<HostComponent<unknown>>;

declare function currentlyFocusedInput(): ComponentRef | null | undefined;

declare function currentlyFocusedField(): number | null | undefined;

declare function focusInput(textField: ComponentRef | null | undefined): void;

declare function blurInput(textField: ComponentRef | null | undefined): void;

declare function focusField(textFieldID: number | null | undefined): void;

declare function blurField(textFieldID: number | null | undefined): void;

declare function focusTextInput(textField: ComponentRef | null | undefined): void;

declare function blurTextInput(textField: ComponentRef | null | undefined): void;

declare function registerInput(textField: ComponentRef): void;

declare function unregisterInput(textField: ComponentRef): void;

declare function isTextInput(textField: ComponentRef): boolean;

declare module.exports: {
  currentlyFocusedInput: typeof currentlyFocusedInput;
  focusInput: typeof focusInput;
  blurInput: typeof blurInput;
  currentlyFocusedField: typeof currentlyFocusedField;
  focusField: typeof focusField;
  blurField: typeof blurField;
  focusTextInput: typeof focusTextInput;
  blurTextInput: typeof blurTextInput;
  registerInput: typeof registerInput;
  unregisterInput: typeof unregisterInput;
  isTextInput: typeof isTextInput;
}