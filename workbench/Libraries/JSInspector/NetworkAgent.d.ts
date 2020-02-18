import InspectorAgent from './InspectorAgent';
import { $TEMPORARY$string } from "flow-builtin-types";
declare type RequestId = string;
declare class Interceptor {
    constructor(agent: NetworkAgent);
    getData(requestId: string): string | null | undefined;
    requestSent(id: number, url: string, method: string, headers: any): void;
    responseReceived(id: number, url: string, status: number, headers: any): void;
    dataReceived(id: number, data: string): void;
    loadingFinished(id: number, encodedDataLength: number): void;
    loadingFailed(id: number, error: string): void;
}
declare type EnableArgs = {
    maxResourceBufferSize?: number;
    maxTotalBufferSize?: number;
};
declare class NetworkAgent extends InspectorAgent {
    static DOMAIN: $TEMPORARY$string<"Network">;
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
