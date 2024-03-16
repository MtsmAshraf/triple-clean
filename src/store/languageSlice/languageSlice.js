import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: "arabic"
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: state => {
      state.language = state.language === "arabic" ? "english" : "arabic" ;
    }
  }
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;