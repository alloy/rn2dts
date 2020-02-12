import {
    ASTPath,
    AssignmentExpression,
    CallExpression,
    Expression,
    ExpressionStatement,
    Identifier,
    Literal,
    MemberExpression,
    Program,
    Transform,
    VariableDeclaration,
    VariableDeclarator,
    ImportDeclaration,
} from 'jscodeshift';

function getVariableDeclarator(node: VariableDeclaration) {
    const declarator = node.declarations[0];
    if (VariableDeclarator.check(declarator)) {
        return declarator;
    } else {
        throw new Error('[!] Expected VariableDeclarator');
    }
}

function getRequireExpression(node: Expression) {
    if (CallExpression.check(node)) {
        const callee = node.callee;
        if (Identifier.check(callee) && callee.name === 'require') {
            return node;
        }
    }
    return null;
}

function getRequire(node: VariableDeclaration) {
    const declarator = getVariableDeclarator(node);
    const requireNode = declarator.init && getRequireExpression(declarator.init);
    return requireNode;
}

function findVariableDeclarator(path: ASTPath<any>): null | ASTPath<VariableDeclarator> {
    const parent = path.parent;
    if (VariableDeclarator.check(parent.node)) {
        return parent;
    } else {
        const expression = parent.node;
        if (MemberExpression.check(expression) && Identifier.check(expression.property) && expression.property.name === 'default') {
            if (VariableDeclarator.check(parent.parent.node)) {
                return parent.parent;
            }
        }
    }
    return null;
}

export const transformer: Transform = (file, api) => {
    const j = api.jscodeshift;
    let i = 0;

    const collection = j(file.source);
    const expressions: ImportDeclaration[] = [];

    /**
     * require
     */
    collection
        .find(CallExpression, node => Identifier.check(node.callee) && node.callee.name === 'require')
        .forEach(requirePath => {
            const source = requirePath.node.arguments[0];
            if (Literal.check(source)) {
                const variableDeclarator = findVariableDeclarator(requirePath);
                if (variableDeclarator) {
                    const id = variableDeclarator.node.id;
                    const declaration: ASTPath<any> = variableDeclarator.parent;
                    if (Identifier.check(id) && VariableDeclaration.assert(declaration.node) && declaration.node.kind === 'const') {
                        declaration.replace(undefined);
                        const specifiers = [j.importDefaultSpecifier(id)];
                        expressions.push(j.importDeclaration(specifiers, source));
                    } else {
                        const tmpVar = j.identifier(`_Import${i++}`);
                        const specifiers = [j.importDefaultSpecifier(tmpVar)];
                        requirePath.replace(tmpVar);
                        expressions.push(j.importDeclaration(specifiers, source));
                    }
                } else if (ExpressionStatement.check(requirePath.parent.node)) {
                    // This is the only expression, e.g. `require("foo");`
                    expressions.push(j.importDeclaration([], source));
                    requirePath.replace(undefined);
                } else {
                    const tmpVar = j.identifier(`_Import${i++}`);
                    expressions.push(j.importDeclaration([j.importDefaultSpecifier(tmpVar)], source));
                    requirePath.replace(tmpVar);
                }
            } else {
                throw new Error('[!] String-literal expected');
            }
        });
    // Hoist imports to top-level
    collection.find(Program).forEach(path => {
        const body = path.node.body;
        expressions.reverse().forEach(expression => {
            body.unshift(expression);
        });
    });

    /**
     * module.exports
     */
    collection
        .find(AssignmentExpression, node => {
            const left = node.left;
            return (
                MemberExpression.check(left)
                && Identifier.check(left.object) && left.object.name === 'module'
                && Identifier.check(left.property) && left.property.name === 'exports'
            );
        })
        .forEach(path => {
            path.replace(j.exportDefaultDeclaration(path.node.right));
        });

    return collection.toSource();
};
