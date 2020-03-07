import { $Keys } from "utility-types";
type ContentAvailable = 1 | null | void;

type FetchResult = {NewData: string;NoData: string;ResultFailed: string;};

type PushNotificationEventName = $Keys<{

  /**
     * Fired when a remote notification is received. The handler will be invoked
     * with an instance of `PushNotificationIOS`.
     */
  notification: string;

  /**
     * Fired when a local notification is received. The handler will be invoked
     * with an instance of `PushNotificationIOS`.
     */
  localNotification: string;

  /**
     * Fired when the user registers for remote notifications. The handler will be
     * invoked with a hex string representing the deviceToken.
     */
  register: string;

  /**
     * Fired when the user fails to register for remote notifications. Typically
     * occurs when APNS is having issues, or the device is a simulator. The
     * handler will be invoked with {message: string, code: number, details: any}.
     */
  registrationError: string;

}>;

declare class PushNotificationIOS {
  FetchResult: FetchResult;
  presentLocalNotification(details: any): void;
  scheduleLocalNotification(details: any): void;
  cancelAllLocalNotifications(): void;
  removeAllDeliveredNotifications(): void;
  getDeliveredNotifications(callback: ((notifications: Array<any>) => void)): void;
  removeDeliveredNotifications(identifiers: Array<string>): void;
  setApplicationIconBadgeNumber(number: number): void;
  getApplicationIconBadgeNumber(callback: ((...args: any) => any)): void;
  cancelLocalNotifications(userInfo: any): void;
  getScheduledLocalNotifications(callback: ((...args: any) => any)): void;
  addEventListener(type: PushNotificationEventName, handler: ((...args: any) => any)): void;
  removeEventListener(type: PushNotificationEventName, handler: ((...args: any) => any)): void;
  requestPermissions(permissions?: {alert?: boolean;badge?: boolean;sound?: boolean;}): Promise<{alert: boolean;badge: boolean;sound: boolean;}>;
  abandonPermissions(): void;
  checkPermissions(callback: ((...args: any) => any)): void;
  getInitialNotification(): Promise<PushNotificationIOS | null | undefined>;

  /**
     * You will never need to instantiate `PushNotificationIOS` yourself.
     * Listening to the `notification` event and invoking
     * `getInitialNotification` is sufficient
     *
     */
  constructor(nativeNotif: any): void;

  /**
     * This method is available for remote notifications that have been received via:
     * `application:didReceiveRemoteNotification:fetchCompletionHandler:`
     *
     * See https://reactnative.dev/docs/pushnotificationios.html#finish
     */
  finish(fetchResult: string): void;

  /**
     * An alias for `getAlert` to get the notification's main message string
     */
  getMessage(): (string | null | undefined) | (any | null | undefined);

  /**
     * Gets the sound string from the `aps` object
     *
     * See https://reactnative.dev/docs/pushnotificationios.html#getsound
     */
  getSound(): string | null | undefined;

  /**
     * Gets the category string from the `aps` object
     *
     * See https://reactnative.dev/docs/pushnotificationios.html#getcategory
     */
  getCategory(): string | null | undefined;

  /**
     * Gets the notification's main message from the `aps` object
     *
     * See https://reactnative.dev/docs/pushnotificationios.html#getalert
     */
  getAlert(): (string | null | undefined) | (any | null | undefined);

  /**
     * Gets the content-available number from the `aps` object
     *
     * See https://reactnative.dev/docs/pushnotificationios.html#getcontentavailable
     */
  getContentAvailable(): ContentAvailable;

  /**
     * Gets the badge count number from the `aps` object
     *
     * See https://reactnative.dev/docs/pushnotificationios.html#getbadgecount
     */
  getBadgeCount(): number | null | undefined;

  /**
     * Gets the data object on the notif
     *
     * See https://reactnative.dev/docs/pushnotificationios.html#getdata
     */
  getData(): any | null | undefined;

  /**
     * Gets the thread ID on the notif
     *
     * See https://reactnative.dev/docs/pushnotificationios.html#getthreadid
     */
  getThreadID(): string | null | undefined;
}
export { ContentAvailable };

export { FetchResult };

export { PushNotificationEventName };

declare module.exports: typeof PushNotificationIOS