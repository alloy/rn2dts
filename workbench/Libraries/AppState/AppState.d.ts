const EventEmitter = require("../vendor/emitter/EventEmitter");
const NativeEventEmitter = require("../EventEmitter/NativeEventEmitter");

declare class AppState extends NativeEventEmitter {
  currentState: string | null | undefined;
  isAvailable: boolean;
  constructor(): void;
  // TODO: now that AppState is a subclass of NativeEventEmitter, we could
  // deprecate `addEventListener` and `removeEventListener` and just use
  // addListener` and `listener.remove()` directly. That will be a breaking
  // change though, as both the method and event names are different
  // (addListener events are currently required to be globally unique).

  /**
     * Add a handler to AppState changes by listening to the `change` event type
     * and providing the handler.
     *
     * See https://reactnative.dev/docs/appstate.html#addeventlistener
     */
  addEventListener(type: string, handler: ((...args: any) => any)): void;

  /**
     * Remove a handler by passing the `change` event type and the handler.
     *
     * See https://reactnative.dev/docs/appstate.html#removeeventlistener
     */
  removeEventListener(type: string, handler: ((...args: any) => any)): void;
}

declare class MissingNativeAppStateShim extends EventEmitter {
  // AppState
  isAvailable: boolean;
  currentState: string | null | undefined;
  addEventListener(type: string, handler: ((...args: any) => any)): void;
  removeEventListener(type: string, handler: ((...args: any) => any)): void;
  // EventEmitter
  addListener(): void;
  removeAllListeners(): void;
  removeSubscription(): void;
}

declare var AppStateInstance: AppState | MissingNativeAppStateShim;

declare module.exports: typeof AppStateInstance