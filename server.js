const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const app = express();
const createDeck = require('./deck-functions');
const createPlayers = require('./turn_functions');

const fs = require('fs');
const { table, clear } = require('console');

app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const io = socketio(server);

const {newDeck, getDeck, getPoyta, takeCard, clearTable, destroyShip, flipCard} = createDeck();
const {addPlayer, getPlayers, nextTurn, currentTurn, currentBuyer, nextBuyer, disconnectPlayer} = createPlayers();

//Make a new player
const makeNewPlayer = (playersock) => {
  player = new newPlayer(playersock);
  addPlayer(playersock);
}
//Player object
class newPlayer {

  constructor(id) {
    this._id = id;
    this._moneyCards = [];
    this._money = this._moneyCards.length;
    this._inventory = [];
    this._attackpoints = 0;
    this._victorypoints = 0;

    this._moneyCards.push(takeCard());
    this._moneyCards.push(takeCard());
    this._moneyCards.push(takeCard());
  }

  get id() {
    return this._id;
  }

  get money() {
    return this._money;
  }

  set money(numero){
    var nummer = this._money;
    this._money = nummer - numero;
  }

  get attackpoints() {
    return this._attackpoints;
  }

  get moneyCards() {
    return this._moneyCards;
  }

}

createPlayers();

io.on('connection', (sock) => {
  //Add player to connected players on connection
  makeNewPlayer(sock.id);
  console.log("Player connected ", sock.id);

  sock.emit('message', "Liityit peliin");
  sock.on('message', (text) => io.emit('message', text));

  /**
   * Flipping a card
   * TODO
   * -card actions
   */

  getPoyta().map((card) => {
    fs.readFile(__dirname + `/public/images/${card.kuvake}`, function(err, buf){
      sock.emit('flipped', { image: true, buffer: buf.toString('base64')}, card.id);
    });
  });

  sock.on('flipcard', () => {
    if(sock.id === currentTurn()) { //Check if it's this players turn
      const flipattu = flipCard();
    
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

  sock.on('buyPhase', () => {
    console.log(sock.id, currentTurn());
    if(sock.id === currentTurn()) { //Check if it's this players turn
      if(currentBuyer() === '') nextBuyer();
      //TODO 
      //- allow buying and selling
      //- let next player buy
    }
  });

  sock.on('sellorbuy', (cardId) => {
    if(sock.id === currentBuyer()){ //Check if it's this player's turn to buy
      console.log(sock.id, " ONKO ", currentBuyer());
      console.log(cardId);
      io.emit("boughtorsold", cardId);
      //TODO
      //Add or remove money from players
      //Check if each player has had their turn to buy -> end buy phase and change to next players turn
      //If player has mademoiselle, admiral etc. -> abilities
      nextBuyer();
    }
  });

  sock.on('nextTurn', () => {
    if(sock.id === currentTurn()) { //Check if it's this players turn
      //change to next player
      clearTable();
      io.emit('cleartable');
      nextTurn();
    }
  });


  sock.on('disconnect', function(){
    console.log('A player disconnected');
    disconnectPlayer(sock);
    console.log(getPlayers());
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
