import { UniqueBranding } from "flow-builtin-types";
import { RectOrSize } from "../StyleSheet/Rect.js";
import { BlurEvent } from "../Types/CoreEventTypes.js";
import { FocusEvent } from "../Types/CoreEventTypes.js";
import { PressEvent } from "../Types/CoreEventTypes.js";
import { MouseEvent } from "../Types/CoreEventTypes.js";

type PressabilityConfig = UniqueBranding & Readonly<{

  /**
     * Whether a press gesture can be interrupted by a parent gesture such as a
     * scroll event. Defaults to true.
     */
  cancelable?: boolean | null | undefined;

  /**
     * Whether to disable initialization of the press gesture.
     */
  disabled?: boolean | null | undefined;

  /**
     * Amount to extend the `VisualRect` by to create `HitRect`.
     */
  hitSlop?: RectOrSize | null | undefined;

  /**
     * Amount to extend the `HitRect` by to create `PressRect`.
     */
  pressRectOffset?: RectOrSize | null | undefined;

  /**
     * Whether to disable the systemm sound when `onPress` fires on Android.
     **/
  android_disableSound?: boolean | null | undefined;

  /**
     * Duration to wait after hover in before calling `onHoverIn`.
     */
  delayHoverIn?: number | null | undefined;

  /**
     * Duration to wait after hover out before calling `onHoverOut`.
     */
  delayHoverOut?: number | null | undefined;

  /**
     * Duration (in addition to `delayPressIn`) after which a press gesture is
     * considered a long press gesture. Defaults to 500 (milliseconds).
     */
  delayLongPress?: number | null | undefined;

  /**
     * Duration to wait after press down before calling `onPressIn`.
     */
  delayPressIn?: number | null | undefined;

  /**
     * Duration to wait after letting up before calling `onPressOut`.
     */
  delayPressOut?: number | null | undefined;

  /**
     * Called after the element loses focus.
     */
  onBlur?: ((event: BlurEvent) => unknown) | null | undefined;

  /**
     * Called after the element is focused.
     */
  onFocus?: ((event: FocusEvent) => unknown) | null | undefined;

  /**
     * Called when the hover is activated to provide visual feedback.
     */
  onHoverIn?: ((event: MouseEvent) => unknown) | null | undefined;

  /**
     * Called when the hover is deactivated to undo visual feedback.
     */
  onHoverOut?: ((event: MouseEvent) => unknown) | null | undefined;

  /**
     * Called when a long press gesture has been triggered.
     */
  onLongPress?: ((event: PressEvent) => unknown) | null | undefined;

  /**
     * Called when a press gestute has been triggered.
     */
  onPress?: ((event: PressEvent) => unknown) | null | undefined;

  /**
     * Called when the press is activated to provide visual feedback.
     */
  onPressIn?: ((event: PressEvent) => unknown) | null | undefined;

  /**
     * Called when the press location moves. (This should rarely be used.)
     */
  onPressMove?: ((event: PressEvent) => unknown) | null | undefined;

  /**
     * Called when the press is deactivated to undo visual feedback.
     */
  onPressOut?: ((event: PressEvent) => unknown) | null | undefined;

  /**
     * Returns whether a long press gesture should cancel the press gesture.
     * Defaults to true.
     */
  onLongPressShouldCancelPress_DEPRECATED?: (() => boolean) | null | undefined;

  /**
     * If `cancelable` is set, this will be ignored.
     *
     * Returns whether to yield to a lock termination request (e.g. if a native
     * scroll gesture attempts to steal the responder lock).
     */
  onResponderTerminationRequest_DEPRECATED?: (() => boolean) | null | undefined;

  /**
     * If `disabled` is set, this will be ignored.
     *
     * Returns whether to start a press gesture.
     *
     * @deprecated
     */
  onStartShouldSetResponder_DEPRECATED?: (() => boolean) | null | undefined;
}>;

type EventHandlers = UniqueBranding & Readonly<{
  onBlur: ((event: BlurEvent) => void);
  onClick: ((event: PressEvent) => void);
  onFocus: ((event: FocusEvent) => void);
  onMouseEnter?: ((event: MouseEvent) => void);
  onMouseLeave?: ((event: MouseEvent) => void);
  onResponderGrant: ((event: PressEvent) => void);
  onResponderMove: ((event: PressEvent) => void);
  onResponderRelease: ((event: PressEvent) => void);
  onResponderTerminate: ((event: PressEvent) => void);
  onResponderTerminationRequest: (() => boolean);
  onStartShouldSetResponder: (() => boolean);
}>;

declare class Pressability {
  constructor(config: PressabilityConfig): void;
  configure(config: PressabilityConfig): void;

  /**
     * Resets any pending timers. This should be called on unmount.
     */
  reset(): void;

  /**
     * Returns a set of props to spread into the interactive element.
     */
  getEventHandlers(): EventHandlers;
}
export { PressabilityConfig };

export { EventHandlers };

export { Pressability as default };