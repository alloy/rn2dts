import { UniqueBranding } from "flow-builtin-types";
import { ReactNativeBaseComponentViewConfig } from "./ReactNativeTypes";
import { ViewConfigGetter } from "./ReactNativeTypes";

declare var customBubblingEventTypes: {
  [eventName: string]: UniqueBranding & Readonly<{
    phasedRegistrationNames: UniqueBranding & Readonly<{captured: string;bubbled: string;}>;
  }>;
};
declare var customDirectEventTypes: {
  [eventName: string]: UniqueBranding & Readonly<{registrationName: string;}>;
};

declare module.exports: {
  get: ((name: string) => ReactNativeBaseComponentViewConfig<>);
  register: ((name: string, callback: ViewConfigGetter) => string);
  customDirectEventTypes: typeof customDirectEventTypes;
  customBubblingEventTypes: typeof customBubblingEventTypes;
}