export const GetBestWins = function(data) {
    var games = [];

    data.map(function(value,index){
        value.games.map(function(game,count){
            games.push(game);
        });
    });

    console.log(games);
}
