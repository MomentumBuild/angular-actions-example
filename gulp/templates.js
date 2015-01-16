module.exports = function(gulp, vars, $, args) {

	gulp.task('index', ['clean'], function() {
	  gulp.src(vars.template_index)
	    .pipe($.jade({ pretty: true, locals: args}))
	    .pipe($.htmlify())
	    .pipe(gulp.dest(vars.root));
	});

	gulp.task('templates', ['clean'], function() {
	  gulp.src(vars.templates)
	    .pipe($.jade({ locals: args }))
	    .pipe($.htmlify())
	    .pipe($.templateCache({
	        // root: "/partials/",
	        standalone: false,
	        module: "actionExample",
	      }))
	    .pipe(gulp.dest('app/'))
	});

}