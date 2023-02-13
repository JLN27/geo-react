import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../../userContext";

export const Favorites = ({id}) => {
    let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
    let [canFavorite, setCanFavorite] = useState(false);
    ///////TEST///////
    const test = (e) => {
        setCanFavorite(false);
        console.log("empieza test");
        try{
            console.log("empieza favorite");
            var data =  fetch("https://backend.insjoaquimmir.cat/api/places/" + id + "/favorites", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Authorization': 'Bearer '  + authToken,
            },
            method: "POST"
          })
          var resposta =  data.json();
            if (resposta.success === true) 
              console.log("favorite true"), setCanFavorite(true), data =  fetch("https://backend.insjoaquimmir.cat/api/places/" + id + "/favorites", {
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken,
                },
                method: "POST"
                })                              
          }catch{
          }
      }

    const favorite = async(e) => {
        try{
          
            const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id + "/favorites", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Authorization': 'Bearer '  + authToken,
            },
            method: "POST"
          })
          const resposta = await data.json();
          if (resposta.success === true)  console.log(resposta);
          
          else alert("La resposta no a triomfat");
    
          }catch{
            console.log("Error");
            alert("catch");  
          }
      }

      const unFavorite = async(e) => {
        try{
          
            const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id + "/favorites", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Authorization': 'Bearer '  + authToken,
            },
            method: "DELETE"
          })
          const resposta = await data.json();
          if (resposta.success === true)  console.log(resposta);
          
          else alert("La resposta no a triomfat");
    
          }catch{
            console.log("Error");
            alert("catch");  
          }
      }
        useEffect(() => { test() }, []);

  return (
    <>
        {(canFavorite == true) ? 

            <i className="bi bi-star" onClick={() => {
                favorite()}}></i>: 
                
            <i className="bi bi-star-fill" onClick={() => {
                unFavorite()}}></i>}
    </>
  )
}
