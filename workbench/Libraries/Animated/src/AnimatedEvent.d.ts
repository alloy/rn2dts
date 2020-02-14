import AnimatedValue from './nodes/AnimatedValue';
import { $TEMPORARY$object } from "flow-builtin-types";
export declare type Mapping = {
    [key: string]: Mapping;
} | AnimatedValue;
export declare type EventConfig = {
    listener?: ((...args: any) => any) | null | undefined;
    useNativeDriver?: boolean;
};
declare function attachNativeEvent(viewRef: any, eventName: string, argMapping: Array<Mapping | null | undefined>): $TEMPORARY$object<{
    detach: (() => void);
}>;
declare class AnimatedEvent {
    _argMapping: Array<Mapping | null | undefined>;
    _listeners: Array<((...args: any) => any)>;
    _callListeners: ((...args: any) => any);
    _attachedEvent: {
        detach: (() => void);
    } | null | undefined;
    __isNative: boolean;
    constructor(argMapping: Array<Mapping | null | undefined>, config?: EventConfig);
    __addListener(callback: ((...args: any) => any)): void;
    __removeListener(callback: ((...args: any) => any)): void;
    __attach(viewRef: any, eventName: string): void;
    __detach(viewTag: any, eventName: string): void;
    __getHandler(): any | ((...args: any) => void);
    _callListeners(...args: any): void;
    _validateMapping(): void;
}
declare const _default: {
    AnimatedEvent: typeof AnimatedEvent;
    attachNativeEvent: typeof attachNativeEvent;
};
export default _default;
