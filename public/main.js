
class Player {
  constructor(name, id) {
    this._id = id;
    this._name = name;
    this._money = 0;
    this._moneyCards = [];
    this._inventory = [];
    this._attackpoints = 0;
    this._victorypoints = 0;
  }

  get moneyCards() {
    return this._moneyCards;
  }

  set moneyCards(mani) {
    const tempArray = this._moneyCards.concat(mani);
    this._moneyCards = tempArray;
    this._money = this._moneyCards.length;
  }



  get attackpoints() {
    return this._attackpoints;
  }

  get inventory() {
    return this._inventory;
  }

  set inventory(uus) {
    const tempArray2 = this._inventory.concat(uus);
    this._inventory = tempArray2;
  }

  get money() {
    return this._money;
  }

  set money(numero){
    var nummer = this._money;
    this._money = nummer - numero;
  }

  set id(num) {
    this._id = num;
  }

  get id() {
    return this._id;
  }

}

console.log(Deck);

function perkele () {
    console.log(Deck);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

shuffle(Deck);

class ActiveGame {
  constructor(pelurit) {
    this._players = pelurit; //lista pelaajista
    this._turn = 0; //kenen pelivuoro on, pelaajan id
    this._ostoturn = 0; //kenen vuoro on ostaa pöydästä, pelaajan id
  }

  get players() {
    return this._players;
  }
  set players(pels) {
    const tempPeli = this._players.concat(pels);
    this._players = tempPeli;
  }

  get turn() {
    return this._turn; //Palauttaa vuorossa olevan pelaajan id:n
  }
  set turn(next) {
    this._turn = next;
  }

  get ostoturn() {
    return this._ostoturn; //Palauttaa ostovuorossa olevan pelaajan id:n
  }
  set ostoturn(ostonext) {
    this._ostoturn = ostonext;
  }
/*
  get poyta() {
    return this._poyta;
  }
  set poyta(kort){
    const tempPeli2 = this._poyta.concat(kort);
    this._poyta = tempPeli2;
  }

  get dumppi() {
    return this._dumppi;
  }
  set dumppi(cardsit){
    const tempPeli3 = this._dumppi.concat(cardsit);
    this._dumppi = tempPeli3;
  }
*/
}

let poyta = [];
let dumppi = [];

function startGame() {
  //Kolme kolikkoa kaikille
  players = [];
  //TODO pelaajien luonti oikeista ihmisistä
  players.push(new Player("Testi", 1));
  players.push(new Player("Kakkone", 2));
  console.log(players);
  for(const element of players) {
    let tempCards = [];
    tempCards.push(takeaCard());
    tempCards.push(takeaCard());
    tempCards.push(takeaCard());
    element.moneyCards = tempCards;
    console.log(element);
  }
  console.log(players);
  console.log(Deck);
  menoPeli = new ActiveGame(players);
  console.log("PELI LUOTU ", menoPeli.players);
}

function takeaCard() {
  return Deck.shift();
}



//TODO
//-Tietyn pelaajan vuoro
//-Vuorossa olevan pelaajan jälkeen muutkin järjestyksessä sellandhire
//-expeditionit
//-verot
function searching() {
  //Käännä kortteja kunnes haluat lopettaa
  //Tai kaksi saman väristä laivaa
  //klikkaa button
  //Käännä kortti
  let newcard = takeaCard();
  console.log(newcard.tyyppi);
  kuva(newcard);
  //document.getElementById("paska").appendChild(newcard.kuvake);
  if(newcard.tyyppi === 'ship' && poyta.some(e => e.color === newcard.color)) {
    console.log("JEES");
    let kolor = newcard.color
    //tarkista onko kahta samanlaista laivaa
    console.log("SAMA VÄRI");
    //jos on -> tarkista onko pääkallo, tarkista onko pelaajalla enemmän miekkoja
    if(newcard.attackpoints > players[0].attackpoints) { //TODO TÄHÄN PITÄÄ SAADA SE PELAAJA KENEN VUORO ON
        console.log("dead");
        failed();
    }
    else {
        dumppi.push(newcard);
    }
  }
  
  else {
      poyta.push(newcard);
      console.log("PÖYTÄ ",poyta);
  }
}

function sellAndHire() {
  //Myy laivoja tai palkkaa ihmisiä
  document.getElementById("nosta").style.visibility = "hidden";
  //TODO
  //-Vaihda vuoroa
  //Palkkaa henkilö - tarkista onko pelaajalla kolikoita - vähennä kolikot ja lisää pelaajalle henkilö
  //admiralit saa yli viiestä kortista kaks kolikkoo
  //Mademoiselle kaikki yhen halvempaa
  //governorilla saa kaks korttii
  //Jos yli 4 eri laivaa - 2 korttii //jos 5 eri laivaa - 3 korttii
}

function ostaTaiMyy(c) {
  if (document.getElementById("nosta").style.visibility === "hidden") { //Jos on painettu "lopeta nostaminen"
    let onko = false;
    const index = poyta.indexOf(c);
    console.log("perkele ", c.tyyppi);
    if(c.tyyppi === 'ship') {
      for(i=0; i<c.profit; i++){  //laitetaan pelaajan kolikkokortteihin laivan arvon verran kortteja
        players[0].moneyCards = takeaCard();  //TODO tähän vuorossa oleva pelaaja
      }
      if (index > -1) {
        dumppi.push(poyta.splice(index, 1));  //Siirretään kortti dumppiin
        onko = true;
      }
    }
    else {  //Muu kuin laiva -> ostetaan
      if(players[0].money >= c.price) { //pelaajalla tarpeeksi rahaa
        players[0].money = c.price;
        players[0].inventory.push(poyta.splice(index, 1));  //TODO tähän vuorossa oleva pelaaja
        console.log("inventory ", players[0].inventory);
        console.log("rahat ",players[0].money);
        onko = true;
      }
    }
    if(onko) {
      document.getElementById(c.id).remove();
    }
    console.log("dumppi ", dumppi);
    console.log(players[0]);
    //TODO seuraavan pelaajan vuoro valita
  }
}

function failed() {
  //Kaksi samaa laivaa - tyhjennä pöytä
  clearTable();
  //Jestereille rahat
  //TODO jos useampi jesteri, enemmän kolikoita
  for(const element of players) {
    if(element.inventory.some(e => e.tyyppi === 'jester')) {
      element.moneyCards = takeaCard();
    }
  }
}

function clearTable() { //Tyhjennetään pöytä ja siirretään kortit dumppipinoon
  dumppi.push(...poyta);
  poyta = [];
  console.log("Pöytä tyhjennetty", poyta, dumppi);
  document.getElementById("nosta").style.visibility = "visible";
  document.getElementById("kortit").innerHTML = "";
}

function kuva(haettava) { //Haetaan kuva pöydälle
  var idlaskuri = haettava.id;
  var img = document.createElement('img'); 
  img.src = haettava.kuvake; 
  img.setAttribute("width", "200");
  img.setAttribute("height", "250");
  img.setAttribute("id", idlaskuri);
  img.addEventListener('click', function(){
    ostaTaiMyy(haettava);
  });
	document.getElementById('kortit').appendChild(img);
}

//export default Deck;