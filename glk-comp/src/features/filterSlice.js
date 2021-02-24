import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterName: null,
  },

  reducers: {
    setFiltername: (state, action) => {
      state.filterName = null;
    },
  },
});

export const { setFiltername } = filterSlice.actions;
export const selectFilterName = (state) => state.filter.filterName;
export default filterSlice.reducer;
