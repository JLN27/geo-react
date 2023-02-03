import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../userContext";
import { PlaceList } from './PlaceList'



export const PlacesList = () => {
  let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
  let [places, setPlaces] = useState([]);
  let [refresh,setRefresh] = useState(false)


  const savePlaces = async() => {
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

  const deletePlace = async(id) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+ id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "DELETE"
      })
      const resposta = await data.json();
      if (resposta.success === true) console.log(resposta), setRefresh(!refresh);
      
      else alert("La resposta no a triomfat");

      }catch{
        console.log("Error");
        alert("catch");  
      }
      
  }
  
  
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
          
          { places.map ( (place)=> (
              (place.visibility.name != 'private' || userEmail == place.author.email) &&
              (<tr key={place.id}>
              <PlaceList place={place} deletePlace={deletePlace} /></tr>)
          ))}

        </tbody>
      </table>
    </>

  )
}
