var express     =   require('express');
module.exports = (function(){
	'use strict';

    var routes = express.Router();

    routes.get('/', function(req, res) {
        var cities = [
            { name: "Washington DC", country: "usa" },
            { name: "New York", country: "usa" },
            { name: "San Francisco", country: "usa" },
        ];
        res.json(cities);
    });

    return routes;
})();