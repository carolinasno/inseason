var map = angular.module('marketsController', []);

map.controller('marketController', ['$scope', 'farmersMarketApi', function($scope, farmersMarketApi){

  $scope.markets = [];

  $scope.markers = [];

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

      var myInfoWindow = new google.maps.InfoWindow({
        content: marketInfo
      });

      var marker = new google.maps.Marker({
        position: farmersMarketMarkerLL,
        map: myMap.getMap(),
        animation: google.maps.Animation.DROP,
        infowindow: myInfoWindow
      });

      $scope.markers.push(marker);

      marker.addListener('click', function(){
        console.log('hey girl');
        myInfoWindow.open(myMap.getMap(), marker);
      });
    }
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

    // this.marker = new google.maps.Marker({
    //   position: this.currentLatLng,
    //   map: this.map,
    //   animation: google.maps.Animation.DROP
    // });
  }

  myMap.getMap = function(){
    return this.map;
  }

  myMap.init();

}]);
