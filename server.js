// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Routes

app.get('/view', function (req, res) {
	res.sendFile(path.join(__dirname, 'view.html'));
});

app.get('/make', function (req, res) {
	res.sendFile(path.join(__dirname, 'make.html'));
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});


// Listener

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});

//Array that will store reservations and waiting list data

var tables = [];

var waitingList = [];

app.get('/api/:tables?', function (req, res) {

		res.json(tables);

});

app.get('/api/:waitingList?', function (req, res) {

		res.json(waitingList);

});
