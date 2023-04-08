import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todolist",
    initialState: {value:[]},
    reducers: {
        addlist: (state, action) => { state.value.push(action.payload) },
        removeList: (state, action) => {state.value.splice(action.payload, 1)}
    }
});
export const {addlist, removeList} = todoSlice.actions;
export const selectTodo = (state) => state.todoSlice.value;

export default todoSlice.reducer;