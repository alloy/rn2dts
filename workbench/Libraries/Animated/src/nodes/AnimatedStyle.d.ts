const AnimatedWithChildren = require("./AnimatedWithChildren");

declare class AnimatedStyle extends AnimatedWithChildren {
  constructor(style: any): void;
  __getValue(): any;
  __getAnimatedValue(): any;
  __attach(): void;
  __detach(): void;
  __makeNative(): void;
  __getNativeConfig(): any;
}

declare module.exports: typeof AnimatedStyle