import { $FlowFixMeEmpty, $TEMPORARY$object } from "flow-builtin-types";
declare class EventHolder {
    _heldEvents: any;
    _currentEventKey: any | null | undefined;
    constructor();
    /**
     * Holds a given event for processing later.
     *
     * TODO: Annotate return type better. The structural type of the return here
     *       is pretty obvious.
     *
     * @param {string} eventType - Name of the event to hold and later emit
     * @param {...*} Arbitrary arguments to be passed to each registered listener
     * @return {object} Token that can be used to release the held event
     *
     * @example
     *
     *   holder.holdEvent({someEvent: 'abc'});
     *
     *   holder.emitToHandler({
     *     someEvent: function(data, event) {
     *       console.log(data);
     *     }
     *   }); //logs 'abc'
     *
     */
    holdEvent(eventType: string, ...args: any): $TEMPORARY$object<{
        eventType: string;
        index: $FlowFixMeEmpty;
    }>;
    /**
     * Emits the held events of the specified type to the given listener.
     *
     * @param {?string} eventType - Optional name of the events to replay
     * @param {function} listener - The listener to which to dispatch the event
     * @param {?object} context - Optional context object to use when invoking
     *   the listener
     */
    emitToListener(eventType: string | null | undefined, listener: ((...args: any) => any), context: any | null | undefined): void;
    /**
     * Provides an API that can be called during an eventing cycle to release
     * the last event that was invoked, so that it is no longer "held".
     *
     * If it is called when not inside of an emitting cycle it will throw.
     *
     * @throws {Error} When called not during an eventing cycle
     */
    releaseCurrentEvent(): void;
    /**
     * Releases the event corresponding to the handle that was returned when the
     * event was first held.
     *
     * @param {object} token - The token returned from holdEvent
     */
    releaseEvent(token: any): void;
    /**
     * Releases all events of a certain type.
     *
     * @param {string} type
     */
    releaseEventType(type: string): void;
}
export default EventHolder;
