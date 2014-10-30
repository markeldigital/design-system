'use strict';
var path = require('path');
module.exports = function (grunt) {
    var root = __dirname;
    console.log(root);
    var sourcePathForScss = path.join(root, "/Scss/design-system.scss");
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
                    dest: 'Content/Styles/design-system.css',
                    ext: '.css'
                }
                ]
            }
        },

        watch: {
            gruntfile: {
                files: path.join(root, 'gruntfile.js')
            },
            css: {
                files: path.join(root, '/Scss/**'),
                tasks: ['sass']
            }
        }

    });

    grunt.loadNpmTasks('grunt-collection');
    grunt.registerTask('default', ['watch']);

};
