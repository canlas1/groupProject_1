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
var dataStructure = {};

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

var compareAddress;

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
            // console.log(queryURL);

            // Log the Object
            // console.log(response);
            //log all of the data in the API then parse from here

            var completedAddress;
            // For loop set max to objects and index assign attributed
            for (let i = 0; i < response.length; i++) {
                // response[i]
                compareAddress = response[i].building + " " + response[i].street + " " + response[i].zipcode + " " + response[i].boro;
                var restName = response[i].dba;
                var building = response[i].building;
                var street = response[i].street;
                var zipcode = response[i].zipcode;
                var boro = response[i].boro;
                var cuisineDescription = response[i].cuisine_description;
                var grade = response[i].grade;
                var inspectionDate = response[i].inspection_date;
                var restPhoneNumber = response[i].phone;
                var completedAddress = building + " " + street + " " + zipcode + " " + boro;
                var violationDescription = response[i].violation_description;

                //first filter that has an address is the newArr
                // loop through item
                //build description based on the items with filter function
                //grabing all the violation descriptions in the newArr
                //append to DOM in table *******WHY Is there no SPACES*******
                // for (let j = 0; j < newArr.length; j++) {
                //     if (newArr[j].violation_description) {



                //         violationDescription += newArr[j].violation_description + "\n";
                //         console.log("Violation Description: ", violationDescription);
                //     }


                //     //****Call this function giving me a infinate loop*****// 
                //     //apiResults.push(completedAddress);
                // }
console.log('hi')
console.log(i)

                // we HAVE to use square bracket notation when dealing with variables to see if objects have those keys
                // creating address if key doesn't exist
                if (dataStructure.hasOwnProperty(completedAddress)) {
                    // if inspection date exists inside address, push next violation comment

                    if (dataStructure[completedAddress].hasOwnProperty(inspectionDate)) {

                        dataStructure[completedAddress][inspectionDate].comments.push(violationDescription)
                    } else {

                        //if inspection dpesn't exist, create date, grade, and array for comments
                        dataStructure[completedAddress][inspectionDate] = {
                            grade: grade,
                            comments: [violationDescription]
                        }
                    }
                } else {
                    console.log('hi')
                    dataStructure[completedAddress] = {
                        name: restName
                    }
                    dataStructure[completedAddress][inspectionDate] = {
                        grade: grade,
                        comments: [violationDescription]
                    }
                }
                completedAddress = compareAddress;

                // $(".table tbody").append("<tr><td class='restaurant-name-display'> " + restName +
                //     "</td><td class='address-display'>" + completedAddress +
                //     "</td><td class='cusine-type-display'>" + cuisineDescription +
                //     "</td><td class='grade-display'>" + grade +
                //     "</td><td class='inspection-date-display'>" + inspectionDate +
                //     // "</td><td class= 'inspection-type-display'>" +inspectionType +
                //     "</td><td class='violation-display'>" + violationDescription);
            } // end for
            console.log(dataStructure)
        }); // end done



    // var obj = {
    //     "608 W 207th ST" : {
    //         name: "MCDONALDS",
    //         "2012-02-17T00:00:00" : {
    //             grade: "A",
    //             comments: []
    //         }
    //     }
    // }
}); //end on click
}); //!!!!!!!!!!!!!!!!!!!!END OF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! $(document).ready(function()
