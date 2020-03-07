type BlobCollector = {};

type BlobData = {
  blobId: string;
  offset: number;
  size: number;
  name?: string;
  type?: string;
  lastModified?: number;
  __collector?: BlobCollector | null | undefined;

};

type BlobOptions = {type: string;lastModified: number;};
export { BlobCollector };

export { BlobData };

export { BlobOptions };