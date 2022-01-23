//let module = require('./fullDeck');
const sailors = [
  {
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
  }
];

const captains = [
  {
    id : '10',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  },
  {
    id : '11',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  },
  {
    id : '12',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  },
  {
    id : '13',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  },
  {
    id : '14',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  }
];

const traders = [
  {
    id : '15',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'blue',
    kuvake: 'tradersininen.png',
  },
  {
    id : '16',
    tyyppi: 'trader',
    price: 5,
    vp: 2,
    color: 'blue',
    kuvake: 'tradersininen.png',
  },
  {
    id : '17',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'yellow',
    kuvake: 'traderkeltainen.png',
  },
  {
    id : '18',
    tyyppi: 'trader',
    price: 5,
    vp: 2,
    color: 'yellow',
    kuvake: 'traderkeltainen.png',
  },
  {
    id : '19',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'red',
    kuvake: 'traderpunainen.png',
  },
  {
    id : '20',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'red',
    kuvake: 'traderpunainen.png',
  },
  {
    id : '21',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'green',
    kuvake: 'tradervihre.png',
  },
  {
    id : '22',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'green',
    kuvake: 'tradervihre.png',
  },
  {
    id : '23',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'black',
    kuvake: 'tradermusta.png',
  },
  {
    id : '24',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'black',
    kuvake: 'tradermusta.png',
  }
];

const settlers = [
  {
    id : '25',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  },
  {
    id : '26',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  },
  {
    id : '27',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  },
  {
    id : '28',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  },
  {
    id : '29',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  }
];

const priests = [
  {
    id : '30',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  },
  {
    id : '31',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  },
  {
    id : '32',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  },
  {
    id : '33',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  },
  {
    id : '34',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  }
];

const jots = [
  {
    id : '35',
    tyyppi: 'jack of all trades',
    price: 6,
    vp: 1,
    item: [1,2,3],
    kuvake: 'jackofalltrades.png',
  },
  {
    id : '36',
    tyyppi: 'jack of all trades',
    price: 6,
    vp: 1,
    item: [1,2,3],
    kuvake: 'jackofalltrades.png',
  },
  {
    id : '37',
    tyyppi: 'jack of all trades',
    price: 6,
    vp: 1,
    item: [1,2,3],
    kuvake: 'jackofalltrades.png',
  }
];

const pirates = [
  {
    id : '38',
    tyyppi: 'pirate',
    price: 5,
    vp: 1,
    attackpoints: 2,
    kuvake: 'pirate1.png',
  },
  {
    id : '39',
    tyyppi: 'pirate',
    price: 7,
    vp: 2,
    attackpoints: 2,
    kuvake: 'pirate2.png',
  },
  {
    id : '40',
    tyyppi: 'pirate',
    price: 9,
    vp: 3,
    attackpoints: 2,
    kuvake: 'pirate3.png',
  }
];

const governors = [
  {
    id : '41',
    tyyppi: 'governor',
    price: 8,
    vp: 0,
    kuvake: 'governor.png',
  },
  {
    id : '42',
    tyyppi: 'governor',
    price: 8,
    vp: 0,
    kuvake: 'governor.png',
  },
  {
    id : '43',
    tyyppi: 'governor',
    price: 8,
    vp: 0,
    kuvake: 'governor.png',
  },
  {
    id : '44',
    tyyppi: 'governor',
    price: 8,
    vp: 0,
    kuvake: 'governor.png',
  }
];

const mademoiselles = [
  {
    id : '45',
    tyyppi: 'mademoiselle',
    price: 7,
    vp: 2,
    kuvake: 'mademoiselle2.png',
  },
  {
    id : '46',
    tyyppi: 'mademoiselle',
    price: 7,
    vp: 2,
    kuvake: 'mademoiselle2.png',
  },
  {
    id : '47',
    tyyppi: 'mademoiselle',
    price: 9,
    vp: 3,
    kuvake: 'mademoiselle3.png',
  },
  {
    id : '48',
    tyyppi: 'mademoiselle',
    price: 9,
    vp: 3,
    kuvake: 'mademoiselle3.png',
  },
];

const admirals = [
  {
    id : '49',
    tyyppi: 'admiral',
    price: 5,
    vp: 1,
    kuvake: 'admiral1.png',
  },
  {
    id : '50',
    tyyppi: 'admiral',
    price: 7,
    vp: 2,
    kuvake: 'admiral2.png',
  },
  {
    id : '51',
    tyyppi: 'admiral',
    price: 7,
    vp: 2,
    kuvake: 'admiral2.png',
  },
  {
    id : '52',
    tyyppi: 'admiral',
    price: 7,
    vp: 2,
    kuvake: 'admiral2.png',
  },
  {
    id : '53',
    tyyppi: 'admiral',
    price: 9,
    vp: 3,
    kuvake: 'admiral3.png',
  },
  {
    id : '54',
    tyyppi: 'admiral',
    price: 9,
    vp: 3,
    kuvake: 'admiral3.png',
  },
];

