import { Args } from "./NativeAlertManager";

declare module.exports: {
  alertWithArgs(args: Args, callback: ((id: number, value: string) => void)): void;
}