'use strict';
var path = require('path');
var params = require('./grunt-tasks/params');

module.exports = function (grunt) {
    var root = params['projectRoot'];
    var remusRoot = params['remusRoot'];
    require('./grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dev: {
                options: {
                },
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
            generateAppCss: {
                files: [path.join(root, '/Scss/**'), path.join(root, '/design_system/Shared/Scss/**')],
                tasks: ['generateAppCss']
            }
            // TODO: watch JS as well. (see Public site for inspiration)
        }
    });

    grunt.loadNpmTasks('grunt-collection');
    grunt.registerTask('generateAppCss', ['sass']);
    grunt.registerTask('build', ['copyDesignSystem', 'generateAppCss', 'sass:forEmails']);
    grunt.registerTask('default', ['watch']);
};