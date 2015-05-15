module.exports = function (grunt) {
  grunt.task.loadNpmTasks('grunt-contrib-copy');
  grunt.task.loadNpmTasks('assemble');
  grunt.initConfig({
    assemble:{
      site:{
        options:{
          data:['config.yml'],
          layout: 'src/layouts/default.hbs',
          partials: 'src/partials/**/*.hbs',
          assets: 'dest/assets'
        },
        files:[
          {expand: true, cwd: 'src/pages/', src: '**/*.hbs', dest: 'dest'},
          {src: 'src/index.hbs', dest: 'index.html'}
        ]
      }
    },
  
    copy:{
      assets: {
        expand: true, cwd: 'src/assets', src: '**', dest: 'dest/assets'
      }
    }

  });

  grunt.registerTask('default', ['assemble', 'copy']);
};