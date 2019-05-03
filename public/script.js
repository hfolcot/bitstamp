$('#value').change(function() {
	var value = $('#value').val();
	var corsProxy = 'https://cors-anywhere.herokuapp.com/'; //proxy to allow app to get around 'No Access-Control-Allow-Origin header' errors
	var url = corsProxy + "https://www.bitstamp.net/api/v2/ticker/" + value;
	$('#choice').html(value.toUpperCase());
	$.ajax({
		type: "GET",
	 	url: url,
        success: function(data) {
        	for (var i in data) {
        		if (data.hasOwnProperty(i)) {
        			td = $('#' + i);
        			td.html(data[i]);
        		}

        		}
        }
	});
});