import * as React from "react";
interface NativeCommands {
    readonly openDrawer: ((viewRef: React.Ref<"AndroidDrawerLayout">) => void);
    readonly closeDrawer: ((viewRef: React.Ref<"AndroidDrawerLayout">) => void);
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
