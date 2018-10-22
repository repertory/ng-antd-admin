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
const ts = require("typescript");
const change_1 = require("../utility/change");
const test_1 = require("../utility/test");
const ast_utils_1 = require("./ast-utils");
function getTsSource(path, content) {
    return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}
function applyChanges(path, content, changes) {
    const tree = new schematics_1.HostTree();
    tree.create(path, content);
    const exportRecorder = tree.beginUpdate(path);
    for (const change of changes) {
        if (change instanceof change_1.InsertChange) {
            exportRecorder.insertLeft(change.pos, change.toAdd);
        }
    }
    tree.commitUpdate(exportRecorder);
    return test_1.getFileContent(tree, path);
}
describe('ast utils', () => {
    let modulePath;
    let moduleContent;
    beforeEach(() => {
        modulePath = '/src/app/app.module.ts';
        moduleContent = `
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';
      import { AppComponent } from './app.component';

      @NgModule({
        declarations: [
          AppComponent
        ],
        imports: [
          BrowserModule
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
    `;
    });
    it('should add export to module', () => {
        const source = getTsSource(modulePath, moduleContent);
        const changes = ast_utils_1.addExportToModule(source, modulePath, 'FooComponent', './foo.component');
        const output = applyChanges(modulePath, moduleContent, changes);
        expect(output).toMatch(/import { FooComponent } from '.\/foo.component';/);
        expect(output).toMatch(/exports: \[FooComponent\]/);
    });
    it('should add export to module if not indented', () => {
        moduleContent = core_1.tags.stripIndents `${moduleContent}`;
        const source = getTsSource(modulePath, moduleContent);
        const changes = ast_utils_1.addExportToModule(source, modulePath, 'FooComponent', './foo.component');
        const output = applyChanges(modulePath, moduleContent, changes);
        expect(output).toMatch(/import { FooComponent } from '.\/foo.component';/);
        expect(output).toMatch(/exports: \[FooComponent\]/);
    });
    it('should add metadata', () => {
        const source = getTsSource(modulePath, moduleContent);
        const changes = ast_utils_1.addSymbolToNgModuleMetadata(source, modulePath, 'imports', 'HelloWorld');
        expect(changes).not.toBeNull();
        const output = applyChanges(modulePath, moduleContent, changes || []);
        expect(output).toMatch(/imports: [\s\S]+,\n\s+HelloWorld\n\s+\]/m);
    });
    it('should add metadata (comma)', () => {
        const moduleContent = `
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';

      @NgModule({
        declarations: [
          AppComponent
        ],
        imports: [
          BrowserModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
    `;
        const source = getTsSource(modulePath, moduleContent);
        const changes = ast_utils_1.addSymbolToNgModuleMetadata(source, modulePath, 'imports', 'HelloWorld');
        expect(changes).not.toBeNull();
        const output = applyChanges(modulePath, moduleContent, changes || []);
        expect(output).toMatch(/imports: [\s\S]+,\n\s+HelloWorld,\n\s+\]/m);
    });
    it('should add metadata (missing)', () => {
        const moduleContent = `
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';

      @NgModule({
        declarations: [
          AppComponent
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
    `;
        const source = getTsSource(modulePath, moduleContent);
        const changes = ast_utils_1.addSymbolToNgModuleMetadata(source, modulePath, 'imports', 'HelloWorld');
        expect(changes).not.toBeNull();
        const output = applyChanges(modulePath, moduleContent, changes || []);
        expect(output).toMatch(/imports: \[HelloWorld]\r?\n/m);
    });
    it('should add metadata (empty)', () => {
        const moduleContent = `
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';

      @NgModule({
        declarations: [
          AppComponent
        ],
        providers: [],
        imports: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
    `;
        const source = getTsSource(modulePath, moduleContent);
        const changes = ast_utils_1.addSymbolToNgModuleMetadata(source, modulePath, 'imports', 'HelloWorld');
        expect(changes).not.toBeNull();
        const output = applyChanges(modulePath, moduleContent, changes || []);
        expect(output).toMatch(/imports: \[HelloWorld],\r?\n/m);
    });
    it('should handle NgModule with no newlines', () => {
        const moduleContent = `
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';

      @NgModule({imports: [BrowserModule], declarations: []})
      export class AppModule { }
    `;
        const source = getTsSource(modulePath, moduleContent);
        const changes = ast_utils_1.addExportToModule(source, modulePath, 'FooComponent', './foo.component');
        const output = applyChanges(modulePath, moduleContent, changes);
        expect(output).toMatch(/import { FooComponent } from '.\/foo.component';/);
        expect(output).toMatch(/exports: \[FooComponent\]/);
    });
});
//# sourceMappingURL=ast-utils_spec.js.map