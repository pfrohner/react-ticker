// proxy Bitfinex API to avoid CORS issues, and get those bonus points
const express = require('express')
const request = require('request')

const app = express();
const target = 'https://api.bitfinex.com/v1/pubticker/btcgbp';

app.use('/', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  req.pipe(request(target)).pipe(res);
});

app.listen(process.env.PORT || 9000);
