import React from 'react';
import { Stringish } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
import RCTPickerNativeComponent from "./RCTPickerNativeComponent";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type PickerIOSChangeEvent = React.SyntheticEvent<$ReadOnly<{
    newValue: number | string;
    newIndex: number;
}>>;
declare type RCTPickerIOSItemType = $ReadOnly<{
    label: Label | null | undefined;
    value: (number | string) | null | undefined;
    textColor: number | null | undefined;
}>;
declare type Label = Stringish | number;
declare type Props = $ReadOnly<ViewProps & {
    children: React.ChildrenArray<React.ReactElement<typeof PickerIOSItem>>;
    itemStyle?: TextStyleProp | null | undefined;
    onChange?: ((event: PickerIOSChangeEvent) => unknown) | null | undefined;
    onValueChange?: ((itemValue: string | number, itemIndex: number) => unknown) | null | undefined;
    selectedValue: (number | string) | null | undefined;
}>;
declare type State = {
    selectedIndex: number;
    items: ReadonlyArray<RCTPickerIOSItemType>;
};
declare type ItemProps = $ReadOnly<{
    label: Label | null | undefined;
    value?: (number | string) | null | undefined;
    color?: ColorValue | null | undefined;
}>;
declare const PickerIOSItem: (props: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
    label: string | number | null | undefined;
    value?: string | number | null | undefined;
    color?: string | null | undefined;
}>) => null;
declare class PickerIOS extends React.Component<Props, State> {
    _picker: React.ElementRef<typeof RCTPickerNativeComponent> | null | undefined;
    _lastNativeValue: number | null | undefined;
    state: State;
    static Item: ((props: ItemProps) => null);
    static getDerivedStateFromProps(props: Props): State;
    render(): React.ReactNode;
    componentDidUpdate(): void;
    _onChange: (event: any) => void;
}
export default PickerIOS;
