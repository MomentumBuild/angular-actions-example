module.exports = function(gulp, vars, $, args) {

  gulp.task('webserver', ['clean', 'templates', 'index', 'scripts', 'less'], function(){

    $.connect.server({  
      root: ['example'],
      port: 4242,
      livereload: true
    })

  });

}