import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly fetchSegment: ((segmentId: number, options: any, // flowlint-line unclear-type: off
  callback: ((error: any | null | undefined) => void)) => void);
  readonly getSegment?: ((segmentId: number, options: any, // flowlint-line unclear-type: off
  callback: ((error: any | null | undefined, path: string | null | undefined) => void)) => void);
}
export { Spec };

export default Spec;