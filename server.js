const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (sock) => {
  sock.emit('message', "Liityit peliin");
  sock.on('message', (text) => io.emit('message', text));

  sock.on('nosto', ({kortti}) => io.emit('nosto', {kortti}))  //Kortti on se kortti joka juuri nostettiin

  sock.on('piirto', ({x,y}) => io.emit('piirto', {x,y}))
});


server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Peli aloitettu portissa 8080')
});



//Yhteyksien hallinta
//const connections = [null, null];
/*
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
*/
