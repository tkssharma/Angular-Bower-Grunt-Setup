module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['js/main.js','js/controller.js'],
				dest: 'bin/<%= pkg.name %>.js'
			}

			
		},
		watch :
		{
           concat :
           {
           files : 'js/*.js' ,
           tasks : ['concat']

           }

		},


		uglify :{

            my_target :{

            	files:{
                       'bin/js/<%= pkg.name %>.js' : ['bin/<%= pkg.name %>.js']

            	}
            }

		}

	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');


	//tasks
	grunt.registerTask('default', ['concat' , 'watch']);


}