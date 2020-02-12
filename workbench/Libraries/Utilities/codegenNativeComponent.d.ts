import { $ReadOnly, Class } from "utility-types";
import { NativeComponent } from "../../Libraries/Renderer/shims/ReactNative";
declare type Options = $ReadOnly<{
    interfaceOnly?: boolean;
    paperComponentName?: string;
    paperComponentNameDeprecated?: string;
}>;
export declare type NativeComponentType<T> = Class<NativeComponent<T>>;
declare function codegenNativeComponent<Props>(componentName: string, options?: Options): NativeComponentType<Props>;
export default codegenNativeComponent;
