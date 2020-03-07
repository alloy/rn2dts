import { UniqueBranding } from "flow-builtin-types";
type Type = "spring" | "linear" | "easeInEaseOut" | "easeIn" | "easeOut" | "keyboard";

type Property = "opacity" | "scaleX" | "scaleY" | "scaleXY";

type AnimationConfig = UniqueBranding & Readonly<{
  duration?: number;
  delay?: number;
  springDamping?: number;
  initialVelocity?: number;
  type?: Type;
  property?: Property;
}>;

type LayoutAnimationConfig = UniqueBranding & Readonly<{
  duration: number;
  create?: AnimationConfig;
  update?: AnimationConfig;
  delete?: AnimationConfig;
}>;

declare function configureNext(config: LayoutAnimationConfig, onAnimationDidEnd?: ((...args: any) => any)): void;

declare function create(duration: number, type: Type, property: Property): LayoutAnimationConfig;

declare var Presets: {
  easeInEaseOut: LayoutAnimationConfig;
  linear: LayoutAnimationConfig;
  spring: {
    duration: number;
    create: {type: string;property: string;};
    update: {type: string;springDamping: number;};
    delete: {type: string;property: string;};
  };
};

declare var LayoutAnimation: {

  /**
     * Schedules an animation to happen on the next layout.
     *
     * @param config Specifies animation properties:
     *
     *   - `duration` in milliseconds
     *   - `create`, `AnimationConfig` for animating in new views
     *   - `update`, `AnimationConfig` for animating views that have been updated
     *
     * @param onAnimationDidEnd Called when the animation finished.
     * Only supported on iOS.
     * @param onError Called on error. Only supported on iOS.
     */
  configureNext: typeof configureNext;

  /**
     * Helper for creating a config for `configureNext`.
     */
  create: typeof create;
  Types: $TEMPORARY$Object$freeze<{
    spring: string;
    linear: string;
    easeInEaseOut: string;
    easeIn: string;
    easeOut: string;
    keyboard: string;
  }>;
  Properties: $TEMPORARY$Object$freeze<{opacity: string;scaleX: string;scaleY: string;scaleXY: string;}>;
  checkConfig(...args: Array<unknown>): void;
  Presets: typeof Presets;
  easeInEaseOut: ((onAnimationDidEnd?: any) => void);
  linear: ((onAnimationDidEnd?: any) => void);
  spring: ((onAnimationDidEnd?: any) => void);
};
export { LayoutAnimationConfig };

declare module.exports: typeof LayoutAnimation