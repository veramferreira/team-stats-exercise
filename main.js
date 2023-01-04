const team = {
  _players: [
    { firstName: 'Cristiano', lastName: 'Ronaldo', age: 36},
    { firstName: 'Leonel', lastName: 'Messi', age: 35},
    { firstName: 'Leonardo', lastName: 'Goncalves', age: 4}
  ],
  _games:[
    { opponent:'Porto', teamPoints: 4, opponentPoints: 5},
    { opponent:'Benfica', teamPoints: 3, opponentPoints: 2},
    { opponent:'Sporting', teamPoints: 1, opponentPoints: 1}
  ],

  get players () {
    return this._players;
  },

  get games () {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
  let player = {firstName: newFirstName, lastName: newLastName, age: newAge};
  this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
    this.games.push(game);
  }
};

team.addPlayer("Bugs", "Bunny", 76);

team.addGame('Titans', 100, 98);

console.log(team.players);
console.log(team.games);

