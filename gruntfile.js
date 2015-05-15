module.exports = function (grunt) {
  grunt.task.loadNpmTasks('assemble');
  grunt.initConfig({
    assemble:{
      site:{ //targe name
        options:{
          data:['config.yml'] //data files
        },
        files:[
          {src: 'src/index.hbs', dest: 'index.html'},
          {src: 'src/pages/1.hbs', dest: 'dest/1.html'}
        ]
      }
    }
  });
  grunt.registerTask('default', ['assemble']);
};