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
/*
const rendercard = (polku) => {
  const table = document.querySelector("#tablecards");
  const kuva = document.createElement('img');
  kuva.src = polku;

  table.appendChild(kuva);
}
*/
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
    console.log("PAKKA KLIKATTU");
    sock.emit('takeacard');
  };
  sock.on("flipped", function(info) {
  if (info.image) {
    var img = new Image();
    img.src = 'data:image/png;base64,' + info.buffer;
    ctx.drawImage(img, 0, 0);
  };
});

  pakka.addEventListener('click', pakkaClick);


})();