const jesters = [
  {
    id : '55',
      tyyppi: 'jester',
      price: 5,
      vp: 1,
      kuvake: 'jester1.png',
  },
  {
    id : '56',
      tyyppi: 'jester',
      price: 7,
      vp: 2,
      kuvake: 'jester2.png',
  },
  {
    id : '57',
      tyyppi: 'jester',
      price: 7,
      vp: 2,
      kuvake: 'jester2.png',
  },
  {
    id : '58',
      tyyppi: 'jester',
      price: 7,
      vp: 2,
      kuvake: 'jester2.png',
  },
  {
    id : '59',
      tyyppi: 'jester',
      price: 9,
      vp: 3,
      kuvake: 'jester3.png',
  },
];

const ships = [
  {
    id : '60',
    tyyppi: 'ship',
    color: 'black',
    profit: 1,
    attackpoints: 2,
    kuvake: 'ship_black21.png',
  },
  {
    id : '61',
    tyyppi: 'ship',
    color: 'black',
    profit: 1,
    attackpoints: 2,
    kuvake: 'ship_black21.png',
  },
  {
    id : '62',
    tyyppi: 'ship',
    color: 'black',
    profit: 1,
    attackpoints: 2,
    kuvake: 'ship_black21.png',
  },
  {
    id : '63',
    tyyppi: 'ship',
    color: 'black',
    profit: 2,
    attackpoints: 4,
    kuvake: 'ship_black42.png',
  },
  {
    id : '64',
    tyyppi: 'ship',
    color: 'black',
    profit: 2,
    attackpoints: 4,
    kuvake: 'ship_black42.png',
  },
  {
    id : '65',
    tyyppi: 'ship',
    color: 'black',
    profit: 2,
    attackpoints: 4,
    kuvake: 'ship_black42.png',
  },
  {
    id : '66',
    tyyppi: 'ship',
    color: 'black',
    profit: 3,
    attackpoints: 7,
    kuvake: 'ship_black73.png',
  },
  {
    id : '67',
    tyyppi: 'ship',
    color: 'black',
    profit: 3,
    attackpoints: 7,
    kuvake: 'ship_black73.png',
  },
  {
    id : '68',
    tyyppi: 'ship',
    color: 'black',
    profit: 3,
    attackpoints: 100,
    kuvake: 'ship_black_kallo3.png',
  },
  {
    id : '69',
    tyyppi: 'ship',
    color: 'black',
    profit: 4,
    attackpoints: 100,
    kuvake: 'ship_black_kallo4.png',
  },
  

  {
    id : '70',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_yellow11.png',
  },
  {
    id : '71',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_yellow11.png',
  },
  {
    id : '72',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_yellow11.png',
  },
  {
    id : '73',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 2,
    attackpoints: 1,
    kuvake: 'ship_yellow12.png',
  },
  {
    id : '74',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 2,
    attackpoints: 2,
    kuvake: 'ship_yellow22.png',
  },
  {
    id : '75',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 2,
    attackpoints: 2,
    kuvake: 'ship_yellow22.png',
  },
  {
    id : '76',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 3,
    attackpoints: 2,
    kuvake: 'ship_yellow23.png',
  },
  {
    id : '77',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 3,
    attackpoints: 4,
    kuvake: 'ship_yellow43.png',
  },
  {
    id : '78',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 3,
    attackpoints: 4,
    kuvake: 'ship_yellow43.png',
  },
  {
    id : '79',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 4,
    attackpoints: 4,
    kuvake: 'ship_yellow44.png',
  },


  {
    id : '80',
    tyyppi: 'ship',
    color: 'red',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_red11.png',
  },
  {
    id : '81',
    tyyppi: 'ship',
    color: 'red',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_red11.png',
  },
  {
    id : '82',
    tyyppi: 'ship',
    color: 'red',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_red11.png',
  },
  {
    id : '83',
    tyyppi: 'ship',
    color: 'red',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_red32.png',
  },
  {
    id : '84',
    tyyppi: 'ship',
    color: 'red',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_red32.png',
  },
  {
    id : '85',
    tyyppi: 'ship',
    color: 'red',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_red32.png',
  },
  {
    id : '86',
    tyyppi: 'ship',
    color: 'red',
    profit: 3,
    attackpoints: 6,
    kuvake: 'ship_red63.png',
  },
  {
    id : '87',
    tyyppi: 'ship',
    color: 'red',
    profit: 3,
    attackpoints: 6,
    kuvake: 'ship_red63.png',
  },
  {
    id : '88',
    tyyppi: 'ship',
    color: 'red',
    profit: 3,
    attackpoints: 100,
    kuvake: 'ship_red_kallo3.png',
  },
  {
    id : '89',
    tyyppi: 'ship',
    color: 'red',
    profit: 4,
    attackpoints: 100,
    kuvake: 'ship_red_kallo4.png',
  },


  {
    id : '90',
    tyyppi: 'ship',
    color: 'green',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_green11.png',
  },
  {
    id : '91',
    tyyppi: 'ship',
    color: 'green',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_green11.png',
  },
  {
    id : '92',
    tyyppi: 'ship',
    color: 'green',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_green11.png',
  },
  {
    id : '93',
    tyyppi: 'ship',
    color: 'green',
    profit: 2,
    attackpoints: 1,
    kuvake: 'ship_green21.png',
  },
  {
    id : '94',
    tyyppi: 'ship',
    color: 'green',
    profit: 3,
    attackpoints: 3,
    kuvake: 'ship_green33.png',
  },
  {
    id : '95',
    tyyppi: 'ship',
    color: 'green',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_green32.png',
  },
  {
    id : '96',
    tyyppi: 'ship',
    color: 'green',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_green32.png',
  },
  {
    id : '97',
    tyyppi: 'ship',
    color: 'green',
    profit: 4,
    attackpoints: 5,
    kuvake: 'ship_green54.png',
  },
  {
    id : '98',
    tyyppi: 'ship',
    color: 'green',
    profit: 3,
    attackpoints: 5,
    kuvake: 'ship_green53.png',
  },
  {
    id : '99',
    tyyppi: 'ship',
    color: 'green',
    profit: 3,
    attackpoints: 5,
    kuvake: 'ship_green53.png',
  },


  {
    id : '100',
    tyyppi: 'ship',
    color: 'blue',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_blue11.png',
  },
  {
    id : '101',
    tyyppi: 'ship',
    color: 'blue',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_blue11.png',
  },
  {
    id : '102',
    tyyppi: 'ship',
    color: 'blue',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_blue11.png',
  },
  {
    id : '103',
    tyyppi: 'ship',
    color: 'blue',
    profit: 2,
    attackpoints: 1,
    kuvake: 'ship_blue12.png',
  },
  {
    id : '104',
    tyyppi: 'ship',
    color: 'blue',
    profit: 2,
    attackpoints: 2,
    kuvake: 'ship_blue22.png',
  },
  {
    id : '105',
    tyyppi: 'ship',
    color: 'blue',
    profit: 2,
    attackpoints: 2,
    kuvake: 'ship_blue22.png',
  },
  {
    id : '106',
    tyyppi: 'ship',
    color: 'blue',
    profit: 3,
    attackpoints: 2,
    kuvake: 'ship_blue23.png',
  },
  {
    id : '107',
    tyyppi: 'ship',
    color: 'blue',
    profit: 3,
    attackpoints: 5,
    kuvake: 'ship_blue53.png',
  },
  {
    id : '108',
    tyyppi: 'ship',
    color: 'blue',
    profit: 3,
    attackpoints: 5,
    kuvake: 'ship_blue53.png',
  },
  {
    id : '109',
    tyyppi: 'ship',
    color: 'blue',
    profit: 4,
    attackpoints: 5,
    kuvake: 'ship_blue54.png',
  },
];

