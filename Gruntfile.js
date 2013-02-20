module.exports = function(grunt) {

	grunt.initConfig({
		jasmine: {
			example: {
				src: 'src/*js',
				options: {
					src: 'src/*js',
					specs: 'spec/*spec.js',
					helpers: 'spec/helpers/*.js',
					vendor: [
						'vendor/jquery-1.4.2.min.js', 
						'vendor/jasmine-jquery.js'
					]
				}				
			}


		},
		'jasmine-server': {
			browser: false
		}
	});

	// 

	grunt.loadNpmTasks('grunt-contrib-jasmine');


};