var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.use('/', express.static(__dirname + '/'));

io.on('connection', function(socket){
	console.log("user connected");
	socket.on('chat', function(msg){
		io.emit('chat', msg);
  });
});

http.listen(3000);
console.log("listening on *:3000");
