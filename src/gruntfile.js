module.exports = function(grunt) {
  grunt.initConfig({   
    sass: {
      dist: {
        options: {
          noCache: true,
          style: 'compressed',
          sourcemap: 'none',
          trace: true,
          debugInfo: true
        },
        files: {
          'styles_lyrics.min.css': 'styles_lyrics.scss',
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'styles_lyrics.min.css':'styles_lyrics.min.css'
        }
      }
    },
    watch: {
      sass: {
        files: ['*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass', 'autoprefixer','watch']);
};