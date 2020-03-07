const EventEmitter = require("../vendor/emitter/EventEmitter");
const EventSubscriptionVendor = require("../vendor/emitter/EventSubscriptionVendor");

import EmitterSubscription from "../vendor/emitter/EmitterSubscription";

declare class RCTDeviceEventEmitter extends EventEmitter {
  sharedSubscriber: EventSubscriptionVendor;
  constructor(): void;
  addListener(eventType: string, listener: ((...args: any) => any), context: any | null | undefined): EmitterSubscription;
  removeAllListeners(eventType: string | null | undefined): void;
  removeSubscription(subscription: EmitterSubscription): void;
}

declare module.exports: RCTDeviceEventEmitter