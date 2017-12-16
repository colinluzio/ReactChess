export const GetBestWins = function(data,user) {
    user = (user ? user.toLowerCase() : '');
    user = user.toLowerCase();
    var games = [];

    data.map(function(value,index){
        value.games.map(function(game,count){
            var white = game.white;
            var black = game.black;

            if(white.username.toLowerCase() == user){
                if(white.result == 'win'){
                    games.push({color:'white',opponent:black.username,rating:black.rating});
                }
            } else if(black.username.toLowerCase() == user){

                if(black.result == 'win'){
                    games.push({color:'black',opponent:white.username,rating:white.rating});
                }
            }

        });
    });
    games.sort(function(a,b){
        if(a.rating < b.rating) return -1;
        if(a.rating > b.rating) return 1;
        return 0;
    });

    return games.reverse();
}
