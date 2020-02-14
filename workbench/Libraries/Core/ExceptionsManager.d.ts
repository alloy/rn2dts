declare class SyntheticError extends Error {
    name: string;
}
/**
 * Logs exceptions to the (native) console and displays them
 */
declare function handleException(e: unknown, isFatal: boolean): void;
/**
 * Shows a redbox with stacktrace for all console.error messages.  Disable by
 * setting `console.reportErrorsAsExceptions = false;` in your app.
 */
declare function installConsoleErrorReporter(): void;
declare const _default: {
    handleException: typeof handleException;
    installConsoleErrorReporter: typeof installConsoleErrorReporter;
    SyntheticError: typeof SyntheticError;
};
export default _default;
