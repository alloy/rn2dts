import Blob from './Blob';
declare type ReadyState = 0 | 1 | 2;
declare type ReaderResult = string | ArrayBuffer;
declare const FileReader_base: any;
declare class FileReader extends FileReader_base {
    static EMPTY: number;
    static LOADING: number;
    static DONE: number;
    EMPTY: number;
    LOADING: number;
    DONE: number;
    constructor();
    readAsArrayBuffer(): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
    abort(): void;
    get readyState(): ReadyState;
    get error(): Error | null | undefined;
    get result(): ReaderResult | null | undefined;
}
export default FileReader;
