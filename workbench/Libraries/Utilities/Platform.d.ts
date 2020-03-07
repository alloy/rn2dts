type PlatformSelectSpec<D, N, I> = {default?: D;native?: N;ios?: I;};

declare var Platform: {
  __constants: null;
  OS: string;
  Version(): string;
  constants(): {
    forceTouchAvailable: boolean;
    interfaceIdiom: string;
    isTesting: boolean;
    osVersion: string;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: number | null | undefined;
    };
    systemName: string;
  };
  isPad(): boolean;
  isTVOS(): boolean;
  isTV(): boolean;
  isTesting(): boolean;
  select: (<D, N, I>(spec: PlatformSelectSpec<D, N, I>) => D | N | I);
};
export { PlatformSelectSpec };

declare module.exports: typeof Platform