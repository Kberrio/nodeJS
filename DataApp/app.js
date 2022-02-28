if ('geolocation' in navigator) {
	console.log('Geolocation is available!');
	navigator.geolocation.getCurrentPosition(async (position) => {
		const lat = position.coords.latitude;
		document.getElementById('latitude').textContent = lat;
		const lon = position.coords.longitude;
		document.getElementById('longitude').textContent = lon;
		const data = { lat, lon };
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};
		const response = await fetch('/api', options);
		const jsonData = await response.json();
		console.log(jsonData);
	});
} else {
	console.log('Geolocation is NOT available');
}
