$(document).ready(function() {
    console.log("ready!");

    //https://data.cityofnewyork.us/resource/xx67-kt59.json?dba=guantanamera&building=939&street=8%20AVENUE&zipcode=10019
    //    var queryURL = "https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=McDonald's"
    var restName;
    var baseURL = "https://data.cityofnewyork.us/resource/xx67-kt59.json?dba="
    var building;
    var zipcode;
    var street;
    // var matchedGoogleValues;

    // var queryURL;

    var options = {
    data: ["McDonalds", "McDonald's"]
};

$("#dba-input").easyAutocomplete(options);

    $("#submitForm").on("click", function(event) {

        event.preventDefault();

        restName = $("#dba-input").val().trim();
        
        building = $("#buildingNumber").val().trim();

        // street = $("#streetName").val().trim();

        zipcode =  $("#zipcodeInput").val().trim();

        
        //baseURL = "https://data.cityofnewyork.us/resource/xx67-kt59.json?dba=";
        //building = $("building-number-display" + building).val().trim();
        //zipcode = $("zipcode-display" + zipcode).val().trim();

        

        queryURLtest = baseURL + restName + '&building=' + building + '&street=' + street + '&zipcode=' + zipcode;
        console.log(queryURLtest);

        //queryURL = baseURL + restName + building + zipcode;
        //console.log(queryURL);



        $.ajax({
                url: queryURLtest,
                method: "GET"
            })
            // We store all of the retrieved data inside of an object called "response"
            .done(function(response) {

                // Log the queryURL
                console.log(queryURLtest);

                // Log the Object
                console.log(response);
                //log all of the data in the API then parse from here


                // For loop set max to objects and index 10 assign attributed
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

                    // var boro = response[i].boro;
                    // console.log("City Boro: ", boro);

                    var cuisineDescription = response[i].cuisine_description;
                    console.log("Type of Food: ", cuisineDescription);

                    var grade = response[i].grade;
                    console.log("Grade: ", grade);

                    var inspectionDate = response[i].inspection_date;
                    console.log("Inpection_date: ", inspectionDate);

                    // var inspectionType = response[i].inspection_type;
                    // console.log("Inpection_type: ", inspectionType);

                    var violationDescription = response[i].violation_description;
                    console.log("Violation Description: ", violationDescription);


                    for (key in violationDescription){


                    } 

                    // full list of items to the well and adding it appending to the DOM via JQuery
                    $(".table tbody").append("<tr><td class='restaurant-name-display'> " + restName +
                    "</td><td class='address-display'>" + (building + " " + street + "" + zipcode) +
                    "</td><td class='cusine-type-display'>" + cuisineDescription +
                    "</td><td class='grade-display'>" + grade +
                    "</td><td class='inspection-date-display'>" + inspectionDate +
                    // "</td><td class= 'inspection-type-display'>" +inspectionType +
                    "</td><td class='violation-display'>" + violationDescription);


                };


            });
    });
}); //!!!!!!!!!!!!!!!!!!!!END OF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! $(document).ready(function()
