	$(document).ready(function(){
		
		var movies_url = "https://yts.ag/api/v2/list_movies.json";

		var socket = io();

		$.getJSON(movies_url, function(data) {
			console.log(data);
			var movies = JSON.parse(data);
			return movies;
		});

		$('form').submit(function() {
			socket.emit('chat', $('#m').val());
			$('#m').val('');
			return false;
		});
		socket.on('chat', function(msg) {
			$('#messages').append($('<li>').text(msg));
		});
	});
