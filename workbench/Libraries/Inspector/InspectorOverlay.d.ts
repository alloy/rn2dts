import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { PressEvent } from "../Types/CoreEventTypes";
declare type Inspected = UniqueBranding & Readonly<{
    frame?: any;
    style?: ViewStyleProp;
}>;
declare type Props = UniqueBranding & Readonly<{
    inspected?: Inspected;
    inspectedViewTag?: number | null | undefined;
    onTouchViewTag: ((tag: number, frame: any, pointerY: number) => unknown);
}>;
declare class InspectorOverlay extends React.Component<Props> {
    findViewForTouchEvent: ((e: PressEvent) => void);
    shouldSetResponser: ((e: PressEvent) => boolean);
    render(): React.ReactNode;
}
export default InspectorOverlay;
