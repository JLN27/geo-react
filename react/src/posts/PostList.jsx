import React from 'react';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../userContext";

export default function PostAdd() {
    let { authToken, setAuthToken } = useContext(UserContext);
    let [ listaposts, setlistaposts]  = useState([]);
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

<td>
  { listaposts.map (  (v)=> ( 
    <tr key={v}> {v.id} </tr>

        ) ) }
</td>
<td>
{ listaposts.map (  (v)=> ( 
    <tr key={v}> {v.body} </tr>

        ) ) }
        </td>
        <td>
{ listaposts.map (  (v)=> ( 
    <tr key={v}> {v.latitude}    </tr>

        ) ) }
        </td>
        <td>
{ listaposts.map (  (v)=> ( 
    <tr key={v}> {v.longitude} </tr>

        ) ) }
        </td>
        <td>
{ listaposts.map (  (v)=> ( 
    <tr key={v}> {v.author.name} </tr>

        ) ) }
        </td>
      </>
      );
}

