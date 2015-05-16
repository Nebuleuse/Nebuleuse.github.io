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
      when('/download', {
        templateUrl: 'tpl/download.html'
      }).
      when('/doc', {
        templateUrl: 'tpl/doc.html'
      }).
      when('/doc/:page', {
        templateUrl: 'tpl/doc_page.html',
        controller: 'docMarkdown'
      }).
      otherwise({
        redirectTo: '/overview'
      });
  }])
.controller('docMarkdown', ['$scope', '$routeParams', function ($scope, $routeParams) {
  switch ($routeParams.page) {
    case "api":
    $scope.pageTitle = "Nebuleuse API"
    break;
    case "internals":
    $scope.pageTitle = "Nebuleuse internals"
    break;
    case "cppclient":
    $scope.pageTitle = "C++ client"
    break;
  }
}]);