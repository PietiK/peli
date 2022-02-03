//let module = require('./fullDeck');
const sailors = [
  {
    id : 'i0',
    tyyppi: 'sailor',
    price: 3,
    vp: 1,
    attackpoints: 1,
    kuvake: 'sailor1.png',
  },
  {
    id : 'i1',
    tyyppi: 'sailor',
    price: 3,
    vp: 1,
    attackpoints: 1,
    kuvake: 'sailor1.png',
  },
  {
    id : 'i2',
    tyyppi: 'sailor',
    price: 3,
    vp: 1,
    attackpoints: 1,
    kuvake: 'sailor1.png',
  },
  {
    id : 'i3',
    tyyppi: 'sailor',
    price: 3,
    vp: 1,
    attackpoints: 1,
    kuvake: 'sailor1.png',
  },
  {
    id : 'i4',
    tyyppi: 'sailor',
    price: 3,
    vp: 1,
    attackpoints: 1,
    kuvake: 'sailor1.png',
  },
  {
    id : 'i5',
    tyyppi: 'sailor',
    price: 3,
    vp: 1,
    attackpoints: 1,
    kuvake: 'sailor1.png',
  },
  {
    id : 'i6',
    tyyppi: 'sailor',
    price: 3,
    vp: 1,
    attackpoints: 1,
    kuvake: 'sailor1.png',
  },
  {
    id : 'i7',
    tyyppi: 'sailor',
    price: 5,
    vp: 2,
    attackpoints: 1,
    kuvake: 'sailor2.png',
  },
  {
    id : 'i8',
    tyyppi: 'sailor',
    price: 5,
    vp: 2,
    attackpoints: 1,
    kuvake: 'sailor2.png',
  },
  {
    id : 'i9',
    tyyppi: 'sailor',
    price: 7,
    vp: 3,
    attackpoints: 1,
    kuvake: 'sailor3.png',
  }
];

const captains = [
  {
    id : 'i10',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  },
  {
    id : 'i11',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  },
  {
    id : 'i12',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  },
  {
    id : 'i13',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  },
  {
    id : 'i14',
    kuvake: 'captain.png',
    tyyppi: 'captain',
    price: 4,
    vp: 1,
    item: 'ankkuri'
  }
];

const traders = [
  {
    id : 'i15',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'blue',
    kuvake: 'tradersininen.png',
  },
  {
    id : 'i16',
    tyyppi: 'trader',
    price: 5,
    vp: 2,
    color: 'blue',
    kuvake: 'tradersininen.png',
  },
  {
    id : 'i17',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'yellow',
    kuvake: 'traderkeltainen.png',
  },
  {
    id : 'i18',
    tyyppi: 'trader',
    price: 5,
    vp: 2,
    color: 'yellow',
    kuvake: 'traderkeltainen.png',
  },
  {
    id : 'i19',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'red',
    kuvake: 'traderpunainen.png',
  },
  {
    id : 'i20',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'red',
    kuvake: 'traderpunainen.png',
  },
  {
    id : 'i21',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'green',
    kuvake: 'tradervihre.png',
  },
  {
    id : 'i22',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'green',
    kuvake: 'tradervihre.png',
  },
  {
    id : 'i23',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'black',
    kuvake: 'tradermusta.png',
  },
  {
    id : 'i24',
    tyyppi: 'trader',
    price: 3,
    vp: 1,
    color: 'black',
    kuvake: 'tradermusta.png',
  }
];

const settlers = [
  {
    id : 'i25',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  },
  {
    id : 'i26',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  },
  {
    id : 'i27',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  },
  {
    id : 'i28',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  },
  {
    id : 'i29',
    tyyppi: 'settler',
    price: 4,
    vp: 1,
    item: 'talo',
    kuvake: 'settler.png',
  }
];

const priests = [
  {
    id : 'i30',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  },
  {
    id : 'i31',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  },
  {
    id : 'i32',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  },
  {
    id : 'i33',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  },
  {
    id : 'i34',
    tyyppi: 'priest',
    price: 4,
    vp: 1,
    item: 'risti',
    kuvake: 'priest.png',
  }
];

const jots = [
  {
    id : 'i35',
    tyyppi: 'jack of all trades',
    price: 6,
    vp: 1,
    item: [1,2,3],
    kuvake: 'jackofalltrades.png',
  },
  {
    id : 'i36',
    tyyppi: 'jack of all trades',
    price: 6,
    vp: 1,
    item: [1,2,3],
    kuvake: 'jackofalltrades.png',
  },
  {
    id : 'i37',
    tyyppi: 'jack of all trades',
    price: 6,
    vp: 1,
    item: [1,2,3],
    kuvake: 'jackofalltrades.png',
  }
];

