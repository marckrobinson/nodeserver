/// <reference path="typings/node/node.d.ts"/>   
"use strict"

var http = require('http');
var express = require('express');
var fs = require('fs');

var app = express();
var server = http.Server(app);
var port = process.env.PORT || 50000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	console.log(req);
	res.send('<h1>Home Page</h1>');
});

app.listen(port);

console.log('Listening on http://localhost:' + port);