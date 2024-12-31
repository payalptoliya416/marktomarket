// store.js
import { configureStore } from '@reduxjs/toolkit';
import positionReducer from '../slice/PositionSlice'; 

const store = configureStore({
  reducer: {
    position: positionReducer
  },
});

export default store;
