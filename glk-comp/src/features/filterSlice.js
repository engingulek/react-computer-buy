import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterbransName:[],
    
    
    
    
  },

  reducers: {
    setFilterbransname: (state, action) => {
      state.filterbransName.push(action.payload)
      
    },

    
    
    
    
    
  },
});

export const { setFilterbransname} = filterSlice.actions;

export default filterSlice.reducer;
