const { strings } = require('@angular-devkit/core');
const { SchematicsException, apply, branchAndMerge, chain, filter, mergeWith, move, noop, template, url } = require('@angular-devkit/schematics');
const { getWorkspace } = require('@schematics/angular/utility/config');
const { buildRelativePath, findModuleFromOptions } = require('@schematics/angular/utility/find-module');
const { buildDefaultPath } = require('@schematics/angular/utility/project');
const { parseName } = require('@schematics/angular/utility/parse-name');
const { validateHtmlSelector, validateName } = require('@schematics/angular/utility/validation');

function buildSelector(options, projectPrefix) {
  let selector = strings.dasherize(options.name);
  if (options.prefix) {
    selector = `${options.prefix}-${selector}`;
  } else if (options.prefix === undefined && projectPrefix) {
    selector = `${projectPrefix}-${selector}`;
  }

  return selector;
}

function addDeclarationToNgModule(options) {
  return (tree) => {
    return tree;
  }
}

exports.default = function (options) {
  return (tree, context) => {

    const workspace = getWorkspace(tree);
    if (!options.project) {
      throw new SchematicsException('Option (project) is required.');
    }
    const project = workspace.projects[options.project];

    if (options.path === undefined) {
      options.path = buildDefaultPath(project);
    }
    // options.module = findModuleFromOptions(tree, options);

    const parsedPath = parseName(options.path, options.name);

    options.name = parsedPath.name;
    options.path = parsedPath.path;
    options.selector = options.selector || buildSelector(options, project.prefix);

    validateName(options.name);
    validateHtmlSelector(options.selector);

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

    console.log(options);

    return chain([
      branchAndMerge(chain([
        addDeclarationToNgModule(options),
        mergeWith(templateSource),
      ]))
    ]);

    return tree;
  };
}
