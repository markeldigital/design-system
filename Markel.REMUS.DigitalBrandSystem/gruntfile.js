'use strict';
var path = require('path');
module.exports = function (grunt) {
    var root = __dirname;
    console.log(root);

    var params = {
        'design-system-nuget-pkg-name': "Markel.REMUS.DesignSystem.Web",
        'digital-brand-design-system': 'design_system/Shared/scss/'
    };

    grunt.initConfig({
        sass: {
            forApps: {
                files: [
                    {
                        src: path.join(root, "/Scss/app.scss"),
                        dest: path.join(root, 'Content/Styles/app.css'),
                        ext: '.css'
                    }
                ]
            },
            forEmails: {
                files: [
                    {
                        src: path.join(root, "zurb-html-email-generation/Scss/email-app.scss"),
                        dest: path.join(root, 'Content/Styles/email-app.css'),
                        ext: '.css'
                    }
                ]
            }
        },

        watch: {
            digitalBrandSystem: {
                files: [path.join(root, '/Scss/**')],
                tasks: ['sass:forApps']
            }           
        }

    });

    grunt.registerTask('copy-shared-templates', function () {
        grunt.file.copy(path.join(root, 'design_system/Components/expander/template/Expander.cshtml'), path.join(root, 'Views/Shared/DesignSystemPartials/Expander.cshtml'));
        grunt.file.copy(path.join(root, 'design_system/Components/primary-navigation/template/PrimaryNavigation.cshtml'), path.join(root, 'Views/Shared/DesignSystemPartials/PrimaryNavigation.cshtml'));
    });

    grunt.registerTask('copyDesignSystem', function () {
        copyNuget(params['design-system-nuget-pkg-name'], "design_system");
        grunt.task.run(['copy-shared-templates']);
    });


    grunt.loadNpmTasks('grunt-collection');


    grunt.registerTask('build', ['copyDesignSystem', 'sass:forApps', 'sass:forEmails']);
    grunt.registerTask('default', ['watch']);
    

    function copyFile(sourcePath, destPath, subDirectory, filename) {
        var destinationFolder = subDirectory ? path.join(destPath, subDirectory) : destPath;
        var destinationPath = path.join(destinationFolder, filename);
        grunt.file.copy(sourcePath, destinationPath);
    }

    function copyDir(sourceDirPath, destDirPath) {
        grunt.file.recurse(sourceDirPath, function (absolutePath, rootDirectory, subDirectory, filename) {
            copyFile(absolutePath, destDirPath, subDirectory, filename);
        });
    }

    function copyNuget(packageName, outputFolder) {
        var regex = new RegExp(packageName + "\" version=\"(.*)\" targetFramework=\"(.*)\"");
        var xml = grunt.file.read("packages.config");
        var versionsFound = regex.exec(xml);

        if (!versionsFound || !versionsFound.length) {
            grunt.fail.fatal("Could not get version for package [" + packageName + "], it was not found in packages.config");
        }

        var version = versionsFound[1];
        var designSystemPath = "../packages/" + packageName + "." + version;
        var sourceRoot = path.join(root, designSystemPath);
        var destination = path.join(root, outputFolder);

        copyDir(sourceRoot, destination);
    }
};
