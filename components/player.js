class newPlayer {

  constructor(id) {
    this._id = id;
    //this._moneyCards = [];
    //this._money = this._moneyCards.length;
    this._inventory = [];
    this._attackpoints = 0;
    this._victorypoints = 0;

    //this._moneyCards.push(takeCard());
    //this._moneyCards.push(takeCard());
    //this._moneyCards.push(takeCard());
  }

  get id() {
    return this._id;
  }
/*
  get money() {
    return this._moneyCards.length;
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

  set moneyCards(amount) {
    for(let i=0; i<amount; i++){
      dumpcard(this.moneyCards.pop());
    }
  }

  set inventory(card) {
    this._inventory.push(card);
  }

  get inventory() {
    return this._inventory;
  }
*/
}

module.exports = newPlayer;