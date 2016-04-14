/*
* =====================================================
* Intialization
* =====================================================
*/
var fs 			= 	require('fs');
var path 		= 	require('path');
var express 	= 	require('express');
var bodyParser 	= 	require('body-parser');
var logger 		= 	require('morgan');
var router 		= 	express.Router();
var app 		=	express();
var mongodb 	= 	require('mongodb');
var mongoose    = 	require('mongoose');
var config 		= 	require('./src/server/config')

// Models - Database Users
var Users 		= 	require('./src/server/models/users')

/**
* =====================================================
* Configuration
* =====================================================
*/
// mongoose.connect(config.database); // connect to database

/*
* =====================================================
* Middleware Configuration
* =====================================================
*/
app.use(express.static(__dirname + '/src/client')); // set path for index 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logger('dev'));
router.use(logger());
/*
* =====================================================
* Router Links
* =====================================================
*/
var routes 		= 	require('./src/server/routes/index');
/*
* =====================================================
* Router Setting
* =====================================================
*/
app.use('/api/', routes);
/*
* =====================================================
* Server starter
* =====================================================
*/
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
