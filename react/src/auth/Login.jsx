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