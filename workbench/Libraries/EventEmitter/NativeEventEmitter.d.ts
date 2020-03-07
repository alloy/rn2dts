const EventEmitter = require("../vendor/emitter/EventEmitter");

import EmitterSubscription from "../vendor/emitter/EmitterSubscription";

type NativeModule = {
  readonly addListener: ((eventType: string) => void);
  readonly removeListeners: ((count: number) => void);

};

declare class NativeEventEmitter extends EventEmitter {
  constructor(nativeModule: NativeModule | null | undefined): void;
  addListener(eventType: string, listener: ((...args: any) => any), context: any | null | undefined): EmitterSubscription;
  removeAllListeners(eventType: string): void;
  removeSubscription(subscription: EmitterSubscription): void;
}

declare module.exports: typeof NativeEventEmitter