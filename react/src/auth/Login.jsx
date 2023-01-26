import { useState } from 'react';
import { useContext } from "react";
import React from 'react';
import { UserContext } from "../userContext";

export const Login = ({setLogin}) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let { authToken,setAuthToken } = useContext(UserContext);

    const sendLogin = async(e) => {
        e.preventDefault();
        try{
          const data = await fetch("https://backend.insjoaquimmir.cat/api/login", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ email: email, password: password })
          });
          
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

              <div className="title">LOG IN</div>

              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" placeholder="Email" 
                onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
              </div>

              <div className="login__field ">
                <i className="login__icon fas fa-lock"></i>
                <input type="password" className="login__input" placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}/>
              </div>

              <button className="button login__submit"
              onClick={(e) => {
                sendLogin(e);
              }}>
                <span className="button__text">LOG IN</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>		

              <button className="button login__submit"
                onClick={() => {
                  setLogin(true);
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