const pirates = [
  {
    id : 'i38',
    tyyppi: 'pirate',
    price: 5,
    vp: 1,
    attackpoints: 2,
    kuvake: 'pirate1.png',
  },
  {
    id : 'i39',
    tyyppi: 'pirate',
    price: 7,
    vp: 2,
    attackpoints: 2,
    kuvake: 'pirate2.png',
  },
  {
    id : 'i40',
    tyyppi: 'pirate',
    price: 9,
    vp: 3,
    attackpoints: 2,
    kuvake: 'pirate3.png',
  }
];

const governors = [
  {
    id : 'i41',
    tyyppi: 'governor',
    price: 8,
    vp: 0,
    kuvake: 'governor.png',
  },
  {
    id : 'i42',
    tyyppi: 'governor',
    price: 8,
    vp: 0,
    kuvake: 'governor.png',
  },
  {
    id : 'i43',
    tyyppi: 'governor',
    price: 8,
    vp: 0,
    kuvake: 'governor.png',
  },
  {
    id : 'i44',
    tyyppi: 'governor',
    price: 8,
    vp: 0,
    kuvake: 'governor.png',
  }
];

const mademoiselles = [
  {
    id : 'i45',
    tyyppi: 'mademoiselle',
    price: 7,
    vp: 2,
    kuvake: 'mademoiselle2.png',
  },
  {
    id : 'i46',
    tyyppi: 'mademoiselle',
    price: 7,
    vp: 2,
    kuvake: 'mademoiselle2.png',
  },
  {
    id : 'i47',
    tyyppi: 'mademoiselle',
    price: 9,
    vp: 3,
    kuvake: 'mademoiselle3.png',
  },
  {
    id : 'i48',
    tyyppi: 'mademoiselle',
    price: 9,
    vp: 3,
    kuvake: 'mademoiselle3.png',
  },
];

const admirals = [
  {
    id : 'i49',
    tyyppi: 'admiral',
    price: 5,
    vp: 1,
    kuvake: 'admiral1.png',
  },
  {
    id : 'i50',
    tyyppi: 'admiral',
    price: 7,
    vp: 2,
    kuvake: 'admiral2.png',
  },
  {
    id : 'i51',
    tyyppi: 'admiral',
    price: 7,
    vp: 2,
    kuvake: 'admiral2.png',
  },
  {
    id : 'i52',
    tyyppi: 'admiral',
    price: 7,
    vp: 2,
    kuvake: 'admiral2.png',
  },
  {
    id : 'i53',
    tyyppi: 'admiral',
    price: 9,
    vp: 3,
    kuvake: 'admiral3.png',
  },
  {
    id : 'i54',
    tyyppi: 'admiral',
    price: 9,
    vp: 3,
    kuvake: 'admiral3.png',
  },
];

const jesters = [
  {
    id : 'i55',
      tyyppi: 'jester',
      price: 5,
      vp: 1,
      kuvake: 'jester1.png',
  },
  {
    id : 'i56',
      tyyppi: 'jester',
      price: 7,
      vp: 2,
      kuvake: 'jester2.png',
  },
  {
    id : 'i57',
      tyyppi: 'jester',
      price: 7,
      vp: 2,
      kuvake: 'jester2.png',
  },
  {
    id : 'i58',
      tyyppi: 'jester',
      price: 7,
      vp: 2,
      kuvake: 'jester2.png',
  },
  {
    id : 'i59',
      tyyppi: 'jester',
      price: 9,
      vp: 3,
      kuvake: 'jester3.png',
  },
];

