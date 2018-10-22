"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@angular-devkit/schematics/testing");
const json_utils_1 = require("./json-utils");
describe('json-utils', () => {
    const filePath = '/temp';
    let tree;
    beforeEach(() => {
        tree = new testing_1.UnitTestTree(new schematics_1.HostTree());
    });
    describe('insertPropertyInAstObjectInOrder', () => {
        function runTest(obj, prop, val) {
            const content = JSON.stringify(obj, null, 2);
            tree.create(filePath, content);
            const ast = core_1.parseJsonAst(content);
            const rec = tree.beginUpdate(filePath);
            if (ast.kind === 'object') {
                json_utils_1.insertPropertyInAstObjectInOrder(rec, ast, prop, val, 2);
            }
            tree.commitUpdate(rec);
            const result = JSON.parse(tree.readContent(filePath));
            // Clean up the tree by deleting the file.
            tree.delete(filePath);
            return result;
        }
        it('should insert a first prop', () => {
            const obj = {
                m: 'm',
                z: 'z',
            };
            const result = runTest(obj, 'a', 'val');
            expect(Object.keys(result)).toEqual(['a', 'm', 'z']);
        });
        it('should insert a middle prop', () => {
            const obj = {
                a: 'a',
                z: 'z',
            };
            const result = runTest(obj, 'm', 'val');
            expect(Object.keys(result)).toEqual(['a', 'm', 'z']);
        });
        it('should insert a last prop', () => {
            const obj = {
                a: 'a',
                m: 'm',
            };
            const result = runTest(obj, 'z', 'val');
            expect(Object.keys(result)).toEqual(['a', 'm', 'z']);
        });
        it('should insert multiple props', () => {
            let obj = {};
            obj = runTest(obj, 'z', 'val');
            expect(Object.keys(obj)).toEqual(['z']);
            obj = runTest(obj, 'm', 'val');
            expect(Object.keys(obj)).toEqual(['m', 'z']);
            obj = runTest(obj, 'a', 'val');
            expect(Object.keys(obj)).toEqual(['a', 'm', 'z']);
            obj = runTest(obj, 'b', 'val');
            expect(Object.keys(obj)).toEqual(['a', 'b', 'm', 'z']);
        });
    });
});
//# sourceMappingURL=json-utils_spec.js.map