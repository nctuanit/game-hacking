import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './tabSlice';
import gameReducer from './gameSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    game: gameReducer,
  },
});
