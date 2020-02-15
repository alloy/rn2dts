import { TimeoutID } from "flow-builtin-types";
import { $ReadOnly, $PropertyType } from "utility-types";
import { EdgeInsetsProp } from "../StyleSheet/EdgeInsetsPropType.js";
import { BlurEvent, FocusEvent, PressEvent, MouseEvent } from "../Types/CoreEventTypes.js";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import * as React from "react";
export declare type PressabilityConfig = $ReadOnly<{
    /**
     * Returns the amount to extend the `VisualRect` by to create `HitRect`.
     */
    getHitSlop?: (() => EdgeInsetsProp | null | undefined) | null | undefined;
    /**
     * Returns the duration to wait after hover in before activation.
     */
    getHoverInDelayMS?: (() => number | null | undefined) | null | undefined;
    /**
     * Returns the duration to wait after hover out before deactivation.
     */
    getHoverOutDelayMS?: (() => number | null | undefined) | null | undefined;
    /**
     * Returns the duration (in addition to the value from `getPressDelayMS`)
     * after which a press gesture becomes a long press gesture.
     */
    getLongPressDelayMS?: (() => number | null | undefined) | null | undefined;
    /**
     * Returns the duration to wait after press down before activation.
     */
    getPressDelayMS?: (() => number | null | undefined) | null | undefined;
    /**
     * Returns the duration to wait after letting up before deactivation.
     */
    getPressOutDelayMS?: (() => number | null | undefined) | null | undefined;
    /**
     * Returns the amount to extend the `HitRect` by to create `PressRect`.
     */
    getPressRectOffset?: (() => EdgeInsetsProp | null | undefined) | null | undefined;
    /**
     * Returns true to disable playing system sound on touch (Android Only)
     **/
    getTouchSoundDisabled?: (() => boolean | null | undefined) | null | undefined;
    /**
     * Called after the element loses focus.
     */
    onBlur?: ((event: BlurEvent) => void) | null | undefined;
    /**
     * Called after the element is focused.
     */
    onFocus?: ((event: FocusEvent) => void) | null | undefined;
    /**
     * Called when the hover is activated to provide visual feedback.
     */
    onHoverIn?: ((event: MouseEvent) => void) | null | undefined;
    /**
     * Called when the hover is deactivated to undo visual feedback.
     */
    onHoverOut?: ((event: MouseEvent) => void) | null | undefined;
    /**
     * Called when a long press gesture has been triggered.
     */
    onLongPress?: ((event: PressEvent) => void) | null | undefined;
    /**
     * Returns whether a long press gesture should cancel the press gesture.
     * Defaults to true.
     */
    onLongPressShouldCancelPress?: (() => boolean) | null | undefined;
    /**
     * Called when a press gestute has been triggered.
     */
    onPress?: ((event: PressEvent) => void) | null | undefined;
    /**
     * Called when the press is activated to provide visual feedback.
     */
    onPressIn?: ((event: PressEvent) => void) | null | undefined;
    /**
     * Called when the press location moves. (This should rarely be used.)
     */
    onPressMove?: ((event: PressEvent) => void) | null | undefined;
    /**
     * Called when the press is deactivated to undo visual feedback.
     */
    onPressOut?: ((event: PressEvent) => void) | null | undefined;
    /**
     * Returns whether to yield to a lock termination request (e.g. if a native
     * scroll gesture attempts to steal the responder lock).
     */
    onResponderTerminationRequest?: (() => boolean) | null | undefined;
    /**
     * Returns whether to start a press gesture.
     */
    onStartShouldSetResponder?: (() => boolean) | null | undefined;
}>;
declare type EventHandlers = $ReadOnly<{
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
declare type TouchState = "NOT_RESPONDER" | "RESPONDER_INACTIVE_PRESS_IN" | "RESPONDER_INACTIVE_PRESS_OUT" | "RESPONDER_ACTIVE_PRESS_IN" | "RESPONDER_ACTIVE_PRESS_OUT" | "RESPONDER_ACTIVE_LONG_PRESS_IN" | "RESPONDER_ACTIVE_LONG_PRESS_OUT" | "ERROR";
declare type TouchSignal = "DELAY" | "RESPONDER_GRANT" | "RESPONDER_RELEASE" | "RESPONDER_TERMINATED" | "ENTER_PRESS_RECT" | "LEAVE_PRESS_RECT" | "LONG_PRESS_DETECTED";
/**
 * Pressability implements press handling capabilities.
 *
 * =========================== Pressability Tutorial ===========================
 *
 * The `Pressability` class helps you create press interactions by analyzing the
 * geometry of elements and observing when another responder (e.g. ScrollView)
 * has stolen the touch lock. It offers hooks for your component to provide
 * interaction feedback to the user:
 *
 * - When a press has activated (e.g. highlight an element)
 * - When a press has deactivated (e.g. un-highlight an element)
 * - When a press sould trigger an action, meaning it activated and deactivated
 *   while within the geometry of the element without the lock being stolen.
 *
 * A high quality interaction isn't as simple as you might think. There should
 * be a slight delay before activation. Moving your finger beyond an element's
 * bounds should trigger deactivation, but moving the same finger back within an
 * element's bounds should trigger reactivation.
 *
 * In order to use `Pressability`, do the following:
 *
 * 1. Instantiate `Pressability` and store it on your component's state.
 *
 *    state = {
 *      pressability: new Pressability({
 *        // ...
 *      }),
 *    };
 *
 * 2. Choose the rendered component who should collect the press events. On that
 *    element, spread `pressability.getEventHandlers()` into its props.
 *
 *    return (
 *      <View {...this.state.pressability.getEventHandlers()} />
 *    );
 *
 * 3. Reset `Pressability` when your component unmounts.
 *
 *    componentWillUnmount() {
 *      this.state.pressability.reset();
 *    }
 *
 * ==================== Pressability Implementation Details ====================
 *
 * `Pressability` only assumes that there exists a `HitRect` node. The `PressRect`
 * is an abstract box that is extended beyond the `HitRect`.
 *
 * # Geometry
 *
 *  ┌────────────────────────┐
 *  │  ┌──────────────────┐  │ - Presses start anywhere within `HitRect`, which
 *  │  │  ┌────────────┐  │  │   is expanded via the prop `getHitSlop`.
 *  │  │  │ VisualRect │  │  │
 *  │  │  └────────────┘  │  │ - When pressed down for sufficient amount of time
 *  │  │    HitRect       │  │   before letting up, `VisualRect` activates for
 *  │  └──────────────────┘  │   as long as the press stays within `PressRect`.
 *  │       PressRect    o   │
 *  └────────────────────│───┘
 *          Out Region   └────── `PressRect`, which is expanded via the prop
 *                               `getPressRectOffset`, allows presses to move
 *                               beyond `HitRect` while maintaining activation
 *                               and being eligible for a "press".
 *
 * # State Machine
 *
 * ┌───────────────┐ ◀──── RESPONDER_RELEASE
 * │ NOT_RESPONDER │
 * └───┬───────────┘ ◀──── RESPONDER_TERMINATED
 *     │
 *     │ RESPONDER_GRANT (HitRect)
 *     │
 *     ▼
 * ┌─────────────────────┐          ┌───────────────────┐              ┌───────────────────┐
 * │ RESPONDER_INACTIVE_ │  DELAY   │ RESPONDER_ACTIVE_ │  T + DELAY   │ RESPONDER_ACTIVE_ │
 * │ PRESS_IN            ├────────▶ │ PRESS_IN          ├────────────▶ │ LONG_PRESS_IN     │
 * └─┬───────────────────┘          └─┬─────────────────┘              └─┬─────────────────┘
 *   │           ▲                    │           ▲                      │           ▲
 *   │LEAVE_     │                    │LEAVE_     │                      │LEAVE_     │
 *   │PRESS_RECT │ENTER_              │PRESS_RECT │ENTER_                │PRESS_RECT │ENTER_
 *   │           │PRESS_RECT          │           │PRESS_RECT            │           │PRESS_RECT
 *   ▼           │                    ▼           │                      ▼           │
 * ┌─────────────┴───────┐          ┌─────────────┴─────┐              ┌─────────────┴─────┐
 * │ RESPONDER_INACTIVE_ │  DELAY   │ RESPONDER_ACTIVE_ │              │ RESPONDER_ACTIVE_ │
 * │ PRESS_OUT           ├────────▶ │ PRESS_OUT         │              │ LONG_PRESS_OUT    │
 * └─────────────────────┘          └───────────────────┘              └───────────────────┘
 *
 * T + DELAY => LONG_PRESS_DELAY + DELAY
 *
 * Not drawn are the side effects of each transition. The most important side
 * effect is the invocation of `onPress` and `onLongPress` that occur when a
 * responder is release while in the "press in" states.
 */
export default class Pressability {
    _config: PressabilityConfig;
    _eventHandlers: EventHandlers | null | undefined;
    _hoverInDelayTimeout: TimeoutID | null | undefined;
    _hoverOutDelayTimeout: TimeoutID | null | undefined;
    _isHovered: boolean;
    _longPressDelayTimeout: TimeoutID | null | undefined;
    _pressDelayTimeout: TimeoutID | null | undefined;
    _pressOutDelayTimeout: TimeoutID | null | undefined;
    _responderID: (number | null | undefined) | React.ElementRef<HostComponent<unknown>>;
    _responderRegion: $ReadOnly<{
        bottom: number;
        left: number;
        right: number;
        top: number;
    }> | null | undefined;
    _touchActivatePosition: $ReadOnly<{
        pageX: number;
        pageY: number;
    }> | null | undefined;
    _touchState: TouchState;
    constructor(config: PressabilityConfig);
    /**
     * Resets any pending timers. This should be called on unmount.
     */
    reset(): void;
    /**
     * Returns a set of props to spread into the interactive element.
     */
    getEventHandlers(): EventHandlers;
    _createEventHandlers(): EventHandlers;
    /**
     * Receives a state machine signal, performs side effects of the transition
     * and stores the new state. Validates the transition as well.
     */
    _receiveSignal(signal: TouchSignal, event: PressEvent): void;
    /**
     * Performs a transition between touchable states and identify any activations
     * or deactivations (and callback invocations).
     */
    _performTransitionSideEffects(prevState: TouchState, nextState: TouchState, signal: TouchSignal, event: PressEvent): void;
    _activate(event: PressEvent): void;
    _deactivate(event: PressEvent): void;
    _measureResponderRegion(): void;
    _measureCallback: (left: any, top: any, width: any, height: any, pageX: any, pageY: any) => void;
    _isTouchWithinResponderRegion(touch: $PropertyType<PressEvent, "nativeEvent">, responderRegion: $ReadOnly<{
        bottom: number;
        left: number;
        right: number;
        top: number;
    }>): boolean;
    _handleLongPress(event: PressEvent): void;
    _shouldLongPressCancelPress(): boolean;
    _cancelHoverInDelayTimeout(): void;
    _cancelHoverOutDelayTimeout(): void;
    _cancelLongPressDelayTimeout(): void;
    _cancelPressDelayTimeout(): void;
    _cancelPressOutDelayTimeout(): void;
}
export {};
