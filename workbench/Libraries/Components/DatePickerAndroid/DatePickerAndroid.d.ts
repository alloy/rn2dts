import { Options } from "./DatePickerAndroidTypes";
import { DatePickerOpenAction } from "./DatePickerAndroidTypes";

declare class DatePickerAndroid {
  open(options: Options | null | undefined): Promise<DatePickerOpenAction>;
  readonly dateSetAction: "dateSetAction";
  readonly dismissedAction: "dismissedAction";
}

declare module.exports: typeof DatePickerAndroid