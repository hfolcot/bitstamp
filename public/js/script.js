
// Function to append the data returned from getData() onto the html page
function appendToHtml(data) {
    $('#results').show();
	var newhtml = ``
	for (var i in data) {
		if (data.hasOwnProperty(i)) {
			newhtml += `<tr>
						<th scope="row">${i}</th>
						<td id="${i}">${data[i]}</td>
						<tr>`
			
		}
    };
    $('#results').html(newhtml);
}

//Function to make the API call
function getData(value){
//var corsProxy = 'https://cors-anywhere.herokuapp.com/'; //proxy to allow app to get around 'No Access-Control-Allow-Origin header' errors
//var url = corsProxy + "https://www.bitstamp.net/api/v2/ticker/" + value;
var url = "https://www.bitstamp.net/api/v2/ticker/" + value;
$('#choice').html(value.toUpperCase());
$.ajax({
	type: "GET",
 	url: url,
    success: function(data) {
    	appendToHtml(data);
    },
    fail: function() {
    	$('#results').show();
    	$('#results').html('<h5>Sorry, something went wrong, please try again.</h5>')
    }
});
}

$( document ).ready(function() {
	//Hides the results table initially
	$('#results').hide();

	//Call the function when the select value is changed
	$('#value').change(function() {
		var value = $('#value').val()
		getData(value);
	})
})
