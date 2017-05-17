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
				{"name": "תל אביב", "lat": 32.109333, "lng":  34.855499},
        {"name":"ירושלים", "lat":	31.771959, "lng" : 35.217018},
        {"name":"רחובות", "lat":31.893960, "lng": 34.807665},
				{"name":"רמת גן", "lat":32.060448,"lng": 34.828021}
        ]
      },
      {
        "name": "מגה בעיר",
        "branches": [
					{"name": "תל אביב", "lat": 32.109333, "lng":  34.855499},
					{"name":"ירושלים", "lat":	31.771959, "lng" : 35.217018},
					{"name":"רחובות", "lat":31.893960, "lng": 34.807665},
					{"name":"רמת גן", "lat":32.060448,"lng": 34.828021}
        ]
      },
      {
        "name": "שופרסל",
        "branches":[
					{"name": "תל אביב", "lat": 32.109333, "lng":  34.855499},
					{"name":"ירושלים", "lat":	31.771959, "lng" : 35.217018},
					{"name":"רחובות", "lat":31.893960, "lng": 34.807665},
					{"name":"רמת גן", "lat":32.060448,"lng": 34.828021}
        ]
      },

      {
        "name": "חצי חינם",
        "branches": [
					{"name": "תל אביב", "lat": 32.109333, "lng":  34.855499},
					{"name":"ירושלים", "lat":	31.771959, "lng" : 35.217018},
					{"name":"רחובות", "lat":31.893960, "lng": 34.807665},
					{"name":"רמת גן", "lat":32.060448,"lng": 34.828021}
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
