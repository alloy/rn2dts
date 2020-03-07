type Inset = {top: number | null | undefined;left: number | null | undefined;right: number | null | undefined;bottom: number | null | undefined;};

declare var insetsDiffer: ((one: Inset, two: Inset) => boolean);

declare module.exports: typeof insetsDiffer