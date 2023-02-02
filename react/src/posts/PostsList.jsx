import React from 'react';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../userContext";

export default function PostAdd() {
    let { authToken, setAuthToken } = useContext(UserContext);
    let [ listaposts, setlistaposts]  = useState("");
////////////////////////////////////////////////////////////////////////////////    
    const sendLogin = async(e) => {
      try{
        const data = await fetch("https://backend.insjoaquimmir.cat/api/posts", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer '  + authToken,
          },
          method: "GET",
        });
        
        const resposta = await data.json();
        if (resposta.success === true) console.log(resposta), setlistaposts(resposta.data);


        else alert("La resposta no ha triomfat");


      }catch{
        console.log("Error");
        alert("catch");
      }
    }  
    useEffect(() => {
      sendLogin();
      }, [])
////////////////////////////////////////////////////////////////////////////////
    return (
      <>
<tr>

  <th>Id</th>

  <th>Body</th>

  <th>Latitude</th>

  <th>Longitude</th>

  <th>Author</th>

  <th>like</th>

  </tr>

      </>
      );
}

