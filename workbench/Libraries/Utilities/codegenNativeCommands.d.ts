import { UniqueBranding } from "flow-builtin-types";
import { $Keys } from "utility-types";
type Options<T = string> = UniqueBranding & Readonly<{supportedCommands: ReadonlyArray<T>;}>;

declare function codegenNativeCommands<T extends {}>(options: Options<$Keys<T>>): T;

export default typeof codegenNativeCommands;