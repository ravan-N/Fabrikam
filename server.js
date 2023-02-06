var express = require('express');
var path=require('path');
var app = express();

//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 });

 app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/products.html'));
 });

 app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/services.html'));
 });


app.get('/employee', function (req, res) {
    var person={Empid: '1001', firstName:'Vijay',lastName:'Sharma',age:30};
    res.send(person);
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:8081", host, port)
});

  