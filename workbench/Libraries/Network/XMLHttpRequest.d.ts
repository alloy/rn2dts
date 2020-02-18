export declare type NativeResponseType = "base64" | "blob" | "text";
export declare type ResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
export declare type Response = (any | null | undefined) | string;
declare type XHRInterceptor = {
    requestSent(id: number, url: string, method: string, headers: any): void;
    responseReceived(id: number, url: string, status: number, headers: any): void;
    dataReceived(id: number, data: string): void;
    loadingFinished(id: number, encodedDataLength: number): void;
    loadingFailed(id: number, error: string): void;
};
declare const XMLHttpRequestEventTarget_base: any;
declare class XMLHttpRequestEventTarget extends XMLHttpRequestEventTarget_base {
    onload: ((...args: any) => any) | null | undefined;
    onloadstart: ((...args: any) => any) | null | undefined;
    onprogress: ((...args: any) => any) | null | undefined;
    ontimeout: ((...args: any) => any) | null | undefined;
    onerror: ((...args: any) => any) | null | undefined;
    onabort: ((...args: any) => any) | null | undefined;
    onloadend: ((...args: any) => any) | null | undefined;
}
declare const XMLHttpRequest_base: any;
/**
 * Shared base for platform-specific XMLHttpRequest implementations.
 */
declare class XMLHttpRequest extends XMLHttpRequest_base {
    static UNSENT: number;
    static OPENED: number;
    static HEADERS_RECEIVED: number;
    static LOADING: number;
    static DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
    LOADING: number;
    DONE: number;
    onload: ((...args: any) => any) | null | undefined;
    onloadstart: ((...args: any) => any) | null | undefined;
    onprogress: ((...args: any) => any) | null | undefined;
    ontimeout: ((...args: any) => any) | null | undefined;
    onerror: ((...args: any) => any) | null | undefined;
    onabort: ((...args: any) => any) | null | undefined;
    onloadend: ((...args: any) => any) | null | undefined;
    onreadystatechange: ((...args: any) => any) | null | undefined;
    readyState: number;
    responseHeaders: any | null | undefined;
    status: number;
    timeout: number;
    responseURL: string | null | undefined;
    withCredentials: boolean;
    upload: XMLHttpRequestEventTarget;
    static setInterceptor(interceptor: XHRInterceptor | null | undefined): void;
    constructor();
    get responseType(): ResponseType;
    set responseType(responseType: ResponseType);
    get responseText(): string;
    get response(): Response;
    getAllResponseHeaders(): string | null | undefined;
    getResponseHeader(header: string): string | null | undefined;
    setRequestHeader(header: string, value: any): void;
    /**
     * Custom extension for tracking origins of request.
     */
    setTrackingName(trackingName: string): XMLHttpRequest;
    open(method: string, url: string, async: boolean | null | undefined): void;
    send(data: any): void;
    abort(): void;
    setResponseHeaders(responseHeaders: any | null | undefined): void;
    setReadyState(newState: number): void;
    addEventListener(type: string, listener: EventListener): void;
}
export default XMLHttpRequest;
