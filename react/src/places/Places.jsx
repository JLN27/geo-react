import React from 'react'
import { Link } from "react-router-dom";

export default function Places() {
  return (
    <>
        <div>Places</div>
        
        <Link to="/places/1">show id 1 </Link>
        <Link to="/places/add"> add </Link>
        <Link to="/places/edit/1">edit id 1 </Link>
        <Link to="/places/grid">grid </Link>

    </>
    
  )
}
