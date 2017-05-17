app.controller('mainController', function($scope, factory, $state) {
$scope.stores = factory.stores;
$scope.location;

$scope.getLocation = function(location){
alert(location)
}


});
