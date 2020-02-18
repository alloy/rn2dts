import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { PressEvent } from "../../Types/CoreEventTypes";
import { StackFrame } from "../../Core/NativeExceptionsManager";
declare type Props = UniqueBranding & Readonly<{
    frame: StackFrame;
    onPress?: ((event: PressEvent) => void) | null | undefined;
}>;
declare const YellowBoxInspectorStackFrame: (props: Props) => React.ReactNode;
export default YellowBoxInspectorStackFrame;
