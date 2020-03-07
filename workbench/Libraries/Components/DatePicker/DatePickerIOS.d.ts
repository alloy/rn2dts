import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { ViewProps } from "../View/ViewPropTypes";

type Event = React.SyntheticEvent<UniqueBranding & Readonly<{timestamp: number;}>>;

type Props = UniqueBranding & Readonly<ViewProps & {
  /**
     * The currently selected date.
     */
  date?: Date | null | undefined;

  /**
     * Provides an initial value that will change when the user starts selecting
     * a date. It is useful for simple use-cases where you do not want to deal
     * with listening to events and updating the date prop to keep the
     * controlled state in sync. The controlled state has known bugs which
     * causes it to go out of sync with native. The initialDate prop is intended
     * to allow you to have native be source of truth.
     */
  initialDate?: Date | null | undefined;

  /**
     * The date picker locale.
     */
  locale?: string | null | undefined;

  /**
     * Maximum date.
     *
     * Restricts the range of possible date/time values.
     */
  maximumDate?: Date | null | undefined;

  /**
     * Minimum date.
     *
     * Restricts the range of possible date/time values.
     */
  minimumDate?: Date | null | undefined;

  /**
     * The interval at which minutes can be selected.
     */
  minuteInterval?: (1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30) | null | undefined;

  /**
     * The date picker mode.
     */
  mode?: ("date" | "time" | "datetime") | null | undefined;

  /**
     * Date change handler.
     *
     * This is called when the user changes the date or time in the UI.
     * The first and only argument is an Event. For getting the date the picker
     * was changed to, use onDateChange instead.
     */
  onChange?: ((event: Event) => void) | null | undefined;

  /**
     * Date change handler.
     *
     * This is called when the user changes the date or time in the UI.
     * The first and only argument is a Date object representing the new
     * date and time.
     */
  onDateChange: ((date: Date) => void);

  /**
     * Timezone offset in minutes.
     *
     * By default, the date picker will use the device's timezone. With this
     * parameter, it is possible to force a certain timezone offset. For
     * instance, to show times in Pacific Standard Time, pass -7 * 60.
     */
  timeZoneOffsetInMinutes?: number | null | undefined;
}>;

declare class DatePickerIOS extends React.Component<Props> {
  DefaultProps: {mode: string;};
  componentDidUpdate(): void;
  render(): React.ReactNode;
}

declare module.exports: typeof DatePickerIOS