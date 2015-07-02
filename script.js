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
}])
.controller('githubLog', ['$scope', function ($scope){
  var script = document.createElement('script');
  script.src = 'https://api.github.com/repos/Nebuleuse/Nebuleuse/commits?callback=ghcb';

  document.getElementsByTagName('head')[0].appendChild(script);

  $scope.ghlog = "";
  $scope.parseData = function(data) {
    for (var i = 0; i <= data.length - 1; i++) {
      $scope.ghlog += data[i].commit.committer.name + " - " + data[i].commit.committer.date;
      var lines = data[i].commit.message.match(/[^\r\n]+/g);
      for (var j = 0; j <= lines.length - 1; j++) {
        $scope.ghlog += "\n - " + lines[j]; //Each line gets an added dash
      }
      $scope.ghlog += "\n";
    };
  };
}]);
function ghcb(response) {
  var data = response.data;
  scope = angular.element(document.getElementsByClassName('OverviewInfo')[0]).scope();
  scope.$apply(function() {
    scope.parseData(data);
  });
}