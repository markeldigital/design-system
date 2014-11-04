'use strict';
var path = require('path');
module.exports = function (grunt) {
    var projectRoot = path.join(__dirname, "Markel.REMUS.DesignSystem.Web");
    console.log(projectRoot);
    var sourcePathForScss = path.join(projectRoot, "/Scss/design-system.scss");
    console.log(sourcePathForScss);

    var params = {
        'sass-publishing-path': 'design_system/Shared/Scss/',
        'views-publishing-path': 'design_system/Shared/Views/',
        'broker-root': '../REMUS.BrokerPortal/Markel.REMUS.BrokerPortal.Web',
        'public-root': '../REMUS.RetailPublicSite/REMUS.RetailPublicSite',
        'underwriter-root': '../REMUS.UnderwriterPortal/REMUS.UnderwriterPortal'
    };

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
                tasks: ['sass', 'copy:toProjectsforLocalDev']
            }
        },

        copy: {
            toProjectsforLocalDev: {
                files: [
                    // Broker
                    {expand: true, src: ['Sass/**'], dest: params['broker-root'] + params['sass-publishing-path']},
                    {expand: true, src: ['Views/**'], dest: params['broker-root'] + params['views-publishing-path']},
                    // Public
                    {expand: true, src: ['Sass/**'], dest: params['public-root'] + params['sass-publishing-path']},
                    {expand: true, src: ['Views/**'], dest: params['public-root'] + params['views-publishing-path']},
                    // Underwriter
                    {expand: true, src: ['Sass/**'], dest: params['underwriter-root'] + params['sass-publishing-path']},
                    {expand: true, src: ['Views/**'], dest: params['underwriter-root'] + params['views-publishing-path']}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['watch']);

};
