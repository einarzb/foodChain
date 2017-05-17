app.controller('mainController', function($scope, factory) {
$scope.stores = factory.stores;
$scope.currentLocation;

$scope.getLocation = function(currentLocation){
  console.log(currentLocation);
  //now I need to send current location to factory and there do the math
}


});
