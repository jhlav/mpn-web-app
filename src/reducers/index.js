import { combineReducers } from 'redux';

import boards from './boards';
import gameInputForm from './gameInputForm';
import runtime from './runtime';
import user from './user';

export default combineReducers({
  user,
  runtime,
  gameInputForm,
  boards,
});
