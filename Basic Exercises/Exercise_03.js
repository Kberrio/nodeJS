// Write a Node.js program to read a file and print its contents to the console.
const fs = require('fs');

fs.readFile('filename.txt', (err, data) => {
	if (err) throw err;
	console.log(data);
});
