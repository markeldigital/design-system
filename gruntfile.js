﻿'use strict';
var path = require('path');
module.exports = function (grunt) {
    var projectRoot = __dirname;

    var params = {
        'direct-root': '../REMUS.DirectPortal/REMUS.DirectPortal.web/',
        'components-publishing-path': 'bower_components/design-system/Components/',
        'cms-root': '../REMUS.CMS/CMS/',
        'digital-brand-system-root': '../REMUS.DigitalBrandSystem/Markel.REMUS.DigitalBrandSystem/',
        'quote-journey-root': '../REMUS.QuoteJourney/Markel.REMUS.Modules.QuoteJourney/',
        'broker-root': '../REMUS.BrokerPortal/Markel.REMUS.BrokerPortal.Web/',
        'public-root': '../REMUS.RetailPublicSite/REMUS.RetailPublicSite/',
        'underwriter-root': '../REMUS.UnderwriterPortal/REMUS.UnderwriterPortal/'
        //'live-design-system': '../REMUS.LiveDesignSystem/'
    };

    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    sourcemap: true
                },
                files: {
                        'digital-brand-guidelines/public/css/app-template.css' : 'Components/digital-brand-guidelines/app-template.scss'
                    }
            }
        },

        watch: {
            gruntfile: {
                files: path.join(projectRoot, 'gruntfile.js')
            },
            designSystem: {
                files: [path.join(projectRoot, '/Components/**/*.*')],
                tasks: ['sync:toAllUIProjects', 'sass']
            }
        },

        sync: {
            toAllUIProjects: {
                files: [
                    // CMS
                    {expand: true, cwd: path.join(projectRoot, 'Components'), src: path.join('**'), dest: path.join(params['cms-root'], params['components-publishing-path'])},

                    // Digital Brand System
                    {expand: true, cwd: path.join(projectRoot, 'Components'), src: path.join('**'), dest: path.join(params['digital-brand-system-root'], params['components-publishing-path'])},

                    // Broker
                    {expand: true, cwd: path.join(projectRoot, 'Components'), src: path.join('**'), dest: path.join(params['broker-root'], params['components-publishing-path'])},

                    // Public
                    {expand: true, cwd: path.join(projectRoot, 'Components'), src: path.join('**'), dest: path.join(params['public-root'], params['components-publishing-path'])},

                    // Underwriter
                    {expand: true, cwd: path.join(projectRoot, 'Components'), src: path.join('**'), dest: path.join(params['underwriter-root'], params['components-publishing-path'])},

                    //DirectPortal
                    {expand: true, cwd: path.join(projectRoot, 'Components'), src: path.join('**'), dest: path.join(params['direct-root'], params['components-publishing-path'])},

                    //Live Design System
                    //{expand: true, cwd: path.join(projectRoot, 'Components'), src: path.join('**'), dest: path.join(params['live-design-system'], params['components-publishing-path'])}
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
                    // Step 1: Design System is synced to the other projects.
                    // Step 2: Each project's watches it's own app.scss for changes and this will notice when design_system is updated and published by step 1 above...
                    // the output of step 2 is an app.css for each project that includes Design System as it's base and adds on any extra styles needed for that project.
                    // TODO: need to get apps to update their templates dynamically on local dev to help with feedback on changes in design system to templates.
                    //'../REMUS.BrokerPortal/gruntfile.js',
                    //'../REMUS.CMS/gruntfile.js'
                    //'../REMUS.DigitalBrandSystem/Markel.REMUS.DigitalBrandSystem/gruntfile.js',
                    //'../REMUS.RetailPublicSite/REMUS.RetailPublicSite/gruntfile.js',
                    //'../REMUS.UnderwriterPortal/gruntfile.js'
                ]
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            all: {
                tasks: [
                    "watch" //, "hub:all:watch"
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['concurrent:all']);
};
