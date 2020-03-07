import { Handle } from "./InteractionManager";

declare var InteractionMixin: {
  componentWillUnmount: (() => void);
  _interactionMixinHandles: Array<number>;
  createInteractionHandle: (() => Handle);
  clearInteractionHandle: ((clearHandle: number) => void);

  /**
     * Schedule work for after all interactions have completed.
     *
     * @param {function} callback
     */
  runAfterInteractions: ((callback: ((...args: any) => any)) => void);
};

declare module.exports: typeof InteractionMixin