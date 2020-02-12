import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly setExtraData: ((extraData: any, identifier: string) => void);
    readonly dismiss: (() => void);
}
declare const _default: Spec | null | undefined;
export default _default;
