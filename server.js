/**
 * Created by Rksh on 09-Apr-17.
 */
var express = require('express');

var app = express();

var router = express.Router()

var port = process.env.API_PORT || 3001;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent data
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// Google distance matrix api
router.get('/distance', function (req, res) {
    var googleMapsClient = require('@google/maps').createClient({
            key: process.env.REACT_APP_GOOGLE_MAPS_KEY
        });
        googleMapsClient.distanceMatrix({
            origins: ['Gurgaon'],
            destinations: ['Amity University Haryana'],
        }, (err, response) => {
            if (!err) {
                res.json(response);
            }
        });
});

app.use('/api', router);

app.listen(port, function () {
    console.log(`api running on port ${port}`)
})