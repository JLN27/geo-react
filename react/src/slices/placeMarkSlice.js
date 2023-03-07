import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeMarks: JSON.parse(localStorage.getItem("placeMarks")) || []
};

export const placeMarksSlice = createSlice({
  name: "placeMarks",
  initialState,
  reducers: {
    addplaceMark: (state, action) => {
      state.placeMarks.push(action.payload); // aqui podem fer push
    },
    delplaceMark: (state, action) => {
      state.placeMarks = state.placeMarks.filter((placeMark) => placeMark.id !== action.payload);
    },
    toggleplaceMark: (state, action) => {
      state.placeMarks = state.placeMarks.map((placeMark) => {
        if (placeMark.id === action.payload) {
          //id
          return { ...placeMark, done: !placeMark.done }; // invertim el done
        }
        return placeMark;
      });
    }
  }
});

export const { addplaceMark, delplaceMark, toggleplaceMark } = placeMarksSlice.actions;
export default placeMarksSlice.reducer;
