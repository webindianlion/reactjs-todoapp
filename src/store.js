import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './features/counter/counterSlice';
import todoSlice from './todoSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    todoSlice: todoSlice
  }
});
