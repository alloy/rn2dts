declare var Vibration: {

  /**
     * Trigger a vibration with specified `pattern`.
     *
     * See https://reactnative.dev/docs/vibration.html#vibrate
     */
  vibrate: ((pattern?: number | Array<number>, repeat?: boolean) => void);

  /**
     * Stop vibration
     *
     * See https://reactnative.dev/docs/vibration.html#cancel
     */
  cancel: (() => void);
};

declare module.exports: typeof Vibration