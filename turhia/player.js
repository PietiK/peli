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

export default Player;