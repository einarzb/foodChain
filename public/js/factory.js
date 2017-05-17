app.factory('factory', function($http){

//initialize
var stores = [];

//stores json
	var json =

  {
    "success": true,
    "data": [
      {
        "name": "RamiLevi",
        "branches": [
        {"tel aviv":"tel aviv"},
        {"jerusalem":"jerusalem"},
        {"rehovot":"rehovot"},
        {"ramat gan":"ramat gan"}
        ]
      },
      {
        "name": "Mega",
        "branches": [
          {"tel aviv":"tel aviv"},
          {"jerusalem":"jerusalem"},
          {"rehovot":"rehovot"},
          {"ramat gan":"ramat gan"}
        ]
      },
      {
        "name": "Shufersal",
        "branches":[
          {"tel aviv":"tel aviv"},
          {"jerusalem":"jerusalem"},
          {"rehovot":"rehovot"},
          {"ramat gan":"ramat gan"}
        ]
      },

      {
        "name": "Hatzi-Hinam",
        "branches": [
          {"tel aviv":"tel aviv"},
          {"jerusalem":"jerusalem"},
          {"rehovot":"rehovot"},
          {"ramat gan":"ramat gan"}
        ]
      },
    ]
  }

var storeName = json.data[0].name;
var storeLocation = json.data[0]["branches"];
console.log(storeName);
console.log(storeLocation);
	return {
		stores:json['data']
	}
});
