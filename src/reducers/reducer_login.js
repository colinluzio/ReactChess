import {LOGIN_USER} from '../actions/index';

export default function(state = {}, action){

    switch(action.type){
        case LOGIN_USER:
        return [action.payload.logged_in]
    }
    return state;
}
