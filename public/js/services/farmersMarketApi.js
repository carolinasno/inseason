var api = angular.module('farmersMarketApiFactory', []);

api.factory('farmersMarketApi', ['$http', function($http){

  var inseasonFactoryInterface = {};
  var baseUrl = 'https://data.ny.gov/resource/xjya-f8ng.json';

  inseasonFactoryInterface.getAll = function(){
    return $http.get(baseUrl);
  };

  inseasonFactoryInterface.search = function(search_term){
    var url = baseUrl + '?city=' + search_term;
    return $http.get(url);
  };

  return inseasonFactoryInterface;
}]);
