import { UniqueBranding } from "flow-builtin-types";
import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly abortRequest: ((requestId: number) => void);
    readonly getConstants: (() => {});
    readonly getSize: ((uri: string) => Promise<UniqueBranding & Readonly<{
        width: number;
        height: number;
    }>>);
    readonly getSizeWithHeaders: ((uri: string, headers: any) => Promise<{
        width: number;
        height: number;
    }>);
    readonly prefetchImage: ((uri: string, requestId: number) => Promise<boolean>);
    readonly queryCache: ((uris: Array<string>) => Promise<any>);
}
declare const _default: Spec;
export default _default;
