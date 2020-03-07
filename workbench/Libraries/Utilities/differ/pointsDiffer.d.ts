type Point = {x: number | null | undefined;y: number | null | undefined;};

declare var pointsDiffer: ((one: Point | null | undefined, two: Point | null | undefined) => boolean);

declare module.exports: typeof pointsDiffer