function initMap() {
	var uwimona = {
		lat: 	18.005990,
		lng: 	-76.746889
	};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: uwimona,
		scrollwheel: false,
		disableDoubleClickZoom: true
	});

	var marker = new google.maps.Marker({
		position: uwimona,
		map: map
	});

}