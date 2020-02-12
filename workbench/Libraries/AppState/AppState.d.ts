import NativeEventEmitter from '../EventEmitter/NativeEventEmitter';
/**
 * `AppState` can tell you if the app is in the foreground or background,
 * and notify you when the state changes.
 *
 * See http://facebook.github.io/react-native/docs/appstate.html
 */
declare class AppState extends NativeEventEmitter {
    _eventHandlers: any;
    _supportedEvents: {};
    currentState: string | null | undefined;
    isAvailable: boolean;
    constructor();
    /**
     * Add a handler to AppState changes by listening to the `change` event type
     * and providing the handler.
     *
     * See http://facebook.github.io/react-native/docs/appstate.html#addeventlistener
     */
    addEventListener(type: string, handler: ((...args: any) => any)): void;
    /**
     * Remove a handler by passing the `change` event type and the handler.
     *
     * See http://facebook.github.io/react-native/docs/appstate.html#removeeventlistener
     */
    removeEventListener(type: string, handler: ((...args: any) => any)): void;
}
export default AppState;
