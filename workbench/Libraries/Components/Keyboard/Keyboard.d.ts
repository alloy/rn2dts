import NativeEventEmitter from '../../EventEmitter/NativeEventEmitter';
import { UniqueBranding } from "flow-builtin-types";
declare const KeyboardEventEmitter: NativeEventEmitter;
export declare type KeyboardEventName = "keyboardWillShow" | "keyboardDidShow" | "keyboardWillHide" | "keyboardDidHide" | "keyboardWillChangeFrame" | "keyboardDidChangeFrame";
export declare type KeyboardEventEasing = "easeIn" | "easeInEaseOut" | "easeOut" | "linear" | "keyboard";
export declare type KeyboardEventCoordinates = UniqueBranding & Readonly<{
    screenX: number;
    screenY: number;
    width: number;
    height: number;
}>;
export declare type KeyboardEvent = AndroidKeyboardEvent | IOSKeyboardEvent;
declare type BaseKeyboardEvent = {
    duration: number;
    easing: KeyboardEventEasing;
    endCoordinates: KeyboardEventCoordinates;
};
export declare type AndroidKeyboardEvent = UniqueBranding & Readonly<BaseKeyboardEvent & {
    duration: 0;
    easing: "keyboard";
}>;
export declare type IOSKeyboardEvent = UniqueBranding & Readonly<BaseKeyboardEvent & {
    startCoordinates: KeyboardEventCoordinates;
    isEventFromThisApp: boolean;
}>;
export default KeyboardEventEmitter;
