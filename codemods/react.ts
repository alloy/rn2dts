import {
    ClassDeclaration,
    ClassMethod,
    ClassProperty,
    Identifier,
    MemberExpression,
    Node,
    Transform,
    TSTypeParameterInstantiation,
    TSTypeReference,
} from "jscodeshift"

const ReactComponentStaticClassMembers = [
    "contextTypes",
    "childContextTypes",
    "getDerivedStateFromError",
    "getDerivedStateFromProps"
]

const ReactComponentInstanceClassMembers = [
    "props",
    "state",
    "constructor",
    "componentDidMount",
    "componentDidUpdate",
    "componentWillUnmount",
    "componentDidCatch",
    "shouldComponentUpdate",
    "getChildContext",
    "render",
    "setNativeProps",
    "UNSAFE_componentWillMount",
    "UNSAFE_componentWillUpdate",
    "UNSAFE_componentWillReceiveProps"
]

function isReactComponent(component: ClassDeclaration) {
    const klass = component.superClass
    return (
        MemberExpression.check(klass)
        && Identifier.check(klass.object)
        && klass.object.name === "React"
        && Identifier.check(klass.property)
        && klass.property.name === "Component"
    )
}

export const transformer: Transform = (file, api) => {
    const j = api.jscodeshift;
    const collection = j(file.source);

    collection
        .find(ClassDeclaration, isReactComponent)
        .forEach(path => {
            const superTypeParameters = path.node.superTypeParameters
            if (
                TSTypeParameterInstantiation.check(superTypeParameters)
                && TSTypeReference.check(superTypeParameters.params[1])
            ) {
                superTypeParameters.params.pop();
            }
        })

    collection
        .find(Node, node => {
            if (ClassMethod.check(node) || ClassProperty.check(node)) {
                const list = node.static ? ReactComponentStaticClassMembers : ReactComponentInstanceClassMembers
                return list.includes((node.key as Identifier).name)
            }
            return false
        })
        .filter(path => isReactComponent(path.parent.parent.node))
        .remove()

    return collection.toSource();
};

export default transformer;