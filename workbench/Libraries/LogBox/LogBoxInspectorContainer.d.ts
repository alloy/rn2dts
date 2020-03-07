import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import LogBoxLog from "./Data/LogBoxLog";

type Props = UniqueBranding & Readonly<{
  logs: ReadonlyArray<LogBoxLog>;
  selectedLogIndex: number;
  isDisabled?: boolean | null | undefined;
}>;

declare class _LogBoxInspectorContainer extends React.Component<Props> {render(): React.ReactNode;}
export { _LogBoxInspectorContainer };

export default React.AbstractComponent<{}>;