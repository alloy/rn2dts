declare const mergeHelpers: {
    MAX_MERGE_DEPTH: number;
    isTerminal: (o: any) => boolean;
    /**
     * Converts null/undefined values into empty object.
     *
     * @param {?Object=} arg Argument to be normalized (nullable optional)
     * @return {!Object}
     */
    normalizeMergeArg: (arg: any) => any;
    /**
     * If merging Arrays, a merge strategy *must* be supplied. If not, it is
     * likely the caller's fault. If this function is ever called with anything
     * but `one` and `two` being `Array`s, it is the fault of the merge utilities.
     *
     * @param {*} one Array to merge into.
     * @param {*} two Array to merge from.
     */
    checkMergeArrayArgs: (one: any, two: any) => void;
    /**
     * @param {*} one Object to merge into.
     * @param {*} two Object to merge from.
     */
    checkMergeObjectArgs: (one: any, two: any) => void;
    /**
     * @param {*} arg
     */
    checkMergeObjectArg: (arg: any) => void;
    /**
     * @param {*} arg
     */
    checkMergeIntoObjectArg: (arg: any) => void;
    /**
     * Checks that a merge was not given a circular object or an object that had
     * too great of depth.
     *
     * @param {number} Level of recursion to validate against maximum.
     */
    checkMergeLevel: (level: any) => void;
    /**
     * Checks that the supplied merge strategy is valid.
     *
     * @param {string} Array merge strategy.
     */
    checkArrayStrategy: (strategy: any) => void;
    /**
     * Set of possible behaviors of merge algorithms when encountering two Arrays
     * that must be merged together.
     * - `clobber`: The left `Array` is ignored.
     * - `indexByIndex`: The result is achieved by recursively deep merging at
     *   each index. (not yet supported.)
     */
    ArrayStrategies: {
        Clobber: string;
        Concat: string;
        IndexByIndex: string;
    };
};
export default mergeHelpers;
