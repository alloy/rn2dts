import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import { LogLevel } from "../Data/LogBoxLog";
import { Message } from "../Data/parseLogBoxLog";

type Props = UniqueBranding & Readonly<{
  collapsed: boolean;
  message: Message;
  level: LogLevel;
  title: string;
  onPress: (() => void);
}>;

declare function LogBoxInspectorMessageHeader(props: Props): React.ReactNode;

export default typeof LogBoxInspectorMessageHeader;