import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../userContext";
import { PlaceList } from './PlaceList'

export const PlacesList = () => {
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
      <table className='table-placesList'>
        <tbody>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Favorites</th>
            <th>Reviews</th>
            <th>Visibility</th>
            <th>view</th>
            <th>edit</th>
            <th>delete</th>

          </tr>

        
          { places.map (  (place)=> ( 
              <tr key={place.id}>
                <PlaceList place={place} />
              </tr>  
          ) ) }
        </tbody>
      </table>
    </>

  )
}
