import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly captureHeap: ((path: string) => void);
    readonly captureComplete: ((path: string, error: string | null | undefined) => void);
}
declare const _default: Spec | null | undefined;
export default _default;
