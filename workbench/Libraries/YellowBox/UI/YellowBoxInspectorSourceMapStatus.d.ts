import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { PressEvent } from "../../Types/CoreEventTypes";
declare type Props = UniqueBranding & Readonly<{
    onPress?: ((event: PressEvent) => void) | null | undefined;
    status: "COMPLETE" | "FAILED" | "NONE" | "PENDING";
}>;
declare class YellowBoxInspectorSourceMapStatus extends React.Component<Props> {
}
export default YellowBoxInspectorSourceMapStatus;
