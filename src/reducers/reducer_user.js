import {SET_USER} from '../actions/user';

export default function(state = [{data:''}], action){
    switch(action.type){
        case SET_USER:
        return [action.payload]
    }
    
    return state;
}
