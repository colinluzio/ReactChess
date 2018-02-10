import { combineReducers } from 'redux';
import GamesReducer from './reducer_games';
import UserReducer from './reducer_user';
import ArchiveReducer from './reducer_archive';
import LoginReducer from './reducer_login';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  games: GamesReducer,
  user: UserReducer,
  form: formReducer,
  archive: ArchiveReducer,
  authenticated: LoginReducer});

export default rootReducer;
