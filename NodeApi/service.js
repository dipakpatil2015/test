var express = require('express');
var app = express();
var fs = require("fs");
var jsonfile = require('jsonfile');

app.get('/requests', function (req, res) {
   fs.readFile( __dirname + "/" + "requests.json", 'utf8', function (err, data) {
       console.log( data );
	    res.setHeader('Access-Control-Allow-Origin', '*');
       res.end( data );
   });
})


app.post('/addRequest', function (req, res) {
   console.log('addRequest');
   //var request=req.body;
   console.log(req.body);
   
   fs.readFile( __dirname + "/" + "requests.json", 'utf8', function (err, data) {
       data = JSON.parse(data);
	   //data=req.body;
	   console.log('request 0');
	   console.log(JSON.stringify(data.requests[0]));
	   console.log('body 0');
	   console.log(JSON.stringify(req.body))
	   
	   console.log('data.requests.length');
	   console.log(data.requests.length);
	   
	   
	   data.requests[data.requests.length]={"Id":data.requests.length,"requesterName":"KanchanPatil Update 222",
"approverName":"Gaurav Bhatnagar",
"requesterTeamName":"CDS",
"domain":"SDS Data",
"requestDescription":"Testing Request"};

   console.log('updated request 0');
 console.log(JSON.stringify(data.requests[0]));

 fs.writeFile( __dirname + "/" + "requests.json", JSON.stringify(data), function (err) {
  if (err) return console.log(err);
  console.log('Sucess');
});


	   //console.log("Data Recieved:")
	   //console.log(JSON.stringify(data));
       //data.push(request);
       //console.log(data);
		  var statusJson ={
					"SuccessMessage":'OK',
					"StatusCode":'200',
					"ErrorMessage" : ''
			};
       res.json(JSON.stringify(statusJson));
	   res.end;
   });
})

var server = app.listen(8089, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})