/**
 * $ObjMap is not actually supported in TS. However, the extent to which it is used in react-native is that it's
 * essentially a mapped type, so that's what we do here instead. This assumption may break in the future when the
 * react-native codebase gains $objMap usage that can't be expressed in TS.
 * 
 * TODO: See if there’s a way we can assert it is being used in the way we expect it to.
 * 
 * @see https://github.com/Microsoft/TypeScript/issues/20352
 */

import {
    Identifier,
    Transform,
    TSTypeReference,
} from "jscodeshift"

export const transformer: Transform = (file, api) => {
    const j = api.jscodeshift;
    const collection = j(file.source);

    collection
        .find(TSTypeReference, node => Identifier.check(node.typeName) && node.typeName.name === "$ObjMap")
        .replaceWith(({ node }) => {
            if (!node.typeParameters) {
                throw new Error("Expected type parameters");
            }
            const [objectType, functionType] = node.typeParameters.params;
            const returnType = j.tsTypeReference(j.identifier("ReturnType"), j.tsTypeParameterInstantiation([functionType]));
            const inKeysType = j.tsTypeOperator.from({ operator: "keyof", typeAnnotation: objectType });
            const mappedType = j.tsMappedType(j.tsTypeParameter("K", inKeysType), returnType);
            return mappedType;
        });

    return collection.toSource();
};

export default transformer;