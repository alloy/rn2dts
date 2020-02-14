/// <reference types="react" />
import { $ReadOnly } from "utility-types";
export declare type AccessibilityRole = "none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "imagebutton" | "header" | "summary" | "alert" | "checkbox" | "combobox" | "menu" | "menubar" | "menuitem" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "switch" | "tab" | "tablist" | "timer" | "toolbar";
export declare type AccessibilityStates = ReadonlyArray<"disabled" | "selected" | "checked" | "unchecked" | "busy" | "expanded" | "collapsed" | "hasPopup">;
export declare type AccessibilityActionInfo = $ReadOnly<{
    name: string;
    label?: string;
}>;
export declare type AccessibilityActionEvent = React.SyntheticEvent<$ReadOnly<{
    actionName: string;
}>>;
export declare type AccessibilityState = {
    disabled?: boolean;
    selected?: boolean;
    checked?: (boolean | null | undefined) | "mixed";
    busy?: boolean;
    expanded?: boolean;
};
