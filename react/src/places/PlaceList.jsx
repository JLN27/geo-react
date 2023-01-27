import React from 'react'

export const PlaceList = ({place}) => {
    
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
        <td><i class="bi bi-eye"></i></td>
        <td><i class="bi bi-pencil-square"></i></td>
        <td><i class="bi bi-trash3"></i></td>
    </>
        

    
  )
}
