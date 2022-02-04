let myTurn = false;
/**
 * Write text to chat for each player
 * @param {string} text 
 * text that gets sent  to chat
 */
const log = (text) => {
  const parent = document.querySelector('#tapahtumat');
  const el = document.createElement('li');
  el.innerHTML = text;

  parent.appendChild(el);
  parent.scrollTop = parent.scrollHeight;
};

const onChatSubmitted = (sock) => (e) => {
  e.preventDefault();

  const input = document.querySelector("#chat");
  const teksti = input.value;
  input.value = "";

  sock.emit('message', teksti);
}

//Sell ship or hire person
//TODO
//Add money to players cash or remove cash
//Add person to players inventory
//move ship to dump pile

const removeCard = (cardId) => {
  const myNode = document.querySelector('#tablecards');
  myNode.removeChild(document.getElementById(cardId));
}

const setTurn = () => {
  myTurn ? myTurn = false : myTurn = true;
}


(() => {
 
  const sock = io();

  
  sock.on('yourTurn', setTurn());

  sock.on('message', log);

  document.querySelector('#chattiform').addEventListener('submit', onChatSubmitted(sock));
  //TODO
  //This players' inventory, money, victory- and attackpoints playercards1
  sock.emit('getPlayers');
  sock.on('send-players', (playerslist) => {
    console.log(playerslist);
    let counter = 0;
    let indeks = playerslist.findIndex( x => x === sock.id); //index of this player
    for(const p in playerslist) {
      //Select player screen and add players id to it
      //TODO
      //Add players name instead of id
      const playerscreen = document.querySelector(`#playercards${counter}`);
      playerscreen.innerHTML = playerslist[indeks];

      //Display each players' money and inventory cards on this
      const hud = document.createElement("div");
      hud.setAttribute("id", `hud${indeks}`);
      hud.innerText = `hud${indeks}`;
      playerscreen.appendChild(hud);

      //Display each players money
      const mani = document.createElement("p");
      sock.emit('get-playermoney', playerslist[indeks]);
      sock.on('send-playermoney', (manit) => {
        mani.innerText = manit;
      });
      hud.appendChild(mani);

      //Display inventorycards
      const inv = document.createElement("p");

      counter++;
      if(indeks+1<playerslist.length) indeks++;
      else(indeks = 0);
    }
  });

  const pakka = document.querySelector('#pakka');
  const pakkaClick = (e) => {
    if(myTurn){
      sock.emit('flipcard');
    }
  };
  pakka.addEventListener('click', pakkaClick);


  /**
   * Flipping a card
   * -Renders card image and makes it clickable
   */
  sock.on("flipped", function(info, iidee) {
    if (info.image) {
      var img = new Image();
      img.src = 'data:image/png;base64,' + info.buffer;
      img.setAttribute("width", 150);
      img.setAttribute("height", 200);
      img.setAttribute("id", iidee);
      document.querySelector("#tablecards").appendChild(img);
      //Make images clickable so player can interact with them
      document.querySelector(`#${iidee}`).addEventListener('click', event => {
        sellorbuy(iidee);
      });
    };
  });
  
  /**
   * Clear table
   */
  sock.on('cleartable', function() {
    const myNode = document.querySelector('#tablecards');
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  });



  //Buy phase button eventlistener
  const phaseClick = (e) => {
    if (myTurn) sock.emit('buyPhase');
  }
  document.querySelector('#phase').addEventListener('click', phaseClick);

  //Send request to buy or sell card
  const sellorbuy = (cardId) => {
    sock.emit('sellorbuy', cardId);
  } 

  //Server sends this to inform that this card needs to be removed
  sock.on("boughtorsold", function(korttiId) {
    removeCard(korttiId);
  });

  //Next turn button eventlistener
  const turnClick = (e) => {
    if(myTurn) sock.emit('nextTurn');
  }
  document.querySelector('#turn').addEventListener('click', turnClick);

  

})();