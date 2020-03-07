import { UniqueBranding } from "flow-builtin-types";
type Options = UniqueBranding & Readonly<{
  date?: (Date | number) | null | undefined;
  minDate?: (Date | number) | null | undefined;
  maxDate?: (Date | number) | null | undefined;
  mode?: ("calendar" | "spinner" | "default") | null | undefined;
}>;

type DatePickerOpenAction = {action: "dateSetAction";year: number;month: number;day: number;} | {action: "dismissedAction";year: void;month: void;day: void;};
export { Options };

export { DatePickerOpenAction };