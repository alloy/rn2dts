import { UniqueBranding } from "flow-builtin-types";
type GeneratedViewConfig = {
  uiViewClassName: string;
  bubblingEventTypes?: UniqueBranding & Readonly<{
    [eventName: string]: UniqueBranding & Readonly<{
      phasedRegistrationNames: UniqueBranding & Readonly<{captured: string;bubbled: string;}>;
    }>;
  }>;
  directEventTypes?: UniqueBranding & Readonly<{
    [eventName: string]: UniqueBranding & Readonly<{registrationName: string;}>;
  }>;
  validAttributes?: {
    [propName: string]: true | (UniqueBranding & Readonly<{
      diff?: (<T>(arg1: any, arg2: any) => boolean);
      process?: ((arg1: any) => any);
    }>);
  };

};

declare function registerGeneratedViewConfig(componentName: string, viewConfig: GeneratedViewConfig): void;
export { GeneratedViewConfig };

declare module.exports: typeof registerGeneratedViewConfig