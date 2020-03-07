import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {});
  readonly multiGet: ((keys: Array<string>, callback: ((errors: Array<{message: string;}> | null | undefined, kvPairs: Array<Array<string>> | null | undefined) => void)) => void);
  readonly multiSet: ((kvPairs: Array<Array<string>>, callback: ((errors: Array<{message: string;}> | null | undefined) => void)) => void);
  readonly multiMerge: ((kvPairs: Array<Array<string>>, callback: ((errors: Array<{message: string;}> | null | undefined) => void)) => void);
  readonly multiRemove: ((keys: Array<string>, callback: ((errors: Array<{message: string;}> | null | undefined) => void)) => void);
  readonly clear: ((callback: ((error: {message: string;}) => void)) => void);
  readonly getAllKeys: ((callback: ((error: {message: string;} | null | undefined, allKeys: Array<string> | null | undefined) => void)) => void);
}
export { Spec };

export default Spec | null | undefined;