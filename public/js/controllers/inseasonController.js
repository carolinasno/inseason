var ctrl = angular.module('inseasonController', []);

ctrl.controller('mainController', ['$scope', function($scope){

}]);

ctrl.controller('inseasonListController', ['$scope', function($scope){
  $scope.inseason = inseason;
}]);

ctrl.controller('produceDetailController', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.inseason = inseason;
  $scope.produce = $scope.inseason[$routeParams.id];
}]);
