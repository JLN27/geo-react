import React from 'react'
import { useContext } from "react";
import { UserContext } from "../userContext";

export const PlaceList = ({place}) => {
  let { userEmail, setUserEmail } = useContext(UserContext);
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
        
        <td><i className="bi bi-eye"></i></td>
        {(userEmail == place.author.email) ?
          <td><i className="bi bi-pencil-square"></i></td>
          : <td></td>
          
        }{(userEmail == place.author.email) ?
          <td><i className="bi bi-trash3"></i></td>
          : <td></td>
          
        }
        
        
    </>
        

    
  )
}
