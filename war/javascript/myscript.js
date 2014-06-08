$(document).ready(function() {
	$('#search-btn').click(function() {
		var data = 'hello'
		$.ajax('/search', {
			//dataType: 'json',
			data: data,
			success: function(data) {
				console.log(data);
			},
			error: function() {
				console.log('[ERRORE]');
			},
		});
	});
})