import React from 'react';
import { Stringish } from "flow-builtin-types";
import { $ReadOnly, $Diff } from "utility-types";
import { TextStyleProp, ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { ScrollEvent } from "../../Types/CoreEventTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type ReactRefSetter<T> = {
    current: null | T;
} | ((ref: null | T) => unknown);
export declare type ChangeEvent = React.SyntheticEvent<$ReadOnly<{
    eventCount: number;
    target: number;
    text: string;
}>>;
export declare type TextInputEvent = React.SyntheticEvent<$ReadOnly<{
    eventCount: number;
    previousText: string;
    range: $ReadOnly<{
        start: number;
        end: number;
    }>;
    target: number;
    text: string;
}>>;
export declare type ContentSizeChangeEvent = React.SyntheticEvent<$ReadOnly<{
    target: number;
    contentSize: $ReadOnly<{
        width: number;
        height: number;
    }>;
}>>;
declare type TargetEvent = React.SyntheticEvent<$ReadOnly<{
    target: number;
}>>;
export declare type BlurEvent = TargetEvent;
export declare type FocusEvent = TargetEvent;
declare type Selection = $ReadOnly<{
    start: number;
    end: number;
}>;
export declare type SelectionChangeEvent = React.SyntheticEvent<$ReadOnly<{
    selection: Selection;
    target: number;
}>>;
export declare type KeyPressEvent = React.SyntheticEvent<$ReadOnly<{
    key: string;
    target?: number | null | undefined;
    eventCount?: number | null | undefined;
}>>;
export declare type EditingEvent = React.SyntheticEvent<$ReadOnly<{
    eventCount: number;
    text: string;
    target: number;
}>>;
declare type DataDetectorTypesType = "phoneNumber" | "link" | "address" | "calendarEvent" | "none" | "all";
export declare type KeyboardType = // Cross Platform
"default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | "ascii-capable-number-pad" | "visible-password";
export declare type ReturnKeyType = // Cross Platform
"done" | "go" | "next" | "search" | "send" | "none" | "previous" | "default" | "emergency-call" | "google" | "join" | "route" | "yahoo";
export declare type AutoCapitalize = "none" | "sentences" | "words" | "characters";
export declare type TextContentType = "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password" | "newPassword" | "oneTimeCode";
declare type PasswordRules = string;
declare type IOSProps = $ReadOnly<{
    /**
     * If `false`, disables spell-check style (i.e. red underlines).
     * The default value is inherited from `autoCorrect`.
     * @platform ios
     */
    spellCheck?: boolean | null | undefined;
    /**
     * Determines the color of the keyboard.
     * @platform ios
     */
    keyboardAppearance?: ("default" | "light" | "dark") | null | undefined;
    /**
     * If `true`, the keyboard disables the return key when there is no text and
     * automatically enables it when there is text. The default value is `false`.
     * @platform ios
     */
    enablesReturnKeyAutomatically?: boolean | null | undefined;
    /**
     * When the clear button should appear on the right side of the text view.
     * This property is supported only for single-line TextInput component.
     * @platform ios
     */
    clearButtonMode?: ("never" | "while-editing" | "unless-editing" | "always") | null | undefined;
    /**
     * If `true`, clears the text field automatically when editing begins.
     * @platform ios
     */
    clearTextOnFocus?: boolean | null | undefined;
    /**
     * Determines the types of data converted to clickable URLs in the text input.
     * Only valid if `multiline={true}` and `editable={false}`.
     * By default no data types are detected.
     *
     * You can provide one type or an array of many types.
     *
     * Possible values for `dataDetectorTypes` are:
     *
     * - `'phoneNumber'`
     * - `'link'`
     * - `'address'`
     * - `'calendarEvent'`
     * - `'none'`
     * - `'all'`
     *
     * @platform ios
     */
    dataDetectorTypes?: (DataDetectorTypesType | null | undefined) | ReadonlyArray<DataDetectorTypesType>;
    /**
     * An optional identifier which links a custom InputAccessoryView to
     * this text input. The InputAccessoryView is rendered above the
     * keyboard when this text input is focused.
     * @platform ios
     */
    inputAccessoryViewID?: string | null | undefined;
    /**
     * Give the keyboard and the system information about the
     * expected semantic meaning for the content that users enter.
     * @platform ios
     */
    textContentType?: TextContentType | null | undefined;
    PasswordRules?: PasswordRules | null | undefined;
    rejectResponderTermination?: boolean | null | undefined;
    /**
     * If `false`, scrolling of the text view will be disabled.
     * The default value is `true`. Does only work with 'multiline={true}'.
     * @platform ios
     */
    scrollEnabled?: boolean | null | undefined;
}>;
declare type AndroidProps = $ReadOnly<{
    /**
     * Determines which content to suggest on auto complete, e.g.`username`.
     * To disable auto complete, use `off`.
     *
     * *Android Only*
     *
     * The following values work on Android only:
     *
     * - `username`
     * - `password`
     * - `email`
     * - `name`
     * - `tel`
     * - `street-address`
     * - `postal-code`
     * - `cc-number`
     * - `cc-csc`
     * - `cc-exp`
     * - `cc-exp-month`
     * - `cc-exp-year`
     * - `off`
     *
     * @platform android
     */
    autoCompleteType?: ("cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off") | null | undefined;
    /**
     * Sets the return key to the label. Use it instead of `returnKeyType`.
     * @platform android
     */
    returnKeyLabel?: string | null | undefined;
    /**
     * Sets the number of lines for a `TextInput`. Use it with multiline set to
     * `true` to be able to fill the lines.
     * @platform android
     */
    numberOfLines?: number | null | undefined;
    /**
     * When `false`, if there is a small amount of space available around a text input
     * (e.g. landscape orientation on a phone), the OS may choose to have the user edit
     * the text inside of a full screen text input mode. When `true`, this feature is
     * disabled and users will always edit the text directly inside of the text input.
     * Defaults to `false`.
     * @platform android
     */
    disableFullscreenUI?: boolean | null | undefined;
    /**
     * Set text break strategy on Android API Level 23+, possible values are `simple`, `highQuality`, `balanced`
     * The default value is `simple`.
     * @platform android
     */
    textBreakStrategy?: ("simple" | "highQuality" | "balanced") | null | undefined;
    /**
     * The color of the `TextInput` underline.
     * @platform android
     */
    underlineColorAndroid?: ColorValue | null | undefined;
    /**
     * If defined, the provided image resource will be rendered on the left.
     * The image resource must be inside `/android/app/src/main/res/drawable` and referenced
     * like
     * ```
     * <TextInput
     *  inlineImageLeft='search_icon'
     * />
     * ```
     * @platform android
     */
    inlineImageLeft?: string | null | undefined;
    /**
     * Padding between the inline image, if any, and the text input itself.
     * @platform android
     */
    inlineImagePadding?: number | null | undefined;
    importantForAutofill?: ("auto" | "no" | "noExcludeDescendants" | "yes" | "yesExcludeDescendants") | null | undefined;
    /**
     * When `false`, it will prevent the soft keyboard from showing when the field is focused.
     * Defaults to `true`.
     * @platform android
     */
    showSoftInputOnFocus?: boolean | null | undefined;
}>;
export declare type Props = $ReadOnly<$Diff<ViewProps, $ReadOnly<{
    style: ViewStyleProp | null | undefined;
}>> & IOSProps & AndroidProps & {
    /**
     * Can tell `TextInput` to automatically capitalize certain characters.
     *
     * - `characters`: all characters.
     * - `words`: first letter of each word.
     * - `sentences`: first letter of each sentence (*default*).
     * - `none`: don't auto capitalize anything.
     */
    autoCapitalize?: AutoCapitalize | null | undefined;
    /**
     * If `false`, disables auto-correct. The default value is `true`.
     */
    autoCorrect?: boolean | null | undefined;
    /**
     * If `true`, focuses the input on `componentDidMount`.
     * The default value is `false`.
     */
    autoFocus?: boolean | null | undefined;
    /**
     * Specifies whether fonts should scale to respect Text Size accessibility settings. The
     * default is `true`.
     */
    allowFontScaling?: boolean | null | undefined;
    /**
     * Specifies largest possible scale a font can reach when `allowFontScaling` is enabled.
     * Possible values:
     * `null/undefined` (default): inherit from the parent node or the global default (0)
     * `0`: no max, ignore parent/global default
     * `>= 1`: sets the maxFontSizeMultiplier of this node to this value
     */
    maxFontSizeMultiplier?: number | null | undefined;
    /**
     * If `false`, text is not editable. The default value is `true`.
     */
    editable?: boolean | null | undefined;
    /**
     * Determines which keyboard to open, e.g.`numeric`.
     *
     * The following values work across platforms:
     *
     * - `default`
     * - `numeric`
     * - `number-pad`
     * - `decimal-pad`
     * - `email-address`
     * - `phone-pad`
     *
     * *iOS Only*
     *
     * The following values work on iOS only:
     *
     * - `ascii-capable`
     * - `numbers-and-punctuation`
     * - `url`
     * - `name-phone-pad`
     * - `twitter`
     * - `web-search`
     *
     * *Android Only*
     *
     * The following values work on Android only:
     *
     * - `visible-password`
     */
    keyboardType?: KeyboardType | null | undefined;
    /**
     * Determines how the return key should look. On Android you can also use
     * `returnKeyLabel`.
     *
     * *Cross platform*
     *
     * The following values work across platforms:
     *
     * - `done`
     * - `go`
     * - `next`
     * - `search`
     * - `send`
     *
     * *Android Only*
     *
     * The following values work on Android only:
     *
     * - `none`
     * - `previous`
     *
     * *iOS Only*
     *
     * The following values work on iOS only:
     *
     * - `default`
     * - `emergency-call`
     * - `google`
     * - `join`
     * - `route`
     * - `yahoo`
     */
    returnKeyType?: ReturnKeyType | null | undefined;
    /**
     * Limits the maximum number of characters that can be entered. Use this
     * instead of implementing the logic in JS to avoid flicker.
     */
    maxLength?: number | null | undefined;
    /**
     * If `true`, the text input can be multiple lines.
     * The default value is `false`.
     */
    multiline?: boolean | null | undefined;
    /**
     * Callback that is called when the text input is blurred.
     */
    onBlur?: ((e: BlurEvent) => unknown) | null | undefined;
    /**
     * Callback that is called when the text input is focused.
     */
    onFocus?: ((e: FocusEvent) => unknown) | null | undefined;
    /**
     * Callback that is called when the text input's text changes.
     */
    onChange?: ((e: ChangeEvent) => unknown) | null | undefined;
    /**
     * Callback that is called when the text input's text changes.
     * Changed text is passed as an argument to the callback handler.
     */
    onChangeText?: ((text: string) => unknown) | null | undefined;
    /**
     * Callback that is called when the text input's content size changes.
     * This will be called with
     * `{ nativeEvent: { contentSize: { width, height } } }`.
     *
     * Only called for multiline text inputs.
     */
    onContentSizeChange?: ((e: ContentSizeChangeEvent) => unknown) | null | undefined;
    /**
     * Callback that is called when text input ends.
     */
    onEndEditing?: ((e: EditingEvent) => unknown) | null | undefined;
    /**
     * Callback that is called when the text input selection is changed.
     * This will be called with
     * `{ nativeEvent: { selection: { start, end } } }`.
     */
    onSelectionChange?: ((e: SelectionChangeEvent) => unknown) | null | undefined;
    /**
     * Callback that is called when the text input's submit button is pressed.
     * Invalid if `multiline={true}` is specified.
     */
    onSubmitEditing?: ((e: EditingEvent) => unknown) | null | undefined;
    /**
     * Callback that is called when a key is pressed.
     * This will be called with `{ nativeEvent: { key: keyValue } }`
     * where `keyValue` is `'Enter'` or `'Backspace'` for respective keys and
     * the typed-in character otherwise including `' '` for space.
     * Fires before `onChange` callbacks.
     */
    onKeyPress?: ((e: KeyPressEvent) => unknown) | null | undefined;
    /**
     * Invoked on content scroll with `{ nativeEvent: { contentOffset: { x, y } } }`.
     * May also contain other properties from ScrollEvent but on Android contentSize
     * is not provided for performance reasons.
     */
    onScroll?: ((e: ScrollEvent) => unknown) | null | undefined;
    /**
     * The string that will be rendered before text input has been entered.
     */
    placeholder?: Stringish | null | undefined;
    /**
     * The text color of the placeholder string.
     */
    placeholderTextColor?: ColorValue | null | undefined;
    /**
     * If `true`, the text input obscures the text entered so that sensitive text
     * like passwords stay secure. The default value is `false`. Does not work with 'multiline={true}'.
     */
    secureTextEntry?: boolean | null | undefined;
    /**
     * The highlight and cursor color of the text input.
     */
    selectionColor?: ColorValue | null | undefined;
    /**
     * The start and end of the text input's selection. Set start and end to
     * the same value to position the cursor.
     */
    selection?: $ReadOnly<{
        start: number;
        end?: number | null | undefined;
    }> | null | undefined;
    /**
     * The value to show for the text input. `TextInput` is a controlled
     * component, which means the native value will be forced to match this
     * value prop if provided. For most uses, this works great, but in some
     * cases this may cause flickering - one common cause is preventing edits
     * by keeping value the same. In addition to simply setting the same value,
     * either set `editable={false}`, or set/update `maxLength` to prevent
     * unwanted edits without flicker.
     */
    value?: Stringish | null | undefined;
    /**
     * Provides an initial value that will change when the user starts typing.
     * Useful for simple use-cases where you do not want to deal with listening
     * to events and updating the value prop to keep the controlled state in sync.
     */
    defaultValue?: Stringish | null | undefined;
    /**
     * If `true`, all text will automatically be selected on focus.
     */
    selectTextOnFocus?: boolean | null | undefined;
    /**
     * If `true`, the text field will blur when submitted.
     * The default value is true for single-line fields and false for
     * multiline fields. Note that for multiline fields, setting `blurOnSubmit`
     * to `true` means that pressing return will blur the field and trigger the
     * `onSubmitEditing` event instead of inserting a newline into the field.
     */
    blurOnSubmit?: boolean | null | undefined;
    /**
     * Note that not all Text styles are supported, an incomplete list of what is not supported includes:
     *
     * - `borderLeftWidth`
     * - `borderTopWidth`
     * - `borderRightWidth`
     * - `borderBottomWidth`
     * - `borderTopLeftRadius`
     * - `borderTopRightRadius`
     * - `borderBottomRightRadius`
     * - `borderBottomLeftRadius`
     *
     * see [Issue#7070](https://github.com/facebook/react-native/issues/7070)
     * for more detail.
     *
     * [Styles](docs/style.html)
     */
    style?: TextStyleProp | null | undefined;
    /**
     * If `true`, caret is hidden. The default value is `false`.
     * This property is supported only for single-line TextInput component on iOS.
     */
    caretHidden?: boolean | null | undefined;
    contextMenuHidden?: boolean | null | undefined;
    forwardedRef?: ReactRefSetter<React.ElementRef<HostComponent<unknown>> & ImperativeMethods> | null | undefined;
}>;
declare type ImperativeMethods = $ReadOnly<{
    clear: (() => void);
    isFocused: (() => boolean);
    getNativeRef: (() => React.ElementRef<HostComponent<unknown>> | null | undefined);
}>;
declare const _default: ((new (props: any, context?: any) => never) & import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
    State: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        currentlyFocusedField: any;
        focusTextInput: any;
        blurTextInput: any;
    }>;
    propTypes: {
        autoCapitalize: import("flow-builtin-types").React$PropType$Primitive<"none" | "words" | "sentences" | "characters">;
        autoCompleteType: import("flow-builtin-types").React$PropType$Primitive<"password" | "off" | "tel" | "email" | "name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "postal-code" | "street-address" | "username">;
        autoCorrect: import("prop-types").Requireable<boolean>;
        spellCheck: import("prop-types").Requireable<boolean>;
        autoFocus: import("prop-types").Requireable<boolean>;
        allowFontScaling: import("prop-types").Requireable<boolean>;
        maxFontSizeMultiplier: import("prop-types").Requireable<number>;
        editable: import("prop-types").Requireable<boolean>;
        keyboardType: import("flow-builtin-types").React$PropType$Primitive<"default" | "numeric" | "url" | "email-address" | "phone-pad" | "number-pad" | "ascii-capable" | "numbers-and-punctuation" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search" | "ascii-capable-number-pad" | "visible-password">;
        keyboardAppearance: import("flow-builtin-types").React$PropType$Primitive<"default" | "dark" | "light">;
        returnKeyType: import("flow-builtin-types").React$PropType$Primitive<"search" | "none" | "default" | "next" | "done" | "join" | "go" | "send" | "previous" | "emergency-call" | "google" | "route" | "yahoo">;
        returnKeyLabel: import("prop-types").Requireable<string>;
        maxLength: import("prop-types").Requireable<number>;
        numberOfLines: import("prop-types").Requireable<number>;
        disableFullscreenUI: import("prop-types").Requireable<boolean>;
        enablesReturnKeyAutomatically: import("prop-types").Requireable<boolean>;
        multiline: import("prop-types").Requireable<boolean>;
        textBreakStrategy: import("flow-builtin-types").React$PropType$Primitive<"balanced" | "simple" | "highQuality">;
        onBlur: import("prop-types").Requireable<(...args: any[]) => any>;
        onFocus: import("prop-types").Requireable<(...args: any[]) => any>;
        onChange: import("prop-types").Requireable<(...args: any[]) => any>;
        onChangeText: import("prop-types").Requireable<(...args: any[]) => any>;
        onContentSizeChange: import("prop-types").Requireable<(...args: any[]) => any>;
        onTextInput: import("prop-types").Requireable<(...args: any[]) => any>;
        onEndEditing: import("prop-types").Requireable<(...args: any[]) => any>;
        onSelectionChange: import("prop-types").Requireable<(...args: any[]) => any>;
        onSubmitEditing: import("prop-types").Requireable<(...args: any[]) => any>;
        onKeyPress: import("prop-types").Requireable<(...args: any[]) => any>;
        onLayout: import("prop-types").Requireable<(...args: any[]) => any>;
        onScroll: import("prop-types").Requireable<(...args: any[]) => any>;
        placeholder: import("prop-types").Requireable<string>;
        placeholderTextColor: any;
        scrollEnabled: import("prop-types").Requireable<boolean>;
        secureTextEntry: import("prop-types").Requireable<boolean>;
        selectionColor: any; /**
         * If `true`, focuses the input on `componentDidMount`.
         * The default value is `false`.
         */
        selection: import("flow-builtin-types").React$PropType$Primitive<{
            end?: number | undefined;
            start: number;
        }>;
        value: import("prop-types").Requireable<string>;
        defaultValue: import("prop-types").Requireable<string>;
        clearButtonMode: import("flow-builtin-types").React$PropType$Primitive<"always" | "never" | "while-editing" | "unless-editing">;
        clearTextOnFocus: import("prop-types").Requireable<boolean>;
        selectTextOnFocus: import("prop-types").Requireable<boolean>;
        blurOnSubmit: import("prop-types").Requireable<boolean>;
        style: any; /**
         * Callback that is called when the text input's text changes.
         */
        underlineColorAndroid: any;
        inlineImageLeft: import("prop-types").Requireable<string>;
        inlineImagePadding: import("prop-types").Requireable<number>;
        rejectResponderTermination: import("prop-types").Requireable<boolean>;
        dataDetectorTypes: import("flow-builtin-types").React$PropType$Primitive<"link" | "all" | "none" | "address" | "phoneNumber" | "calendarEvent" | ("link" | "all" | "none" | "address" | "phoneNumber" | "calendarEvent")[]>;
        caretHidden: import("prop-types").Requireable<boolean>;
        contextMenuHidden: import("prop-types").Requireable<boolean>;
        inputAccessoryViewID: import("prop-types").Requireable<string>;
        textContentType: import("flow-builtin-types").React$PropType$Primitive<"none" | "password" | "location" | "name" | "username" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "middleName" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "newPassword" | "oneTimeCode">;
        showSoftInputOnFocus: import("prop-types").Requireable<boolean>;
        accessible: import("prop-types").Requireable<boolean>;
        accessibilityLabel: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        accessibilityHint: import("prop-types").Requireable<string>;
        accessibilityActions: import("flow-builtin-types").React$PropType$Primitive<string[]>;
        accessibilityIgnoresInvertColors: import("prop-types").Requireable<boolean>;
        accessibilityRole: import("flow-builtin-types").React$PropType$Primitive<import("../View/ViewAccessibility").AccessibilityRole>;
        accessibilityState: import("prop-types").Requireable<object>;
        accessibilityValue: import("prop-types").Requireable<object>;
        accessibilityLiveRegion: import("flow-builtin-types").React$PropType$Primitive<"none" | "assertive" | "polite">;
        importantForAccessibility: import("flow-builtin-types").React$PropType$Primitive<"auto" | "yes" | "no" | "no-hide-descendants">;
        accessibilityViewIsModal: import("prop-types").Requireable<boolean>;
        accessibilityElementsHidden: import("prop-types").Requireable<boolean>;
        onAccessibilityAction: import("prop-types").Requireable<(...args: any[]) => any>;
        onAccessibilityTap: import("prop-types").Requireable<(...args: any[]) => any>;
        onMagicTap: import("prop-types").Requireable<(...args: any[]) => any>;
        testID: import("prop-types").Requireable<string>;
        nativeID: import("prop-types").Requireable<string>;
        onResponderGrant: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderMove: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderReject: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderRelease: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderTerminate: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderTerminationRequest: import("prop-types").Requireable<(...args: any[]) => any>;
        onStartShouldSetResponder: import("prop-types").Requireable<(...args: any[]) => any>;
        onStartShouldSetResponderCapture: import("prop-types").Requireable<(...args: any[]) => any>;
        onMoveShouldSetResponder: import("prop-types").Requireable<(...args: any[]) => any>;
        onMoveShouldSetResponderCapture: import("prop-types").Requireable<(...args: any[]) => any>;
        hitSlop: import("flow-builtin-types").React$PropType$Primitive<{
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
            top?: number | undefined;
        }>;
        pointerEvents: import("flow-builtin-types").React$PropType$Primitive<"auto" | "none" | "box-none" | "box-only">;
        removeClippedSubviews: import("prop-types").Requireable<boolean>;
        renderToHardwareTextureAndroid: import("prop-types").Requireable<boolean>;
        shouldRasterizeIOS: import("prop-types").Requireable<boolean>;
        collapsable: import("prop-types").Requireable<boolean>;
        needsOffscreenAlphaCompositing: import("prop-types").Requireable<boolean>;
    };
}>) | (React.FunctionComponent<any> & ((props: any, context?: any) => never) & import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
    State: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        currentlyFocusedField: any;
        focusTextInput: any;
        blurTextInput: any;
    }>;
    propTypes: {
        autoCapitalize: import("flow-builtin-types").React$PropType$Primitive<"none" | "words" | "sentences" | "characters">;
        autoCompleteType: import("flow-builtin-types").React$PropType$Primitive<"password" | "off" | "tel" | "email" | "name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "postal-code" | "street-address" | "username">;
        autoCorrect: import("prop-types").Requireable<boolean>;
        spellCheck: import("prop-types").Requireable<boolean>;
        autoFocus: import("prop-types").Requireable<boolean>;
        allowFontScaling: import("prop-types").Requireable<boolean>;
        maxFontSizeMultiplier: import("prop-types").Requireable<number>;
        editable: import("prop-types").Requireable<boolean>;
        keyboardType: import("flow-builtin-types").React$PropType$Primitive<"default" | "numeric" | "url" | "email-address" | "phone-pad" | "number-pad" | "ascii-capable" | "numbers-and-punctuation" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search" | "ascii-capable-number-pad" | "visible-password">;
        keyboardAppearance: import("flow-builtin-types").React$PropType$Primitive<"default" | "dark" | "light">;
        returnKeyType: import("flow-builtin-types").React$PropType$Primitive<"search" | "none" | "default" | "next" | "done" | "join" | "go" | "send" | "previous" | "emergency-call" | "google" | "route" | "yahoo">;
        returnKeyLabel: import("prop-types").Requireable<string>;
        maxLength: import("prop-types").Requireable<number>;
        numberOfLines: import("prop-types").Requireable<number>;
        disableFullscreenUI: import("prop-types").Requireable<boolean>;
        enablesReturnKeyAutomatically: import("prop-types").Requireable<boolean>;
        multiline: import("prop-types").Requireable<boolean>;
        textBreakStrategy: import("flow-builtin-types").React$PropType$Primitive<"balanced" | "simple" | "highQuality">;
        onBlur: import("prop-types").Requireable<(...args: any[]) => any>;
        onFocus: import("prop-types").Requireable<(...args: any[]) => any>;
        onChange: import("prop-types").Requireable<(...args: any[]) => any>;
        onChangeText: import("prop-types").Requireable<(...args: any[]) => any>;
        onContentSizeChange: import("prop-types").Requireable<(...args: any[]) => any>;
        onTextInput: import("prop-types").Requireable<(...args: any[]) => any>;
        onEndEditing: import("prop-types").Requireable<(...args: any[]) => any>;
        onSelectionChange: import("prop-types").Requireable<(...args: any[]) => any>;
        onSubmitEditing: import("prop-types").Requireable<(...args: any[]) => any>;
        onKeyPress: import("prop-types").Requireable<(...args: any[]) => any>;
        onLayout: import("prop-types").Requireable<(...args: any[]) => any>;
        onScroll: import("prop-types").Requireable<(...args: any[]) => any>;
        placeholder: import("prop-types").Requireable<string>;
        placeholderTextColor: any;
        scrollEnabled: import("prop-types").Requireable<boolean>;
        secureTextEntry: import("prop-types").Requireable<boolean>;
        selectionColor: any; /**
         * If `true`, focuses the input on `componentDidMount`.
         * The default value is `false`.
         */
        selection: import("flow-builtin-types").React$PropType$Primitive<{
            end?: number | undefined;
            start: number;
        }>;
        value: import("prop-types").Requireable<string>;
        defaultValue: import("prop-types").Requireable<string>;
        clearButtonMode: import("flow-builtin-types").React$PropType$Primitive<"always" | "never" | "while-editing" | "unless-editing">;
        clearTextOnFocus: import("prop-types").Requireable<boolean>;
        selectTextOnFocus: import("prop-types").Requireable<boolean>;
        blurOnSubmit: import("prop-types").Requireable<boolean>;
        style: any; /**
         * Callback that is called when the text input's text changes.
         */
        underlineColorAndroid: any;
        inlineImageLeft: import("prop-types").Requireable<string>;
        inlineImagePadding: import("prop-types").Requireable<number>;
        rejectResponderTermination: import("prop-types").Requireable<boolean>;
        dataDetectorTypes: import("flow-builtin-types").React$PropType$Primitive<"link" | "all" | "none" | "address" | "phoneNumber" | "calendarEvent" | ("link" | "all" | "none" | "address" | "phoneNumber" | "calendarEvent")[]>;
        caretHidden: import("prop-types").Requireable<boolean>;
        contextMenuHidden: import("prop-types").Requireable<boolean>;
        inputAccessoryViewID: import("prop-types").Requireable<string>;
        textContentType: import("flow-builtin-types").React$PropType$Primitive<"none" | "password" | "location" | "name" | "username" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "middleName" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "newPassword" | "oneTimeCode">;
        showSoftInputOnFocus: import("prop-types").Requireable<boolean>;
        accessible: import("prop-types").Requireable<boolean>;
        accessibilityLabel: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        accessibilityHint: import("prop-types").Requireable<string>;
        accessibilityActions: import("flow-builtin-types").React$PropType$Primitive<string[]>;
        accessibilityIgnoresInvertColors: import("prop-types").Requireable<boolean>;
        accessibilityRole: import("flow-builtin-types").React$PropType$Primitive<import("../View/ViewAccessibility").AccessibilityRole>;
        accessibilityState: import("prop-types").Requireable<object>;
        accessibilityValue: import("prop-types").Requireable<object>;
        accessibilityLiveRegion: import("flow-builtin-types").React$PropType$Primitive<"none" | "assertive" | "polite">;
        importantForAccessibility: import("flow-builtin-types").React$PropType$Primitive<"auto" | "yes" | "no" | "no-hide-descendants">;
        accessibilityViewIsModal: import("prop-types").Requireable<boolean>;
        accessibilityElementsHidden: import("prop-types").Requireable<boolean>;
        onAccessibilityAction: import("prop-types").Requireable<(...args: any[]) => any>;
        onAccessibilityTap: import("prop-types").Requireable<(...args: any[]) => any>;
        onMagicTap: import("prop-types").Requireable<(...args: any[]) => any>;
        testID: import("prop-types").Requireable<string>;
        nativeID: import("prop-types").Requireable<string>;
        onResponderGrant: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderMove: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderReject: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderRelease: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderTerminate: import("prop-types").Requireable<(...args: any[]) => any>;
        onResponderTerminationRequest: import("prop-types").Requireable<(...args: any[]) => any>;
        onStartShouldSetResponder: import("prop-types").Requireable<(...args: any[]) => any>;
        onStartShouldSetResponderCapture: import("prop-types").Requireable<(...args: any[]) => any>;
        onMoveShouldSetResponder: import("prop-types").Requireable<(...args: any[]) => any>;
        onMoveShouldSetResponderCapture: import("prop-types").Requireable<(...args: any[]) => any>;
        hitSlop: import("flow-builtin-types").React$PropType$Primitive<{
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
            top?: number | undefined;
        }>;
        pointerEvents: import("flow-builtin-types").React$PropType$Primitive<"auto" | "none" | "box-none" | "box-only">;
        removeClippedSubviews: import("prop-types").Requireable<boolean>;
        renderToHardwareTextureAndroid: import("prop-types").Requireable<boolean>;
        shouldRasterizeIOS: import("prop-types").Requireable<boolean>;
        collapsable: import("prop-types").Requireable<boolean>;
        needsOffscreenAlphaCompositing: import("prop-types").Requireable<boolean>;
    };
}>);
export default _default;
