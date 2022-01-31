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


(() => {
 
  const sock = io();

  sock.on('message', log);

  document.querySelector('#chattiform').addEventListener('submit', onChatSubmitted(sock));

  const pakka = document.querySelector('#pakka');
  const pakkaClick = (e) => {
    sock.emit('flipcard');
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
    sock.emit('buyPhase');
  }
  document.querySelector('#phase').addEventListener('click', phaseClick);

  const sellorbuy = (cardId) => {
      sock.emit('sellorbuy', cardId);
  } 

  //Next turn button eventlistener
  const turnClick = (e) => {
    sock.emit('nextTurn');
  }
  document.querySelector('#turn').addEventListener('click', turnClick);

  

})();