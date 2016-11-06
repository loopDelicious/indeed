import $ from 'jquery';
import key from './secrets.js';.

// GET request for indeed job search

var languages = ['Python', 'Java', 'JavaScript', 'Ruby', 'PHP', 'C', 'C++', 'C#', 'Objective-C', '.NET', 'Go', 'Golang', 'Rust', 'Elm', 'Scala', 'Swift', 'iOS', 'Android', 'R', 'SQL', 'VB', 'HTML', 'CSS'];
var locations = ['Seattle', 'San+Francisco', 'Los+Angeles', 'Chicago', 'Denver', 'Austin', 'New+York+City', 'Boston'];

var API_KEY = key;
var site_type = "employer";
var job_type = "fulltime";
var limit = 3000;
var fromage = 15;
var filter = 0;
var latlong = 0;
var country = "us";
var userip = '1.2.3.4';
var version = 2;
var format = "json";

languages.forEach(function(language) {
    var query = "software+engineer+" + language;
    locations.forEach(function(location) {
        $.ajax({
            url: "http://api.indeed.com/ads/apisearch",
            method: 'get',
            data: {
                publisher: API_KEY,
                q: query,
                l: location,
                sort: null,
                radius: null,
                st: site_type,
                jt: job_type,
                start: null,
                limit: limit,
                fromage: fromage,
                filter: filter,
                latlong: latlong,
                co: country,
                chnl: null,
                userip: userip,
                useragent: null,
                v: version,
                format: format
            },
            success: function(res) {
                console.log(res);
            }
        });
    });
});


