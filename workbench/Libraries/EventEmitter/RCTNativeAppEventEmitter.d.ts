const RCTDeviceEventEmitter = require("./RCTDeviceEventEmitter");

declare var RCTNativeAppEventEmitter: typeof RCTDeviceEventEmitter;
declare module.exports: typeof RCTNativeAppEventEmitter