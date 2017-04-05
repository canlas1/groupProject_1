$(document).ready(function () {
 console.log("ready!");

var baseURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"

var location = "location=-33.8670,151.1957";

var radius = "radius=5000";

var keyword = "keyword=";

var keywordExample = "restaraunt"

var myApiKey = "key=AIzaSyBD7xy2nvHGmlIQC-6XqGVWIWOvuj88178";

//Will use empty var's below later.  above is for testing and grabbing JSON
//var location;
//var keyWord;

    var queryURL = baseURL + location + "&" + radius + "&" + keyword + keywordExample + "&" + myApiKey;
    console.log("This is the URL: ", queryURL);



    $.ajax({
            url: queryURL,
            method: "GET"
        })

        // We store all of the retrieved data inside of an object called "response"
        .done(function (response) {

            // Log the queryURL
            console.log(queryURL);
        });
});