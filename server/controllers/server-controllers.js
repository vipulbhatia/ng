var mongoose = require('mongoose');

var user = mongoose.model('users', {email: String, password: String});

module.exports.login = function(req, res) {
	console.log('got user: ' + JSON.stringify(req.body));
	var find_email = new RegExp('^' + req.body.email + '$');
	user.find({email: find_email}, function(err, result) {
		if(result.length) {
			(result[0].password == req.body.password) ? res.end('success') : res.end('authentication failure');
		} else {
			res.end('user does not exist...');
		}
	});
};

module.exports.register = function(req, res) {
	console.log(req.body);
	var find_email = new RegExp('^' + req.body.email + '$');
	user.find({email: find_email}, function(err, result) {
		if(result.length) res.end('specify a new email address...');
		else {
			var adduser = new user({email: req.body.email, password: req.body.password});
			adduser.save(function(err) {
				if(err) throw err;
				res.end('new user added...');
			});	
		}
	});
};