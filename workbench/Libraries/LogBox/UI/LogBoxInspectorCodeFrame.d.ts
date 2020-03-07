import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import { CodeFrame } from "../Data/parseLogBoxLog";

type Props = UniqueBranding & Readonly<{codeFrame: CodeFrame | null | undefined;}>;

declare function LogBoxInspectorCodeFrame(props: Props): React.ReactNode;

export default typeof LogBoxInspectorCodeFrame;