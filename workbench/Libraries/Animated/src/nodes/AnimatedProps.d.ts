const AnimatedNode = require("./AnimatedNode");

declare class AnimatedProps extends AnimatedNode {
  constructor(props: any, callback: (() => void)): void;
  __getValue(): any;
  __getAnimatedValue(): any;
  __attach(): void;
  __detach(): void;
  update(): void;
  __makeNative(): void;
  setNativeView(animatedView: any): void;
  __connectAnimatedView(): void;
  __disconnectAnimatedView(): void;
  __restoreDefaultValues(): void;
  __getNativeConfig(): any;
}

declare module.exports: typeof AnimatedProps