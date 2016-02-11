var ctrl = angular.module('produceController', []);

ctrl.controller('produceListController', ['$scope', 'produceApi', function($scope, produceApi){
  $scope.produce = [];

  $scope.allProduce = function(){
    produceApi.allProduce().then(function(response){
      var data = response.data;
      $scope.produce = data;
      return data
    });
  };

  $scope.allProduce();
}]);

ctrl.controller('produceDetailController', ['$scope', '$routeParams', 'produceApi', function($scope, $routeParams, produceApi){
  $scope.eachproduce = [];

  $scope.allProduce = function(){
    produceApi.allProduce().then(function(response){
      $scope.produce = response.data;
      $scope.eachproduce = $scope.produce[$routeParams.id];
    })
  }

  $scope.allProduce();
}]);
