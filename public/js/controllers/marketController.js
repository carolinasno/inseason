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
      $scope.marketLatLng();
    });
  }

  var farmersMarketMarker;

  $scope.marketLatLng = function(){
    for (var i = 0; i < $scope.markets.length; i++) {
      var marketName = $scope.markets[i].market_name;
      var marketLocation = {
        lat: $scope.markets[i].latitude,
        lng: $scope.markets[i].longitude
      }
      console.log(marketName, marketLocation);
    }
    farmersMarketMarker = new google.maps.LatLng(marketLocation[0], marketLocation[1]);
  };

  var myMap = {};

  myMap.init = function(){

    this.zoom = 14;
    this.mapEl = document.querySelector('#map');
    this.currentLatLng = new google.maps.LatLng(40.73712, -73.99029);

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

  myMap.init();

}]);
