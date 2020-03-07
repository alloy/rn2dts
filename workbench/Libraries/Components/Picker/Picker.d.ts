import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";

type PickerItemProps = UniqueBranding & Readonly<{

  /**
     * Text to display for this item.
     */
  label: string;

  /**
     * The value to be passed to picker's `onValueChange` callback when
     * this item is selected. Can be a string or an integer.
     */
  value?: (number | string) | null | undefined;

  /**
     * Color of this item's text.
     * @platform android
     */
  color?: ColorValue;

  /**
     * Used to locate the item in end-to-end tests.
     */
  testID?: string;
}>;

declare class PickerItem extends React.Component<PickerItemProps> {render(): void;}

type PickerProps = UniqueBranding & Readonly<{
  children?: React.ReactNode;
  style?: TextStyleProp | null | undefined;

  /**
     * Value matching value of one of the items. Can be a string or an integer.
     */
  selectedValue?: (number | string) | null | undefined;

  /**
     * Callback for when an item is selected. This is called with the following parameters:
     *   - `itemValue`: the `value` prop of the item that was selected
     *   - `itemIndex`: the index of the selected item in this picker
     */
  onValueChange?: ((itemValue: string | number, itemIndex: number) => unknown) | null | undefined;

  /**
     * If set to false, the picker will be disabled, i.e. the user will not be able to make a
     * selection.
     * @platform android
     */
  enabled?: boolean | null | undefined;

  /**
     * On Android, specifies how to display the selection items when the user taps on the picker:
     *
     *   - 'dialog': Show a modal dialog. This is the default.
     *   - 'dropdown': Shows a dropdown anchored to the picker view
     *
     * @platform android
     */
  mode?: ("dialog" | "dropdown") | null | undefined;

  /**
     * Style to apply to each of the item labels.
     * @platform ios
     */
  itemStyle?: TextStyleProp | null | undefined;

  /**
     * Prompt string for this picker, used on Android in dialog mode as the title of the dialog.
     * @platform android
     */
  prompt?: string | null | undefined;

  /**
     * Used to locate this view in end-to-end tests.
     */
  testID?: string | null | undefined;

  /**
     * The string used for the accessibility label. Will be read once focused on the picker but not on change.
     */
  accessibilityLabel?: string | null | undefined;
}>;

declare class Picker extends React.Component<PickerProps> {
  MODE_DIALOG: string;
  MODE_DROPDOWN: string;
  Item: typeof PickerItem;
  defaultProps: {mode: string;};
  render(): React.ReactNode;
}
export { PickerItem };

declare module.exports: typeof Picker