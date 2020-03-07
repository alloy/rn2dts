import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly setGlobalOptions: ((options: {readonly debug?: boolean | null | undefined;readonly reportStackTraces?: boolean | null | undefined;}) => void);
  readonly setContext: ((context: string) => void);
  readonly beginScroll: (() => void);
  readonly endScroll: (() => void);
}
export { Spec };

export default Spec | null | undefined;