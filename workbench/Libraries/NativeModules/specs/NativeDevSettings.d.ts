import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly reload: (() => void);
    readonly setHotLoadingEnabled: ((isHotLoadingEnabled: boolean) => void);
    readonly setIsDebuggingRemotely: ((isDebuggingRemotelyEnabled: boolean) => void);
    readonly setLiveReloadEnabled: ((isLiveReloadEnabled: boolean) => void);
    readonly setProfilingEnabled: ((isProfilingEnabled: boolean) => void);
    readonly toggleElementInspector: (() => void);
    readonly setIsShakeToShowDevMenuEnabled: ((enabled: boolean) => void);
}
declare const _default: Spec;
export default _default;
