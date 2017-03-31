$(document).ready(function() {
    console.log("ready!");

    var queryURL = "https://data.cityofnewyork.us/resource/9w7m-hzhe.json"

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

                

                // full list of items to the well and adding it appending to the DOM via JQuery
                 $(".table tbody").append("<tr><td id='restaurant-name-display'> " + restName +
                     "</td><td id='address-display'>" + (building + " " + street + zipcode + " " + boro) +
                     "</td><td id='cusine-type-display'>" + cuisineDescription + 
                     "</td><td id='grade-display'>" + grade + 
                     "</td><td id ='inspection-date-display'>" + inspectionDate +
                     "</td><td id = 'inspection-type-display'>" +inspectionType +
                     "</td><td id='violation-display'>" + violationDescription);


            };

        });
}); //!!!!!!!!!!!!!!!!!!!!END OF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! $(document).ready(function()
