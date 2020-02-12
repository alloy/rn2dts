import {
    FunctionDeclaration,
    Identifier,
    ImportDeclaration,
    ObjectMethod,
    Node,
    Transform,
    TSTypeAnnotation,
} from "jscodeshift"

export const transformer: Transform = (file, api) => {
    const j = api.jscodeshift;
    const collection = j(file.source);

    collection
        .find(Node, node => {
            if (FunctionDeclaration.check(node) || ObjectMethod.check(node)) {
                if (!node.returnType) {
                    // console.log(`[!] Missing function return type annotation (${node.id.name})`)
                    return false;
                }
                return true;
            }
        })
        .replaceWith(path => {
            const node = path.node;
            if (FunctionDeclaration.check(node) || ObjectMethod.check(node)) {
                const statements = [];
                if (!(TSTypeAnnotation.check(node.returnType) && node.returnType.typeAnnotation.type === 'TSVoidKeyword')) {
                    statements.push(j.returnStatement(j.tsAsExpression.from({
                        expression: j.literal(null),
                        typeAnnotation: j.tsAnyKeyword(),
                    })));
                }
                return ({
                    ...node,
                    body: j.blockStatement(statements),
                });
            }
        });

    collection
        .find(ImportDeclaration)
        .forEach(importDeclaration => {
            const specifiers = importDeclaration.node.specifiers.filter(specifier => {
                const id = specifier.local;
                if (Identifier.check(id)) {
                    const count = collection
                        .find(Identifier, node => node.name === id.name)
                        .filter(path => path.parent.node !== specifier)
                        .length;
                    return count > 0;
                } else {
                    throw new Error(`[!] Unexpected specifier identifier: ${id}`);
                }
            });
            if (specifiers.length === 0) {
                importDeclaration.replace(undefined);
            } else if (specifiers.length < importDeclaration.node.specifiers.length) {
                importDeclaration.replace(j.importDeclaration(specifiers, importDeclaration.node.source));
            }
        });

    return collection.toSource();
};
