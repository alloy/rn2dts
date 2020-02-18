import React from 'react';
import { UniqueBranding, Stringish } from "flow-builtin-types";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type PickerIOSChangeEvent = React.SyntheticEvent<UniqueBranding & Readonly<{
    newValue: number | string;
    newIndex: number;
}>>;
declare type RCTPickerIOSItemType = UniqueBranding & Readonly<{
    label: Label | null | undefined;
    value: (number | string) | null | undefined;
    textColor: number | null | undefined;
}>;
declare type Label = Stringish | number;
declare type Props = UniqueBranding & Readonly<ViewProps & {
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
declare type ItemProps = UniqueBranding & Readonly<{
    label: Label | null | undefined;
    value?: (number | string) | null | undefined;
    color?: ColorValue | null | undefined;
}>;
declare const PickerIOSItem: (props: ItemProps) => null;
declare class PickerIOS extends React.Component<Props, State> {
    state: State;
    static Item: ((props: ItemProps) => null);
    static getDerivedStateFromProps(props: Props): State;
    render(): React.ReactNode;
    componentDidUpdate(): void;
}
export default PickerIOS;
