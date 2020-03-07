import { $ArrayBufferView } from "flow-builtin-types";
const Blob = require("../Blob/Blob");
const FormData = require("./FormData");

type RequestBody = string | Blob | FormData | {uri: string;} | ArrayBuffer | $ArrayBufferView;

declare function convertRequestBody(body: RequestBody): any;
export { RequestBody };

declare module.exports: typeof convertRequestBody