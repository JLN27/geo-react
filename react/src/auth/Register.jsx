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
      
      let { age, name, email, password, password2 } = formulari;
      alert(
        "He enviat les Dades:  " +
          age +
          "/" +
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
          body: JSON.stringify({ age, name, email, password })
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
    <div className="form">
        <div className="title">Create your profile</div>
        <div className="input-container ic1">
            <input id="age" name="age" className="input" type="number" placeholder=" " onChange={handleChange}/>
            <div className="cut"></div>
            <label htmlFor="age" className="placeholder">Age</label>
        </div>
        <div className="input-container ic2">
            <input id="name" name="name" className="input"  type="text" placeholder=" " onChange={handleChange}/>
            <div className="cut"></div>
            <label htmlFor="name" className="placeholder">Name (optional)</label>
        </div>
        <div className="input-container ic2">
            <input id="email" name="email" className="input" type="text" placeholder=" "  onChange={handleChange}/>
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">Email</label>
        </div>
        <div className="input-container ic2">
            <input id="password" name="password" className="input" type="password" placeholder=" "  onChange={handleChange}/>
            <div className="cut cut-short"></div>
            <label htmlFor="password" className="placeholder">Password</label>
        </div>
        <div className="input-container ic2">
            <input id="password2" name="password2" className="input" type="password" placeholder=" "  onChange={handleChange}/>
            <div className="cut cut-short"></div>
            <label htmlFor="password2" className="placeholder">Repetir password</label>
        </div>
        <button type="text" className="submit"
        onClick={(e) => {
            handleRegister(e);
            }}>
            CREATE ACCOUNT</button>
        <button className="submit"
            onClick={() => {
            setLogin(false);
            
            }}
            
        >
           Alredy registered?
        </button>
        
  </div>
  )
}
