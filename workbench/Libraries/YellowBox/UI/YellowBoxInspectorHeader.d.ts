import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import YellowBoxWarning from "../Data/YellowBoxWarning";
declare type Props = UniqueBranding & Readonly<{
    onSelectIndex: ((selectedIndex: number) => void);
    selectedIndex: number;
    warnings: ReadonlyArray<YellowBoxWarning>;
}>;
declare const YellowBoxInspectorHeader: (props: Props) => React.ReactNode;
export default YellowBoxInspectorHeader;
