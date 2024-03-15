import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice/themeSlice.js';

const store = configureStore({
  reducer: {
    theme: themeReducer
  }
});

export default store;
