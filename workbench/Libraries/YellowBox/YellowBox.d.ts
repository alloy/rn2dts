import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { Class } from "utility-types";
import { Registry } from "./Data/YellowBoxRegistry";
declare type State = {
    registry: Registry | null | undefined;
};
declare const _default: Class<React.Component<UniqueBranding & Readonly<{}>, State, any>> & {
    ignoreWarnings(arg0: readonly (string | RegExp)[]): void;
    install(): void;
    uninstall(): void;
    __unstable_enableLogBox(): void;
    __unstable_isLogBoxEnabled(): boolean;
};
export default _default;
