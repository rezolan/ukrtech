const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;


const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));


app.get('/fetch-users', (req, res) => {
	res.sendFile(__dirname + '/users.json');
});

app.listen(port);