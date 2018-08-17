module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		//
		copy : {
			files : {
				cwd : 'extension', 
				src : '**/*',
				dest : 'build',
				expand : true
			}
		},
		
		//
		uglify : {
			dist: {
        files: {
            'build/js/backgroundpage.js': 'extension/js/backgroundpage.js',
            'build/js/content.js': 'extension/js/content.js'
        }
    	}
		},
		
		//
		compress : {
			main : {
				options : {
					archive: 'dist/extension.zip'
				},
				expand : true,
				cwd : 'build/',
				src : ['**/*'],
				dest : ''
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');

	// Default task(s).
	grunt.registerTask('default', ['copy', 'uglify', 'compress']);

};