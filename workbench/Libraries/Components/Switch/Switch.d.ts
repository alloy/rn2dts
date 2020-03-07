import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { ViewProps } from "../View/ViewPropTypes";

type SwitchChangeEvent = React.SyntheticEvent<UniqueBranding & Readonly<{value: boolean;}>>;

type Props = UniqueBranding & Readonly<ViewProps & {
  /**
     * Whether the switch is disabled. Defaults to false.
     */
  disabled?: boolean | null | undefined;

  /**
     * Boolean value of the switch. Defaults to false.
     */
  value?: boolean | null | undefined;

  /**
     * Custom color for the switch thumb.
     */
  thumbColor?: ColorValue | null | undefined;

  /**
     * Custom colors for the switch track.
     *
     * NOTE: On iOS when the switch value is false, the track shrinks into the
     * border. If you want to change the color of the background exposed by the
     * shrunken track, use `ios_backgroundColor`.
     */
  trackColor?: (UniqueBranding & Readonly<{false?: ColorValue | null | undefined;true?: ColorValue | null | undefined;}>) | null | undefined;

  /**
     * On iOS, custom color for the background. This background color can be seen
     * either when the switch value is false or when the switch is disabled (and
     * the switch is translucent).
     */
  ios_backgroundColor?: ColorValue | null | undefined;

  /**
     * Called when the user tries to change the value of the switch.
     *
     * Receives the change event as an argument. If you want to only receive the
     * new value, use `onValueChange` instead.
     */
  onChange?: ((event: SwitchChangeEvent) => Promise<void> | void) | null | undefined;

  /**
     * Called when the user tries to change the value of the switch.
     *
     * Receives the new value as an argument. If you want to instead receive an
     * event, use `onChange`.
     */
  onValueChange?: ((value: boolean) => Promise<void> | void) | null | undefined;
}>;

declare class Switch extends React.Component<Props> {
  render(): React.ReactNode;
  componentDidUpdate(): void;
}
export { Props };

declare module.exports: typeof Switch