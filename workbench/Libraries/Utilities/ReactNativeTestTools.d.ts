import React from 'react';
import { ReactTestInstance, ReactTestRendererNode, Predicate } from "react-test-renderer";
declare function byClickable(): Predicate;
declare function byTestID(testID: string): Predicate;
declare function byTextMatching(regex: RegExp): Predicate;
declare function enter(instance: ReactTestInstance, text: string): void;
declare function maximumDepthError(tree: {
    toJSON: (() => ReactTestRendererNode);
}, maxDepthLimit: number): string | null | undefined;
declare function expectNoConsoleWarn(): void;
declare function expectNoConsoleError(): void;
declare function expectRendersMatchingSnapshot(name: string, ComponentProvider: (() => React.ReactElement<any>), unmockComponent: (() => unknown)): void;
declare function maximumDepthOfJSON(node: ReactTestRendererNode): number;
declare function renderAndEnforceStrictMode(element: React.ReactNode): any;
declare function renderWithStrictMode(element: React.ReactNode): any;
declare function tap(instance: ReactTestInstance): void;
declare function scrollToBottom(instance: ReactTestInstance): void;
declare function withMessage(fn: Predicate, message: string): Predicate;
export { byClickable };
export { byTestID };
export { byTextMatching };
export { enter };
export { expectNoConsoleWarn };
export { expectNoConsoleError };
export { expectRendersMatchingSnapshot };
export { maximumDepthError };
export { maximumDepthOfJSON };
export { renderAndEnforceStrictMode };
export { renderWithStrictMode };
export { scrollToBottom };
export { tap };
export { withMessage };
