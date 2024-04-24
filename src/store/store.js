import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './tabSlice';
import gameReducer from './gameSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    game: gameReducer,
    user: userReducer,
  },
});
