import {FETCH_GAMES} from '../actions/index';

export default function(state = [[]], action){
    switch(action.type){
        case FETCH_GAMES:
        return [action.payload.data.games]
    }
    return state;
}