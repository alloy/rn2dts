import EmitterSubscription from "./EmitterSubscription";
import EventEmitter from "./EventEmitter";
import EventHolder from "./EventHolder";
/**
 * @class EventEmitterWithHolding
 * @description
 * An EventEmitterWithHolding decorates an event emitter and enables one to
 * "hold" or cache events and then have a handler register later to actually
 * handle them.
 *
 * This is separated into its own decorator so that only those who want to use
 * the holding functionality have to and others can just use an emitter. Since
 * it implements the emitter interface it can also be combined with anything
 * that uses an emitter.
 */
declare class EventEmitterWithHolding {
    _emitter: EventEmitter;
    _eventHolder: EventHolder;
    _currentEventToken: any | null | undefined;
    _emittingHeldEvents: boolean;
    /**
     * @constructor
     * @param {object} emitter - The object responsible for emitting the actual
     *   events.
     * @param {object} holder - The event holder that is responsible for holding
     *   and then emitting held events.
     */
    constructor(emitter: EventEmitter, holder: EventHolder);
    /**
     * @see EventEmitter#addListener
     */
    addListener(eventType: string, listener: ((...args: any) => any), context: any | null | undefined): any;
    /**
     * @see EventEmitter#once
     */
    once(eventType: string, listener: ((...args: any) => any), context: any | null | undefined): any;
    /**
     * Adds a listener to be invoked when events of the specified type are
     * emitted. An optional calling context may be provided. The data arguments
     * emitted will be passed to the listener function. In addition to subscribing
     * to all subsequent events, this method will also handle any events that have
     * already been emitted, held, and not released.
     *
     * @param {string} eventType - Name of the event to listen to
     * @param {function} listener - Function to invoke when the specified event is
     *   emitted
     * @param {*} context - Optional context object to use when invoking the
     *   listener
     *
     * @example
     *   emitter.emitAndHold('someEvent', 'abc');
     *
     *   emitter.addRetroactiveListener('someEvent', function(message) {
     *     console.log(message);
     *   }); // logs 'abc'
     */
    addRetroactiveListener(eventType: string, listener: ((...args: any) => any), context: any | null | undefined): EmitterSubscription;
    /**
     * @see EventEmitter#removeAllListeners
     */
    removeAllListeners(eventType: string): void;
    /**
     * @see EventEmitter#removeCurrentListener
     */
    removeCurrentListener(): void;
    /**
     * @see EventEmitter#listeners
     */
    listeners(eventType: string): any;
    /**
     * @see EventEmitter#emit
     */
    emit(eventType: string, ...args: any): void;
    /**
     * Emits an event of the given type with the given data, and holds that event
     * in order to be able to dispatch it to a later subscriber when they say they
     * want to handle held events.
     *
     * @param {string} eventType - Name of the event to emit
     * @param {...*} Arbitrary arguments to be passed to each registered listener
     *
     * @example
     *   emitter.emitAndHold('someEvent', 'abc');
     *
     *   emitter.addRetroactiveListener('someEvent', function(message) {
     *     console.log(message);
     *   }); // logs 'abc'
     */
    emitAndHold(eventType: string, ...args: any): void;
    /**
     * @see EventHolder#releaseCurrentEvent
     */
    releaseCurrentEvent(): void;
    /**
     * @see EventHolder#releaseEventType
     * @param {string} eventType
     */
    releaseHeldEventType(eventType: string): void;
}
export default EventEmitterWithHolding;
