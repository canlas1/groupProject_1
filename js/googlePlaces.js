$(document).ready(function() {
    console.log("ready!");

var map;
var service;
var infowindow;
var searchTerm
 // Grab this part into example and see if it works
 $("#submitForm").on("click", function(event) {

        event.preventDefault();
        console.log(event);
        var term = $("#dba-input").val().trim();
        console.log("term: ", term);
        var area = $('#area-input').val().trim()
        console.log("area: ", area);
        var searchTerm = term + " " + area;
        console.log('search term: ', searchTerm);
        initMap(searchTerm);
    });

function initMap(searchTerm) {
  var newYork = new google.maps.LatLng(40.785091, -73.968285);

  map = new google.maps.Map(document.getElementById('map'), {
      center: newYork,
      zoom: 11
    });

  var request = {
    location: newYork,
    radius: '500',
    query: searchTerm
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {

      var place = results[i];
      console.log("results: ", place);
     createMarker(results[i]);

     var placeId = results[i].place_id;
     console.log("id: ", placeId);
     var placeName = results[i].name;
     console.log("name: ", placeName);
     var placeAddress = results[i].formatted_address;
     console.log("address: ", placeAddress);
     var placePhotoRef = results[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100});
     console.log("photo ref: ", placePhotoRef);

          var addressParts = placeAddress.split(",");
           console.log("address split ", addressParts);
           var streetParts = addressParts[0].split(" ");
           console.log("street split: ", streetParts);
           var zipParts = addressParts[2].split(" ");
           console.log("zip split ", zipParts);

          var restName = placeName;
          console.log ("restName for gov: ", restName);
          var building = streetParts[0];
          console.log("building for gov: ", building);
          var zipcode = zipParts[2];
          console.log("zipcode for gov: ",zipcode);
    

         

     // var dbaSearch = placeName +

     var image = "<img src='" + placePhotoRef + "'>";

     var buttonSelect = "<button class='selectBtn' "
                        + "data-restName='" + restName + "' " 
                        + "data-building='" + building + "' " 
                        + "data-zipcode='" + zipcode + "'>Select</button>";
    

      console.log(placeId);
      console.log(placeName);
      console.log(placeAddress);


      $(".table tbody").append("<tr><td class='restaurant-name-display'>" + placeName +
                        "</td><td class='address-display'>" + placeAddress + 
                        "</td><td class='select-display'>"+ buttonSelect +  "</td><td class='image-display'>" + image + '</td>');




    }
   }
 }
  function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
 });

