import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterName: null,
  },

  reducers: {
    setFiltername: (state, action) => {
      state.filterName = action.payload
    },
  },
});

export const { setFiltername } = filterSlice.actions;

export default filterSlice.reducer;
