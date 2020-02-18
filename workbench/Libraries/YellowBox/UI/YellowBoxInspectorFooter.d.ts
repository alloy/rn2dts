import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
declare type Props = UniqueBranding & Readonly<{
    onDismiss: (() => void);
    onMinimize: (() => void);
}>;
declare const YellowBoxInspectorFooter: (props: Props) => React.ReactNode;
export default YellowBoxInspectorFooter;
