import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
import { Stack } from "../Data/LogBoxSymbolication";
import LogBoxLog from "../Data/LogBoxLog";
declare type Props = UniqueBranding & Readonly<{
    log: LogBoxLog;
    onRetry: (() => void);
}>;
export declare function getCollapseMessage(stackFrames: Stack, collapsed: boolean): string;
declare function LogBoxInspectorStackFrames(props: Props): React.ReactNode;
export default LogBoxInspectorStackFrames;
