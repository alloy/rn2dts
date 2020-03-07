const AnimatedWithChildren = require("./AnimatedWithChildren");

declare class AnimatedTransform extends AnimatedWithChildren {
  constructor(transforms: ReadonlyArray<any>): void;
  __makeNative(): void;
  __getValue(): ReadonlyArray<any>;
  __getAnimatedValue(): ReadonlyArray<any>;
  __attach(): void;
  __detach(): void;
  __getNativeConfig(): any;
}

declare module.exports: typeof AnimatedTransform