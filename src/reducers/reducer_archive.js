import {FETCH_ARCHIVE} from '../actions/archive';

export default function(state = [[]], action){
    switch(action.type){
        case FETCH_ARCHIVE:
        return [action.payload.archives]
    }
    return state;
}
