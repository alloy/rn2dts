declare const QuickPerformanceLogger: {
    markerStart(markerId: number, instanceKey?: number, timestamp?: number): void;
    markerEnd(markerId: number, actionId: number, instanceKey?: number, timestamp?: number): void;
    markerTag(markerId: number, tag: string, instanceKey?: number): void;
    markerAnnotate(markerId: number, annotationKey: string, annotationValue: string, instanceKey?: number): void;
    markerCancel(markerId: number, instanceKey?: number | undefined): void;
    markerPoint(markerId: number, name: string, instanceKey?: number, timestamp?: number): void;
    currentTimestamp(): number;
};
export default QuickPerformanceLogger;