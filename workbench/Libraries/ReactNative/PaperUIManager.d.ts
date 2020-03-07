import NativeUIManager from "./NativeUIManager";

declare var UIManagerJS: typeof NativeUIManager & {
  getConstants(): any;
  getViewManagerConfig: ((viewManagerName: string) => any);
};

declare module.exports: typeof UIManagerJS