import { UniqueBranding } from "flow-builtin-types";
declare class Dimensions {
  get(dim: string): any;
  set(dims: UniqueBranding & Readonly<{
    [key: string]: any;
  }>): void;
  addEventListener(type: "change", handler: ((...args: any) => any)): void;
  removeEventListener(type: "change", handler: ((...args: any) => any)): void;
}

declare module.exports: typeof Dimensions