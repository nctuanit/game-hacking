import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  info: null,
  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
    },
    removeUserInfo: (state, action) => {
      state.info = null;
    },
  },
});

export const userInfoSelector = state => state.user.info;

export const {setUserInfo, removeUserInfo} = userSlice.actions;
export default userSlice.reducer;
