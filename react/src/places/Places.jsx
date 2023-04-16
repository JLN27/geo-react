import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlacesMenu } from './PlacesMenu';

export const Places = () => {
    
    const navega = useNavigate()
    useEffect ( ()=> {
        navega("/places/grid")

    },[])
 
    return (
    <>
    {<PlacesMenu/>}
    </>      
    
  )
}