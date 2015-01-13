angular.module("momentum.actions").run(["$templateCache", function($templateCache) {$templateCache.put("/directives/petition.feed.html","<div id=\"feed\"><div id=\"empty\" data-ng-if=\"!Feed.actions.length\"><p>No one has currently taking any actions on this page...</p></div><div data-ng-if=\"Feed.actions.length\" data-ng-repeat=\"a in Feed.actions | orderBy:\'-createdAt\'\" class=\"actionItem\"><p><b>{{ a.first_name }} said</b> {{ a.message}}<small class=\"clearfix\">at {{ a.createdAt | date : \'medium\' }}</small></p></div></div>");
$templateCache.put("/directives/petition.form.html","<form id=\"actionForm\" data-ng-submit=\"Form.create()\"><div class=\"form-group\"><div class=\"row\"><div class=\"col-sm-6\"><input type=\"text\" data-ng-model=\"Form.newAction.first_name\" data-ng-required=\"true\" placeholder=\"First Name\" class=\"form-control\"/></div><div class=\"col-sm-6\"><input type=\"text\" data-ng-model=\"Form.newAction.last_name\" data-ng-required=\"true\" placeholder=\"Last Name\" class=\"form-control\"/></div></div></div><div class=\"form-group\"><input type=\"email\" data-ng-model=\"Form.newAction.email\" data-ng-required=\"true\" placeholder=\"Email\" class=\"form-control\"/></div><div class=\"form-group\"><input type=\"number\" data-ng-model=\"Form.newAction.postcode\" data-ng-required=\"true\" placeholder=\"Postcode\" class=\"form-control\"/></div><div class=\"form-group\"><textarea data-ng-model=\"Form.newAction.message\" data-ng-required=\"true\" placeholder=\"Leave them a message!\" class=\"form-control\"></textarea></div><input type=\"hidden\" data-ng-model=\"Form.newAction.voted\" data-ng-value=\"true\"/><button class=\"btn btn-success btn-block btn-lg\">Vote Yes!</button></form>");}]);