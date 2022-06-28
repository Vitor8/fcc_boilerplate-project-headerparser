require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
  const headers = req.headers;
  const language = headers["accept-language"];
  const software = headers["user-agent"];
  const ipaddress = req.ip;
  
  res.json({ language, software, ipaddress });
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
