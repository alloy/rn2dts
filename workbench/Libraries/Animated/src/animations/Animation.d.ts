import AnimatedValue from "../nodes/AnimatedValue";
export declare type EndResult = {
    finished: boolean;
};
export declare type EndCallback = ((result: EndResult) => void);
export declare type AnimationConfig = {
    isInteraction?: boolean;
    useNativeDriver: boolean;
    onComplete?: EndCallback | null | undefined;
    iterations?: number;
};
declare class Animation {
    start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
    stop(): void;
}
export default Animation;
