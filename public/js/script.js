$( document ).ready(function() {
	$('#results').hide();
	$('#value').change(function() {
	var value = $('#value').val();
	var corsProxy = 'https://cors-anywhere.herokuapp.com/'; //proxy to allow app to get around 'No Access-Control-Allow-Origin header' errors
	var url = corsProxy + "https://www.bitstamp.net/api/v2/ticker/" + value;
	$('#choice').html(value.toUpperCase());
	$.ajax({
		type: "GET",
	 	url: url,
        success: function(data) {
        	$('#results').show();
        	var newhtml = ``
        	for (var i in data) {
        		if (data.hasOwnProperty(i)) {
        			newhtml += `<tr>
										<th scope="row">${i}</th>
										<td id="high">${data[i]}</td>
										<tr>`
        			
        		}
        	};
        	$('#results').html(newhtml);
        }
	});
});
})
