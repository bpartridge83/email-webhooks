'use strict';

var express = require('express'),
	app = express(),
	nconf = require('nconf'),
	mongo = require('mongoskin'),
	db;

nconf.argv()
	.env()
	.file({
		file: 'config.json'
	});

db = mongo.db(nconf.get('DB_CONN'), {
	safe: true
});

app.get(nconf.get('INBOUND_ENDPOINT'), function (req, res) {
	var body = 'Hello World';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});

app.listen(nconf.get('PORT'));
console.log('Listening on port ' + nconf.get('PORT'));