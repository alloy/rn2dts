const React = require("react");

type AnimatedComponentType<Props extends {
  readonly [key: string]: unknown;
}, Instance> = React.AbstractComponent<$ObjMap<Props, (() => any)>, Instance>;

declare function createAnimatedComponent<Props extends {
  readonly [key: string]: unknown;
}, Instance>(Component: React.AbstractComponent<Props, Instance>): AnimatedComponentType<Props, Instance>;
export { AnimatedComponentType };

declare module.exports: typeof createAnimatedComponent