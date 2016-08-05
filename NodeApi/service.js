var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,cache-control");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  
  console.log('In Use');
  next();
  
});

app.get('/', function(req, res, next) {
    //..set headers etc.
console.log('In default get');
    
});
app.post('/', function(req, res, next) {
console.log('In post');
});


app.get('/requests', function (req, res,next) {
	console.log("get req ");
   fs.readFile( __dirname + "/" + "requests.json", 'utf8', function (err, data) {
       console.log( data );
//	    res.setHeader('Access-Control-Allow-Origin', '*');
       res.end( data );
   });
   
})

app.post('/addRequest', function (req, res,next) {
   console.log('addRequest');
   //var request=req.body;
   console.log(req.body);
   
   fs.readFile( __dirname + "/" + "requests.json", 'utf8', function (err, data) {
       data = JSON.parse(data);
	   //data=req.body;
	   //console.log('request 0');
	   //console.log(JSON.stringify(data.requests));
	   //console.log('body 0');
	   //console.log(JSON.stringify(req.body))   
	   //console.log('data.requests.length');
	   //console.log(data.requests.length); 
	   data.requests[data.requests.length]=req.body;

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
       res.end(JSON.stringify(statusJson));
	   
   });
})

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})