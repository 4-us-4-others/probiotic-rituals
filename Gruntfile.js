const package = require('./package.json')

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      dev: {
        tasks: ['style', 'watch', 'nodemon'], // for everything
        options: {
          logConcurrentOutput: true
        }
      }
    },
    compass: {
      options: {
        sassDir: 'stylesheets/scss',
        cssDir: 'stylesheets/css',
        javascriptsPath: 'js',
        outputStyle: 'compressed'
      },
      dev: {
        options: {
          watch: true // watches for changes
        }
      }
    },
    nodemon: {
      dev: {
        env: {
          NODE_ENV: package.nodemonConfig.env.NODE_ENV // get NODE_ENV from package.json
        },
        ext: package.nodemonConfig.ext // get nodemon exts from package.json
      }
    },
    uglify: {
      options: {
        compress: {
          drop_console: true // strip console logs
        },
        output: {
          quote_style: 1, // single quotes
          comments: false // strip comments
        }
      },
      dev: {
        files: [
          {
            expand: true,
            src: ['ours/*.js', '!ours/*.min.js'],
            dest: 'js',
            cwd: 'js',
            rename(dst, src) {
              return `${dst}/${src.replace('.js', '.min.js')}`
            }
          }
        ]
      }
    },
    watch: {
      js: {
        tasks: ['uglify'],
        files: [
          'js/**/*', // watch js
          '!js/**/*min.js' // ignore minified files
        ]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify-es')
  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-concurrent')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-nodemon')

  grunt.registerTask('default', ['concurrent:dev'])
  grunt.registerTask('dev', ['concurrent:dev'])
  grunt.registerTask('style', ['compass:dev'])
  grunt.registerTask('build', ['uglify', 'compass:build'])
}
