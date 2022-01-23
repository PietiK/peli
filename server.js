const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const app = express();
const createDeck = require('./deck-functions');
const createPlayers = require('./turn_functions');

const fs = require('fs');
const { table } = require('console');

app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const io = socketio(server);

const {newDeck, getDeck, getPoyta, takeCard, clearTable, destroyShip} = createDeck();
const {addPlayer, getPlayers, nextTurn, currentTurn} = createPlayers();

createPlayers();

io.on('connection', (sock) => {
  //Add player to connected players on connection
  addPlayer(sock.id);

  sock.emit('message', "Liityit peliin");
  sock.on('message', (text) => io.emit('message', text));
  //sock.emit('deck', getDeck());

  /**
   * Drawing on canvas, useless
   */
  sock.on('piirto', ({x,y}) => io.emit('piirto', {x,y}));

  /**
   * Flipping a card
   * TODO
   * -card actions
   */
  sock.on('takeacard', () => {
    if(sock.id === currentTurn()) { //Check if it's this players turn
      const flipattu = takeCard();
    
      const kuvake = flipattu.kuvake;
      //Send card image to client
      fs.readFile(__dirname + `/public/images/${kuvake}`, function(err, buf){
        if(kuvake != ''){
          io.emit('flipped', { image: true, buffer: buf.toString('base64') }, flipattu.id);
        }
      });
  
      //If card is a ship, player can fight it if they want
      //Check if table already has same color ship
      if(flipattu.tyyppi === 'ship') {
        //Check if poyta contains ship of same color
        //if yes -> {
          //if(player[i].attackpoints >= flipattu.attackpoints) {
            //destroyShip();
            //TODO remove ship from players' screens
          //}
          //else {clearTable() -> payJesters() -> nextTurn()}
        //}
        //if no -> {
        // do nothing but let the player destroy the ship if they want to
        //}
      }
    }
  });

  sock.on('nextTurn', () => {
    if(sock.id === currentTurn()) { //Check if it's this players turn
      nextTurn();
    }
  });

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
