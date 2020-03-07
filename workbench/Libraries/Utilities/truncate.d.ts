type truncateOptions = {
  breakOnWords: boolean;
  minDelta: number;
  elipsis: string;

};

declare var truncate: ((str: string | null | undefined, maxChars: number, options?: truncateOptions) => string | null | undefined);

declare module.exports: typeof truncate