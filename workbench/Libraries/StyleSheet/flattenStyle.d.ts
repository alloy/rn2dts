import { DangerouslyImpreciseStyle } from "./StyleSheet";
import { DangerouslyImpreciseStyleProp } from "./StyleSheet";

declare function flattenStyle(style: DangerouslyImpreciseStyleProp | null | undefined): DangerouslyImpreciseStyle | null | undefined;

declare module.exports: typeof flattenStyle