import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../userContext";
import { PlaceList } from './PlaceList'

export const PlacesList = () => {
  let { authToken, setAuthToken } = useContext(UserContext);
  let [places, setPlaces] = useState([]);
  let [place, setPlace] = useState([]);

  const savePlaces = async(e) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true) setPlaces(resposta.data), console.log(resposta);
      
      else alert("La resposta no a triomfat");

      }catch{
        console.log("Error");
        alert("catch");  
      }
      
  }
  useEffect(() => { savePlaces(); }, []);

  
  return (
    <>
      <div>PlacesList</div>
      <table>
     { places.map (  (place)=> ( 
       
         <tbody key={place.id}><PlaceList place={place} /></tbody>
       
        ) ) }
        </table>
    </>

  )
}
