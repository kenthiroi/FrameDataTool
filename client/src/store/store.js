import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducers/root_reducer';

const preloadedState = {
  modal: null,
  game: {
    game: 'GBVS',
    character1: 'Gran',
    character2: 'Djeeta',
  }
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState,
});

export default store;