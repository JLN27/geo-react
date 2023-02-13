import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { UserContext } from "../userContext";
import { ReviewsList } from './reviews/ReviewsList';
import { Favorites } from './favorites/Favorites';



export const Place = () => {
    let { id } = useParams();
    let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
    let [isLoading, setIsLoading] = useState(true)
    let [place, setPlace] = useState({});

  const getPlace = async(e) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true) setPlace(resposta.data), console.log(resposta), setIsLoading(false);
      
      else alert("La resposta no a triomfat");

      }catch{
        console.log("Error");
        alert("catch");  
      }
      
  }
  useEffect(() => { getPlace(); }, []);
  return (
    <>  {(isLoading == true) ? <div>Cargando datos...</div>:
        <div>
        <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name} width="300"/>

        <div>Place: {place.name}</div>
        <div>Autor: {place.author.name}</div>
        <div>Latitud: {place.latitude}</div>
        <div>Longitud: {place.longitude}</div>
        <div>Favoritos: {place.favorites_count}</div>
        <div>Reviews: {place.reviews_count}</div>
        <div>Visibilidad: {place.visibility.name}</div>

        {(userEmail == place.author.email) &&
          <div><i className="bi bi-pencil-square"></i></div>
        }
        
        {(userEmail == place.author.email) &&
          <div><i className="bi bi-trash3"></i></div>
        }
        <Favorites id = {place.id}/>
        <ReviewsList id={place.id}/>
       </div>
       
        
      }
    </>
    

  )
}
