type ExtraData = {
  [key: string]: string;
};
type SourceCallback = (() => string);
type DebugData = {extras: ExtraData;files: ExtraData;};

declare class BugReporting {
  addSource(key: string, callback: SourceCallback): {
    remove: (() => void);

  };
  addFileSource(key: string, callback: SourceCallback): {
    remove: (() => void);

  };
  collectExtraData(): DebugData;
}

declare module.exports: typeof BugReporting