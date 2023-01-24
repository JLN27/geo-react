import React from 'react'

export const PlaceList = ({place}) => {
    
  return (
    <tr>
        <td>{place.id}</td>
        <td>{place.name}</td>
        <td>{place.latitude}</td>
        <td>{place.longitude}</td>
        <td>{place.author.name}</td>

    </tr>
    
  )
}
