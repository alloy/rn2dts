import React from 'react';
import { $ReadOnly } from "utility-types";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { PressEvent } from "../Types/CoreEventTypes";
declare type Inspected = $ReadOnly<{
    frame?: any;
    style?: ViewStyleProp;
}>;
declare type Props = $ReadOnly<{
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
