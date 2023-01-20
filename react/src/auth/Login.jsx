import { useState } from 'react';
import { useContext } from "react";
import React from 'react';
import { UserContext } from "../userContext";

export const Login = ({setLogin}) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let { authToken,setAuthToken } = useContext(UserContext);

    const sendLogin = (e) => {
        e.preventDefault();

    console.log("Comprovant credencials....");
    // Enviam dades a l'aPI i recollim resultat
    fetch("https://backend.insjoaquimmir.cat/api/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password })
    })
      .then((data) => data.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.success === true) {
          setAuthToken(resposta.authToken);
          alert(resposta.authToken);
        }else{
          alert(resposta.message);

        }
      })
      .catch((data) => {
        console.log(data);
        alert("Catchch");
      });

        alert("He enviat les Dades:  " + email + "/" + password);
    ;}
  return (
    <div className="form">
        <div className="title">Log in</div>
        <div className="input-container ic1">
            <input id="email" className="input" type="text" placeholder=" "
            onChange={(e) => {
            setEmail(e.target.value);
          }}/>
            <div className="cut"></div>
            <label htmlFor="email" className="placeholder">Email</label>
        </div>
        <div className="input-container ic2">
            <input id="password" className="input" type="password" placeholder=" " 
            onChange={(e) => {
                setPassword(e.target.value);
              }}/>
            <div className="cut cut-short"></div>
            <label htmlFor="password" className="placeholder">Password</label>
        </div>
        <button type="text" className="submit"
        onClick={(e) => {
          sendLogin(e);
        }}>
            LOG IN</button>
        <button className="submit"
            onClick={() => {
            setLogin(true);
            }}
        >
           Not registered?
        </button>
  </div>
  )
}