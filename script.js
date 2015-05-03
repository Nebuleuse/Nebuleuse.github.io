angular.module('nebuleuse', [ 'ngRoute' ])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/overview', {
        templateUrl: 'tpl/overview.html'
      }).
      when('/features', {
        templateUrl: 'tpl/features.html'
      }).
      when('/documentation', {
        templateUrl: 'tpl/doc.html'
      }).
      otherwise({
        redirectTo: '/overview'
      });
  }]);