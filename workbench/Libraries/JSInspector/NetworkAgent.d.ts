import InspectorAgent from './InspectorAgent';
import { $TEMPORARY$string } from "flow-builtin-types";
import EventSender from "./InspectorAgent";
declare type RequestId = string;
declare class Interceptor {
    _agent: NetworkAgent;
    _requests: Map<string, string>;
    constructor(agent: NetworkAgent);
    getData(requestId: string): string | null | undefined;
    requestSent(id: number, url: string, method: string, headers: any): void;
    responseReceived(id: number, url: string, status: number, headers: any): void;
    dataReceived(id: number, data: string): void;
    loadingFinished(id: number, encodedDataLength: number): void;
    loadingFailed(id: number, error: string): void;
    _getMimeType(headers: any): string;
}
declare type EnableArgs = {
    maxResourceBufferSize?: number;
    maxTotalBufferSize?: number;
};
declare class NetworkAgent extends InspectorAgent {
    static DOMAIN: $TEMPORARY$string<"Network">;
    _sendEvent: EventSender;
    _interceptor: Interceptor | null | undefined;
    enable({ maxResourceBufferSize, maxTotalBufferSize }: EnableArgs): void;
    disable(): void;
    getResponseBody({ requestId }: {
        requestId: RequestId;
    }): {
        body: string | null | undefined;
        base64Encoded: boolean;
    };
    interceptor(): Interceptor;
}
export default NetworkAgent;
