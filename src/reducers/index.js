import { combineReducers } from 'redux';
import GamesReducer from './reducer_games';

const rootReducer = combineReducers({
  games: GamesReducer
});

export default rootReducer;
