/**
 * Module that provides a function for creating a unique identifier.
 * The returned value does not conform to the GUID standard, but should
 * be globally unique in the context of the browser.
 */
declare function guid(): string;
export default guid;
