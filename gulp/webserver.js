module.exports = function(gulp, vars, $, args) {

  gulp.task('webserver', function() {
    
    gulp.src('example/')
      .pipe($.webserver({
        livereload: true,
        directoryListing: false,
        open: true
      }))
      .on('end', function() {
  	$.util.log(	$.util.colors.cyan.bgCyan.bold('--------------------------------------------------------------------' ) );
  	$.util.log(	$.util.colors.cyan.bgCyan.bold('--------------------------------------------------------------------' ) );
  	$.util.log(	$.util.colors.white.bgMagenta.bold('Instructions for use: ' ) );
  	$.util.log(	$.util.colors.white.bgMagenta.bold('To recompile run: gulp --camp ' + args.camp + ' --action ' + args.action + ' --server ' + args.server + '    '  ) );
  	$.util.log(	$.util.colors.cyan.bgCyan.bold('--------------------------------------------------------------------' ) );
  	$.util.log(	$.util.colors.cyan.bgCyan.bold('--------------------------------------------------------------------' ) );
     	})

  });

}