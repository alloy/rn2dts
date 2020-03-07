import { IgnorePattern } from "./Data/LogBoxData";

declare module.exports: {
  ignoreLogs(arg0: ReadonlyArray<IgnorePattern>): void;
  ignoreAllLogs(arg0: boolean | null | undefined): void;
  install(): void;
  uninstall(): void;

}