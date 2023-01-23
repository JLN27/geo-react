import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";

export default function Header() {
  //Modificar token
  let { authToken, setAuthToken } = useContext(UserContext);
  let [ userName, setUserName ] = useState("");

  //Guardar el nombre de usuario
  useEffect(() => {
    
    fetch("https://backend.insjoaquimmir.cat/api/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer '  + authToken,
      },
      method: "GET"
    })
    .then((data) => data.json())
    .then((resposta) => {
      console.log(resposta);
      if (resposta.success === true) {
        setUserName(resposta.user.name);
      }
    })
  }, [])
  //Funcion para hacer logout
  const sendLogout = (e) => {
    e.preventDefault();
    fetch("https://backend.insjoaquimmir.cat/api/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization' : 'Bearer ' + authToken
        },
        method: "POST"
    })
      .then((data) => data.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.success === true) {
          setAuthToken("");
        }
        alert(resposta.message);
      })
  ;}

  


  return (
    <>
        
      <div className="header">
        {/*Enlaces  */}
        <Link to="/about">About </Link>
        <Link to="/places"> Places </Link>
        <Link to="/posts">Posts </Link>
        
        <h1>{userName}</h1>
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