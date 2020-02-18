import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
import { PressEvent } from "../../Types/CoreEventTypes";
declare type Props = UniqueBranding & Readonly<{
    onPress?: ((event: PressEvent) => void) | null | undefined;
    status: "COMPLETE" | "FAILED" | "NONE" | "PENDING";
}>;
declare function LogBoxInspectorSourceMapStatus(props: Props): React.ReactNode;
export default LogBoxInspectorSourceMapStatus;
