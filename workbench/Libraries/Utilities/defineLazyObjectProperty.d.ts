declare function defineLazyObjectProperty<T>(object: any, name: string, descriptor: {get: (() => T);enumerable?: boolean;writable?: boolean;}): void;

declare module.exports: typeof defineLazyObjectProperty