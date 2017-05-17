app.controller('mainController', function($scope, factory, geolocation) {
$scope.stores = factory.stores;
$scope.currentLocation;

// $scope.getLocation = function(currentLocation){
//   console.log(currentLocation);
//   //now I need to send current location to factory and there do the math
// }

function GetLatlong(currentLocation)
    {
      alert("yoyoyo")
        var geocoder = new google.maps.Geocoder();
        var address = document.getElementById('textboxid').value;

        geocoder.geocode({ 'address': address }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();

            }
        });
  }

geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
    });


});
