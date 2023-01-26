import { useState } from 'react';
import React from 'react'
import { useContext } from "react";
import { UserContext } from "../userContext";



export const Register = ({setLogin}) => {
    let [formulari, setFormulari] = useState({});
    let { authToken,setAuthToken } = useContext(UserContext);


    const handleChange = (e) => {
      e.preventDefault();
  
      setFormulari({
        // ...formulari es como el cache
        ...formulari,
        [e.target.name]: e.target.value
      });
    };
    const handleRegister = async(e) => {
      e.preventDefault();
      
      let { name, email, password, password2 } = formulari;
      alert(
        "He enviat les Dades:  " +
          name +
          "/" +
          email +
          "/" +
          password +
          "/" +
          password2
      );
      if (password2 !== password) {
        alert("Els passwords han de coincidir");
        return false;
      }
      try{
        const data = await fetch("https://backend.insjoaquimmir.cat/api/register", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          // Si els noms i les variables coincideix, podem simplificar
          body: JSON.stringify({ name, email, password })
        })
        const resposta = await data.json();
        if (resposta.success === true) alert(resposta.authToken), setAuthToken(resposta.authToken);

        else alert("La resposta no ha triomfat");

        alert("He enviat les Dades:  " + email + "/" + password);
          
      }catch{
        console.log("Error");
        alert("catch");
      }
      
    };
  return (
    <div>
    {<div className="container">
      <div className="screen">
        <div className="screen__content">

          <form className="login">
            <div className="title">Create your profile</div>

            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Name" id="name" name="name" onChange={handleChange}/>
            </div>

            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Email" id="email" name="email" onChange={handleChange}/>
            </div>

            <div className="login__field ">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Password" id="password" name="password" onChange={handleChange}/>
            </div>

            <div className="login__field ">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Repeat Password" id="password2" name="password2" onChange={handleChange}/>
            </div>

            <button className="button login__submit"
              onClick={(e) => {
                handleRegister(e);
              }}>
              <span className="button__text">Create Acount</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>		

            <button className="button login__submit"
              onClick={() => {
                setLogin(false);
              }}>
              <span className="button__text">Not registered?</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>	

          </form>
          
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>		
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>		
      </div>
    </div>}
  </div>
  )
}
