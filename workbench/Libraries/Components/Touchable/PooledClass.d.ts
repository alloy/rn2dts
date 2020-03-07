import { Class } from "utility-types";
type Pooler = any;

declare var addPoolingTo: (<T>(CopyConstructor: Class<T>, pooler: Pooler) => Class<T> & {
  getPooled(...args: ReadonlyArray<unknown>):
  /* arguments of the constructor */
  T;
  release(instance: unknown): void;

});

declare var PooledClass: {
  addPoolingTo: typeof addPoolingTo;
  oneArgumentPooler: Pooler;
  twoArgumentPooler: Pooler;
  threeArgumentPooler: Pooler;
  fourArgumentPooler: Pooler;
};

declare module.exports: typeof PooledClass