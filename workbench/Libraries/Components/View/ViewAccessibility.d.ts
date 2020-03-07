import { UniqueBranding } from "flow-builtin-types";
import { SyntheticEvent } from "../../Types/CoreEventTypes";

type AccessibilityRole = "none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "imagebutton" | "header" | "summary" | "alert" | "checkbox" | "combobox" | "menu" | "menubar" | "menuitem" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "switch" | "tab" | "tablist" | "timer" | "toolbar";

type AccessibilityActionInfo = UniqueBranding & Readonly<{name: string;label?: string;}>;

type AccessibilityActionEvent = React.SyntheticEvent<UniqueBranding & Readonly<{actionName: string;}>>;

type AccessibilityState = {
  disabled?: boolean;
  selected?: boolean;
  checked?: (boolean | null | undefined) | "mixed";
  busy?: boolean;
  expanded?: boolean;

};

type AccessibilityValue = UniqueBranding & Readonly<{

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
export { AccessibilityRole };

export { AccessibilityActionInfo };

export { AccessibilityActionEvent };

export { AccessibilityState };

export { AccessibilityValue };