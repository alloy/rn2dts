import Blob from '../Blob/Blob';
declare type ArrayBufferView = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | DataView;
declare type BinaryType = "blob" | "arraybuffer";
declare const WebSocket_base: any;
/**
 * Browser-compatible WebSockets implementation.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * See https://github.com/websockets/ws
 */
declare class WebSocket extends WebSocket_base {
    static CONNECTING: number;
    static OPEN: number;
    static CLOSING: number;
    static CLOSED: number;
    CONNECTING: number;
    OPEN: number;
    CLOSING: number;
    CLOSED: number;
    onclose: ((...args: any) => any) | null | undefined;
    onerror: ((...args: any) => any) | null | undefined;
    onmessage: ((...args: any) => any) | null | undefined;
    onopen: ((...args: any) => any) | null | undefined;
    bufferedAmount: number;
    extension: string | null | undefined;
    protocol: string | null | undefined;
    readyState: number;
    url: string | null | undefined;
    constructor(url: string, protocols: (string | null | undefined) | (Array<string> | null | undefined), options: {
        headers?: {
            origin?: string;
        };
    } | null | undefined);
    get binaryType(): BinaryType | null | undefined;
    set binaryType(binaryType: BinaryType);
    close(code?: number, reason?: string): void;
    send(data: string | ArrayBuffer | ArrayBufferView | Blob): void;
    ping(): void;
}
export default WebSocket;
