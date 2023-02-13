import React from 'react'
import { Link } from 'react-router-dom'

export default function  PostsMenu () {
  return (
    <>
  
    <div className='placesMenu'>
        <Link to="/posts/add"  className='btn-placesMenu'>Add </Link>
        <Link to="/posts/grid"  className='btn-placesMenu'> Grid </Link>
        <Link to="/posts/list"  className='btn-placesMenu'>Listar </Link>
    </div>
    </>

  )
}
