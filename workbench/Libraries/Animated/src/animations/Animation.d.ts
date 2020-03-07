import AnimatedValue from "../nodes/AnimatedValue";

type EndResult = {finished: boolean;};
type EndCallback = ((result: EndResult) => void);

type AnimationConfig = {
  isInteraction?: boolean;
  useNativeDriver: boolean;
  onComplete?: EndCallback | null | undefined;
  iterations?: number;
};

declare class Animation {
  __active: boolean;
  __isInteraction: boolean;
  __nativeId: number;
  __onEnd: EndCallback | null | undefined;
  __iterations: number;
  start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
  stop(): void;
  __getNativeAnimationConfig(): any;
  // Helper function for subclasses to make sure onEnd is only called once.
  __debouncedOnEnd(result: EndResult): void;
  __startNativeAnimation(animatedValue: AnimatedValue): void;
}
export { EndResult };
export { EndCallback };

export { AnimationConfig };

declare module.exports: typeof Animation