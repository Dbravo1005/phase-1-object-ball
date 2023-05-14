debugger
const gameObject  = {
    home : {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'white'],
        players: {
            'Alan Anderson': {
            
                'Number': 0,
                'shoe': 16,
                'Points': 22,
                'Rebounds': 12,
                'Assists': 12,
                'Steals': 3,
                'Blocks': 1,
                'Slam Dunks': 1,
            },
            'Reggie Evans': {
                    
                'Number': 30,
                'shoe': 14,
                'Points': 12,
                'Rebounds': 12,
                'Assists': 12,
                'Steals': 12,
                'Blocks': 12,
                'Slam Dunks': 7,
            },
            'Brook Evans': {
                'Number': 11,
                'shoe': 17,
                'Points': 17,
                'Rebounds': 19,
                'Assists': 10,
                'Steals': 3,
                'Blocks': 1,
                'Slam Dunks': 15,
            },
            'Mason Plumlee':{
                'Number': 1,
                'shoe': 19,
                'Points': 26,
                'Rebounds': 12,
                'Assists': 6,
                'Steals': 3,
                'Blocks': 8,
                'Slam Dunks': 5,
            },
            'Jason Terry':{
                'Number': 31,
                'shoe': 15,
                'Points': 19,
                'Rebounds': 2,
                'Assists': 2,
                'Steals': 4,
                'Blocks': 11,
                'Slam Dunks': 1,
            }
        }
        
    },
    away : {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Aiden': {
            
                'Number': 4,
                'shoe': 18,
                'Points': 10,
                'Rebounds': 1,
                'Assists': 1,
                'Steals': 2,
                'Blocks': 7,
                'Slam Dunks': 2,
            },
            'Bismak Biyombo': {
                    
                'Number': 0,
                'shoe': 16,
                'Points': 12,
                'Rebounds': 4,
                'Assists': 7,
                'Steals': 7,
                'Blocks': 15,
                'Slam Dunks': 10,
            },
            'DeSagna Biyombo': {
                'Number': 2,
                'shoe': 14,
                'Points': 24,
                'Rebounds': 12,
                'Assists': 12,
                'Steals': 4,
                'Blocks': 5,
                'Slam Dunks': 5,
            },
            'Ben Gordon':{
                'Number': 8,
                'shoe': 15,
                'Points': 33,
                'Rebounds': 3,
                'Assists': 2,
                'Steals': 1,
                'Blocks': 1,
                'Slam Dunks': 0,
            },
            'Brendan Haywood':{
                'Number': 33,
                'shoe': 15,
                'Points': 6,
                'Rebounds': 12,
                'Assists': 12,
                'Steals': 22,
                'Blocks': 5,
                'Slam Dunks': 12,
            }
        }
        
        }

    };



function numPointsScored(playerName){
    let players = {...gameObject.home.players, ...gameObject.away.players};

    if(players.hasOwnProperty(playerName)){
        return players[playerName].Points;
    }
    else {return `player ${playerName} not recognized`;
}
};

function shoeSize(playerName){
    let players = {...gameObject.home.players, ...gameObject.away.players};
    if (players.hasOwnProperty(playerName)){
        return players[playerName].shoe;
    }
    return `${playerName} has no shoe size`;
};

function teamColors(team){
    if (team === 'home'){
        return gameObject.home.colors;
    } else if (team === 'away'){
        return gameObject.away.colors;
    }
};

function teamName(name){
    if(name === 'home'){
        return gameObject.home.teamName;
    } else if (name === 'away'){
        return gameObject.away.teamName;
    }
};


function playerNumbers(teamName){
    const team = (teamName === 'Brooklyn Nets') ? gameObject.home : gameObject.away;
    const playerNumbers = Object.values(team.players).map(player => player.Number);
    return playerNumbers;
}

function playerStats(name) {
    if (name === players){
     return gameObject.home.players
    }
    else {return gameObject.away.players}
};

function bigShoeRebounds() {
    let largestShoeSize = -Infinity;
    let playerWithLargestShoeSize;
    let rebounds;

    for (const team in gameObject) {
      const players = gameObject[team].players;
      for (const playerName in players) {
        const player = players[playerName];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoeSize = player;
        }
      }
    }

    rebounds = playerWithLargestShoeSize.stats.rebounds;
  
    return rebounds;
  }

debugger