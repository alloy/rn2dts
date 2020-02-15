import { Stringish } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
import * as React from "react";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
declare type PickerItemValue = number | string;
declare type Props = $ReadOnly<{
    accessibilityLabel?: Stringish | null | undefined;
    children?: React.ReactNode;
    style?: TextStyleProp | null | undefined;
    selectedValue?: PickerItemValue | null | undefined;
    enabled?: boolean | null | undefined;
    mode?: ("dialog" | "dropdown") | null | undefined;
    onValueChange?: ((itemValue: PickerItemValue | null | undefined, itemIndex: number) => unknown) | null | undefined;
    prompt?: string | null | undefined;
    testID?: string;
}>;
/**
 * Not exposed as a public API - use <Picker> instead.
 */
declare function PickerAndroid(props: Props): React.ReactNode;
export default PickerAndroid;
