console.log('oh hey');

var app = angular.module('inseasonApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/inseason', {
    templateUrl: '/views/partials/inseason-list.html',
    controller: 'inseasonController'
  })
  .when('/inseason/:id', {
    templateUrl: '/views/partials/produce-detail.html'
  })
  .otherwise({
    redirectTo: '/inseason'
  });
}]);

app.controller('inseasonController', ['$scope', function($scope){
  $scope.inseason = inseason;
}]);

app.controller('produceController', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.inseason = inseason;
  $scope.produce = $scope.inseason[$routeParams.id];
}]);
