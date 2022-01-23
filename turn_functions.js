const createPlayers = () => {
  let players;
  let current_turn = 0;
  let _turn = 0;

  const clearPlayers = () => {
    players = [];
  }

  const addPlayer = (playerSock) => {
    players.push(playerSock);
  }

  const getPlayers = () => players;
  
  const nextTurn = () => {
    _turn = current_turn++ % players.length;
    console.log("next turn triggered " , _turn);
  }

  const currentTurn = () => players[_turn];

  clearPlayers();

  return {addPlayer, getPlayers, nextTurn, currentTurn}
}

module.exports = createPlayers;


