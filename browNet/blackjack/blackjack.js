var webSocketsServerPort = 1337; 
var webSocketServer = require('websocket').server;
var http = require('http');
var fs = require('fs');

var dealer = {
                requestKey: '',
                connection: null  
            };

var clients = [ ];
 
var server = http.createServer(function(request, response) {
    fs.readFile("frontend.html", 'utf-8', function (error, data) {
        
        
        response.writeHead(200, {'Content-Type': 'text/html'}); 
        response.write(data);
        response.end();
    });
});


server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});
 
var wsServer = new webSocketServer({httpServer: server});
 

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin); 

    if (!dealer.connection){

        dealer.requestKey = request.key;
        dealer.connection = connection;

        var msg = {
            text: "conecatdo como dealer",
            author: "server",
        };

        connection.sendUTF(JSON.stringify( { type: 'message', data: msg}));
    }else{
        var msg = {
            text: "conecatdo como usuario cliente",
            author: "server",
        };
        connection.sendUTF(JSON.stringify( { type: 'message', data: msg}));
    }

    console.log("usuario servidor:");
    console.info(dealer.requestKey);

    var index = clients.push(connection) - 1;
    var userName = false;
 
 
    connection.on('message', function(json) {
        
        console.info(connection);


        var message = JSON.parse(json.utf8Data);

        if (userName === false) { 
            userName = message.data.utf8Data;

            connection.sendUTF(JSON.stringify({ type:'name'}));

        } else {
            if(message.type == 'message'){
                var msg = {
                    text: message.data,
                    author: userName
                };

                var json = JSON.stringify({ type:'message', data: msg });

            }else{
                var json = JSON.stringify({ type:message.type, data: 5 });
                dealer.connection.sendUTF(json);
            }
        }
    });
 
    connection.on('close', function(connection) {
        if (userName !== false) {
            console.log(connection.remoteAddress + " disconnected.");
            clients.splice(index, 1);
        }
    });
 
});