import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  gameSelect: null,
  roomGameSelector: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameSelector: (state, action) => {
      state.gameSelect = action.payload;
    },
    setRoomGameSelector: (state, action) => {
      state.roomGameSelector = action.payload;
    },
  },
});

export const {setGameSelector, setRoomGameSelector} = gameSlice.actions;

export const selectorGame = state => state.game.gameSelect;
export const selectorRoomGame = state => state.game.roomGameSelector;

export default gameSlice.reducer;
