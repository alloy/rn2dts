import Blob from '../Blob/Blob';
import FormData from './FormData';
import { $ArrayBufferView } from "flow-builtin-types";
export declare type RequestBody = string | Blob | FormData | {
    uri: string;
} | ArrayBuffer | $ArrayBufferView;
declare function convertRequestBody(body: RequestBody): any;
export default convertRequestBody;
