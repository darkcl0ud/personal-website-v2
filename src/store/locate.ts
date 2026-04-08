import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  ip: "",
  country: "",
};

const locateSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setLocate: (state, action: PayloadAction<{ ip: string, country: string }>) => {
      state.ip = action.payload.ip;
      state.country = action.payload.country;
    },
  },
});

export default locateSlice.reducer;
export const locateActions = locateSlice.actions;