var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {'body':'', forecast: ''});
});

module.exports = router;

let url    = 'http://api.openweathermap.org/data/2.5/weather?q=singapore&appid=398774ddfad0c2714f555a34fa7c434b'
let units  = '&units=metric';
var request = require('request');

router.post('/weather', function(req, res, next){

  let city = req.body.city;

  //url = url+city+"&"+appId;

 request(url, function (error, response, body) {

      body = JSON.parse(body);

      if(error && response.statusCode != 200){

        throw error;

      }

    let country = (body.sys.country) ? body.sys.country : '' ;

    let forecast = "For city "+city+', country '+country;

    res.render('index', {body : body, forecast: forecast});

   });

});
