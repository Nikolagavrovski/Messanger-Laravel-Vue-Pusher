var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});




/*var app = require('express')();
var server = require('http').Server(app);
var io = require ('socket.io')(server);
var redis = require('redis');

server.listen(8890);
io.on('connection', function(socket) {
    console.log('new client connected');
     var redisClient = redis.createClient();
     redisClient.subscribe('message');
     redisClient.on('message', function (channel, message) {
        console.log('new message in que');
     });
  
});

*/