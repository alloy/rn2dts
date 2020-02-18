import AnimatedNode from './AnimatedNode';
declare class AnimatedProps extends AnimatedNode {
    constructor(props: any, callback: (() => void));
    update(): void;
    setNativeView(animatedView: any): void;
}
export default AnimatedProps;
