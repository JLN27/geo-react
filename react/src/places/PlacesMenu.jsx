import React from 'react'
import { Link } from "react-router-dom";

export const PlacesMenu = () => {
  return (
    <>
      <div className='placesMenu'>
        <Link to="/places/add" className='btn-placesMenu'>
            Añadir Entrada
        </Link>

        <Link to="/places/grid" className='btn-placesMenu'>
            Grid
        </Link>
        
        <Link to="/places/list" className='btn-placesMenu'>
            List
        </Link>
      </div>
    </>
  )
}
