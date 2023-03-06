import React from 'react'
import { Link } from 'react-router-dom'

export const PlaceMark = ({mark}) => {
  return (
    <tr>
      <td>{mark.id}</td>
      <td>{mark.name}</td>
      <td>{mark.description}</td>
      <td><Link to={mark.ruta}></Link></td>
      <td>{mark.id}</td>
    </tr>
   
  )
}
