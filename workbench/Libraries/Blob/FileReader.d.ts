const Blob = require("./Blob");

type ReadyState = 0 | 1 | 2;

type ReaderResult = string | ArrayBuffer;

declare class FileReader extends $TEMPORARY$Super$FlowFixMe {
  EMPTY: number;
  LOADING: number;
  DONE: number;
  EMPTY: number;
  LOADING: number;
  DONE: number;
  constructor(): void;
  readAsArrayBuffer(): void;
  readAsDataURL(blob: Blob | null | undefined): void;
  readAsText(blob: Blob | null | undefined, encoding?: string): void;
  abort(): void;
  readyState(): ReadyState;
  error(): Error | null | undefined;
  result(): ReaderResult | null | undefined;
}

declare module.exports: typeof FileReader