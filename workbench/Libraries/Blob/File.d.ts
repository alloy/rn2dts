const Blob = require("./Blob");

import { BlobOptions } from "./BlobTypes";

declare class File extends Blob {

  /**
     * Constructor for JS consumers.
     */
  constructor(parts: Array<Blob | string>, name: string, options?: BlobOptions): void;
  name(): string;
  lastModified(): number;
}

declare module.exports: typeof File