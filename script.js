angular.module('nebuleuse', [ 'ngRoute', 'btford.markdown' ])
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
  $scope.docMd = "doc/" + $routeParams.page + ".md";
}]);