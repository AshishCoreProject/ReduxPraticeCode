import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number:0 ,
    inputNumber: 0 
  }

const calculateSlice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    increase: (state) => {
      state.number += 1;
    },
    decrease:(state) => {
      state.number -= 1;
    },
    takeInput: (state, action) => {
      state.inputNumber = action.payload;
    },
    setCountAdd:(state) => {
      state.number = state.number + state.inputNumber;
    },
    setCountMinus: (state) => {
      state.number -= state.inputNumber;
    }
  }
})

export const selectCountNumber = state => {
 return state.calculate.number
};
export const {increase, decrease, takeInput, setCountAdd, setCountMinus } = calculateSlice.actions;
//action and actions are two different things.

export default calculateSlice.reducer