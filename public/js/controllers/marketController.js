var map = angular.module('marketsController', []);

map.controller('marketController', ['$scope', 'farmersMarketApi', function($scope, farmersMarketApi){

  $scope.markets = [];

  $scope.getAll = function(){
    farmersMarketApi.getAll().then(function(response){
      $scope.markets = $scope.markets.push(response.data);
    });
  };

  $scope.marketSearch = function(){
    farmersMarketApi.search($scope.citySearch).then(function(response){
      $scope.markets = response.data;
    });
  }


  var myMap = {};

  myMap.init = function(){
    this.zoom = 14;
    this.mapEl = document.querySelector('#map');
    this.currentLatLng = new google.maps.LatLng(40.737098, 	-73.990352);

    this.map = new google.maps.Map(this.mapEl, {
      center: this.currentLatLng,
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    this.marker = new google.maps.Marker({
      position: this.currentLatLng,
      map: this.map,
      animation: google.maps.Animation.DROP
    });
  }

  myMap.reCenterMap = function(){
    myMap.map.setZoom(myMap.zoom);
    myMap.map.setCenter(myMap.currentLatLng);
  }

  myMap.init();

}]);
