declare var AsyncStorage: {
  _getRequests: Array<any>;
  _getKeys: Array<string>;
  _immediate: number | null | undefined;

  /**
     * Fetches an item for a `key` and invokes a callback upon completion.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#getitem
     */
  getItem: ((key: string, callback?: ((error: Error | null | undefined, result: string | null | undefined) => void) | null | undefined) => Promise);

  /**
     * Sets the value for a `key` and invokes a callback upon completion.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#setitem
     */
  setItem: ((key: string, value: string, callback?: ((error: Error | null | undefined) => void) | null | undefined) => Promise);

  /**
     * Removes an item for a `key` and invokes a callback upon completion.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#removeitem
     */
  removeItem: ((key: string, callback?: ((error: Error | null | undefined) => void) | null | undefined) => Promise);

  /**
     * Merges an existing `key` value with an input value, assuming both values
     * are stringified JSON.
     *
     * **NOTE:** This is not supported by all native implementations.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#mergeitem
     */
  mergeItem: ((key: string, value: string, callback?: ((error: Error | null | undefined) => void) | null | undefined) => Promise);

  /**
     * Erases *all* `AsyncStorage` for all clients, libraries, etc. You probably
     * don't want to call this; use `removeItem` or `multiRemove` to clear only
     * your app's keys.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#clear
     */
  clear: ((callback?: ((error: Error | null | undefined) => void) | null | undefined) => Promise);

  /**
     * Gets *all* keys known to your app; for all callers, libraries, etc.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#getallkeys
     */
  getAllKeys: ((callback?: ((error: Error | null | undefined, keys: Array<string> | null | undefined) => void) | null | undefined) => Promise);

  /**
     * The following batched functions are useful for executing a lot of
     * operations at once, allowing for native optimizations and provide the
     * convenience of a single callback after all operations are complete.
     *
     * These functions return arrays of errors, potentially one for every key.
     * For key-specific errors, the Error object will have a key property to
     * indicate which key caused the error.
     */




  /**
     * Flushes any pending requests using a single batch call to get the data.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#flushgetrequests
     * */
  flushGetRequests: (() => void);

  /**
     * This allows you to batch the fetching of items given an array of `key`
     * inputs. Your callback will be invoked with an array of corresponding
     * key-value pairs found.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#multiget
     */
  multiGet: ((keys: Array<string>, callback?: ((errors: Array<Error> | null | undefined, result: Array<Array<string>> | null | undefined) => void) | null | undefined) => Promise);

  /**
     * Use this as a batch operation for storing multiple key-value pairs. When
     * the operation completes you'll get a single callback with any errors.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#multiset
     */
  multiSet: ((keyValuePairs: Array<Array<string>>, callback?: ((errors: Array<Error> | null | undefined) => void) | null | undefined) => Promise);

  /**
     * Call this to batch the deletion of all keys in the `keys` array.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#multiremove
     */
  multiRemove: ((keys: Array<string>, callback?: ((errors: Array<Error> | null | undefined) => void) | null | undefined) => Promise);

  /**
     * Batch operation to merge in existing and new values for a given set of
     * keys. This assumes that the values are stringified JSON.
     *
     * **NOTE**: This is not supported by all native implementations.
     *
     * See https://reactnative.dev/docs/asyncstorage.html#multimerge
     */
  multiMerge: ((keyValuePairs: Array<Array<string>>, callback?: ((errors: Array<Error> | null | undefined) => void) | null | undefined) => Promise);
};

declare module.exports: typeof AsyncStorage