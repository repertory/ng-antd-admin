"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project_1 = require("./project");
describe('project', () => {
    describe('buildDefaultPath', () => {
        let project;
        beforeEach(() => {
            project = {
                projectType: 'application',
                root: 'foo',
                prefix: 'app',
            };
        });
        it('should handle projectType of application', () => {
            const result = project_1.buildDefaultPath(project);
            expect(result).toEqual('/foo/src/app');
        });
        it('should handle projectType of library', () => {
            project = Object.assign({}, project, { projectType: 'library' });
            const result = project_1.buildDefaultPath(project);
            expect(result).toEqual('/foo/src/lib');
        });
        it('should handle sourceRoot', () => {
            project = Object.assign({}, project, { sourceRoot: 'foo/bar/custom' });
            const result = project_1.buildDefaultPath(project);
            expect(result).toEqual('/foo/bar/custom/app');
        });
    });
});
//# sourceMappingURL=project_spec.js.map