const View = require("../../Components/View/View");
const React = require("react");
import { AnimatedComponentType } from "./createAnimatedComponent";

const AnimatedMock = require("./AnimatedMock");

declare var Animated: typeof AnimatedMock;

declare module.exports: typeof Animated & {
  FlatList(): any;
  Image(): any;
  ScrollView(): any;
  SectionList(): any;
  Text(): any;
  View(): AnimatedComponentType<React.ElementConfig<typeof View>, React.ElementRef<typeof View>>;
}