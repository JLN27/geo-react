import React from 'react'
import { useContext } from "react";
import { UserContext } from "../../userContext";

export const Review = ({review, deleteReview}) => {
  let { userEmail, setUserEmail } = useContext(UserContext);

  return (
  <>
    <td>{review.id}</td>
    <td>{review.review}</td>
    <td>{review.user.name}</td>

    {(userEmail == review.user.email) ?<td><i className="bi bi-trash3"onClick={() => {
            deleteReview(review.id);
          }}></i></td>
          : <td></td>
    }
  </>
    
  )
}
