import { TurboModule } from "../../TurboModule/RCTExport";

type DialogAction = string;

type DialogButtonKey = number;
type DialogOptions = {
  title?: string;
  message?: string;
  buttonPositive?: string;
  buttonNegative?: string;
  buttonNeutral?: string;
  items?: Array<string>;
  cancelable?: boolean;
};

interface Spec extends TurboModule {
  readonly getConstants: (() => {
    readonly buttonClicked: DialogAction;
    readonly dismissed: DialogAction;
    readonly buttonPositive: DialogButtonKey;
    readonly buttonNegative: DialogButtonKey;
    readonly buttonNeutral: DialogButtonKey;
  });
  readonly showAlert: ((config: DialogOptions, onError: ((error: string) => void), onAction: ((action: DialogAction, buttonKey?: DialogButtonKey) => void)) => void);
}
export { DialogOptions };

export { Spec };

export default Spec | null | undefined;