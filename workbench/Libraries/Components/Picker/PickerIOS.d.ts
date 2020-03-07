import { UniqueBranding, Stringish } from "flow-builtin-types";
const React = require("react");

import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { ViewProps } from "../View/ViewPropTypes";

type PickerIOSChangeEvent = React.SyntheticEvent<UniqueBranding & Readonly<{newValue: number | string;newIndex: number;}>>;

type RCTPickerIOSItemType = UniqueBranding & Readonly<{label: Label | null | undefined;value: (number | string) | null | undefined;textColor: number | null | undefined;}>;

type Label = Stringish | number;

type Props = UniqueBranding & Readonly<ViewProps & {
  children: React.ChildrenArray<React.ReactElement<typeof PickerIOSItem>>;
  itemStyle?: TextStyleProp | null | undefined;
  onChange?: ((event: PickerIOSChangeEvent) => unknown) | null | undefined;
  onValueChange?: ((itemValue: string | number, itemIndex: number) => unknown) | null | undefined;
  selectedValue: (number | string) | null | undefined;
  accessibilityLabel?: string | null | undefined;
}>;

type State = {
  selectedIndex: number;
  items: ReadonlyArray<RCTPickerIOSItemType>;
};

type ItemProps = UniqueBranding & Readonly<{label: Label | null | undefined;value?: (number | string) | null | undefined;color?: ColorValue | null | undefined;}>;

declare var PickerIOSItem: ((props: ItemProps) => null);

declare class PickerIOS extends React.Component<Props, State> {
  state: State;
  Item: ((props: ItemProps) => null);
  getDerivedStateFromProps(props: Props): State;
  render(): React.ReactNode;
  componentDidUpdate(): void;
}

declare module.exports: typeof PickerIOS