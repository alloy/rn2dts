import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";

type Props = UniqueBranding & Readonly<{
  readonly children: React.ReactNode;

  /**
     * An ID which is used to associate this `InputAccessoryView` to
     * specified TextInput(s).
     */
  nativeID?: string | null | undefined;
  style?: ViewStyleProp | null | undefined;
  backgroundColor?: ColorValue | null | undefined;
}>;

declare class InputAccessoryView extends React.Component<Props> {render(): React.ReactNode;}

declare module.exports: typeof InputAccessoryView