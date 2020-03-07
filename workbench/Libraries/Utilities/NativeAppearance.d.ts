import { TurboModule } from "../TurboModule/RCTExport";

type ColorSchemeName = "light" | "dark";

type AppearancePreferences = {
  // TODO: (hramos) T52919652 Use ?ColorSchemeName once codegen supports union
  // types.

  /* 'light' | 'dark' */
  colorScheme?: string | null | undefined;};

interface Spec extends TurboModule {
  readonly getColorScheme: (() => string | null | undefined);
  readonly addListener: ((eventName: string) => void);
  readonly removeListeners: ((count: number) => void);
}
export { ColorSchemeName };

export { AppearancePreferences };

export { Spec };

export default Spec | null | undefined;