const path = require('path');
const ts = require('typescript');
const { strings } = require('@angular-devkit/core');
const { SchematicsException, apply, branchAndMerge, chain, filter, mergeWith, move, noop, template, url } = require('@angular-devkit/schematics');
const { getWorkspace } = require('@schematics/angular/utility/config');
const { buildDefaultPath } = require('@schematics/angular/utility/project');
const { parseName } = require('@schematics/angular/utility/parse-name');
const { validateHtmlSelector, validateName } = require('@schematics/angular/utility/validation');
const { buildRelativePath } = require('@schematics/angular/utility/find-module');
const { addImportToModule } = require('@schematics/angular/utility/ast-utils');
const { InsertChange } = require('@schematics/angular/utility/change');

function buildSelector(options, projectPrefix) {
  let selector = strings.dasherize(options.name);
  if (options.prefix) {
    selector = `${options.prefix}-${selector}`;
  } else if (options.prefix === undefined && projectPrefix) {
    selector = `${projectPrefix}-${selector}`;
  }

  return selector;
}

function addImportToParentModule(options) {
  return (tree) => {
    const currentPath = path.join(options.path, options.flat ? path.dirname(options.name) : options.name);
    const currentModule = path.join(currentPath, path.basename(options.name) + '.module');
    const parentPath = path.dirname(currentPath);
    const parentModule = path.join(parentPath, path.basename(parentPath) + '-children.module.ts');

    if (tree.exists(parentModule)) {
      const source = ts.createSourceFile(parentModule, tree.read(parentModule).toString('utf-8'), ts.ScriptTarget.Latest, true);
      const inportChanges = addImportToModule(source, parentModule, strings.classify(`${options.name}Module`), buildRelativePath(parentModule, currentModule));

      const inportRecorder = tree.beginUpdate(parentModule);
      for (const change of inportChanges) {
        if (change instanceof InsertChange) {
          inportRecorder.insertLeft(change.pos, change.toAdd);
        }
      }
      tree.commitUpdate(inportRecorder);
    }

    return tree;
  };
}

exports.default = function (options) {
  return (tree) => {

    const workspace = getWorkspace(tree);
    if (!options.project) {
      throw new SchematicsException('Option (project) is required.');
    }
    const project = workspace.projects[options.project];
    options.rootPath = buildDefaultPath(project);

    if (options.path === undefined) {
      options.path = options.rootPath;
    }

    const parsedPath = parseName(options.path, options.name);

    options.name = parsedPath.name;
    options.path = parsedPath.path;
    options.selector = options.selector || buildSelector(options, project.prefix);

    validateName(options.name);
    validateHtmlSelector(options.selector);

    if (options.children) {
      options.children = buildRelativePath(
        path.join(options.rootPath, path.basename(options.rootPath) + '.module'),
        path.join(options.path, options.flat ? path.dirname(options.name) : options.name, path.basename(options.name) + '-children.module')
      ).replace(/^\./, '~');
    }

    const templateSource = apply(url('./files'), [
      options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
      options.children ? noop() : filter(path => !path.endsWith('-children.module.ts')),
      template({
        ...strings,
        'if-flat': (s) => options.flat ? '' : s,
        ...options,
      }),
      move(parsedPath.path),
    ]);

    return chain([
      branchAndMerge(chain([
        addImportToParentModule(options),
        mergeWith(templateSource),
      ]))
    ]);

    return tree;
  };
}
