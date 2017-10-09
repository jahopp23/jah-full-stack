var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + '/static')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(8000, function() {
    console.log("JAH Development & Design is on server 8000");

});
