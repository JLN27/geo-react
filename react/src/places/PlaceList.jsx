import React from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../userContext";

export const PlaceList = ({place, deletePlace}) => {
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
