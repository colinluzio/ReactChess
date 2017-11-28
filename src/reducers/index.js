import { combineReducers } from 'redux';
import GamesReducer from './reducer_games';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  games: GamesReducer,
  user: UserReducer});

export default rootReducer;
