import { UniqueBranding } from "flow-builtin-types";
import { HostComponent } from "../../Libraries/Renderer/shims/ReactNativeTypes";

type Options = UniqueBranding & Readonly<{
  interfaceOnly?: boolean;
  paperComponentName?: string;
  paperComponentNameDeprecated?: string;
  excludedPlatform?: "iOS" | "android";
}>;

type NativeComponentType<T> = HostComponent<T>;

declare function codegenNativeComponent<Props>(componentName: string, options?: Options): NativeComponentType<Props>;
export { NativeComponentType };

export default typeof codegenNativeComponent;