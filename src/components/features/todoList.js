import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todolistSlice = createSlice({
    name:"todoList",
    initialState,
    reducers:{
        addList: (state,action) => {
            return [...state, action.payload]
        },
        deleteList:(state,action) => {
            return state.filter((item)=> item.id !== action.payload)
        },
        editList: (state,action) => {
        //Mutating Object
            // const item = state.find(item => item.id === action.payload.id);
            // if(item){
            //     item.task = action.payload.task;
            //     item.description = action.payload.description;
            // }
        //Without Mutating Object
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    task: action.payload.task,
                    description: action.payload.description,
                };
            }
           
        }
    },

})
export const todoList = (state) => {
    return state.todoList
} ;

export const {addList, deleteList, editList } = todolistSlice.actions

export default todolistSlice.reducer;