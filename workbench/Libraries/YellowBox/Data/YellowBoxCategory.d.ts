import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
export declare type Category = string;
export declare type Message = UniqueBranding & Readonly<{
    content: string;
    substitutions: ReadonlyArray<UniqueBranding & Readonly<{
        length: number;
        offset: number;
    }>>;
}>;
declare const YellowBoxCategory: {
    parse(args: readonly unknown[]): UniqueBranding & Readonly<{
        category: string;
        message: Message;
    }>;
    render({ content, substitutions }: Message, substitutionStyle: false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../../StyleSheet/StyleSheetTypes").____TextStyle_Internal>>) | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null): React.ReactNode;
};
export default YellowBoxCategory;
