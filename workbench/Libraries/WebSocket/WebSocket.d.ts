const Blob = require("../Blob/Blob");

type ArrayBufferView = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | DataView;

type BinaryType = "blob" | "arraybuffer";

declare class WebSocket extends $TEMPORARY$Super$FlowFixMe {
  CONNECTING: number;
  OPEN: number;
  CLOSING: number;
  CLOSED: number;
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
  constructor(url: string, protocols: (string | null | undefined) | (Array<string> | null | undefined), options: {headers?: {origin?: string;};} | null | undefined): void;
  binaryType(): BinaryType | null | undefined;
  binaryType(binaryType: BinaryType): void;
  close(code?: number, reason?: string): void;
  send(data: string | ArrayBuffer | ArrayBufferView | Blob): void;
  ping(): void;
}

declare module.exports: typeof WebSocket