var express = require('express');
var app = express();
var request = require('request');
app.use(express.static(__dirname + '/client'));

var port = 4000;
app.listen(process.env.PORT || port);
console.log('Server now listening on port' + port);

app.get('/api/deals',function(req,res){
	request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function (error, response, body){
		res.json((JSON.parse(body)));
	});
});



