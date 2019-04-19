module.exports = function (grunt){
	requiere('time-grunt')(grunt);
	requiere('jit-grunt')(grunt, {
		useminPrepare: 'grunt-usemin'
	});
	grunt.initConfig({
		sass:{
			dist:{
				files:[{
					expand:true,
					cwd:'css',
					src:['*.scss'],
					dest:'css',
					ext:'.css'
				}]
			}
		},

		watch: {
			files: ['css/*'],
			task: ['css']
		},

		browserSync: {
			dev: {
	        	bsFiles: { //browser files
	        		src: [
	        			'css/*.css',
	        			'*.html',
	        			'js/*.js'
	        			] 
	        		},
	       		 options: {
	        		watchTask: true,
	        		server: {
	        			baseDir: './' //Directorio base para nuestro servidor	
	    		}
			}
		}
	},
	imagemin: {
		dynamic: {
			files: [{
				expand: true,
				cwd: './',
				src: 'imges/*.{png,gif,jpg,jpeg}',
				dest: 'dist/'
				}]
			}		
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('default', ['browserSync', 'watch']);
	grunt.registerTask('img:compress', ['imagemin']);

	
};