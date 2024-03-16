import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice/themeSlice.js';
import languageReducer from './languageSlice/languageSlice.js';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer
  }
});

export default store;
