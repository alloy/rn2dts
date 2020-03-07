type FetchSegmentFunction = typeof __fetchSegment;
type GetSegmentFunction = typeof __getSegment;

declare function __fetchSegment(segmentId: number, options: {readonly otaBuildNumber: string | null | undefined;readonly requestedModuleName?: string | null | undefined;}, callback: ((arg0: Error | null | undefined) => void)): void;

declare function __getSegment(segmentId: number, options: {readonly otaBuildNumber: string | null | undefined;readonly requestedModuleName?: string | null | undefined;}, callback: ((arg0: Error | null | undefined, arg1: string | null | undefined) => void)): void;
export { FetchSegmentFunction };
export { GetSegmentFunction };