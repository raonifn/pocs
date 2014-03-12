	var http = require('http'),
		fs = require('fs');

	var count = 0;
	var countRefresh = 0;
	var users = [];
	var dealer = new User("dealer");


	function User(userConnId){
		this.id = userConnId,
		this.name = userConnId,
		this.cartas = [],
		this.addCarta = function(carta){
			this.cartas.push(carta);
			this.soma += carta;
		}
		this.soma = 0;
		this.status = 'playing';
	}

	deck = [1,	2,	3,	4,	5,	6,	7,	8,	9,	10, 11,	12,	13,
				1,	2,	3,	4,	5,	6,	7,	8,	9,	10, 11,	12,	13,
				1,	2,	3,	4,	5,	6,	7,	8,	9,	10, 11,	12,	13,
				1,	2,	3,	4,	5,	6,	7,	8,	9,	10, 11,	12,	13];


	shuffleArray(deck);
	dealer.addCarta(deck.pop());
	dealer.addCarta(deck.pop());
	

var app = http.createServer(function (request, response) {

	fs.readFile("client.html", 'utf-8', function (error, data) {
		
		
		response.writeHead(200, {'Content-Type': 'text/html'});	
		response.write(data);
		response.end();
	});

	
}).listen(1337);


var criaUsuarioDaSessao = function (userConnId) {
	var user = new User(userConnId);

	users.push(user);
	count++;
}

var removeUsuario = function (userConnId) {
	for(var i = 0; i < users.length; i++){
		if(users[i].id == userConnId){
			users.splice(i, 1);
			break;
		}
	}
	count--;
}


var getSessionUser = function (userConnId) {
	for(var i = 0; i < users.length; i++){
		if(users[i].id == userConnId){
			return users[i];
		}
	}
}

var refresh = function () {
	return {count: countRefresh};
}

var newCard = function () {
	var cardPoped = deck.pop();
	if(typeof(cardPoped) == "undefined"){
		cardPoped = "Fim do baralho";
	}
	return cardPoped;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}




var io = require('socket.io').listen(app);
io.sockets.on('connection', function(socket) {
	console.info(dealer);

	criaUsuarioDaSessao(socket.id);

	socket.on('refresh', function(data) {
		io.sockets.emit("refreshed",users); 
	});

	socket.on('rename', function(data) {
		var user = getSessionUser(socket.id);
		user.name = data.name;
		io.sockets.emit("refreshed",users);
	});

	socket.on('newCard', function(data) {
		var user = getSessionUser(socket.id);
		if(user.soma < 21){
			var carta = newCard();
			user.addCarta(carta);
		}else{
			user.status = "stoped"
		}
		io.sockets.emit("refreshed",users);
	});

	
	socket.on('disconnect', function() {
		removeUsuario(socket.id);
	});


	console.info(count + " User(s) online\n")

	setInterval(function(){
		io.sockets.emit("refreshed",users);
		console.info("emited refresh");
	}, 10000);
});
