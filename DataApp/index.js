const express = require('express');
const app = express();
const port = 3030;
app.listen(port, () => console.log(`Listening at ${port}`));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (req, res) => {
	console.log('I got a request!');
	console.log(`The body is ${req.body}`);
	const data = req.body;

	res.json({
		status: 'success',
		latitude: data.lat,
		longitude: data.lon,
	});
});
