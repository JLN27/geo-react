import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";

export default function Header() {
  //Modificar token
  let { authToken, setAuthToken } = useContext(UserContext);
  let [ userName, setUserName ] = useState("");
  let [ roles, setRoles] = useState([]);

  //Guardar el nombre de usuario
  const savename = async(e) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true) setUserName(resposta.user.name), setRoles(resposta.roles);
      
      else alert("La resposta no a triomfat");

      }catch{
        console.log("Error");
        alert("catch");  
      }
      
  }
  useEffect(() => {
  savename();
  }, [])
  
    
  
  //Funcion para hacer logout
  const sendLogout = async(e) => {
    e.preventDefault();
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization' : 'Bearer ' + authToken
        },
        method: "POST"
    })
      const resposta = await data.json();
      if (resposta.success === true) alert(resposta.message), setAuthToken("");
      else alert("La resposta no a triomfat"); 
      
    }catch{
      console.log("Error");
      alert("catch");
    }
    
  ;}

  


  return (
    <>
        
      <div className="header">
        {/*Enlaces  */}
        <Link to="/about">About </Link>
        <Link to="/places"> Places </Link>
        <Link to="/posts">Posts </Link>
        
        <p>{userName}</p>
        { roles.map (  (v)=> ( 
          <span key={v}> {v} </span>
        ) ) }
        {/*Ejecutar funcion sendLogout onClick */}
        <button
        onClick={(e) => {
          sendLogout(e);
        }}>
          Logout
        </button>
      </div>
      <hr />
    </>
  );
}