import axios from 'axios';
const ROOT_URL = 'https://api.chess.com/';

export const SET_USER = 'SET_USER';

export function setUser(user){
    const url = ROOT_URL+'pub/player/'+user
    const request = axios.get(url);

    return(dispatch) => {
            request.then(({data}) => {
                dispatch({type: 'SET_USER',payload: data})
            }).catch((err) => {
                console.log(err);
            })
    };

}
