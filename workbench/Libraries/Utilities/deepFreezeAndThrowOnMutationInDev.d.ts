declare function deepFreezeAndThrowOnMutationInDev<T extends any>(object: T): T;

declare module.exports: typeof deepFreezeAndThrowOnMutationInDev