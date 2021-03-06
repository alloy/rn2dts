/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
export declare type AccessibilityRole = "none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "imagebutton" | "header" | "summary" | "alert" | "checkbox" | "combobox" | "menu" | "menubar" | "menuitem" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "switch" | "tab" | "tablist" | "timer" | "toolbar";
export declare type AccessibilityActionInfo = UniqueBranding & Readonly<{
    name: string;
    label?: string;
}>;
export declare type AccessibilityActionEvent = React.SyntheticEvent<UniqueBranding & Readonly<{
    actionName: string;
}>>;
export declare type AccessibilityState = {
    disabled?: boolean;
    selected?: boolean;
    checked?: (boolean | null | undefined) | "mixed";
    busy?: boolean;
    expanded?: boolean;
};
export declare type AccessibilityValue = UniqueBranding & Readonly<{
    /**
     * The minimum value of this component's range. (should be an integer)
     */
    min?: number;
    /**
     * The maximum value of this component's range. (should be an integer)
     */
    max?: number;
    /**
     * The current value of this component's range. (should be an integer)
     */
    now?: number;
    /**
     * A textual description of this component's value. (will override minimum, current, and maximum if set)
     */
    text?: string;
}>;
