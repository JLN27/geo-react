import React from 'react'
import { useEffect } from "react";
import { useReducer } from "react";
import { PlaceMark } from './PlaceMark'
import { placeMarkReducer } from "./placeMarkReducer";


const initialState = [];
const init = () => {
  // Si localstorage tornes null tornariem un array buit
  return JSON.parse(localStorage.getItem("placesMarks")) || [];
};

export const PlaceMarks = () => {

  const [placesMarks, dispatchMarks] = useReducer(placeMarkReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("placesMarks", JSON.stringify(placesMarks));
  }, [placesMarks]);

  const handleDeleteMark = (id) => {
    console.log("Aqui arribo " + id);
    dispatchMarks({
      type: "Del Mark",
      payload: id
    });
  };

  console.log(placesMarks);

  return (
    
    <>  
        <div>
            {placesMarks.map((mark) => (
              <PlaceMark
                mark={mark}
                handleDeleteMark={handleDeleteMark}
              />
            ))}
          </div>
    </>
  )
}
