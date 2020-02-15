import React from 'react';
import View from '../Components/View/View';
import { $FlowFixMeProps } from "flow-builtin-types";
/**
 * Very simple drop-in replacement for <Image> which supports nesting views.
 *
 * ```ReactNativeWebPlayer
 * import React, { Component } from 'react';
 * import { AppRegistry, View, ImageBackground, Text } from 'react-native';
 *
 * class DisplayAnImageBackground extends Component {
 *   render() {
 *     return (
 *       <ImageBackground
 *         style={{width: 50, height: 50}}
 *         source={{uri: 'https://facebook.github.io/react-native/img/opengraph.png'}}
 *       >
 *         <Text>React</Text>
 *       </ImageBackground>
 *     );
 *   }
 * }
 *
 * // App registration and rendering
 * AppRegistry.registerComponent('DisplayAnImageBackground', () => DisplayAnImageBackground);
 * ```
 */
declare class ImageBackground extends React.Component<$FlowFixMeProps> {
    setNativeProps(props: any): void;
    _viewRef: React.ElementRef<typeof View> | null | undefined;
    _captureRef: (ref: any) => void;
    render(): React.ReactNode;
}
export default ImageBackground;
