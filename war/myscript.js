$(document).ready(function() {
	$.ajax("file.json", {
		dataType: "json",
		success: function(data) {
			console.log(data);
		},
		error: function() {
			console.error("An error has occurred.");
		},
	})
})