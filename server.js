const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//const clientPath = `${__dirname}/public`;


app.use(express.static(path.join(__dirname, "public")));

server.on('error', (err) => {
  console.error('Server error:', err);
})

server.listen(8080, () => {
  console.log('Peli aloitettu portissa 8080')
})

//Yhteyksien hallinta
const connections = [null, null];

io.on('connection', socket => {
  let playerIndex = -1;
  for (const c in connections) {
    if(connections[c] === null) {
      playerIndex = c;
      break;
    }
  }


  socket.emit('Pelaaja numero', playerIndex);

  console.log(`Pelaaja ${playerIndex} liittyi`);
  //ei oteta vielä kolmatta pelaajaa
  if (playerIndex === -1) return;
})

