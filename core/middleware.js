exports.setup = function setup(app, conf){
    var logger = require('morgan')
	  ,	cookieParser = require('cookie-parser')
      , bodyParser = require('body-parser')
      , mysql   = require('mysql')
	  , passport = require('passport') 	
      , express = require('express')
	  , path = require('path')
      , pool    = mysql.createPool({
            host     : conf.db.mysql.host,
            user     : conf.db.mysql.user,
            password : conf.db.mysql.password,
            database : conf.db.mysql.database
        });
	
	require('../routes/helper');
	
	app.use(logger('dev'));
	app.use(bodyParser.json({limit: '50mb'}));
	app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
	app.use(cookieParser());
	app.use(passport.initialize());
	
	conf.frontend.folders.forEach(function(val){
            app.use(express.static(path.join(__dirname, val )));
    });

    // app.use(express.errorHandler(conf.application.errorHandler));
    app.use(function(req, res, next) {
        req.mysql   = pool;
        req.cache   = require('memoizee');
        req.store   = app.locals;
        next();
    });
	
	app.use(function(err, req, res, next) {
        console.log('error');
		res.status(err.status || 500);
		/*
	   res.render('error', {
            message: err.message,
            error: err
        });
		*/
    });	
};