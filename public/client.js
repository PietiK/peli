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

const getClickCoordinates = (element, ev) => {
  const { top, left } = element.getBoundingClientRect();
  const { clientX, clientY } = ev;

  return {
    x: clientX - left,
    y: clientY - top
  };
};

//Renderöi piirtoruudun
//Turha lopulta
const getBoard = (canvas) => {

  const ctx = canvas.getContext('2d');
  const fillRect = (x, y) => {
    //ctx.fillStyle = color;
    ctx.fillRect(x,y,20,20);
  }
  return {fillRect};
}

//Sell ship or hire person
//TODO
//Add money to players cash or remove cash
//Add person to players inventory
//move ship to dump pile
const sellorbuy = (onecard) => {
  log(onecard);
} 

(() => {
 
  const sock = io();

  const canvas = document.querySelector('canvas'); 
  var ctx = canvas.getContext('2d');

  const {fillRect} = getBoard(canvas); //turhaa lopulta
  const onClick = (e) => {          //turhaa lopulta
    const { x, y } = getClickCoordinates(canvas, e);
    sock.emit('piirto', {x,y});
  };
  canvas.addEventListener('click', onClick);  //Piirto
  sock.on('piirto', ({x,y}) => fillRect(x,y));

  sock.on('message', log);

  document.querySelector('#chattiform').addEventListener('submit', onChatSubmitted(sock));

  const pakka = document.querySelector('#pakka');
  const pakkaClick = (e) => {
    sock.emit('takeacard');
  };
  pakka.addEventListener('click', pakkaClick);


  /**
   * Flipping a card
   * -Renders card image 
   * TODO
   * -Make cards fit the screen better
   * -Add eventlisteners to cards
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
      //TODO only player whose turn it is can interact with cards
      document.querySelector(`#${iidee}`).addEventListener('click', event => {
        sellorbuy(iidee);
      });
    };
  });

  const turnClick = (e) => {
    sock.emit('nextTurn');
  }
  document.querySelector('#turn').addEventListener('click', turnClick);

  

})();