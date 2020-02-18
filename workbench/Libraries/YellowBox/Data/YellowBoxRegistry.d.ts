import YellowBoxWarning from './YellowBoxWarning';
import { UniqueBranding } from "flow-builtin-types";
import { Category, Message } from "./YellowBoxCategory";
import { Stack } from "./YellowBoxSymbolication";
export declare type Registry = Map<Category, ReadonlyArray<YellowBoxWarning>>;
export declare type Observer = ((registry: Registry) => void);
export declare type IgnorePattern = string | RegExp;
export declare type Subscription = UniqueBranding & Readonly<{
    unsubscribe: (() => void);
}>;
declare const YellowBoxRegistry: {
    isWarningIgnored(message: Message): boolean;
    add({ category, message, stack }: UniqueBranding & Readonly<{
        category: string;
        message: Message;
        stack: Stack;
    }>): void;
    delete(category: string): void;
    clear(): void;
    addIgnorePatterns(patterns: readonly (string | RegExp)[]): void;
    setDisabled(value: boolean): void;
    isDisabled(): boolean;
    observe(observer: Observer): Subscription;
};
export default YellowBoxRegistry;
