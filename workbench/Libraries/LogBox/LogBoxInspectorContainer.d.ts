import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
import LogBoxLog from "./Data/LogBoxLog";
declare type Props = UniqueBranding & Readonly<{
    logs: ReadonlyArray<LogBoxLog>;
    selectedLogIndex: number;
    isDisabled?: boolean | null | undefined;
}>;
export declare class _LogBoxInspectorContainer extends React.Component<Props> {
    render(): React.ReactNode;
    _handleDismiss: () => void;
    _handleMinimize: () => void;
    _handleSetSelectedLog: (index: number) => void;
}
declare const _default: React.AbstractComponent<{}, unknown>;
export default _default;
