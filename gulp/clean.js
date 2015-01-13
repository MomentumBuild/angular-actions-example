module.exports = function(gulp, vars, $, args) {
	console.log('clean vars', vars.root);
gulp.task('clean', function () {  
  return gulp.src(vars.root, {read: false})
    .pipe($.clean({force: true}));
});
}