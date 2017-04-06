$(document).ready(function() {
    console.log("ready!");

    //https://data.cityofnewyork.us/resource/xx67-kt59.json
    //  meta  var queryURL = "https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=McDonald's"


    var baseURL = "https://data.cityofnewyork.us/resource/xx67-kt59.json?"
        //dba is a parameter inside of cityofnewyork API that determines the name of the restaraunt
    var dba;
    //concatinate the queryURL
    var queryURL;

    // Create an Array
    // Create a for loop to check the array against repeated addresses
    // If there is a repeated address disregard/ do not push to the array
    // If it is a new address append it to the array of addresses
    // Append all unique addresses to the DOM


    var apiResults = [];


    function appendToBody(completedAddressArray) {
        for (var address in completedAddressArray) {
            // full list of items to the well and adding it appending to the DOM via JQuery
            $(".table tbody").append("<tr><td class='restaurant-name-display'> " + restName +
                "</td><td class='address-display'>" + completedAddress +
                "</td><td class='cusine-type-display'>" + cuisineDescription +
                "</td><td class='grade-display'>" + grade +
                "</td><td class='inspection-date-display'>" + inspectionDate +
                // "</td><td class= 'inspection-type-display'>" +inspectionType +
                "</td><td class='violation-display'>" + violationDescription);

        }
    }


    //onSubmit 
    $("#submitForm").on("click", function(event) {

        event.preventDefault();

        dba = $("#dba-input").val().trim();
        // this query gives us the search for the restaraunt name only based on "dba" parameter
        queryURL = baseURL + "dba=" + dba;

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // We store all of the retrieved data inside of an object called "response"
            .done(function(response) {

                // Log the queryURL
                console.log(queryURL);

                // Log the Object
                console.log(response);
                //log all of the data in the API then parse from here


                // For loop set max to objects and index assign attributed
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

                    var restPhoneNumber = response[i].phone;
                    console.log(restPhoneNumber);

                    var completedAddress = building + " " + street + " " + zipcode + " " + boro;
                    console.log("Completed Address: ", completedAddress);


                   


                    var violationDescription = response[i].violation_description;
                    console.log("Violation Description: ", violationDescription);


                    //****Call this function giving me a infinate loop*****// 
                    //apiResults.push(completedAddress);


                    $(".table tbody").append("<tr><td class='restaurant-name-display'> " + restName +
                        "</td><td class='address-display'>" + completedAddress +
                        "</td><td class='cusine-type-display'>" + cuisineDescription +
                        "</td><td class='grade-display'>" + grade +
                        "</td><td class='inspection-date-display'>" + inspectionDate +
                        // "</td><td class= 'inspection-type-display'>" +inspectionType +
                        "</td><td class='violation-display'>" + violationDescription);


                };


            });
    });
}); //!!!!!!!!!!!!!!!!!!!!END OF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! $(document).ready(function()
