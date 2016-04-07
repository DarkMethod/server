var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FBStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-plus').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

var hasher = function(password, salt){
	var hash = crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex');
	return hash;
};
passport.use(new LocalStrategy({
    usernameField: 'email',
    session: false
  },
   function(username, password, done) {
         connection.query("SELECT * FROM `users` WHERE `email` = '" + username + "'",function(err,rows){
			if (err)
                return done(err);
			 if (!rows.length) {
                return done(null, false, { message: 'Incorrect email address.'});
            } 
			
			var salt = rows[0].salt;
	
            if (!( rows[0].hash == hasher(password, salt)))
                return done(null, false, { message: 'Incorrect password.'});
			
            return done(null, rows[0]);			
		});
    }
));