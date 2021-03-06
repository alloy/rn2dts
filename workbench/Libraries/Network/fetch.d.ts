declare const _default: {
    fetch: typeof fetch;
    Headers: {
        new (init?: Record<string, string> | Headers | string[][] | undefined): Headers;
        prototype: Headers;
    };
    Request: {
        new (input: RequestInfo, init?: RequestInit | undefined): Request;
        prototype: Request;
    };
    Response: {
        new (body?: string | ArrayBuffer | ArrayBufferView | Blob | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined, init?: ResponseInit | undefined): Response;
        prototype: Response;
        error(): Response;
        redirect(url: string, status?: number | undefined): Response;
    };
};
export default _default;