const ships = [
  {
    id : 'i60',
    tyyppi: 'ship',
    color: 'black',
    profit: 1,
    attackpoints: 2,
    kuvake: 'ship_black21.png',
  },
  {
    id : 'i61',
    tyyppi: 'ship',
    color: 'black',
    profit: 1,
    attackpoints: 2,
    kuvake: 'ship_black21.png',
  },
  {
    id : 'i62',
    tyyppi: 'ship',
    color: 'black',
    profit: 1,
    attackpoints: 2,
    kuvake: 'ship_black21.png',
  },
  {
    id : 'i63',
    tyyppi: 'ship',
    color: 'black',
    profit: 2,
    attackpoints: 4,
    kuvake: 'ship_black42.png',
  },
  {
    id : 'i64',
    tyyppi: 'ship',
    color: 'black',
    profit: 2,
    attackpoints: 4,
    kuvake: 'ship_black42.png',
  },
  {
    id : 'i65',
    tyyppi: 'ship',
    color: 'black',
    profit: 2,
    attackpoints: 4,
    kuvake: 'ship_black42.png',
  },
  {
    id : 'i66',
    tyyppi: 'ship',
    color: 'black',
    profit: 3,
    attackpoints: 7,
    kuvake: 'ship_black73.png',
  },
  {
    id : 'i67',
    tyyppi: 'ship',
    color: 'black',
    profit: 3,
    attackpoints: 7,
    kuvake: 'ship_black73.png',
  },
  {
    id : 'i68',
    tyyppi: 'ship',
    color: 'black',
    profit: 3,
    attackpoints: 100,
    kuvake: 'ship_black_kallo3.png',
  },
  {
    id : 'i69',
    tyyppi: 'ship',
    color: 'black',
    profit: 4,
    attackpoints: 100,
    kuvake: 'ship_black_kallo4.png',
  },
  

  {
    id : 'i70',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_yellow11.png',
  },
  {
    id : 'i71',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_yellow11.png',
  },
  {
    id : 'i72',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_yellow11.png',
  },
  {
    id : 'i73',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 2,
    attackpoints: 1,
    kuvake: 'ship_yellow12.png',
  },
  {
    id : 'i74',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 2,
    attackpoints: 2,
    kuvake: 'ship_yellow22.png',
  },
  {
    id : 'i75',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 2,
    attackpoints: 2,
    kuvake: 'ship_yellow22.png',
  },
  {
    id : 'i76',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 3,
    attackpoints: 2,
    kuvake: 'ship_yellow23.png',
  },
  {
    id : 'i77',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 3,
    attackpoints: 4,
    kuvake: 'ship_yellow43.png',
  },
  {
    id : 'i78',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 3,
    attackpoints: 4,
    kuvake: 'ship_yellow43.png',
  },
  {
    id : 'i79',
    tyyppi: 'ship',
    color: 'yellow',
    profit: 4,
    attackpoints: 4,
    kuvake: 'ship_yellow44.png',
  },


  {
    id : 'i80',
    tyyppi: 'ship',
    color: 'red',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_red11.png',
  },
  {
    id : 'i81',
    tyyppi: 'ship',
    color: 'red',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_red11.png',
  },
  {
    id : 'i82',
    tyyppi: 'ship',
    color: 'red',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_red11.png',
  },
  {
    id : 'i83',
    tyyppi: 'ship',
    color: 'red',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_red32.png',
  },
  {
    id : 'i84',
    tyyppi: 'ship',
    color: 'red',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_red32.png',
  },
  {
    id : 'i85',
    tyyppi: 'ship',
    color: 'red',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_red32.png',
  },
  {
    id : 'i86',
    tyyppi: 'ship',
    color: 'red',
    profit: 3,
    attackpoints: 6,
    kuvake: 'ship_red63.png',
  },
  {
    id : 'i87',
    tyyppi: 'ship',
    color: 'red',
    profit: 3,
    attackpoints: 6,
    kuvake: 'ship_red63.png',
  },
  {
    id : 'i88',
    tyyppi: 'ship',
    color: 'red',
    profit: 3,
    attackpoints: 100,
    kuvake: 'ship_red_kallo3.png',
  },
  {
    id : 'i89',
    tyyppi: 'ship',
    color: 'red',
    profit: 4,
    attackpoints: 100,
    kuvake: 'ship_red_kallo4.png',
  },


  {
    id : 'i90',
    tyyppi: 'ship',
    color: 'green',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_green11.png',
  },
  {
    id : 'i91',
    tyyppi: 'ship',
    color: 'green',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_green11.png',
  },
  {
    id : 'i92',
    tyyppi: 'ship',
    color: 'green',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_green11.png',
  },
  {
    id : 'i93',
    tyyppi: 'ship',
    color: 'green',
    profit: 2,
    attackpoints: 1,
    kuvake: 'ship_green21.png',
  },
  {
    id : 'i94',
    tyyppi: 'ship',
    color: 'green',
    profit: 3,
    attackpoints: 3,
    kuvake: 'ship_green33.png',
  },
  {
    id : 'i95',
    tyyppi: 'ship',
    color: 'green',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_green32.png',
  },
  {
    id : 'i96',
    tyyppi: 'ship',
    color: 'green',
    profit: 2,
    attackpoints: 3,
    kuvake: 'ship_green32.png',
  },
  {
    id : 'i97',
    tyyppi: 'ship',
    color: 'green',
    profit: 4,
    attackpoints: 5,
    kuvake: 'ship_green54.png',
  },
  {
    id : 'i98',
    tyyppi: 'ship',
    color: 'green',
    profit: 3,
    attackpoints: 5,
    kuvake: 'ship_green53.png',
  },
  {
    id : 'i99',
    tyyppi: 'ship',
    color: 'green',
    profit: 3,
    attackpoints: 5,
    kuvake: 'ship_green53.png',
  },


  {
    id : 'i100',
    tyyppi: 'ship',
    color: 'blue',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_blue11.png',
  },
  {
    id : 'i101',
    tyyppi: 'ship',
    color: 'blue',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_blue11.png',
  },
  {
    id : 'i102',
    tyyppi: 'ship',
    color: 'blue',
    profit: 1,
    attackpoints: 1,
    kuvake: 'ship_blue11.png',
  },
  {
    id : 'i103',
    tyyppi: 'ship',
    color: 'blue',
    profit: 2,
    attackpoints: 1,
    kuvake: 'ship_blue12.png',
  },
  {
    id : 'i104',
    tyyppi: 'ship',
    color: 'blue',
    profit: 2,
    attackpoints: 2,
    kuvake: 'ship_blue22.png',
  },
  {
    id : 'i105',
    tyyppi: 'ship',
    color: 'blue',
    profit: 2,
    attackpoints: 2,
    kuvake: 'ship_blue22.png',
  },
  {
    id : 'i106',
    tyyppi: 'ship',
    color: 'blue',
    profit: 3,
    attackpoints: 2,
    kuvake: 'ship_blue23.png',
  },
  {
    id : 'i107',
    tyyppi: 'ship',
    color: 'blue',
    profit: 3,
    attackpoints: 5,
    kuvake: 'ship_blue53.png',
  },
  {
    id : 'i108',
    tyyppi: 'ship',
    color: 'blue',
    profit: 3,
    attackpoints: 5,
    kuvake: 'ship_blue53.png',
  },
  {
    id : 'i109',
    tyyppi: 'ship',
    color: 'blue',
    profit: 4,
    attackpoints: 5,
    kuvake: 'ship_blue54.png',
  },
];

