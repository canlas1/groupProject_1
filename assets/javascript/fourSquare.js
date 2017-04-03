var config = {
    apiKey: 'HLCIJHIAH25LKQSF0TTZ5V3WINUL20PPLNUQRYUW0LBVBPJA',
    authUrl: 'https://foursquare.com/',
    apiUrl: 'https://api.foursquare.com/'
};
$("#submitForm").on("click", function(event) {

    event.preventDefault();

    var searchTerm = $("#dba-input").val().trim();
    console.log("this is our search: " + searchTerm);

    var queryURL = "https://api.foursquare.com/v2/venues/explore?query=" + searchTerm + "&near=New+York&oauth_token=PDNKBXL444BMITOCS54NRFEJC35MCGQB5CZROL1EZHTT5JKM&v=20170401";



    $.ajax({
            url: queryURL,
            method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
            // Log the query URL
            console.log("this is the query URL: " + queryURL);
            // Log the Object
            console.log(response);
            //this unreadCount gave us the 51 number.. we had an array of notifications and one objects
            // item that contained unread Count
            var unreadCount = response.notifications[0].item.unreadCount;
            // we store the path to items in a variable, to avoid having to write a big line of code in
            //the for loop function and results(items the array that contains the venue parameter)
            //(the venue parameter contains the venue id parameter)
            //in each search, the array items will contain as many elements as the search for venues throws.
            var items = response.response.groups[0].items
                //we run a for loop in which we iterate i in the array items (calling the variable of the same name)
                //the for loop will iterate through the number of elements that array items generates from the search
            for (var i in items) {
                //we log the venue id, by calling the iteration generated from the path on the car items
                //and adding our two last path elements that are contained inside the objects stored in the array items
                var venueId = items[i].venue.id;
                console.log("venueId: " + venueId);
                var venueName = items[i].venue.name;
                console.log(venueName);
                var venueAddress = items[i].venue.location.formattedAddress[0];
                console.log(venueAddress);

            };

        
            console.log("unreadCount: " + unreadCount);
            // console.log("venueId: " + venueId);


            // var venueId = response[i].response.groups.items.venue.id;
            // console.log("venue ID: " + venueId);





        })

});
