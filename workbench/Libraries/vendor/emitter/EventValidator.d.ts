/**
 * EventValidator is designed to validate event types to make it easier to catch
 * common mistakes. It accepts a map of all of the different types of events
 * that the emitter can emit. Then, if a user attempts to emit an event that is
 * not one of those specified types the emitter will throw an error. Also, it
 * provides a relatively simple matcher so that if it thinks that you likely
 * mistyped the event name it will suggest what you might have meant to type in
 * the error message.
 */
declare const EventValidator: {
    /**
     * @param {Object} emitter - The object responsible for emitting the actual
     *                             events
     * @param {Object} types - The collection of valid types that will be used to
     *                         check for errors
     * @return {Object} A new emitter with event type validation
     * @example
     *   const types = {someEvent: true, anotherEvent: true};
     *   const emitter = EventValidator.addValidation(emitter, types);
     */
    addValidation: (emitter: any, types: any) => {
        emit: (arg0: any) => any;
    };
};
export default EventValidator;
