$(document).ready(function() {
    console.log("what is going on");

    var baseURL = "https://data.cityofnewyork.us/resource/xx67-kt59.json?"
        //dba is a parameter inside of cityofnewyork API that determines the name of the restaraunt
    var dba;

    //concatinate the queryURL
    var queryURL;

    //global function to build a mapped object so we can parse and append
    var dataStructure = {};

    // function appendToBody(dataStructure) {
    //     for (var address in completedAddressArray) {
    //         // full list of items to the well and adding it appending to the DOM via JQuery
    //         $(".table tbody").append("<tr><td class='restaurant-name-display'> " + restName +
    //             "</td><td class='address-display'>" + completedAddress +
    //             "</td><td class='cusine-type-display'>" + cuisineDescription +
    //             "</td><td class='grade-display'>" + grade +
    //             "</td><td class='inspection-date-display'>" + inspectionDate +
    //             // "</td><td class= 'inspection-type-display'>" +inspectionType +
    //             "</td><td class='violation-display'>" + violationDescription);



    //onSubmit 
    $("#submitForm").on("click", function(event) {

        event.preventDefault();

        //input id submit from client html
        dba = $("#dba-input").val().trim();

        // this query gives us the search for the restaraunt name only based on "dba" parameter
        queryURL = baseURL + "dba=" + dba;

        //run ajax to GET JSON from above
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // We store all of the retrieved data inside of an object called "response"
            .done(function(response) {
                // Log the Object
                console.log(response);

                // For loop set max to objects and index assign attributed 
                // use "let" inside the loop instead of var because we want to stay inside this loops block
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
                    var myNewObj = (dataStructure.hasOwnProperty(completedAddress))
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
                            name: restName,
                        }
                        dataStructure[completedAddress][inspectionDate] = {
                            grade: grade,
                            comments: [violationDescription]
                        }
                    };



                    Object.keys(dataStructure).forEach(function(key) {
                        var objectAddress = (key, dataStructure[completedAddress])
                        console.log("This is the Object address: ", objectAddress);
                        var newName = (key, objectAddress.name);
                        console.log("New printed Name: ", newName);

                        Object.keys(objectAddress).forEach(function(key){
                            var objectInspection = (key, objectAddress[inspectionDate])
                            console.log("This is the Object Inspection Time: ", objectInspection);
                            var newGrade = (key, objectInspection.grade);
                            console.log("This is the printed grade: ", newGrade);
                        })
                        // var newGrade = (key, objectAddress.inspectionDate);
                        // console.log("This is the printed grade: ", newGrade);


                        Object.keys(objectAddress).forEach(function(key) {
                            var newName = (key, objectAddress.name);
                            console.log("The new Name is: ", newName);



                            // Object.keys(newName).forEach(function(key) {
                            //     var objectDate = (key, objectAddress[inspectionDate])
                            //     console.log("This is the Date object: ", objectDate);

                        });

                        console.log(key);
                        console.log(objectAddress);
                        // console.log(key, dataStructure[completedAddress].name);
                        // console.log(key, dataStructure[completedAddress][inspectionDate].grade);
                        // console.log(key, dataStructure[completedAddress][inspectionDate].comments);

                    });

 


                    // for (var key in validation_messages) {
                    //     // skip loop if the property is from prototype
                    //     if (!validation_messages.hasOwnProperty(key)) continue;

                    //     var obj = validation_messages[key];
                    //     for (var prop in obj) {
                    //         // skip loop if the property is from prototype
                    //         if (!obj.hasOwnProperty(prop)) continue;

                    //         // your code
                    //         alert(prop + " = " + obj[prop]);
                    //     }


                    // for (var k in completedAddress) {
                    //     var newName = loopAddress.name
                    //     console.log("This is the Looped Name: ",  newName);
                    //     var newAddress = loopAddress.completedAddress
                    //     console.log("This is the Looped Address: ", completedAddress);
                    //     var newGrade = loopAddress.grade;
                    //     console.log("This is the Looped Grade: ", grade);
                    //     var newComments = violationDescription;
                    //     console.log("Violations:", newComments);


                    // var loopInspection = dataStructure[completedAddress][inspectionDate];
                    // //var loopGrade = dataStructure[completedAddress].grade;
                    // //var loopViolation = dataStructure[completedAddress].comments[i];
                    // console.log(loopAddress);
                    // console.log(loopInspection);
                    //console.log(loopGrade);
                    //console.logy(loopViolation);

                    // $(".table tbody").append("<tr><td class='restaurant-name-display'> " + restName +
                    //     "</td><td class='address-display'>" + completedAddress +
                    //     "</td><td class='cusine-type-display'>" + cuisineDescription +
                    //     "</td><td class='grade-display'>" + grade +
                    //     "</td><td class='inspection-date-display'>" + inspectionDate +
                    //     // "</td><td class= 'inspection-type-display'>" +inspectionType +
                    //     "</td><td class='violation-display'>" + violationDescription);
                } // end for
                console.log(dataStructure)

                for (var item in dataStructure) {

                    console.log(item);

                }
            }); //end on
    }); // end done
}); //end on click


// var obj = {
//     "608 W 207th ST" : {
//         name: "MCDONALDS",
//         "2012-02+-17T00:00:00" : {
//             grade: "A",
//             comments: []
//         }
//     }
// }

//!!!!!!!!!!!!!!!!!!!!END OF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! $(document).ready(function()
