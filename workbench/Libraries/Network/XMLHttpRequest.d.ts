type NativeResponseType = "base64" | "blob" | "text";
type ResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
type Response = (any | null | undefined) | string;

type XHRInterceptor = {
  requestSent(id: number, url: string, method: string, headers: any): void;
  responseReceived(id: number, url: string, status: number, headers: any): void;
  dataReceived(id: number, data: string): void;
  loadingFinished(id: number, encodedDataLength: number): void;
  loadingFailed(id: number, error: string): void;

};

declare class XMLHttpRequestEventTarget extends $TEMPORARY$Super$FlowFixMe {
  onload: ((...args: any) => any) | null | undefined;
  onloadstart: ((...args: any) => any) | null | undefined;
  onprogress: ((...args: any) => any) | null | undefined;
  ontimeout: ((...args: any) => any) | null | undefined;
  onerror: ((...args: any) => any) | null | undefined;
  onabort: ((...args: any) => any) | null | undefined;
  onloadend: ((...args: any) => any) | null | undefined;
}

declare class XMLHttpRequest extends $TEMPORARY$Super$FlowFixMe {
  UNSENT: number;
  OPENED: number;
  HEADERS_RECEIVED: number;
  LOADING: number;
  DONE: number;
  UNSENT: number;
  OPENED: number;
  HEADERS_RECEIVED: number;
  LOADING: number;
  DONE: number;
  // EventTarget automatically initializes these to `null`.
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
  setInterceptor(interceptor: XHRInterceptor | null | undefined): void;
  constructor(): void;
  responseType(): ResponseType;
  responseType(responseType: ResponseType): void;
  responseText(): string;
  response(): Response;
  // exposed for testing
  __didCreateRequest(requestId: number): void;
  // exposed for testing
  __didUploadProgress(requestId: number, progress: number, total: number): void;
  __didReceiveResponse(requestId: number, status: number, responseHeaders: any | null | undefined, responseURL: string | null | undefined): void;
  __didReceiveData(requestId: number, response: string): void;
  __didReceiveIncrementalData(requestId: number, responseText: string, progress: number, total: number): void;
  __didReceiveDataProgress(requestId: number, loaded: number, total: number): void;
  // exposed for testing
  __didCompleteResponse(requestId: number, error: string, timeOutError: boolean): void;
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

  /* global EventListener */
  addEventListener(type: string, listener: EventListener): void;
}
export { NativeResponseType };
export { ResponseType };
export { Response };

declare module.exports: typeof XMLHttpRequest