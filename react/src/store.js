import { configureStore } from '@reduxjs/toolkit'
import placesMarksReducer from './slices/placeMarkSlice'
import todosReducer from './slices/todoSlice'
import reviewSlice from './slices/reviews/reviewSlice'
import placeSlice from './slices/places/placeSlice'


export const store = configureStore({


  reducer: {
    todos: todosReducer,
    placeMarks: placesMarksReducer,
    reviews: reviewSlice,
    places: placeSlice,
    
  },
})