import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguge: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguge } = languageSlice.actions;
export default languageSlice.reducer;
