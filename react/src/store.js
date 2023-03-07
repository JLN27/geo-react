import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./slices/todoSlice"
import placeMarksSlice from "./slices/placeMarkSlice"


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    placeMarks: placeMarksSlice
    }
})