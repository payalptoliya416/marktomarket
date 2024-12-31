
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: "AddPosition"
};

export const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setTab } = positionSlice.actions;

export default positionSlice.reducer;
