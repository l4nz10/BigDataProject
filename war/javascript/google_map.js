function initialize() {
	var mapCanvas = document.getElementById('map_canvas');
	var mapOptions = {
		center: new google.maps.LatLng(42.463581, 12.305059),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);