module.exports = function(gulp, vars, $, args) {
    
    gulp.task('watch',  ['clean', 'templates', 'index', 'scripts', 'less'], function() {
        gulp.watch([ 
        	vars.less, 
        	vars.scripts[2],
        	vars.scripts[3], 
        	vars.scripts[4], 
        	vars.templates, 
        	'*.jade'
        ], 
        [ 
        	'templates', 
        	'index', 
        	'less', 
        	'scripts'
        ]);
    });
  
}