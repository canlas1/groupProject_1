var config = {
    apiKey: 'HLCIJHIAH25LKQSF0TTZ5V3WINUL20PPLNUQRYUW0LBVBPJA',
    authUrl: 'https://foursquare.com/',
    apiUrl: 'https://api.foursquare.com/'
};
//changed Elsa's id dba to submitForm
$("#submitForm").on("click", function(event) {
event.preventDefault();
var searchTerm = $("#submitForm").val().trim();
console.log(searchTerm);
var queryURL = "https://api.foursquare.com/v2/venues/explore?query=" + searchTerm + "&near=New+York&oauth_token=PDNKBXL444BMITOCS54NRFEJC35MCGQB5CZROL1EZHTT5JKM&v=20170401";
console.log("this is the query URL: " + queryURL);
$.ajax({
        url: queryURL,
        method: "GET"
    })
    // After the data comes back from the API
    .done(function(response) {
        // Log the Object
        console.log(response);

        var testVenue = response.response.groups;
        console.log(testVenue);


        for (var i = 0; i < testVenue.length; i++) {


            console.log(testVenue);

            var multLocation = testVenue[i];
            console.log(multLocation);

            var locationArr = multLocation.items;
            console.log(locationArr);


            var venueArr = locationArr[i].venue;
            console.log(venueArr);



            // var venueId = venueArr.venue.id;
            // console.log(venueId);


            // for (var i = 0; i < locationArr.length; i++) {

            // var venueId = locationArr.venue;
            // console.log(venueId);


            // 

            // var locationArr = testVenue[i].groups;
            // console.log(locationArr);



            //this unreadCount gave us the 51 number.. we had an array of notifications and one objects
            // item that contained unread Count

            //.items[0].venue.id;
            // for (var i = 0; i < groupArr.length; i++) {
            // console.log(groupArr);


            // console.log("unreadCount: " + unreadCount);
            // console.log("venueId: " + venueId);
            // var venueId = response[i].response.groups.items.venue.id;
            // console.log("venue ID: " + venueId);



        };
    });

});


