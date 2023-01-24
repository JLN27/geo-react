import React from 'react'
import { useParams } from "react-router-dom";

export const Place = () => {
    let { id } = useParams();
  return (
    <>
        
        <div>Place {id}</div>
        
    </>
    

  )
}
