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