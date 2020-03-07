import { TurboModule } from "../TurboModule/RCTExport";

type Args = {
  title?: string;
  message?: string;
  buttons?: Array<any>;
  // TODO: have a better type
  type?: string;
  defaultValue?: string;
  cancelButtonKey?: string;
  destructiveButtonKey?: string;
  keyboardType?: string;
};

interface Spec extends TurboModule {
  readonly alertWithArgs: ((args: Args, callback: ((id: number, value: string) => void)) => void);
}
export { Args };

export { Spec };

export default Spec | null | undefined;