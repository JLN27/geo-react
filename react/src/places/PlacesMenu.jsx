import React from 'react'
import { Link } from "react-router-dom";

export const PlacesMenu = () => {
  return (
    <>
        <Link to="/places/add">Añadir Entrada </Link>
        <Link to="/places/grid"> Grid </Link>
        <Link to="/places/list"> List </Link>
    </>
  )
}
