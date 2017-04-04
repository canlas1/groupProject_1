$(document).ready(function() {
        console.log("ready!");
        
//##########################################
// var action = []; 
// var boro = [];
// var building = [];
// var camis = [];
// var critical_flag = [];
// var cuisine_description = [];
// var dba = [];
// var grade= [];
// var grade_date= [];
// var inspection_date = [];
// var inspection_type= [];
// var phone = [];
// var record_date = [];
// var score = [];
// var street = [];
// var violation_code = [];
// var violation_description = [];
// var zipcode = [];
 
        // This is the div that holds the result from clicking
        var results = $("#results");
        // This will be replaced with a new value
	    var nyDataAPIbase = "https://data.cityofnewyork.us/resource/9w7m-hzhe.json";
		var nyDbRestName = "?dba=";
		var nyDbAddrNumber = "?building=";
		var nyDbCusType = "?cuisine_description=";
		var userInput = "";
		var queryURL = nyDataAPIbase + nyDbCusType + userInput;
		var userInput = [""];
		console.log(queryURLexample);




	

 //This function handles events where on button is clicked and dynamically created button on HTML
 //listening for value and click class
	$("#submitForm").on("click", function(event) {
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        //should log "this" which is when handle #buttons
        console.log($(this).text());
        //new local variable for "this"
        var selection = $(this).text();
        // should log input selection
        console.log(selection);
        // concatinate a new URL string
        var queryURL = queryURL + selection;
        console.log(queryURL);

        //issue and AJAX call to the NY Data API with concatinated URL
        $.ajax({
            url: queryURL,
            method: "GET"

        }).done(function(response) {

            //empty the results the the response <~~~~~~
            results.empty();

            //log all of the data in the API then parse from here
            console.log(response.data);
            
            // For loop set max to 18 keys 
            for (var i = response.length - 1; i >= 0; i--) {
            	response[i]
            }
                //create a new dynamic div
                var div = $("<div>");
              
        });
    });	

    
        // Buttons Variables
//##########################################################
       //FUNCTIONS
//##########################################    
    // create function to render buttons to the page
   
//##########################################
    


}); // !!!!!!!!!!!!!!!!!!!!END OF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! $(document).ready(function()
