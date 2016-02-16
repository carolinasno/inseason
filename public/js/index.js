console.log('oh hey');

var app = angular.module('inseasonApp', [
  'produceController',
  'marketsController',
  'farmersMarketApiFactory',
  'produceApiFactory',
  'angular.filter',
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/views/partials/inseason-index.html'
  })
  .when('/producelist', {
    templateUrl: '/views/partials/produce-list.html',
    controller: 'produceListController'
  })
  .when('/producelist/:id', {
    templateUrl: '/views/partials/produce-detail.html',
    controller: 'produceDetailController'
  })
  .when('/farmersmarkets', {
    templateUrl: '/views/partials/farmers-market.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);



//
