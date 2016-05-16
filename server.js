var http = require('http'),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	controllers = require('./server/controllers/server-controllers.js');

mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/', express.static(__dirname + '/client/views'));

//app.use('/api', controllers.ngcs);
app.use('/login', controllers.login);
app.use('/register', controllers.register);

app.listen(8000, function() {
	console.log('listening on port 8000...');
});