/*
TODO

Pelaajan liittyminen
  //-lisääminen listaan
  //-disconnecti
  -listan näyttäminen kaikille pelaajille
  -kaikille kolme rahaa

Pelin aloittaminen
  -Yhden pelaajan vuoro

VUORO
  -Näytetään kenen vuoro
  -yksi pelaaja nostaa kortteja
    -nostaa siihen asti kun haluaa
    -//paitsi jos kaksi saman väristä laivaa
    -kortit näytetään pöydällä
  -voi lopettaa nostamisen

-> OSTO
  -kortteja nostanut käyttäjä voi ostaa/myydä yhden kortin
    -tarkistus jos jotain syytä niin useemmankin
  -kunhan on ostanut niin seuraava käyttäjä ostaa
  -rahat pelaajalle tai pelaajalta pois

laivojen tuhoaminen
korttien toiminnot 
expeditionit
verokortit
voittaminen 12 pistettä
  -vika kierros loppuun

*/
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const app = express();
const createDeck = require('./deck-functions');
const createPlayers = require('./turn_functions');
let player = require('./components/player');
const deck = require('./components/deck');

const fs = require('fs');
const req = require('express/lib/request');

app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const io = socketio(server);

const playerlist = [];

io.on('connection', (sock) => { 

  sock.emit('message', "Liityit peliin");
  sock.on('message', (text) => io.emit('message', text));
  console.log("player connected");

  makeNewPlayer(sock.id);

  sock.on('disconnect', function(){
    console.log('A player disconnected');
    let index = playerlist.map(e => e.id).indexOf(sock.id);
    playerlist.splice(index, 1);
    console.log(playerlist);
  });

  

});

io.on('deck', () => {
  console.log("DEKCCI");
  console.log(deck.expeditions);
});

server.listen(8080, () => {
  console.log('Peli aloitettu portissa 8080')
});

server.on('error', (err) => {
  console.error('Server error:', err);
});


const makeNewPlayer = (playersock) => {
  let peluri = new player(playersock);
  playerlist.push(peluri);
  console.log(playerlist);
}