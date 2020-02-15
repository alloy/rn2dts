import { React$Element } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
import React from "react";
export declare type MeasureOnSuccessCallback = ((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => void);
export declare type MeasureInWindowOnSuccessCallback = ((x: number, y: number, width: number, height: number) => void);
export declare type MeasureLayoutOnSuccessCallback = ((left: number, top: number, width: number, height: number) => void);
declare type AttributeType = true | $ReadOnly<{
    diff?: (<T>(arg1: T, arg2: T) => boolean);
    process?: ((arg1: any) => any);
}>;
export declare type AttributeConfiguration<TProps = string, TStyleProps = string> = $ReadOnly<{
    style: $ReadOnly<{
        [propName: TStyleProps]: AttributeType;
    }>;
    [propName: TProps]: AttributeType;
}>;
export declare type ReactNativeBaseComponentViewConfig<TProps = string, TStyleProps = string> = $ReadOnly<{
    baseModuleName?: string;
    bubblingEventTypes?: $ReadOnly<{
        [eventName: string]: $ReadOnly<{
            phasedRegistrationNames: $ReadOnly<{
                captured: string;
                bubbled: string;
            }>;
        }>;
    }>;
    Commands?: $ReadOnly<{
        [commandName: string]: number;
    }>;
    directEventTypes?: $ReadOnly<{
        [eventName: string]: $ReadOnly<{
            registrationName: string;
        }>;
    }>;
    NativeProps?: $ReadOnly<{
        [propName: string]: string;
    }>;
    uiViewClassName: string;
    validAttributes: AttributeConfiguration<TProps, TStyleProps>;
}>;
export declare type ViewConfigGetter = (() => ReactNativeBaseComponentViewConfig);
/**
 * Class only exists for its Flow type.
 */
declare class ReactNativeComponent<Props> extends React.Component<Props> {
    blur(): void;
    focus(): void;
    measure(callback: MeasureOnSuccessCallback): void;
    measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
    measureLayout(relativeToNativeNode: number | any, onSuccess: MeasureLayoutOnSuccessCallback, onFail?: (() => void)): void;
    setNativeProps(nativeProps: any): void;
}
/**
 * This type keeps ReactNativeFiberHostComponent and NativeMethodsMixin in sync.
 * It can also provide types for ReactNative applications that use NMM or refs.
 */
export declare type NativeMethodsMixinType = {
    blur(): void;
    focus(): void;
    measure(callback: MeasureOnSuccessCallback): void;
    measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
    measureLayout(relativeToNativeNode: number | any, onSuccess: MeasureLayoutOnSuccessCallback, onFail: (() => void)): void;
    setNativeProps(nativeProps: any): void;
};
declare type SecretInternalsType = {
    NativeMethodsMixin: NativeMethodsMixinType;
    computeComponentStackForErrorReporting(tag: number): string;
};
declare type SecretInternalsFabricType = {
    NativeMethodsMixin: NativeMethodsMixinType;
};
/**
 * Flat ReactNative renderer bundles are too big for Flow to parse efficiently.
 * Provide minimal Flow typing for the high-level RN API and call it a day.
 */
export declare type ReactNativeType = {
    NativeComponent: typeof ReactNativeComponent;
    findNodeHandle(componentOrHandle: any): number | null | undefined;
    dispatchCommand(handle: any, command: string, args: Array<any>): void;
    setNativeProps(handle: any, nativeProps: any): void;
    render(element: React$Element<any>, containerTag: any, callback: ((...args: any) => any) | null | undefined): any;
    unmountComponentAtNode(containerTag: number): any;
    unmountComponentAtNodeAndRemoveContainer(containerTag: number): any;
    unstable_batchedUpdates: any;
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: SecretInternalsType;
};
export declare type ReactFabricType = {
    NativeComponent: typeof ReactNativeComponent;
    findNodeHandle(componentOrHandle: any): number | null | undefined;
    dispatchCommand(handle: any, command: string, args: Array<any>): void;
    setNativeProps(handle: any, nativeProps: any): void;
    render(element: React$Element<any>, containerTag: any, callback: ((...args: any) => any) | null | undefined): any;
    unmountComponentAtNode(containerTag: number): any;
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: SecretInternalsFabricType;
};
export declare type ReactNativeEventTarget = {
    node: any;
    canonical: {
        _nativeTag: number;
        viewConfig: ReactNativeBaseComponentViewConfig;
        currentProps: any;
        _internalInstanceHandle: any;
    };
};
export declare type ReactFaricEventTouch = {
    identifier: number;
    locationX: number;
    locationY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    target: number;
    timestamp: number;
    force: number;
};
export declare type ReactFaricEvent = {
    touches: Array<ReactFaricEventTouch>;
    changedTouches: Array<ReactFaricEventTouch>;
    targetTouches: Array<ReactFaricEventTouch>;
    target: number;
};
export declare type ReactNativeResponderEvent = {
    nativeEvent: ReactFaricEvent;
    responderTarget: null | ReactNativeEventTarget;
    target: null | ReactNativeEventTarget;
    type: string;
};
export declare type ReactNativeResponderContext = {
    dispatchEvent: ((eventValue: any, listener: ((arg0: any) => void), eventPriority: EventPriority) => void);
    isTargetWithinNode: ((childTarget: ReactNativeEventTarget, parentTarget: ReactNativeEventTarget) => boolean);
    getTargetBoundingRect(target: ReactNativeEventTarget, cb: ((arg0: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    }) => void)): void;
    addRootEventTypes: ((rootEventTypes: Array<string>) => void);
    removeRootEventTypes: ((rootEventTypes: Array<string>) => void);
    setTimeout: ((func: (() => void), timeout: number) => number);
    clearTimeout: ((timerId: number) => void);
    getTimeStamp: (() => number);
};
export declare type PointerType = "" | "mouse" | "keyboard" | "pen" | "touch" | "trackpad";
export declare type EventPriority = 0 | 1 | 2;
export declare const DiscreteEvent: EventPriority;
export declare const UserBlockingEvent: EventPriority;
export declare const ContinuousEvent: EventPriority;
export {};
