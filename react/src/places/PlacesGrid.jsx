import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../userContext";
import { PlaceGrid } from './PlaceGrid'

export const PlacesGrid = () => {
  let { authToken, setAuthToken } = useContext(UserContext);
  let [places, setPlaces] = useState([]);

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
          { places.map (  (place)=> ( 
              <div key={place.id}>
                <PlaceGrid place={place} />
              </div>  
          ) ) }

    </>

  )
}
