import React from 'react';
declare const Touchable: {
    Mixin: {
        componentDidMount: () => void;
        /**
         * Clear all timeouts on unmount
         */
        componentWillUnmount: () => void;
        /**
         * It's prefer that mixins determine state in this way, having the class
         * explicitly mix the state in the one and only `getInitialState` method.
         *
         * @return {object} State object to be placed inside of
         * `this.state.touchable`.
         */
        touchableGetInitialState: () => {
            touchable: {
                responderID: null;
                touchState: void;
            };
        };
        /**
         * Must return true if embedded in a native platform scroll view.
         */
        touchableHandleResponderTerminationRequest: () => any;
        /**
         * Must return true to start the process of `Touchable`.
         */
        touchableHandleStartShouldSetResponder: () => any;
        /**
         * Return true to cancel press on long press.
         */
        touchableLongPressCancelsPress: () => boolean;
        /**
         * Place as callback for a DOM element's `onResponderGrant` event.
         * @param {SyntheticEvent} e Synthetic event from event system.
         *
         */
        touchableHandleResponderGrant: (e: any) => void;
        /**
         * Place as callback for a DOM element's `onResponderRelease` event.
         */
        touchableHandleResponderRelease: (e: any) => void;
        /**
         * Place as callback for a DOM element's `onResponderTerminate` event.
         */
        touchableHandleResponderTerminate: (e: any) => void;
        /**
         * Place as callback for a DOM element's `onResponderMove` event.
         */
        touchableHandleResponderMove: (e: any) => void;
        /**
         * Invoked when the item receives focus. Mixers might override this to
         * visually distinguish the `VisualRect` so that the user knows that it
         * currently has the focus. Most platforms only support a single element being
         * focused at a time, in which case there may have been a previously focused
         * element that was blurred just prior to this. This can be overridden when
         * using `Touchable.Mixin.withoutDefaultFocusAndBlur`.
         */
        touchableHandleFocus: (e: Event) => void;
        /**
         * Invoked when the item loses focus. Mixers might override this to
         * visually distinguish the `VisualRect` so that the user knows that it
         * no longer has focus. Most platforms only support a single element being
         * focused at a time, in which case the focus may have moved to another.
         * This can be overridden when using
         * `Touchable.Mixin.withoutDefaultFocusAndBlur`.
         */
        touchableHandleBlur: (e: Event) => void;
        /**
         * Invoked when the item should be highlighted. Mixers should implement this
         * to visually distinguish the `VisualRect` so that the user knows that
         * releasing a touch will result in a "selection" (analog to click).
         *
         * @abstract
         * touchableHandleActivePressIn: function,
         */
        /**
         * Invoked when the item is "active" (in that it is still eligible to become
         * a "select") but the touch has left the `PressRect`. Usually the mixer will
         * want to unhighlight the `VisualRect`. If the user (while pressing) moves
         * back into the `PressRect` `touchableHandleActivePressIn` will be invoked
         * again and the mixer should probably highlight the `VisualRect` again. This
         * event will not fire on an `touchEnd/mouseUp` event, only move events while
         * the user is depressing the mouse/touch.
         *
         * @abstract
         * touchableHandleActivePressOut: function
         */
        /**
         * Invoked when the item is "selected" - meaning the interaction ended by
         * letting up while the item was either in the state
         * `RESPONDER_ACTIVE_PRESS_IN` or `RESPONDER_INACTIVE_PRESS_IN`.
         *
         * @abstract
         * touchableHandlePress: function
         */
        /**
         * Invoked when the item is long pressed - meaning the interaction ended by
         * letting up while the item was in `RESPONDER_ACTIVE_LONG_PRESS_IN`. If
         * `touchableHandleLongPress` is *not* provided, `touchableHandlePress` will
         * be called as it normally is. If `touchableHandleLongPress` is provided, by
         * default any `touchableHandlePress` callback will not be invoked. To
         * override this default behavior, override `touchableLongPressCancelsPress`
         * to return false. As a result, `touchableHandlePress` will be called when
         * lifting up, even if `touchableHandleLongPress` has also been called.
         *
         * @abstract
         * touchableHandleLongPress: function
         */
        /**
         * Returns the number of millis to wait before triggering a highlight.
         *
         * @abstract
         * touchableGetHighlightDelayMS: function
         */
        /**
         * Returns the amount to extend the `HitRect` into the `PressRect`. Positive
         * numbers mean the size expands outwards.
         *
         * @abstract
         * touchableGetPressRectOffset: function
         */
        /**
         * Measures the `HitRect` node on activation. The Bounding rectangle is with
         * respect to viewport - not page, so adding the `pageXOffset/pageYOffset`
         * should result in points that are in the same coordinate system as an
         * event's `globalX/globalY` data values.
         *
         * - Consider caching this for the lifetime of the component, or possibly
         *   being able to share this cache between any `ScrollMap` view.
         *
         * @sideeffects
         * @private
         */
        _remeasureMetricsOnActivation: () => void;
        _handleQueryLayout: (l: number, t: number, w: number, h: number, globalX: number, globalY: number) => void;
        _handleDelay: (e: any) => void;
        _handleLongDelay: (e: any) => void;
        /**
         * Receives a state machine signal, performs side effects of the transition
         * and stores the new state. Validates the transition as well.
         *
         * @param {Signals} signal State machine signal.
         * @throws Error if invalid state transition or unrecognized signal.
         * @sideeffects
         */
        _receiveSignal: (signal: any, e: any) => void;
        _cancelLongPressDelayTimeout: () => void;
        _isHighlight: (state: any) => boolean;
        _savePressInLocation: (e: any) => void;
        _getDistanceBetweenPoints: (aX: number, aY: number, bX: number, bY: number) => number;
        /**
         * Will perform a transition between touchable states, and identify any
         * highlighting or unhighlighting that must be performed for this particular
         * transition.
         *
         * @param {States} curState Current Touchable state.
         * @param {States} nextState Next Touchable state.
         * @param {Signal} signal Signal that triggered the transition.
         * @param {Event} e Native event.
         * @sideeffects
         */
        _performSideEffectsForTransition: (curState: any, nextState: any, signal: any, e: any) => void;
        _startHighlight: (e: any) => void;
        _endHighlight: (e: any) => void;
        withoutDefaultFocusAndBlur: {};
    };
    TOUCH_TARGET_DEBUG: boolean;
    /**
     * Renders a debugging overlay to visualize touch target with hitSlop (might not work on Android).
     */
    renderDebugView: ({ color, hitSlop }: {
        color: string | number;
        hitSlop: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            top?: number | null | undefined;
            left?: number | null | undefined;
            bottom?: number | null | undefined;
            right?: number | null | undefined;
        }>;
    }) => React.ReactNode;
};
export default Touchable;
