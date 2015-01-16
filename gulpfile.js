var gulp = require('gulp');
var path = require('path');
var opn = require('opn');
var args = require('yargs').argv;
if(args.server === 'local') args.host = 'http://localhost:1337';
else if(args.server === 'live') args.host = 'http://www.momentum.build';
var vars = require('./gulp/vars');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-angular-templatecache': 'templateCache',
    'gulp-angular-htmlify': 'htmlify'
  }
});

// Create process
require('./gulp/create')(gulp, vars(), $, args);

// Default process
require('./gulp/clean')(gulp, vars(), $, args);
require('./gulp/less')(gulp, vars(), $, args);
require('./gulp/scripts')(gulp, vars(), $, args);
require('./gulp/templates')(gulp, vars(), $, args);
require('./gulp/webserver')(gulp, vars(), $, args);

// Rerun the task when a file changes
require('./gulp/watch')(gulp, vars(), $, args);

// Tasks
gulp.task('create', ['clean-vars', 'move-vars', 'clean-templates', 'move-less', 'move-jade']);

gulp.task('default', ['clean', 'templates', 'index', 'scripts', 'less', 'webserver', 'watch'], function() {
  opn('http://localhost:4242');
  $.util.log(	$.util.colors.cyan.bgCyan.bold('--------------------------------------------------------------------' ) );
  $.util.log(	$.util.colors.cyan.bgCyan.bold('--------------------------------------------------------------------' ) );
  $.util.log(	$.util.colors.white.bgMagenta.bold('Instructions for use: ' ) );
  $.util.log(	$.util.colors.white.bgMagenta.bold('To recompile run: gulp --camp ' + args.camp + ' --action ' + args.action + ' --server ' + args.server + '    '  ) );
  $.util.log(	$.util.colors.cyan.bgCyan.bold('--------------------------------------------------------------------' ) );
  $.util.log(	$.util.colors.cyan.bgCyan.bold('--------------------------------------------------------------------' ) );
});

