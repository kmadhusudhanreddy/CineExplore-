import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

const TvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadtv: (state, action) => {
      state.info = action.payload;
    },

    removetv: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadtv, removetv } = TvSlice.actions;

export default TvSlice.reducer;
