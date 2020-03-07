import { ViewProps } from "./ViewPropTypes";

const React = require("react");
import ViewNativeComponent from "./ViewNativeComponent";

type Props = ViewProps;

declare var View: React.AbstractComponent<ViewProps, React.ElementRef<typeof ViewNativeComponent>>;
export { Props };

declare module.exports: typeof View