import { UniqueBranding } from "flow-builtin-types";
const NativeEventEmitter = require("../../EventEmitter/NativeEventEmitter");

declare var KeyboardEventEmitter: NativeEventEmitter;

type KeyboardEventName = "keyboardWillShow" | "keyboardDidShow" | "keyboardWillHide" | "keyboardDidHide" | "keyboardWillChangeFrame" | "keyboardDidChangeFrame";

type KeyboardEventEasing = "easeIn" | "easeInEaseOut" | "easeOut" | "linear" | "keyboard";

type KeyboardEventCoordinates = UniqueBranding & Readonly<{screenX: number;screenY: number;width: number;height: number;}>;

type KeyboardEvent = AndroidKeyboardEvent | IOSKeyboardEvent;

type BaseKeyboardEvent = {
  duration: number;
  easing: KeyboardEventEasing;
  endCoordinates: KeyboardEventCoordinates;
};

type AndroidKeyboardEvent = UniqueBranding & Readonly<BaseKeyboardEvent & {
  duration: 0;
  easing: "keyboard";
}>;

type IOSKeyboardEvent = UniqueBranding & Readonly<BaseKeyboardEvent & {
  startCoordinates: KeyboardEventCoordinates;
  isEventFromThisApp: boolean;
}>;
export { KeyboardEventName };

export { KeyboardEventEasing };

export { KeyboardEventCoordinates };

export { KeyboardEvent };

export { AndroidKeyboardEvent };

export { IOSKeyboardEvent };

declare module.exports: typeof KeyboardEventEmitter