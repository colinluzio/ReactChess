import axios from 'axios';

const ROOT_URL = 'https://api.chess.com/';

export const FETCH_GAMES = 'FETCH_GAMES';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export function fetchUserGames(user){
    const url = ROOT_URL+'pub/player/'+user+'/games'
    const request = axios.get(url);
    return(dispatch) => {
            request.then(({data}) => {
                dispatch({type: 'FETCH_GAMES',payload: data})
            }).catch((err) => {
                //reattempt to fetchUserGames
                return(dispatch) => {
                        request.then(({data}) => {
                            dispatch({type: 'FETCH_GAMES',payload: data})
                        });
                };
            })
    };
}

export function registerUser(props){
    return{
        type: REGISTER_USER,
        payload: {}
    }
}

export function loginUser(props){
    return{
        type: REGISTER_USER,
        payload: {}
    }
}
