import AnimatedValue from './nodes/AnimatedValue';
export declare type Mapping = {
    [key: string]: Mapping;
} | AnimatedValue;
export declare type EventConfig = {
    listener?: ((...args: any) => any) | null | undefined;
    useNativeDriver: boolean;
};
declare function attachNativeEvent(viewRef: any, eventName: string, argMapping: Array<Mapping | null | undefined>): {
    detach: (() => void);
};
declare class AnimatedEvent {
    constructor(argMapping: Array<Mapping | null | undefined>, config: EventConfig);
}
export { AnimatedEvent, attachNativeEvent };
