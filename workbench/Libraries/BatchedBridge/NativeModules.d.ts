type ModuleConfig = [string, any | null | undefined
/* constants */
, ReadonlyArray<string> | null | undefined, ReadonlyArray<number> | null | undefined, ReadonlyArray<number> | null | undefined];

type MethodType = "async" | "promise" | "sync";

declare var NativeModules: {
  [moduleName: string]: any;
};
export { ModuleConfig };

export { MethodType };

declare module.exports: typeof NativeModules