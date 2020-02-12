/**
 * API to setup an object or constructor to be able to emit data events.
 *
 * @example
 * function Dog() { ...dog stuff... }
 * mixInEventEmitter(Dog, {bark: true});
 *
 * var puppy = new Dog();
 * puppy.addListener('bark', function (volume) {
 *   console.log('Puppy', this, 'barked at volume:', volume);
 * });
 * puppy.emit('bark', 'quiet');
 * // Puppy <puppy> barked at volume: quiet
 *
 *
 * // A "singleton" object may also be commissioned:
 *
 * var Singleton = {};
 * mixInEventEmitter(Singleton, {lonely: true});
 * Singleton.emit('lonely', true);
 */
declare function mixInEventEmitter(cls: ((...args: any) => any) | any, types: any): void;
export default mixInEventEmitter;
