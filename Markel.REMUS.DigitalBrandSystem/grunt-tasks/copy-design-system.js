var fileUtils = require('./grunt-file-utils');
var path = require('path');
var params = require('./params');

module.exports = function (grunt) {
    var root = params['projectRoot'];

    grunt.registerTask('copy-shared-templates', function () {
        var componentsDir = path.join(root, 'design_system/Components/');
        grunt.file.setBase(componentsDir);
        var templatePaths = grunt.file.expand(["**/template/*.*"]);
        for (var i = 0; i < templatePaths.length; i++) {
            var sourcePath = path.join(componentsDir, templatePaths[i]);
            var templatePathParts = templatePaths[i].split('/');
            var destPath = path.join(root, 'Views/Shared/DesignSystemPartials/', templatePathParts[templatePathParts.length - 1]);
            grunt.file.copy(sourcePath, destPath);
        }
        grunt.file.setBase(root);
    });

    grunt.registerTask('copy-fonts', function () {
        var sourceFontsDir = path.join(root, 'design_system/Fonts');
        var destFontsDir = path.join(root, 'Content/Fonts');
        fileUtils.copyDir(grunt, sourceFontsDir, destFontsDir);
    });

    grunt.registerTask('copyDesignSystem', function () {
        fileUtils.copyNuget(grunt, "Markel.REMUS.DesignSystem.Web", "design_system");
        console.log("root: " + root);
        grunt.task.run(['copy-shared-templates']);
        grunt.task.run(['copy-fonts']);
    });
    
};