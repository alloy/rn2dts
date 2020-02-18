import {
    ClassMethod,
    ClassProperty,
    Identifier,
    Node,
    Transform,
} from "jscodeshift"

export const transformer: Transform = (file, api) => {
    const j = api.jscodeshift;
    const collection = j(file.source);

    collection
        .find(Node, node =>
            (ClassProperty.check(node) || ClassMethod.check(node))
            && Identifier.check(node.key) && node.key.name.startsWith("_"))
        .remove()

    return collection.toSource();
};

export default transformer;