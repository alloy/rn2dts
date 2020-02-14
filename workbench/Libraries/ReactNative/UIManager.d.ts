import { Spec } from "./NativeUIManager";
interface UIManagerJSInterface extends Spec {
    readonly getViewManagerConfig: ((viewManagerName: string) => any);
    createView: ((reactTag: number | null | undefined, viewName: string, rootTag: number, props: any) => void);
    updateView: ((reactTag: number, viewName: string, props: any) => void);
    manageChildren: ((containerTag: number | null | undefined, moveFromIndices: Array<number>, moveToIndices: Array<number>, addChildReactTags: Array<number>, addAtIndices: Array<number>, removeAtIndices: Array<number>) => void);
}
declare const UIManager: UIManagerJSInterface;
export default UIManager;
