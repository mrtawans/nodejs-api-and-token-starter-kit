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

/*
* =====================================================
* Template Setting
* =====================================================
*/
app.use('/', express.static(path.join(__dirname, './dist')));
app.use('/assets', express.static('./node_modules'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


/*
* =====================================================
* Middleware
* =====================================================
*/
router.use(logger());

 
/*
* =====================================================
* Router Links
* =====================================================
*/
var routes 		= 	require('./routes');
/*
* =====================================================
* Router Setting
* =====================================================
*/
app.use('/api', routes);

/*
* =====================================================
* Server starter
* =====================================================
*/
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
