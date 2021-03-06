require('promise');
const { foo, bar } = require('some-module');
const FooBar = require('default-export-single-var');

const AssignmentWithNonDefaultExpression = require('assignment-with-non-default-expression').foo;

function someFunction() {
    const ExplicitDefaultUsage = require('explicit-default-usage').default;
    const HoistedFromMultiplePlaces = require('hoisted-from-multiple-places');
    let baz = require('some-other-module');
    baz = require('and-yet-another-module')(foo);
    require('yet-another-module').foo(foo, bar, baz);
    return require('and-yet-another-another-module');
}

function anotherFunction() {
    const HoistedFromMultiplePlaces = require('hoisted-from-multiple-places');
}

module.exports = someFunction;
module.exports = { someFunction, get someFunction() {}, AliasedSomeFunction: someFunction };
