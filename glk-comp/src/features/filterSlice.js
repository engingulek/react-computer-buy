import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterbransName:[],
    searchbar:""
   
    
    
    
    
  },

  reducers: {
    setFilterbransname: (state, action) => {
      state.filterbransName.push(action.payload)
      
    },

    setFilterremove:(state,action)=>{
      
   const newFilter=  state.filterbransName.filter((filter)=>filter!==action.payload)
   if (newFilter) {
     state.filterbransName=[]
     state.filterbransName.push(action.payload)
     
   }

    },

    setSearchbar:(state,action)=>{
      state.searchbar=action.payload
    }
    
      

      
    

    

    
    
    
    
    
  },
});

export const { setFilterbransname,setFilterremove,setSearchbar} = filterSlice.actions;

export default filterSlice.reducer;
