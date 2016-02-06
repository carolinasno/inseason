var rt = angular.module('routeController', ['ngRoute']);

rt.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/views/partials/inseason-index.html',
    controller: 'mainController'
  })
  .when('/inseason', {
    templateUrl: '/views/partials/inseason-list.html',
    controller: 'inseasonListController'
  })
  .when('/inseason/:id', {
    templateUrl: '/views/partials/produce-detail.html'
  })
  .when('/farmersmarket', {
    templateUrl: '/views/partials/inseason-farmers-market.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
