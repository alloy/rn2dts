type AlertType = "default" | "plain-text" | "secure-text" | "login-password";
type AlertButtonStyle = "default" | "cancel" | "destructive";
type Buttons = Array<{text?: string;onPress?: ((...args: any) => any) | null | undefined;style?: AlertButtonStyle;}>;

type Options = {cancelable?: boolean | null | undefined;onDismiss?: (() => void) | null | undefined;};

declare class Alert {
  alert(title: string | null | undefined, message?: string | null | undefined, buttons?: Buttons, options?: Options): void;
  prompt(title: string | null | undefined, message?: string | null | undefined, callbackOrButtons?: (((text: string) => void) | Buttons) | null | undefined, type?: AlertType | null | undefined, defaultValue?: string, keyboardType?: string): void;
}
export { AlertType };
export { AlertButtonStyle };
export { Buttons };

declare module.exports: typeof Alert