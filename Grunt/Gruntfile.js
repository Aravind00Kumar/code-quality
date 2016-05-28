/*eslint-env node*/

(function (module) {

	// load packages
	"use strict";

	module.exports = function (grunt) {
		grunt.initConfig({
			clean: {
				jshint: ['./jshint'],
				eslint: ['./eslint'],
				jscpd: ['./jscpd'],
				plato: ['./plato'],
				sloc: ['./sloc']
			},
			jshint: {
				options: {
					// enabling to read configuration from .jshintrc file
					jshintrc: true,
				
					// displaying in a jshint stylish report
					reporter: require('jshint-stylish'),
				
					// save report in a separate file
					reporterOutput:'./jshint/report.xml'	
				},
				all: ['Gruntfile.js', 'src/**/*.js']
			},

			eslint: {
				options: {
					configFile: "eslint.json",
					outputFile:'./eslint/report.txt'	
				},
				target: ['Gruntfile.js', 'src/**/*.js']
			},

			jscpd: {
				javascript: {
					path: 'src/',
					output: 'jscpd/report.xml'
				},
			},

			jsinspect: {
				all: {
					options: {
						threshold: 10,
						diff: true,
						identifiers: false,
						failOnMatch: true,
						suppress: 100,
						reporter: 'pmd',
						configFile: '.jsinspectrc',
						outputPath:'jsinspect/report'
					},
					src: [
						'src/**/*.js'
					]
				}
			},

			plato: {
				options: {
					jshint: grunt.file.readJSON('jshint.json')
				},
				all: {
					files: {
						'plato/report': ['src/**/*.js']
					}
				}
			},

			sloc: {
				options: {
					//reportType: 'json',
					//reportPath: 'sloc/report.json'
				},
				all: {
					files: {
						'src': ['**.js']
					}
				},
			},
		});

		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-eslint');
		grunt.loadNpmTasks('grunt-jscpd');
		grunt.loadNpmTasks('grunt-plato');
		grunt.loadNpmTasks('grunt-sloc');
		grunt.loadNpmTasks('grunt-jsinspect');

		grunt.registerTask('lint', ['jshint', 'eslint']);
		grunt.registerTask('default', ['clean', 'jscpd', 'plato', 'sloc','jsinspect']);

	};


})(module);


