import { UniqueBranding } from "flow-builtin-types";
type PointProp = UniqueBranding & Readonly<{x: number;y: number;}>;
export { PointProp };