import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { ViewStyleProp } from "../../StyleSheet/StyleSheet";

import { ViewProps } from "../View/ViewPropTypes";

type Props = UniqueBranding & Readonly<ViewProps & {
  /**
     * Specify how to react to the presence of the keyboard.
     */
  behavior?: ("height" | "position" | "padding") | null | undefined;

  /**
     * Style of the content container when `behavior` is 'position'.
     */
  contentContainerStyle?: ViewStyleProp | null | undefined;

  /**
     * Controls whether this `KeyboardAvoidingView` instance should take effect.
     * This is useful when more than one is on the screen. Defaults to true.
     */
  enabled: boolean | null | undefined;

  /**
     * Distance between the top of the user screen and the React Native view. This
     * may be non-zero in some cases. Defaults to 0.
     */
  keyboardVerticalOffset: number;
}>;

type State = {bottom: number;};

declare class KeyboardAvoidingView extends React.Component<Props, State> {
  defaultProps: {enabled: boolean;keyboardVerticalOffset: number;};
  viewRef: {current: React.ElementRef<any> | null;};
  constructor(props: Props): void;
  componentDidMount(): void;
  componentWillUnmount(): void;
  render(): React.ReactNode;
}

declare module.exports: typeof KeyboardAvoidingView