import React from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../userContext";

export const PlaceList = ({place, deletePlace}) => {
  let { userEmail, setUserEmail } = useContext(UserContext);

  const deletePlace = async(id) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "DELETE"
      })
      const resposta = await data.json();
      if (resposta.success === true) console.log(resposta);
      
      else alert("La resposta no a triomfat");

      }catch{
        console.log("Error");
        alert("catch");  
      }

  }


  return (
    <>
        <td>{place.id}</td>
        <td>{place.name}</td>
        <td>{place.author.name}</td>
        <td>{place.latitude}</td>
        <td>{place.longitude}</td>
        <td>{place.favorites_count}</td>
        <td>{place.reviews_count}</td>
        <td>{place.visibility.name}</td>
        
          <td>
            <Link to={"/places/" + place.id} >
              <i className="bi bi-eye"></i>
            </Link>
          </td>
        
        

        {(userEmail == place.author.email) ?
          <td>
            <Link to={"/places/edit/" + place.id}>
              <i className="bi bi-pencil-square"></i>
            </Link>
            
          </td>
          : <td></td>
        }

        {(userEmail == place.author.email) ?<td><i className="bi bi-trash3"onClick={() => {
            deletePlace(place.id);
          }}></i></td>
          : <td></td>
        }
   
    </>
        

    
  )
}
