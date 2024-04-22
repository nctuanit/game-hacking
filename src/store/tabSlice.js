import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isShowMenu: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setShowMenu: (state, action) => {
      state.isShowMenu = action.payload;
    },
  },
});

export const {setShowMenu} = counterSlice.actions;

export const ismenu = state => state.menu.isShowMenu;

export default counterSlice.reducer;
