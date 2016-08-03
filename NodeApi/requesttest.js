var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:8089/addRequest',
  headers: 
   { 'postman-token': '79ab4fe5-f6dd-4a1f-3c73-398f8ea78c92',
     'cache-control': 'no-cache',
     'content-type': 'application/json;' },
  body: 'test' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
