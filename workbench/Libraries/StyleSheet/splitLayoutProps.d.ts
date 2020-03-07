import { DangerouslyImpreciseStyle } from "./StyleSheet";

declare function splitLayoutProps(props: DangerouslyImpreciseStyle | null | undefined): {
  outer: DangerouslyImpreciseStyle;
  inner: DangerouslyImpreciseStyle;

};

declare module.exports: typeof splitLayoutProps