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
        		console.log(restName);

    			var building = response[i].building;
        		console.log(building);

        		var zipcode = response[i].zipcode;
        		console.log(zipcode);

        		var boro = response[i].boro;
                console.log(boro);

        		var cuisineDescription = response[i].cuisine_description;
        		console.log(cuisineDescription);

        		var violationDescription = response[i].violation_description;
        		console.log(violationDescription);

        		
                

              };


            //   //create a new dynamic div
            //     var elRestName = $("<div>");
            //     console.log(div);
            //     var elBuilding = $("<div>");
            //     console.log(div);
            //     var elZipcode = $("<div>");
            //     console.log(div);
            //     var elBoro = $("<div>");
            //     console.log(div);

             
            //     // Creating a paragraph tag with the result item's rating
            // var p = $("<p>").text("Cusine: " + results[i].cuisineDescription);
            // var p = $("<p>").text("Grade: " + results[i].grade);
            // var p = $("<p>").text("Violation: " + results[i].violationDescription);
           
            });
}); //!!!!!!!!!!!!!!!!!!!!END OF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! $(document).ready(function()

// $("button").on("click", function() {
//       // Grabbing and storing the data-animal property value from the button
//       var anything = $(this).attr("data-animal");

        
        // Global Variables
//#############################################
       
        // Buttons Variables
//##########################################################
       //FUNCTIONS
//##########################################    
    // create function to render buttons to the page
   
//##########################################
    


