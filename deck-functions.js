//let module = require('./fullDeck');

const startingDeck = [{
  id : '0',
  tyyppi: 'sailor',
  price: 3,
  vp: 1,
  attackpoints: 1,
  kuvake: 'sailor1.png',
},
{
  id : '1',
  tyyppi: 'sailor',
  price: 3,
  vp: 1,
  attackpoints: 1,
  kuvake: 'sailor1.png',
},
{
  id : '2',
  tyyppi: 'sailor',
  price: 3,
  vp: 1,
  attackpoints: 1,
  kuvake: 'sailor1.png',
},
{
  id : '3',
  tyyppi: 'sailor',
  price: 3,
  vp: 1,
  attackpoints: 1,
  kuvake: 'sailor1.png',
},
{
  id : '4',
  tyyppi: 'sailor',
  price: 3,
  vp: 1,
  attackpoints: 1,
  kuvake: 'sailor1.png',
},
{
  id : '5',
  tyyppi: 'sailor',
  price: 3,
  vp: 1,
  attackpoints: 1,
  kuvake: 'sailor1.png',
},
{
  id : '6',
  tyyppi: 'sailor',
  price: 3,
  vp: 1,
  attackpoints: 1,
  kuvake: 'sailor1.png',
},
{
  id : '7',
  tyyppi: 'sailor',
  price: 5,
  vp: 2,
  attackpoints: 1,
  kuvake: 'sailor2.png',
},
{
  id : '8',
  tyyppi: 'sailor',
  price: 5,
  vp: 2,
  attackpoints: 1,
  kuvake: 'sailor2.png',
},
{
  id : '9',
  tyyppi: 'sailor',
  price: 7,
  vp: 3,
  attackpoints: 1,
  kuvake: 'sailor3.png',
}]//module.array;

const createDeck = () => {
  let deck = startingDeck;
  let poyta = [];

  const newDeck = () => {
    deck = startingDeck;  //Return deck to full
  }

  const getDeck = () => deck; //Return deck

  const getPoyta = () => poyta;

  const takeCard = () => {
    const nostettu = deck.shift();
    poyta.concat(nostettu);
    console.log("NOSTETTU ", nostettu);
    return nostettu;
  }

  return {
    newDeck, getDeck, takeCard, getPoyta
  }

}

module.exports = createDeck;