const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/fetch-users', (req, res) => {
	res.end('1233333');
});

app.listen(port);