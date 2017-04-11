var map;
var service;
var infowindow;
var searchTerm
    // Grab this part into example and see if it works
$("#submitForm").on("click", function(event) {

    $("#map").css("display", "block");
    $("th").css("color", "black");


    event.preventDefault();
    console.log(event);
    var term = $("#dba-input").val().trim();
    // term = term.replace(/'/g, "%27");
    // term = term.replace(/ /g, "%20");
    // term = term.replace(/,/g, "%82");
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

var restName
var building
var zipcode

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
            var placePhotoRef = results[i].photos[0].getUrl({ 'maxWidth': 100, 'maxHeight': 100 });
            console.log("photo ref: ", placePhotoRef);

            var addressParts = placeAddress.split(",");
            console.log("address split ", addressParts);
            var streetParts = addressParts[0].split(" ");
            console.log("street split: ", streetParts);
            var zipParts = addressParts[2].split(" ");
            console.log("zip split ", zipParts);

            var restName = placeName;

            console.log("restName for gov: ", restName);
            var building = streetParts[0];
            console.log("building for gov: ", building);
            var zipcode = zipParts[2];
            console.log("zipcode for gov: ", zipcode);
                
                // Modified restName for query
                restName = restName.replace(/'/g, "%27");
                restName = restName.replace(/ /g, "%20");
                restName = restName.replace(/,/g, "%82");


            // var dbaSearch = placeName +

            var image = "<img src='" + placePhotoRef + "'>";

            var buttonSelect = "<button class='selectBtn' " + "data-restName=\"" + restName + "\" data-building='" + building + "' " + "data-zipcode='" + zipcode + "'>Select</button>";


            console.log(placeId);
            console.log(placeName);
            console.log(placeAddress);



            $(".table tbody").append("<tr><td class='restaurant-name-display'>" + placeName +
                "</td><td class='address-display'>" + placeAddress +
                "</td><td class='select-display'>" + buttonSelect + "</td><td class='image-display'>" + image + '</td>');


        }
        // $(".selectBtn").on("click", function(event) {

        //     nycGovData()
        // })
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

$("body").on("click", ".selectBtn", function() {
console.log(this);
    $(".newsearch").css("display", "block");
    $(".searchres").css("display", "block");

    $(".table").css("display", "none");
    $("#map").css("display", "none");

    var restName = $(this).data("restname");
    console.log("del click event " + restName);

    var building = $(this).data("building");
    console.log("del click event " + building);

    var zipcode = $(this).data("zipcode");
    console.log("del click event " + zipcode);

    var baseURL = "https://data.cityofnewyork.us/resource/xx67-kt59.json?dba="

    var queryURL;



    queryURL = baseURL + restName + "&building=" + building + "&zipcode=" + zipcode;

    console.log(queryURL);


    $.ajax({
            url: queryURL,
            method: "GET"
        })
        // We store all of the retrieved data inside of an object called "response"
        .done(function(response) {


            // For loop set max to 10 objects and index 10 assign attributed
            for (var i = 0; i < response.length; i++) {
                response[i]

                var restName = response[i].dba;
                console.log("Restaraunt Name: ", restName);

                var building = response[i].building;
                console.log("Address number: ", building);

                var street = response[i].street;
                console.log("Street Name: ", street)

                var zipcode = response[i].zipcode;
                console.log("Zipcode: ", zipcode);

                var boro = response[i].boro;
                console.log("City Boro: ", boro);

                var cuisineDescription = response[i].cuisine_description;
                console.log("Type of Food: ", cuisineDescription);

                var grade = response[i].grade;
                console.log("Grade: ", grade);

                var inspectionDate = response[i].inspection_date;
                console.log("Inpection_date: ", inspectionDate);

                var inspectionType = response[i].inspection_type;
                console.log("Inpection_type: ", inspectionType);

                var violationDescription = response[i].violation_description;
                console.log("Violation Description: ", violationDescription);


                // Trying to get rid of undefined text
                if (grade == undefined) {
                    grade = "Information Unavailable";
                }
                // for (key in violationDescription) {


                // }

                //  full list of items to the well and adding it appending to the DOM via JQuery
                $(".tableresponse tbody").append("<tr><td class='restaurant-name-display'> " + restName +
                    "</td><td class='address-display-res'>" + (building + " " + street + zipcode + " " + boro) +
                    "</td><td class='cusine-type-display-res'>" + cuisineDescription +
                    "</td><td class='grade-display-res'>" + grade +
                    "</td><td class='inspection-date-display-res'>" + inspectionDate +
                    "</td><td class= 'inspection-type-display-res'>" + inspectionType +
                    "</td><td class='violation-display-res'>" + violationDescription);


                // alert($(this).attr("data-zipcode"));
            };
        });

});