const taxes = [
  {
    id : 'i110',
    tyyppi: 'tax',
    funk: 'miekka',
    kuvake: 'taxmiekka.png',
  },
  {
    id : 'i111',
    tyyppi: 'tax',
    funk: 'miekka',
    kuvake: 'taxkilpi.png',
  },
  {
    id : 'i112',
    tyyppi: 'tax',
    funk: 'kilpi',
    kuvake: 'taxkilpi.png',
  },
  {
    id : 'i113',
    tyyppi: 'tax',
    funk: 'kilpi',
    kuvake: 'taxkilpi.png',
  },
];

const expeditions = [
  {
    id : 'i114',
    tyyppi: 'expedition',
    goal: ['ankkuri','ankkuri'],
    profit: 2,
    vp: 4,
    kuvake: '',
  },
  {
    id : 'i115',
    tyyppi: 'expedition',
    goal: ['risti','risti'],
    profit: 2,
    vp: 4,
    kuvake: '',
  },
  {
    id : 'i116',
    tyyppi: 'expedition',
    goal: ['talo','talo'],
    profit: 2,
    vp: 4,
    kuvake: '',
  },
  {
    id : 'i117',
    tyyppi: 'expedition',
    goal: ['ankkuri','ankkuri', 'talo'],
    profit: 3,
    vp: 6,
    kuvake: '',
  },
  {
    id : 'i118',
    tyyppi: 'expedition',
    goal: ['risti','risti', 'talo'],
    profit: 3,
    vp: 6,
    kuvake: '',
  },
  {
    id : 'i119',
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

const createDeck = () => {
  let deck = shuffle(startingDeck);
  let poyta = [];
  let dumppi = [];

  /**
   * Shuffle the dumped cards array to form a new deck
   */
  const newDeck = () => {
    deck = shuffle(dumppi);  //Return deck to full
  }

  const getDeck = () => deck; //Return deck

  /**
   * @returns Table cards array
   */
  const getPoyta = () => {
    return poyta;
  }

  /**
   * Flips the top card of the deck
   * adds that card to the table
   * @returns Flipped card object
   */
  const flipCard = () => {
    const nostettu = deck.shift();
    poyta.push(nostettu);
    return nostettu;
  }

  /**
   * Take the card from the top of deck
   * Used to get coins
   * @returns card object
   */
  const takeCard = () => {
    const tempcard = deck.shift();
    return tempcard;
  }

  /**
   * Empty the table and add remaining cards to dump pile
   */
  const clearTable = () => {
    console.log(poyta)
    var i = 0;
    while ( poyta.length > 0) {
      dumppi.push(poyta.pop());
        /*var item = poyta[i];
        if (item.selected) {
            poyta.splice(i,1);
            dumppi.push(item);
        }
        else i++;*/
    }
    console.log(poyta);
  }

  /**
   * Move destroyed ship to dump pile
   * since you can only destroy most recent ship, remove the most recent card from poyta
   */
  const destroyShip = () => {
    dumppi.push(poyta.pop());
  }

  return {
    newDeck, getDeck, takeCard, getPoyta, clearTable, destroyShip, flipCard
  }

}

module.exports = createDeck;