'use strict';
var path = require('path');
module.exports = function (grunt) {
    var projectRoot = path.join(__dirname, "Markel.REMUS.DesignSystem.Web");
    console.log(projectRoot);
    var sourcePathForScss = path.join(projectRoot, "/Scss/design-system.scss");
    console.log(sourcePathForScss);
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'compressed'
                },
                files: [
                {
                    src: sourcePathForScss,
                    dest: path.join(projectRoot, 'Content/Styles/design-system.css'),
                    ext: '.css'
                }
                ]
            }
        },

        watch: {
            gruntfile: {
                files: path.join(projectRoot, 'gruntfile.js')
            },
            css: {
                files: path.join(projectRoot, '/Scss/**'),
                tasks: ['sass']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['watch']);

};
