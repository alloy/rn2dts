import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import YellowBoxWarning from "../Data/YellowBoxWarning";
declare type Props = UniqueBranding & Readonly<{
    onDismiss: (() => void);
    onMinimize: (() => void);
    warnings: ReadonlyArray<YellowBoxWarning>;
}>;
declare class YellowBoxInspector extends React.Component<Props> {
}
export default YellowBoxInspector;
