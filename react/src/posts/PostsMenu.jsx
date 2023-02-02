import React from 'react'
import { Link } from 'react-router-dom'

export default function  PostsMenu () {
  return (
    <>
  
    <div>PostsMenu
        <Link to="/posts/add">Add </Link>
        <Link to="/posts/grid"> Grid </Link>
        <Link to="/posts/list">Listar </Link>
    </div>
    </>

  )
}
