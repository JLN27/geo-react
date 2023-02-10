import React from 'react';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../userContext";

export const PostsGrid = ({post}) => {
    let { authToken, setAuthToken } = useContext(UserContext);
////////////////////////////////////////////////////////////////////////////////    

    return (

<>
<td>{ post.id}</td>
<td>{ post.body}</td>
<td>{ post.latitude}</td>
<td>{ post.longitude}</td>
<td>{ post.author.name}</td>
<td>{ post.visibility.name}</td>
<td>
<a><i class="bi bi-eye"></i></a>
<a><i class="bi bi-trash"></i></a>
<a><i class="bi bi-pencil-square"></i></a>

</td>


      </>
      );
}


