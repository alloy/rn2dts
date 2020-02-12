/**
 * DocumentSelectionState is responsible for maintaining selection information
 * for a document.
 *
 * It is intended for use by AbstractTextEditor-based components for
 * identifying the appropriate start/end positions to modify the
 * DocumentContent, and for programmatically setting browser selection when
 * components re-render.
 */
declare class DocumentSelectionState {
    /**
     * @param {number} anchor
     * @param {number} focus
     */
    constructor(anchor: any, focus: any);
    /**
     * Apply an update to the state. If either offset value has changed,
     * set the values and emit the `change` event. Otherwise no-op.
     *
     * @param {number} anchor
     * @param {number} focus
     */
    update(anchor: any, focus: any): void;
    /**
     * Given a max text length, constrain our selection offsets to ensure
     * that the selection remains strictly within the text range.
     *
     * @param {number} maxLength
     */
    constrainLength(maxLength: any): void;
    focus(): void;
    blur(): void;
    /**
     * @return {boolean}
     */
    hasFocus(): any;
    /**
     * @return {boolean}
     */
    isCollapsed(): boolean;
    /**
     * @return {boolean}
     */
    isBackward(): boolean;
    /**
     * @return {?number}
     */
    getAnchorOffset(): any;
    /**
     * @return {?number}
     */
    getFocusOffset(): any;
    /**
     * @return {?number}
     */
    getStartOffset(): any;
    /**
     * @return {?number}
     */
    getEndOffset(): any;
    /**
     * @param {number} start
     * @param {number} end
     * @return {boolean}
     */
    overlaps(start: any, end: any): boolean;
}
export default DocumentSelectionState;
