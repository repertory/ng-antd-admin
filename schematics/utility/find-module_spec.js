"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const find_module_1 = require("./find-module");
describe('find-module', () => {
    describe('findModule', () => {
        let host;
        const modulePath = '/foo/src/app/app.module.ts';
        beforeEach(() => {
            host = new schematics_1.EmptyTree();
            host.create(modulePath, 'app module');
        });
        it('should find a module', () => {
            const foundModule = find_module_1.findModule(host, 'foo/src/app/bar');
            expect(foundModule).toEqual(modulePath);
        });
        it('should not find a module in another sub dir', () => {
            host.create('/foo/src/app/buzz/buzz.module.ts', 'app module');
            const foundModule = find_module_1.findModule(host, 'foo/src/app/bar');
            expect(foundModule).toEqual(modulePath);
        });
        it('should ignore routing modules', () => {
            host.create('/foo/src/app/app-routing.module.ts', 'app module');
            const foundModule = find_module_1.findModule(host, 'foo/src/app/bar');
            expect(foundModule).toEqual(modulePath);
        });
        it('should work with weird paths', () => {
            host.create('/foo/src/app/app-routing.module.ts', 'app module');
            const foundModule = find_module_1.findModule(host, 'foo//src//app/bar/');
            expect(foundModule).toEqual(modulePath);
        });
        it('should throw if no modules found', () => {
            host.create('/foo/src/app/oops.module.ts', 'app module');
            try {
                find_module_1.findModule(host, 'foo/src/app/bar');
                throw new Error('Succeeded, should have failed');
            }
            catch (err) {
                expect(err.message).toMatch(/More than one module matches/);
            }
        });
        it('should throw if only routing modules were found', () => {
            host = new schematics_1.EmptyTree();
            host.create('/foo/src/app/anything-routing.module.ts', 'anything routing module');
            try {
                find_module_1.findModule(host, 'foo/src/app/anything-routing');
                throw new Error('Succeeded, should have failed');
            }
            catch (err) {
                expect(err.message).toMatch(/Could not find a non Routing NgModule/);
            }
        });
        it('should throw if two modules found', () => {
            try {
                host = new schematics_1.EmptyTree();
                find_module_1.findModule(host, 'foo/src/app/bar');
                throw new Error('Succeeded, should have failed');
            }
            catch (err) {
                expect(err.message).toMatch(/Could not find an NgModule/);
            }
        });
    });
    describe('findModuleFromOptions', () => {
        let tree;
        let options;
        beforeEach(() => {
            tree = new schematics_1.EmptyTree();
            options = { name: 'foo' };
        });
        it('should find a module', () => {
            tree.create('/projects/my-proj/src/app.module.ts', '');
            options.module = 'app.module.ts';
            options.path = '/projects/my-proj/src';
            const modPath = find_module_1.findModuleFromOptions(tree, options);
            expect(modPath).toEqual('/projects/my-proj/src/app.module.ts');
        });
        it('should find a module in a sub dir', () => {
            tree.create('/projects/my-proj/src/admin/foo.module.ts', '');
            options.name = 'other/test';
            options.module = 'admin/foo';
            options.path = '/projects/my-proj/src';
            const modPath = find_module_1.findModuleFromOptions(tree, options);
            expect(modPath).toEqual('/projects/my-proj/src/admin/foo.module.ts');
        });
    });
});
//# sourceMappingURL=find-module_spec.js.map