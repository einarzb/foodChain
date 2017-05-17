app.controller('mainController', function($scope, factory, geolocation) {
$scope.stores = factory.stores;
$scope.currentLocation;

$scope.getLocation = function(currentLocation){
  console.log(currentLocation);
  //now I need to send current location to factory and there do the math
}

geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
    });

    
});
