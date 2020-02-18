import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
import LogBoxLog, { LogLevel } from "../Data/LogBoxLog";
declare type Props = UniqueBranding & Readonly<{
    onDismiss: (() => void);
    onChangeSelectedIndex: ((index: number) => void);
    onMinimize: (() => void);
    logs: ReadonlyArray<LogBoxLog>;
    selectedIndex: number;
    fatalType?: LogLevel | null | undefined;
}>;
declare function LogBoxInspector(props: Props): React.ReactNode;
export default LogBoxInspector;
