import React from 'react'
import { Link } from 'react-router-dom'

export const PlaceMark = ({mark, handleDeleteMark}) => {
  return (
    <tr>
      <td>{mark.id}</td>
      <td>{mark.name}</td>
      <td>{mark.description}</td>
      <td><Link to={mark.ruta}></Link></td>
      <td><button onClick={ (e) => {handleDeleteMark(mark.id)}}>Borrar</button></td>
    </tr>
   
  )
}
