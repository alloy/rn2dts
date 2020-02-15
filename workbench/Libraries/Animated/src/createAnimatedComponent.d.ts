import React from 'react';
export declare type AnimatedComponentType<Props extends {
    readonly [key: string]: unknown;
}, Instance> = React.AbstractComponent<{
    [K in keyof Props]: ReturnType<(() => any)>;
}, Instance>;
declare function createAnimatedComponent<Props extends {
    readonly [key: string]: unknown;
}, Instance>(Component: React.AbstractComponent<Props, Instance>): AnimatedComponentType<Props, Instance>;
export default createAnimatedComponent;
