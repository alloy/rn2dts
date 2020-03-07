type ErrorHandler = ((error: unknown, isFatal: boolean) => void);
type Fn<Args, Return> = ((...: Args) => Return);

declare var ErrorUtils: {
  setGlobalHandler(fun: ErrorHandler): void;
  getGlobalHandler(): ErrorHandler;
  reportError(error: unknown): void;
  reportFatalError(error: unknown): void;
  applyWithGuard<TArgs extends ReadonlyArray<unknown>, TOut>(fun: Fn<TArgs, TOut>, context?: unknown | null | undefined, args?: TArgs | null | undefined, // Unused, but some code synced from www sets it to null.
  unused_onError?: null, // Some callers pass a name here, which we ignore.
  unused_name?: string | null | undefined): TOut | null | undefined;
  applyWithGuardIfNeeded<TArgs extends ReadonlyArray<unknown>, TOut>(fun: Fn<TArgs, TOut>, context?: unknown | null | undefined, args?: TArgs | null | undefined): TOut | null | undefined;
  inGuard(): boolean;
  guard<TArgs extends ReadonlyArray<unknown>, TOut>(fun: Fn<TArgs, TOut>, name?: string | null | undefined, context?: unknown | null | undefined): ((...: TArgs) => TOut | null | undefined) | null | undefined;
};

type ErrorUtilsT = typeof ErrorUtils;
export { ErrorUtilsT };