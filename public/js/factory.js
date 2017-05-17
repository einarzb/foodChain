app.factory('factory', function($http){

//initialize
var stores = [];

//stores json
	var json =

  {
    "success": true,
    "data": [
      {
        "name": "רמי לוי",
        "branches": [
        {"תל אביב":"תל אביב"},
        {"ירושלים":"ירושלים"},
        {"רחובות":"רחובות"},
        {"רמת גן":"רמת גן"}
        ]
      },
      {
        "name": "מגה בעיר",
        "branches": [
          {"תל אביב":"תל אביב"},
          {"ירושלים":"ירושלים"},
          {"רחובות":"רחובות"},
          {"רמת גן":"רמת גן"}
        ]
      },
      {
        "name": "שופרסל",
        "branches":[
          {"תל אביב":"תל אביב"},
          {"ירושלים":"ירושלים"},
          {"רחובות":"רחובות"},
          {"רמת גן":"רמת גן"}
        ]
      },

      {
        "name": "חצי חינם",
        "branches": [
          {"תל אביב":"תל אביב"},
          {"ירושלים":"ירושלים"},
          {"רחובות":"רחובות"},
          {"רמת גן":"רמת גן"}
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
