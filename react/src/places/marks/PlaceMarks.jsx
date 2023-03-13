import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlaceMark } from './PlaceMark'

export const PlaceMarks = () => {

  const { placeMarks } = useSelector((state) => state.placeMarks);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("marksPlaces", JSON.stringify(placeMarks));
  }, [placeMarks]);

  console.log("dffds");
  console.log(placeMarks);

  return (
    
    <>  
        <table>
            {placeMarks.map((mark) => (
              <>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Ver</th>
                <th>Eliminar</th>
                <PlaceMark mark={mark}/>
              </>   
            ))}
        </table>
    </>
  )
}
