/* import the modules we need for this to work */
const http = require('http');
const socketio = require("socket.io");
const osc = require( 'node-osc' );
const express = require('express');

/* config */
const webPort = 8000;
const toMaxPort = 8002;
const fromMaxPort = 8003;

/* setup */
const app = express();
const server = http.createServer( app );
const io = new socketio.Server(server);
const toMax = new osc.Client('127.0.0.1', toMaxPort );
const fromMax = new osc.Server( fromMaxPort, '127.0.0.1' );

app.use( express.static('public') );

server.listen( webPort, () => {
    console.log(`Server running at http://localhost:${webPort}`);
});


io.on('connection', (p5) => {
    console.log('p5 connected');  
    
    p5.on('disconnect', () => {
        console.log('p5 disconnected');
    });
});