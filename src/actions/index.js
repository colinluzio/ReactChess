import axios from 'axios';

const ROOT_URL = 'https://api.chess.com/';

export const FETCH_GAMES = 'FETCH_GAMES';

export function fetchUserGames(user){
    const url = ROOT_URL+'pub/player/'+user+'/games'
    const request = axios.get(url);

    return(dispatch) => {
            request.then(({data}) => {
                dispatch({type: 'FETCH_GAMES',payload: data})
            }).catch((err) => {
                dispatch({type: 'FETCH_GAMES',payload: {games:[]}})
            })
    };

}
