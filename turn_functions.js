const createPlayers = () => {
  let players = [];
  let current_turn = 0;
  let _turn = 0;
  let buyer = '';
  let _laskuri = 0;
  let buyPhase = false;
  let playersocks = [];

  const setBuyPhase = () => {
    buyPhase ? buyPhase = false : buyPhase = true;
  }

  const getBuyPhase = () => buyPhase;

  const addPlayer = (player) => {
    console.log(players);
    players.push(player);
    console.log(players);
    playersocks.push(player._id);
  }

  const getPlayersocks = () => playersocks;
  const getPlayers = () => players;
  
  const nextTurn = () => {
    if(players.length > 2){
      _turn = current_turn++ % players.length;
    } 
    else{
      if(_turn === 0) _turn = 1;
      else _turn = 0
    }
      
    console.log("next turn triggered " , playersocks[_turn]);
  }

  const currentTurn = () => playersocks[_turn];

  const nextBuyer = () => {
    _laskuri = _turn++ % players.length;
    console.log("Seuraava ostaja " , players[_laskuri]);
    buyer = playersocks[_laskuri];
    console.log(buyer);
  }

  const disconnectPlayer = (playerSock) => {
    _turn--;
    players.splice(players.indexOf(playerSock),1);
    playersocks.splice(playersocks.indexOf(playerSock),1);
  }

  const currentBuyer = () => {
    return buyer
  }

  const getPlayermoney = (thisid) => {
    let indeks = players.findIndex( x => x.id === thisid); //index of this player
    return(players[indeks].money);
  }  

  const getPlayer = (thisid) => {
    let indeks = players.findIndex( x => x.id === thisid); //index of this player
    return(players[indeks]);
  }

  return {addPlayer, getPlayers, nextTurn, currentTurn, currentBuyer, nextBuyer, disconnectPlayer, setBuyPhase, getBuyPhase, getPlayersocks, getPlayermoney, getPlayer}
}

module.exports = createPlayers;


