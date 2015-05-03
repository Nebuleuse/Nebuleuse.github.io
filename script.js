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
      otherwise({
        redirectTo: '/overview'
      });
  }]);