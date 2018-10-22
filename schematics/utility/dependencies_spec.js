"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@angular-devkit/schematics/testing");
const dependencies_1 = require("./dependencies");
describe('dependencies', () => {
    describe('addDependency', () => {
        let tree;
        const pkgJsonPath = '/package.json';
        let dependency;
        beforeEach(() => {
            tree = new testing_1.UnitTestTree(new schematics_1.EmptyTree());
            tree.create(pkgJsonPath, '{}');
            dependency = {
                type: dependencies_1.NodeDependencyType.Default,
                name: 'my-pkg',
                version: '1.2.3',
            };
        });
        [
            { type: dependencies_1.NodeDependencyType.Default, key: 'dependencies' },
            { type: dependencies_1.NodeDependencyType.Dev, key: 'devDependencies' },
            { type: dependencies_1.NodeDependencyType.Optional, key: 'optionalDependencies' },
            { type: dependencies_1.NodeDependencyType.Peer, key: 'peerDependencies' },
        ].forEach(type => {
            describe(`Type: ${type.toString()}`, () => {
                beforeEach(() => {
                    dependency.type = type.type;
                });
                it('should add a dependency', () => {
                    dependencies_1.addPackageJsonDependency(tree, dependency);
                    const pkgJson = JSON.parse(tree.readContent(pkgJsonPath));
                    expect(pkgJson[type.key][dependency.name]).toEqual(dependency.version);
                });
                it('should handle an existing dependency (update version)', () => {
                    dependencies_1.addPackageJsonDependency(tree, Object.assign({}, dependency, { version: '0.0.0' }));
                    dependencies_1.addPackageJsonDependency(tree, Object.assign({}, dependency, { overwrite: true }));
                    const pkgJson = JSON.parse(tree.readContent(pkgJsonPath));
                    expect(pkgJson[type.key][dependency.name]).toEqual(dependency.version);
                });
            });
        });
        it('should throw when missing package.json', () => {
            expect((() => dependencies_1.addPackageJsonDependency(new schematics_1.EmptyTree(), dependency))).toThrow();
        });
    });
    describe('getDependency', () => {
        let tree;
        beforeEach(() => {
            const pkgJsonPath = '/package.json';
            const pkgJsonContent = JSON.stringify({
                dependencies: {
                    'my-pkg': '1.2.3',
                },
            }, null, 2);
            tree = new testing_1.UnitTestTree(new schematics_1.EmptyTree());
            tree.create(pkgJsonPath, pkgJsonContent);
        });
        it('should get a dependency', () => {
            const dep = dependencies_1.getPackageJsonDependency(tree, 'my-pkg');
            expect(dep.type).toEqual(dependencies_1.NodeDependencyType.Default);
            expect(dep.name).toEqual('my-pkg');
            expect(dep.version).toEqual('1.2.3');
        });
        it('should return null if dependency does not exist', () => {
            const dep = dependencies_1.getPackageJsonDependency(tree, 'missing-pkg');
            expect(dep).toBeNull();
        });
    });
});
//# sourceMappingURL=dependencies_spec.js.map