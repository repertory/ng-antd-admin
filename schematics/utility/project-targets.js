"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getProjectTargets(project) {
    const projectTargets = project.targets || project.architect;
    if (!projectTargets) {
        throw new Error('Project architect not found.');
    }
    return projectTargets;
}
exports.getProjectTargets = getProjectTargets;
//# sourceMappingURL=project-targets.js.map