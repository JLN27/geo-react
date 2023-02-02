import React from 'react'
import { useParams } from 'react-router-dom';

export default function Posts() {
  const { id } = useParams();
  return (
    <div>Posts    {id}</div>

  )
}
