module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['js/main.js' , 'js/controller.js'],
				dest: 'bin/<%= pkg.name %>.js'
			}
			
		},

		

		/*watch: {
			scripts: {
				files: ['src/resources/js/**/*.js'],
				tasks: ['concat:dist']
			},
			styles: {
				files: ['src/resources/css/*.scss'],
				tasks: ['sass']
			}
		}*/
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
/*	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ngdocs');*/

	//tasks
	grunt.registerTask('default', ['concate']);

}