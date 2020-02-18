import React from 'react';
export declare type ReactRenderer = {
    getInspectorDataForViewTag: ((viewTag: number) => any);
};
declare class Inspector extends React.Component<{
    inspectedViewTag: number | null | undefined;
    onRequestRerenderApp: ((callback: ((tag: number | null | undefined) => void)) => void);
}, {
    devtoolsAgent: any | null | undefined;
    hierarchy: any;
    panelPos: string;
    inspecting: boolean;
    selection: number | null | undefined;
    perfing: boolean;
    inspected: any;
    inspectedViewTag: any;
    networking: boolean;
}> {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    UNSAFE_componentWillReceiveProps(newProps: any): void;
    setSelection(i: number): void;
    onTouchViewTag(touchedViewTag: number, frame: any, pointerY: number): void;
    setPerfing(val: boolean): void;
    setInspecting(val: boolean): void;
    setTouchTargeting(val: boolean): void;
    setNetworking(val: boolean): void;
    render(): React.ReactNode;
}
export default Inspector;
