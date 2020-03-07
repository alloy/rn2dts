const AnimatedNode = require("./AnimatedNode");

declare class AnimatedWithChildren extends AnimatedNode {
  constructor(): void;
  __makeNative(): void;
  __addChild(child: AnimatedNode): void;
  __removeChild(child: AnimatedNode): void;
  __getChildren(): Array<AnimatedNode>;
  __callListeners(value: number): void;
}

declare module.exports: typeof AnimatedWithChildren