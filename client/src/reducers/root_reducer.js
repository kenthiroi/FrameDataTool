import { combineReducers } from 'redux';

import game from './game_reducer';
import modal from './modal_reducer'; 

const rootReducer = combineReducers({
  game,
  modal,
});

export default rootReducer;