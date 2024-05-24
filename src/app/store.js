import { configureStore } from '@reduxjs/toolkit'

import calculateReducer from '../components/features/calculate';
import todoListReducer from "../components/features/todoList"

export default configureStore({
  reducer: {
    calculate: calculateReducer,
    todoList:todoListReducer
  }
})

