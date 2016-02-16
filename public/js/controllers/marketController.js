var map = angular.module('marketsController', []);

map.controller('marketController', ['$scope', 'farmersMarketApi', function($scope, farmersMarketApi){

  $scope.markets = [];

  var markers = [];

  var infowindows = [];

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

  $scope.marketLatLng = function(){
    for (var i = 0; i < $scope.markets.length; i++) {
      var marketInfo =
      '<div class="market-info">' +
      '<h3 id="market-name">' +
      $scope.markets[i].market_name +
      '</h3>' +
      '<h4 id="market-address">' +
      $scope.markets[i].address_line_1 + ', ' + $scope.markets[i].city + ', NY' +
      '</h4>' +
      '<p id="market-hours">' +
      'HOURS' +
      '</br>' +
      $scope.markets[i].operation_hours +
      '</p>' +
      '<p id="market-season">' +
      'SEASON' +
      '</br>' +
      $scope.markets[i].operation_season +
      '</p>' +
      '<p id="market-phone">' +
      'CONTACT' +
      '</br>' +
      $scope.markets[i].phone +
      '</p>' +
      '</div>';

      var marketLocation = {
        lat: $scope.markets[i].latitude,
        lng: $scope.markets[i].longitude
      };

      console.log(marketLocation);

      var farmersMarketMarkerLL = new google.maps.LatLng(marketLocation.lat, marketLocation.lng);

      infowindows[i] = new google.maps.InfoWindow({
        content: marketInfo
      });

      markers[i] = new google.maps.Marker({
        position: farmersMarketMarkerLL,
        map: myMap.getMap(),
        animation: google.maps.Animation.DROP,
      });

      google.maps.event.addListener(markers[i], 'click', (function(marker, i){
        return function(){
          infowindows[i].open(myMap.getMap(), markers[i]);
        };
      })(markers[i], i));
    }
  };

  var myMap = {};

  myMap.init = function(){

    this.zoom = 12;
    this.mapEl = document.querySelector('#map');
    this.currentLatLng = new google.maps.LatLng(40.73712, -73.99029);

    this.map = new google.maps.Map(this.mapEl, {
      center: this.currentLatLng,
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }

  myMap.getMap = function(){
    return this.map;
  }

  myMap.init();

}]);
