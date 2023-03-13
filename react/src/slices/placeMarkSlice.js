import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeMarks: JSON.parse(localStorage.getItem("marksPlaces")) || [],
  isMarked : false
};

export const placeMarkSlice = createSlice({
  name: "placeMarks",
  initialState,
  reducers: {
    addplaceMark: (state, action) => {
      state.placeMarks.push(action.payload); // aqui podem fer push
      state.isMarked = true;
    },
    delplaceMark: (state, action) => {
      state.placeMarks = state.placeMarks.filter((placeMarks) => placeMarks.id !== action.payload);
    },
    ismarked: (state, action) => {
      state.isMarked = false
      state.placeMarks.map((placeMark) => {
        if(placeMark.id == action.payload) {
          state.isMarked = true;
        }
      })
    }
  }
})
export const { addplaceMark, delplaceMark, ismarked } = placeMarkSlice.actions;
const placeMarksReducer = placeMarkSlice.reducer
export default placeMarksReducer
