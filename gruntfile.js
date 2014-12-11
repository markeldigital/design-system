'use strict';
var path = require('path');
module.exports = function (grunt) {
    var projectRoot = path.join(__dirname, "Markel.REMUS.DesignSystem.Web");
    console.log(projectRoot);
    var sourcePathForScss = path.join(projectRoot, "/Scss/design-system.scss");
    console.log(sourcePathForScss);

    var params = {
        'sass-publishing-path': 'design_system/Shared/Scss/',
        'digital-brand-system-root': 'Markel.REMUS.DigitalBrandSystem/',
        'broker-root': '../REMUS.BrokerPortal/Markel.REMUS.BrokerPortal.Web/',
        'public-root': '../REMUS.RetailPublicSite/REMUS.RetailPublicSite/',
        'underwriter-root': '../REMUS.UnderwriterPortal/REMUS.UnderwriterPortal/'
    };

    grunt.initConfig({
        watch: {
            gruntfile: {
                files: path.join(projectRoot, 'gruntfile.js')
            },
            designSystem: {
                files: [path.join(projectRoot, '/Scss/**/*.*'), path.join(projectRoot, '/Components/**/*.*')],
                tasks: ['sync:toAllUIProjects']
            }
        },

        sync: {
            toAllUIProjects: {
                files: [
                    // Digital Brand System
                    {expand: true, cwd: path.join(projectRoot, 'Scss'), src: path.join('**'), dest: path.join(params['digital-brand-system-root'], params['sass-publishing-path'])},

                    // Broker
                    {expand: true, cwd: path.join(projectRoot, 'Scss'), src: path.join('**'), dest: path.join(params['broker-root'], params['sass-publishing-path'])},

                    // Public
                    {expand: true, cwd: path.join(projectRoot, 'Scss'), src: path.join('**'), dest: path.join(params['public-root'], params['sass-publishing-path'])},

                    // Underwriter
                    {expand: true, cwd: path.join(projectRoot, 'Scss'), src: path.join('**'), dest: path.join(params['underwriter-root'], params['sass-publishing-path'])},
                ]
            }
        },

        hub: {
            all: {
                options: {
                    allowSelf: true,
                    concurrent: 6
                },
                src: [
                    // Step 1: Design System will publish itself to the other projects for local dev (from task watch).
                    // Step 2: Each project watches it's own app.scss for changes and this will notice when design_system is updated and published by step 1 above...
                    // the output of step 2 is an app.css for each project that includes Design System as it's base and adds on any extra styles needed for that project.
                    'Markel.REMUS.DigitalBrandSystem/gruntfile.js',
                    '../REMUS.BrokerPortal/Markel.REMUS.BrokerPortal.Web/gruntfile.js',
                    '../REMUS.RetailPublicSite/REMUS.RetailPublicSite/gruntfile.js',
                    '../REMUS.UnderwriterPortal/REMUS.UnderwriterPortal/gruntfile.js'
                ]
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            all: {
                tasks: ["watch", "hub:all:watch"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent:all']);
};
