import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { PressEvent } from "../Types/CoreEventTypes";

type ButtonProps = UniqueBranding & Readonly<{

  /**
     * Text to display inside the button
     */
  title: string;

  /**
     * Handler to be called when the user taps the button
     */
  onPress: ((event?: PressEvent) => unknown);

  /**
     * If true, doesn't play system sound on touch (Android Only)
     **/
  touchSoundDisabled?: boolean | null | undefined;

  /**
     * Color of the text (iOS), or background color of the button (Android)
     */
  color?: string | null | undefined;

  /**
     * TV preferred focus (see documentation for the View component).
     */
  hasTVPreferredFocus?: boolean | null | undefined;

  /**
     * TV next focus down (see documentation for the View component).
     *
     * @platform android
     */
  nextFocusDown?: number | null | undefined;

  /**
     * TV next focus forward (see documentation for the View component).
     *
     * @platform android
     */
  nextFocusForward?: number | null | undefined;

  /**
     * TV next focus left (see documentation for the View component).
     *
     * @platform android
     */
  nextFocusLeft?: number | null | undefined;

  /**
     * TV next focus right (see documentation for the View component).
     *
     * @platform android
     */
  nextFocusRight?: number | null | undefined;

  /**
     * TV next focus up (see documentation for the View component).
     *
     * @platform android
     */
  nextFocusUp?: number | null | undefined;

  /**
     * Text to display for blindness accessibility features
     */
  accessibilityLabel?: string | null | undefined;

  /**
     * If true, disable all interactions for this component.
     */
  disabled?: boolean | null | undefined;

  /**
     * Used to locate this view in end-to-end tests.
     */
  testID?: string | null | undefined;
}>;

declare class Button extends React.Component<ButtonProps> {render(): React.ReactNode;}

declare module.exports: typeof Button