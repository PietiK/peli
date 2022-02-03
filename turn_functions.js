const createPlayers = () => {
  let players = [];
  let current_turn = 0;
  let _turn = 0;
  let buyer = '';
  let _laskuri = 0;
  let buyPhase = false;

  const setBuyPhase = () => {
    buyPhase ? buyPhase = false : buyPhase = true;
  }

  const getBuyPhase = () => buyPhase;

  const addPlayer = (playerSock) => {
    players.push(playerSock);
  }

  const getPlayers = () => players;
  
  const nextTurn = () => {
    if(players.length > 2){
      _turn = _turn++ % players.length;
    } 
    else{
      if(_turn === 0) _turn = 1;
      else _turn = 0
    }
      
    console.log("next turn triggered " , players[_turn]);
  }

  const currentTurn = () => players[_turn];

  const nextBuyer = () => {
    _laskuri = _turn++ % players.length;
    console.log("Seuraava ostaja " , players[_laskuri]);
    buyer = players[_laskuri];
    console.log(buyer);
  }

  const disconnectPlayer = (playerSock) => {
    _turn--;
    players.splice(players.indexOf(playerSock),1);
  }

  const currentBuyer = () => {
    return buyer
  }
  
  return {addPlayer, getPlayers, nextTurn, currentTurn, currentBuyer, nextBuyer, disconnectPlayer, setBuyPhase, getBuyPhase}
}

module.exports = createPlayers;


