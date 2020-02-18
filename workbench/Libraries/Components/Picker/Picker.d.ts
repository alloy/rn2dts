import React from 'react';
import { UniqueBranding, $TEMPORARY$string } from "flow-builtin-types";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
declare type PickerItemProps = UniqueBranding & Readonly<{
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
/**
 * Individual selectable item in a Picker.
 */
export { PickerItem };
declare class PickerItem extends React.Component<PickerItemProps> {
}
declare type PickerProps = UniqueBranding & Readonly<{
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
}>;
/**
 * Renders the native picker component on iOS and Android. Example:
 *
 *     <Picker
 *       selectedValue={this.state.language}
 *       onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
 *       <Picker.Item label="Java" value="java" />
 *       <Picker.Item label="JavaScript" value="js" />
 *     </Picker>
 */
declare class Picker extends React.Component<PickerProps> {
    /**
     * On Android, display the options in a dialog.
     */
    static MODE_DIALOG: $TEMPORARY$string<"dialog">;
    /**
     * On Android, display the options in a dropdown (this is the default).
     */
    static MODE_DROPDOWN: $TEMPORARY$string<"dropdown">;
    static Item: typeof PickerItem;
    static defaultProps: {
        mode: $TEMPORARY$string<"dialog">;
    };
}
export default Picker;
