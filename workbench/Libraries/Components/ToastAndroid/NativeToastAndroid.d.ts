import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: (() => {
        SHORT: number;
        LONG: number;
        TOP: number;
        BOTTOM: number;
        CENTER: number;
    });
    readonly show: ((message: string, duration: number) => void);
    readonly showWithGravity: ((message: string, duration: number, gravity: number) => void);
    readonly showWithGravityAndOffset: ((message: string, duration: number, gravity: number, xOffset: number, yOffset: number) => void);
}
declare const _default: Spec;
export default _default;
