import { combineReducers } from 'redux';
import GamesReducer from './reducer_games';
import UserReducer from './reducer_user';
import ArchiveReducer from './reducer_archive';

const rootReducer = combineReducers({
  games: GamesReducer,
  user: UserReducer,
  archive: ArchiveReducer});

export default rootReducer;
