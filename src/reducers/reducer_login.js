import {LOGIN_USER} from '../actions/index';

export default function(state = false, action){

    switch(action.type){
        case LOGIN_USER:
        return action.payload
    }
    return state;
}
