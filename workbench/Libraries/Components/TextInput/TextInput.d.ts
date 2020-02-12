import React from 'react';
import { $ReadOnly } from "utility-types";
export declare type ChangeEvent = React.SyntheticEvent<$ReadOnly<{
    eventCount: number;
    target: number;
    text: string;
}>>;
export declare type TextInputEvent = React.SyntheticEvent<$ReadOnly<{
    eventCount: number;
    previousText: string;
    range: $ReadOnly<{
        start: number;
        end: number;
    }>;
    target: number;
    text: string;
}>>;
export declare type ContentSizeChangeEvent = React.SyntheticEvent<$ReadOnly<{
    target: number;
    contentSize: $ReadOnly<{
        width: number;
        height: number;
    }>;
}>>;
declare type TargetEvent = React.SyntheticEvent<$ReadOnly<{
    target: number;
}>>;
export declare type BlurEvent = TargetEvent;
export declare type FocusEvent = TargetEvent;
declare type Selection = $ReadOnly<{
    start: number;
    end: number;
}>;
export declare type SelectionChangeEvent = React.SyntheticEvent<$ReadOnly<{
    selection: Selection;
    target: number;
}>>;
export declare type KeyPressEvent = React.SyntheticEvent<$ReadOnly<{
    key: string;
    target?: number | null | undefined;
    eventCount?: number | null | undefined;
}>>;
export declare type EditingEvent = React.SyntheticEvent<$ReadOnly<{
    eventCount: number;
    text: string;
    target: number;
}>>;
export declare type KeyboardType = // Cross Platform
"default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | "visible-password";
export declare type ReturnKeyType = // Cross Platform
"done" | "go" | "next" | "search" | "send" | "none" | "previous" | "default" | "emergency-call" | "google" | "join" | "route" | "yahoo";
export declare type AutoCapitalize = "none" | "sentences" | "words" | "characters";
export declare type TextContentType = "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password" | "newPassword" | "oneTimeCode";
declare const TypedTextInput: any;
export default TypedTextInput;
