import { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly show: (() => void);
    readonly hide: (() => void);
}
declare const _default: Spec | null | undefined;
export default _default;
