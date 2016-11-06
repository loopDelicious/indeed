var express = require('express');
var request = require('request');
var key = require('./secrets.js');
var redis = require('redis');
var client = redis.createClient();

var app = express();

// create a proxy so server side can access indeed API

// allow CORS access to indeed domain
// from https://blog.javascripting.com/2015/01/17/dont-hassle-with-cors/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', function(req, res) {

    var url = 'http://api.indeed.com/ads/apisearch?publisher=' + key + '&' + req.url.slice(2);
    res.header("Content-Type", "application/json");

    // check if results are in redis
    client.get(url, function (err, data) {
        if (data) {
            res.send(data);
            return;
        }

        // if results are not in redis, fetch from indeed and store in redis
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.setex(url, 3600, body);
                res.send(body);
            }
        });
    });


});

app.listen(process.env.PORT || 5000);




