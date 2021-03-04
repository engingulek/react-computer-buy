import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import filterReducer from "../features/filterSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    filter:filterReducer
  },
});
