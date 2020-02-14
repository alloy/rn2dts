import { $TEMPORARY$string } from "flow-builtin-types";
import { PermissionStatus, PermissionType } from "./NativePermissionsAndroid";
export declare type Rationale = {
    title: string;
    message: string;
    buttonPositive?: string;
    buttonNegative?: string;
    buttonNeutral?: string;
};
/**
 * `PermissionsAndroid` provides access to Android M's new permissions model.
 *
 * See https://facebook.github.io/react-native/docs/permissionsandroid.html
 */
declare class PermissionsAndroid {
    PERMISSIONS: {
        ACCESS_COARSE_LOCATION: string;
        ACCESS_FINE_LOCATION: string;
        ADD_VOICEMAIL: string;
        BODY_SENSORS: string;
        CALL_PHONE: string;
        CAMERA: string;
        GET_ACCOUNTS: string;
        PROCESS_OUTGOING_CALLS: string;
        READ_CALENDAR: string;
        READ_CALL_LOG: string;
        READ_CONTACTS: string;
        READ_EXTERNAL_STORAGE: string;
        READ_PHONE_STATE: string;
        READ_SMS: string;
        RECEIVE_MMS: string;
        RECEIVE_SMS: string;
        RECEIVE_WAP_PUSH: string;
        RECORD_AUDIO: string;
        SEND_SMS: string;
        USE_SIP: string;
        WRITE_CALENDAR: string;
        WRITE_CALL_LOG: string;
        WRITE_CONTACTS: string;
        WRITE_EXTERNAL_STORAGE: string;
    };
    RESULTS: {
        DENIED: $TEMPORARY$string<"denied">;
        GRANTED: $TEMPORARY$string<"granted">;
        NEVER_ASK_AGAIN: $TEMPORARY$string<"never_ask_again">;
    };
    /**
     * DEPRECATED - use check
     *
     * Returns a promise resolving to a boolean value as to whether the specified
     * permissions has been granted
     *
     * @deprecated
     */
    checkPermission(permission: PermissionType): Promise<boolean>;
    /**
     * Returns a promise resolving to a boolean value as to whether the specified
     * permissions has been granted
     *
     * See https://facebook.github.io/react-native/docs/permissionsandroid.html#check
     */
    check(permission: PermissionType): Promise<boolean>;
    /**
     * DEPRECATED - use request
     *
     * Prompts the user to enable a permission and returns a promise resolving to a
     * boolean value indicating whether the user allowed or denied the request
     *
     * If the optional rationale argument is included (which is an object with a
     * `title` and `message`), this function checks with the OS whether it is
     * necessary to show a dialog explaining why the permission is needed
     * (https://developer.android.com/training/permissions/requesting.html#explain)
     * and then shows the system permission dialog
     *
     * @deprecated
     */
    requestPermission(permission: PermissionType, rationale?: Rationale): Promise<boolean>;
    /**
     * Prompts the user to enable a permission and returns a promise resolving to a
     * string value indicating whether the user allowed or denied the request
     *
     * See https://facebook.github.io/react-native/docs/permissionsandroid.html#request
     */
    request(permission: PermissionType, rationale?: Rationale): Promise<PermissionStatus>;
    /**
     * Prompts the user to enable multiple permissions in the same dialog and
     * returns an object with the permissions as keys and strings as values
     * indicating whether the user allowed or denied the request
     *
     * See https://facebook.github.io/react-native/docs/permissionsandroid.html#requestmultiple
     */
    requestMultiple(permissions: Array<PermissionType>): Promise<{
        [permission: PermissionType]: PermissionStatus;
    }>;
}
export default PermissionsAndroid;
