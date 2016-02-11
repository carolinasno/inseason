var api = angular.module('produceApiFactory', []);

api.factory('produceApi', ['$http', function($http){

  var produceInterface = {};
  var baseUrl = 'http://localhost:3000/produce/';

  produceInterface.allProduce = function(){
    return $http.get(baseUrl);
  };

  return produceInterface;
}]);
