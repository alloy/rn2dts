const Blob = require("./Blob");

import { BlobData } from "./BlobTypes";
import { BlobOptions } from "./BlobTypes";

declare class BlobManager {
  isAvailable: boolean;
  createFromParts(parts: Array<Blob | string>, options?: BlobOptions): Blob;
  createFromOptions(options: BlobData): Blob;
  release(blobId: string): void;
  addNetworkingHandler(): void;
  addWebSocketHandler(socketId: number): void;
  removeWebSocketHandler(socketId: number): void;
  sendOverSocket(blob: Blob, socketId: number): void;
}

declare module.exports: typeof BlobManager