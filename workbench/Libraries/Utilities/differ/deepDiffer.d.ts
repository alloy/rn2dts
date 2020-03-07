type LogListeners = {
  readonly onDifferentFunctionsIgnored: ((nameOne: string | null | undefined, nameTwo: string | null | undefined) => void);
};

type Options = {readonly unsafelyIgnoreFunctions?: boolean;};

declare function unstable_setLogListeners(listeners: LogListeners | null | undefined): void;

declare var deepDiffer: ((one: any, two: any, maxDepthOrOptions?: Options | number, maybeOptions?: Options) => boolean);

declare module.exports: $TEMPORARY$module$exports$assign<typeof deepDiffer, {unstable_setLogListeners: typeof unstable_setLogListeners;}>