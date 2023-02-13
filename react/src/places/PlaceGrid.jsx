import React from 'react'

export const PlaceGrid = ({place}) => {
  return (
    <>
      <div className="aa">
        <div>{place.name}</div>
        <div>{place.author.name}</div>
        <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name} width="300"/>
        <div>{place.latitude}</div>
        <div>{place.longitude}</div>
        <div>{place.favorites_count}</div>
        <div>{place.reviews_count}</div>
        <div>{place.visibility.name}</div>

      </div>
    
    </>
        

    
  )
}
