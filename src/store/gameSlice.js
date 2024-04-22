import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  gameSelect: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameSelector: (state, action) => {
      state.gameSelect = action.payload;
    },
  },
});

export const {setGameSelector} = gameSlice.actions;

export const selectorGame = state => state.game.gameSelect;

export default gameSlice.reducer;
