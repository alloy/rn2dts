import NativeEventEmitter from '../../EventEmitter/NativeEventEmitter';
import { $FlowFixMe, $TEMPORARY$object } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
export declare type KeyboardEventName = "keyboardWillShow" | "keyboardDidShow" | "keyboardWillHide" | "keyboardDidHide" | "keyboardWillChangeFrame" | "keyboardDidChangeFrame";
export declare type KeyboardEventEasing = "easeIn" | "easeInEaseOut" | "easeOut" | "linear" | "keyboard";
export declare type KeyboardEventCoordinates = $ReadOnly<{
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
export declare type AndroidKeyboardEvent = $ReadOnly<BaseKeyboardEvent & {
    duration: 0;
    easing: "keyboard";
}>;
export declare type IOSKeyboardEvent = $ReadOnly<BaseKeyboardEvent & {
    startCoordinates: KeyboardEventCoordinates;
    isEventFromThisApp: boolean;
}>;
declare type KeyboardEventListener = ((e: KeyboardEvent) => void);
/**
 * `Keyboard` module to control keyboard events.
 *
 * ### Usage
 *
 * The Keyboard module allows you to listen for native events and react to them, as
 * well as make changes to the keyboard, like dismissing it.
 *
 *```
 * import React, { Component } from 'react';
 * import { Keyboard, TextInput } from 'react-native';
 *
 * class Example extends Component {
 *   componentWillMount () {
 *     this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
 *     this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
 *   }
 *
 *   componentWillUnmount () {
 *     this.keyboardDidShowListener.remove();
 *     this.keyboardDidHideListener.remove();
 *   }
 *
 *   _keyboardDidShow () {
 *     alert('Keyboard Shown');
 *   }
 *
 *   _keyboardDidHide () {
 *     alert('Keyboard Hidden');
 *   }
 *
 *   render() {
 *     return (
 *       <TextInput
 *         onSubmitEditing={Keyboard.dismiss}
 *       />
 *     );
 *   }
 * }
 *```
 */
declare let Keyboard: NativeEventEmitter | $TEMPORARY$object<{
    addListener: ((eventName: KeyboardEventName, callback: KeyboardEventListener) => $FlowFixMe);
    dismiss: (() => $FlowFixMe);
    removeAllListeners: ((eventName: KeyboardEventName) => $FlowFixMe);
    removeListener: ((eventName: KeyboardEventName, callback: KeyboardEventListener) => $FlowFixMe);
    scheduleLayoutAnimation: ((event: KeyboardEvent) => $FlowFixMe);
}>;
export default Keyboard;
