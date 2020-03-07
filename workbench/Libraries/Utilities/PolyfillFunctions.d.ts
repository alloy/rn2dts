declare function polyfillObjectProperty<T>(object: any, name: string, getValue: (() => T)): void;

declare function polyfillGlobal<T>(name: string, getValue: (() => T)): void;

declare module.exports: {
  polyfillObjectProperty: typeof polyfillObjectProperty;
  polyfillGlobal: typeof polyfillGlobal;
}