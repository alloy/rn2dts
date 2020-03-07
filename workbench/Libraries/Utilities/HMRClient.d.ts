type LogLevel = "trace" | "info" | "warn" | "error" | "log" | "group" | "groupCollapsed" | "groupEnd" | "debug";

type HMRClientNativeInterface = {
  enable(): void;
  disable(): void;
  registerBundle(requestUrl: string): void;
  log(level: LogLevel, data: Array<unknown>): void;
  setup(platform: string, bundleEntry: string, host: string, port: number | string, isEnabled: boolean): void;
};

declare var HMRClient: HMRClientNativeInterface;
export { HMRClientNativeInterface };

declare module.exports: typeof HMRClient