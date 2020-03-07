const AnimatedValue = require("./nodes/AnimatedValue");

type Mapping = {
  [key: string]: Mapping;
} | AnimatedValue;
type EventConfig = {listener?: ((...args: any) => any) | null | undefined;useNativeDriver: boolean;};

declare function attachNativeEvent(viewRef: any, eventName: string, argMapping: ReadonlyArray<Mapping | null | undefined>): {detach: (() => void);};

declare class AnimatedEvent {
  __isNative: boolean;
  constructor(argMapping: ReadonlyArray<Mapping | null | undefined>, config: EventConfig): void;
  __addListener(callback: ((...args: any) => any)): void;
  __removeListener(callback: ((...args: any) => any)): void;
  __attach(viewRef: any, eventName: string): void;
  __detach(viewTag: any, eventName: string): void;
  __getHandler(): any | ((...args: any) => void);
}
export { Mapping };
export { EventConfig };

declare module.exports: {
  AnimatedEvent: typeof AnimatedEvent;
  attachNativeEvent: typeof attachNativeEvent;
}