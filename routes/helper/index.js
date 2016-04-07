var crypto = require('crypto');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var logAndRespond = function logAndRespond(err,res,status){
    console.error(err);
    res.statusCode = ('undefined' === typeof status ? 500 : status);
    res.send({
        result: 'error',
        err:    err.code
    });
};
var handleConnection = function handleConnection(callback,req,res){
    req.mysql.getConnection(function(err,connection){
        if (err){ logAndRespond(err,res); return; }
        callback(connection,req,res);
    });
};
var hasher = function(password, salt){
	console.log(password);
	console.log(salt);
	var hash = crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex');
	return hash;
};

passport.use(new LocalStrategy({
    usernameField: 'email',
	passReqToCallback : true,
    session: false
  },
   function(req,username, password, done) {
		 req.mysql.getConnection(function(err,connection){
			if (err){ logAndRespond(err,res); return; }
			connection.query('SELECT * FROM user WHERE email = ?', username,function(err,rows){
			if (err)
                return done(err);
			 if (!rows.length) {
				
                return done(null, false, { message: 'Incorrect email address.'});
            } 
			
			var salt = rows[0].salt;
	
            if (!( rows[0].hash == crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex'))){
				return done(null, false, { message: 'Incorrect password.'});
			}
            return done(null, rows[0]);			
		});
			
    });
         ;
    }
));

function loginCheck(connection, req, res){
  passport.authenticate('local', function(err, user, info){
    if(err){ logAndRespond(err,res); return; }

    if(user){
	  console.log('success');	
      // return res.json({message: 'yay'});
    } else {
      console.log('failed');
	  // return res.json({message: 'failed'});
    }
  })(req, res);
}

exports.setPassword = function(password){
	var cipher = {};
	cipher.salt = crypto.randomBytes(16).toString('hex');
	cipher.hash = crypto.pbkdf2Sync(password, cipher.salt, 1000, 64).toString('hex');
	return cipher;
};

exports.login = function(req,res){
    handleConnection(loginCheck,req,res);
};