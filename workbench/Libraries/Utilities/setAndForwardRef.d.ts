import { UniqueBranding } from "flow-builtin-types";
import { ElementRef } from "react";
import { Ref } from "react";

type Args = UniqueBranding & Readonly<{
  getForwardedRef: (() => Ref<any> | null | undefined);
  setLocalRef: ((ref: ElementRef<any>) => unknown);
}>;

declare function setAndForwardRef(arg0: Args): ((ref: ElementRef<any>) => void);

declare module.exports: typeof setAndForwardRef