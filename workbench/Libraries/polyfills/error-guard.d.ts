/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 * @polyfill
 */
declare type ErrorHandler = ((error: unknown, isFatal: boolean) => void);
declare type Fn<Args extends ReadonlyArray<unknown>, Return> = ((...args: Args) => Return);
/**
 * The particular require runtime that we are using looks for a global
 * `ErrorUtils` object and if it exists, then it requires modules with the
 * error handler specified via ErrorUtils.setGlobalHandler by calling the
 * require function with applyWithGuard. Since the require module is loaded
 * before any of the modules, this ErrorUtils must be defined (and the handler
 * set) globally before requiring anything.
 */
declare const ErrorUtils: {
    setGlobalHandler(fun: ErrorHandler): void;
    getGlobalHandler(): ErrorHandler;
    reportError(error: unknown): void;
    reportFatalError(error: unknown): void;
    applyWithGuard<TArgs extends readonly unknown[], TOut>(fun: Fn<TArgs, TOut>, context?: unknown, args?: TArgs | null | undefined, unused_onError?: null | undefined, unused_name?: string | null | undefined): TOut | null | undefined;
    applyWithGuardIfNeeded<TArgs_1 extends readonly unknown[], TOut_1>(fun: Fn<TArgs_1, TOut_1>, context?: unknown, args?: TArgs_1 | null | undefined): TOut_1 | null | undefined;
    inGuard(): boolean;
    guard<TArgs_2 extends readonly unknown[], TOut_2>(fun: Fn<TArgs_2, TOut_2>, name?: string | null | undefined, context?: unknown): ((...args: TArgs_2) => TOut_2 | null | undefined) | null | undefined;
};
export declare type ErrorUtilsT = typeof ErrorUtils;
export {};
