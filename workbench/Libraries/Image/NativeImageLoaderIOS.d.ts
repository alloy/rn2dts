import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {});
  readonly getSize: ((uri: string) => Promise<ReadonlyArray<number>>);
  readonly getSizeWithHeaders: ((uri: string, headers: any) => Promise<{width: number;height: number;}>);
  readonly prefetchImage: ((uri: string) => Promise<boolean>);
  readonly queryCache: ((uris: Array<string>) => Promise<any>);
}
export { Spec };

export default Spec;