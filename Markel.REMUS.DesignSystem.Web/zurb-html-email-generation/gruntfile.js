'use strict';
var path = require('path');
module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            compileEmailCSS: {
                options: {
                    precision: 6
                },
                files: [
                    {
                        src: 'Scss/email-app.scss',
                        dest: '../Content/Styles/email-app.css',
                        ext: '.css'
                    }
                ]
            }
        },

        watch: {
            css: {
                files: ['Scss/**/*.*', 'lib/sassy-ink-master/scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['watch']);
};
