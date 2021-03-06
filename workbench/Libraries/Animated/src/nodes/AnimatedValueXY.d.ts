import AnimatedValue from './AnimatedValue';
import AnimatedWithChildren from './AnimatedWithChildren';
declare type ValueXYListenerCallback = ((value: {
    x: number;
    y: number;
}) => unknown);
/**
 * 2D Value for driving 2D animations, such as pan gestures. Almost identical
 * API to normal `Animated.Value`, but multiplexed.
 *
 * See http://facebook.github.io/react-native/docs/animatedvaluexy.html
 */
declare class AnimatedValueXY extends AnimatedWithChildren {
    x: AnimatedValue;
    y: AnimatedValue;
    constructor(valueIn?: {
        readonly x: number | AnimatedValue;
        readonly y: number | AnimatedValue;
    } | null | undefined);
    /**
     * Directly set the value. This will stop any animations running on the value
     * and update all the bound properties.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#setvalue
     */
    setValue(value: {
        x: number;
        y: number;
    }): void;
    /**
     * Sets an offset that is applied on top of whatever value is set, whether
     * via `setValue`, an animation, or `Animated.event`. Useful for compensating
     * things like the start of a pan gesture.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#setoffset
     */
    setOffset(offset: {
        x: number;
        y: number;
    }): void;
    /**
     * Merges the offset value into the base value and resets the offset to zero.
     * The final output of the value is unchanged.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#flattenoffset
     */
    flattenOffset(): void;
    /**
     * Sets the offset value to the base value, and resets the base value to
     * zero. The final output of the value is unchanged.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#extractoffset
     */
    extractOffset(): void;
    /**
     * Stops any animation and resets the value to its original.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#resetanimation
     */
    resetAnimation(callback?: ((value: {
        x: number;
        y: number;
    }) => void)): void;
    /**
     * Stops any running animation or tracking. `callback` is invoked with the
     * final value after stopping the animation, which is useful for updating
     * state to match the animation position with layout.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#stopanimation
     */
    stopAnimation(callback?: ((value: {
        x: number;
        y: number;
    }) => void)): void;
    /**
     * Adds an asynchronous listener to the value so you can observe updates from
     * animations.  This is useful because there is no way to synchronously read
     * the value because it might be driven natively.
     *
     * Returns a string that serves as an identifier for the listener.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#addlistener
     */
    addListener(callback: ValueXYListenerCallback): string;
    /**
     * Unregister a listener. The `id` param shall match the identifier
     * previously returned by `addListener()`.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#removelistener
     */
    removeListener(id: string): void;
    /**
     * Remove all registered listeners.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#removealllisteners
     */
    removeAllListeners(): void;
    /**
     * Converts `{x, y}` into `{left, top}` for use in style.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#getlayout
     */
    getLayout(): {
        [key: string]: AnimatedValue;
    };
    /**
     * Converts `{x, y}` into a useable translation transform.
     *
     * See http://facebook.github.io/react-native/docs/animatedvaluexy.html#gettranslatetransform
     */
    getTranslateTransform(): Array<{
        [key: string]: AnimatedValue;
    }>;
}
export default AnimatedValueXY;
