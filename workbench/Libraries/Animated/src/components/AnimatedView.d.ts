const View = require("../../../Components/View/View");

const React = require("react");

import { AnimatedComponentType } from "../createAnimatedComponent";

declare module.exports: AnimatedComponentType<React.ElementConfig<typeof View>, React.ElementRef<typeof View>>