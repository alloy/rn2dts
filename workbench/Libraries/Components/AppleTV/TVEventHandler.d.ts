const NativeEventEmitter = require("../../EventEmitter/NativeEventEmitter");

import EmitterSubscription from "../../vendor/emitter/EmitterSubscription";

declare class TVEventHandler {
  __nativeTVNavigationEventListener: EmitterSubscription | null | undefined;
  __nativeTVNavigationEventEmitter: NativeEventEmitter | null | undefined;
  enable(component: any | null | undefined, callback: ((...args: any) => any)): void;
  disable(): void;
}

declare module.exports: typeof TVEventHandler