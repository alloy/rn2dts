declare class AnimatedNode {
    constructor();
    /**
     * Adds an asynchronous listener to the value so you can observe updates from
     * animations.  This is useful because there is no way to
     * synchronously read the value because it might be driven natively.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#addlistener
     */
    addListener(callback: ((value: any) => unknown)): string;
    /**
     * Unregister a listener. The `id` param shall match the identifier
     * previously returned by `addListener()`.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#removelistener
     */
    removeListener(id: string): void;
    /**
     * Remove all registered listeners.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#removealllisteners
     */
    removeAllListeners(): void;
    hasListeners(): boolean;
    toJSON(): any;
}
export default AnimatedNode;