const taxes = [
  {
    id : '110',
    tyyppi: 'tax',
    funk: 'miekka',
    kuvake: 'taxmiekka.png',
  },
  {
    id : '111',
    tyyppi: 'tax',
    funk: 'miekka',
    kuvake: 'taxkilpi.png',
  },
  {
    id : '112',
    tyyppi: 'tax',
    funk: 'kilpi',
    kuvake: 'taxkilpi.png',
  },
  {
    id : '113',
    tyyppi: 'tax',
    funk: 'kilpi',
    kuvake: 'taxkilpi.png',
  },
];

const expeditions = [
  {
    id : '114',
    tyyppi: 'expedition',
    goal: ['ankkuri','ankkuri'],
    profit: 2,
    vp: 4,
    kuvake: '',
  },
  {
    id : '115',
    tyyppi: 'expedition',
    goal: ['risti','risti'],
    profit: 2,
    vp: 4,
    kuvake: '',
  },
  {
    id : '116',
    tyyppi: 'expedition',
    goal: ['talo','talo'],
    profit: 2,
    vp: 4,
    kuvake: '',
  },
  {
    id : '117',
    tyyppi: 'expedition',
    goal: ['ankkuri','ankkuri', 'talo'],
    profit: 3,
    vp: 6,
    kuvake: '',
  },
  {
    id : '118',
    tyyppi: 'expedition',
    goal: ['risti','risti', 'talo'],
    profit: 3,
    vp: 6,
    kuvake: '',
  },
  {
    id : '119',
    tyyppi: 'expedition',
    goal: ['ankkuri','risti','talo'],
    profit: 3,
    vp: 5,
    kuvake: '',
  },
];
const startingDeck = []
  startingDeck.push(...captains);
  startingDeck.push(...sailors);
  startingDeck.push(...priests);
  startingDeck.push(...settlers);
  startingDeck.push(...traders);
  startingDeck.push(...jots);
  startingDeck.push(...pirates);
  startingDeck.push(...governors);
  startingDeck.push(...mademoiselles);
  startingDeck.push(...admirals);
  startingDeck.push(...jesters);
  startingDeck.push(...ships);
  startingDeck.push(...taxes);
  startingDeck.push(...expeditions);

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

const mixedDeck = shuffle(startingDeck);

const createDeck = () => {
  let deck = mixedDeck;
  let poyta = [];

  const newDeck = () => {
    deck = mixedDeck;  //Return deck to full
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