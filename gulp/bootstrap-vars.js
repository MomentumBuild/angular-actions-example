module.exports = function() { 

  return {
    scripts: [
      'bower_components/angular/angular.min.js', 
      'bower_components/ng-lodash/build/ng-lodash.min.js', 
      'bower_components/momentum-actions/dist/actions.js', 
      'bower_components/momentum-actions/dist/actions-tpl.js', 
      // 'bower_components/angular-animate/angular-animate.min.js',
      // 'bower_components/angular-messages/angular-messages.min.js',
      // 'bower_components/angular-resource/angular-resource.min.js',
      // 'bower_components/angular-sanitize/angular-sanitize.min.js',
      // 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      // 'bower_components/angular-strap/dist/angular-strap.min.js',
      // 'bower_components/angular-strap/dist/angular-strap.tpl.min.js',
      // 'bower_components/satellizer/satellizer.min.js',
      // 'bower_components/angular-loading-bar/build/loading-bar.min.js',
      'app/app.js',
      'app/templates.js',
    ],
    less: [
      //'bower_components/ionicons/css/ionicons.min.css',
      //'bower_components/animate.css/animate.min.css',
      'bower_components/bootstrap/less/*.less',
      'app/**/*.less',
    ],
    template_index: 'app/index.jade',
    templates: 'app/pages/**/*.jade',
    root: 'example/',
    testing: ['../tests/api/**/*.js'],
    fonts: ['bower_components/ionicons/fonts/*.*']
  };

}