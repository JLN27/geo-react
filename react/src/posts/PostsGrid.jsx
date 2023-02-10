import React from 'react';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../userContext";
import { PostList } from "./PostList";

export default function PostsGrid() {
  let { authToken,setAuthToken ,usuari, setUsuari} = useContext(UserContext);
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
        console.log(usuari);

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

  <th>Visivility</th>

  <th>like</th>

  <th>edit  </th>

  </tr>

      {listaposts.map ( (post)=>((usuari == post.author.email) || (post.visibility.id == 1)&&
        (<tr key={post.id}> <PostList post={post}/></tr>)
      ))}
      </>
      );
}

