import { ViewConfigGetter } from "./ReactNativeTypes";

declare var createReactNativeComponentClass: ((name: string, callback: ViewConfigGetter) => string);

declare module.exports: typeof createReactNativeComponentClass