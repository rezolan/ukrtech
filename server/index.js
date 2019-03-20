const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/fetch-users', (req, res) => {
	res.sendFile(__dirname + '/users.json');
});

app.listen(port);