import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { delplaceMark } from "../../slices/placeMarkSlice"

export const PlaceMark = ({mark}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{mark.name}</td>
      <td>{mark.description}</td>
      <td><Link to={mark.link}>Ver</Link></td>
      <td><button onClick={() => {dispatch(delplaceMark(mark.id))}}>Borrar</button></td>
    </tr>
  )
}
