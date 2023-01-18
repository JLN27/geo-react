import { useState } from 'react';
import React from 'react';

export const Login = ({setLogin}) => {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    const sendLogin = (e) => {
        e.preventDefault();
    
        alert("He enviat les Dades:  " + name + "/" + password);
    ;}
  return (
    <div className="form">
        <div className="title">Log in</div>
        <div className="input-container ic1">
            <input id="emailOrUsername" className="input" type="text" placeholder=" "
            onChange={(e) => {
            setName(e.target.value);
          }}/>
            <div className="cut"></div>
            <label htmlFor="emailOrUsername" className="placeholder">EmailOrUsername</label>
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