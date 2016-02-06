console.log('oh hey');

var app = angular.module('inseasonApp', [
  'inseasonController',
  'routeController',
  'mapsController',
  'farmersMarketApiFactory',
  'angular.filter'
]);
