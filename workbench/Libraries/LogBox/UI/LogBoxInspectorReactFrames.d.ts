import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
import LogBoxLog from "../Data/LogBoxLog";
declare type Props = UniqueBranding & Readonly<{
    log: LogBoxLog;
}>;
declare function LogBoxInspectorReactFrames(props: Props): React.ReactNode;
export default LogBoxInspectorReactFrames;
