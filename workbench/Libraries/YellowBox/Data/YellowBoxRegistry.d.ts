import YellowBoxWarning from './YellowBoxWarning';
import { $ReadOnly } from "utility-types";
import { Category } from "./YellowBoxCategory";
export declare type Registry = Map<Category, ReadonlyArray<YellowBoxWarning>>;
export declare type Observer = ((registry: Registry) => void);
export declare type IgnorePattern = string | RegExp;
export declare type Subscription = $ReadOnly<{
    unsubscribe: (() => void);
}>;
declare const YellowBoxRegistry: {
    add({ args, framesToPop }: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        args: readonly unknown[];
        framesToPop: number;
    }>): void;
    delete(category: string): void;
    clear(): void;
    addIgnorePatterns(patterns: readonly (string | RegExp)[]): void;
    setDisabled(value: boolean): void;
    isDisabled(): boolean;
    observe(observer: Observer): import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        unsubscribe: () => void;
    }>;
};
export default YellowBoxRegistry;
