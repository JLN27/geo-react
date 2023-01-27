import { useState } from 'react';
import React from 'react'
import { useContext } from "react";
import { UserContext } from "../userContext";

export const PlaceAdd = () => {
  let [formulari, setFormulari] = useState({});
  let { authToken,setAuthToken } = useContext(UserContext);


    const handleChange = (e) => {
      e.preventDefault();
      setFormulari({
        // ...formulari es como el cache
        ...formulari,
        [e.target.name]: e.target.value
      });
      console.log(formulari);
    };
    const handleRegister = async(e) => {
      e.preventDefault();
      let {name,description,upload,latitude,longitude,visibility}=formulari;
      console.log(formulari);
      var formData = new FormData();
      formData.append("name", "dsf");
      formData.append("description", description);
      formData.append("upload", upload);
      formData.append("latitude", latitude);
      formData.append("longitude", longitude);
      formData.append("visibility", visibility);
      var options = { content: formData };

      console.log(options);
      try{
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + authToken
          },
          method: "POST",
          body: options
        })
        const resposta = await data.json();
        if (resposta.success === true) console.log(resposta);

        else alert("La resposta no ha triomfat");
          
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
            <div className="title">Add Places</div>

            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Name" id="name" name="name" onChange={handleChange}/>
            </div>

            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Description" id="description" name="description" onChange={handleChange}/>
            </div>

            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="file" className="login__input" placeholder="Upload" id="upload" name="upload" onChange={handleChange}/>
            </div>

            <div className="login__field ">
              <i className="login__icon fas fa-lock"></i>
              <input type="number" className="login__input" placeholder="Latitude" id="latitude" name="latitude" onChange={handleChange}/>
            </div>

            <div className="login__field ">
              <i className="login__icon fas fa-lock"></i>
              <input type="number" className="login__input" placeholder="Longitude" id="longitude" name="longitude" onChange={handleChange}/>
            </div>

            <div>
              <input type="radio" id="visibility" name="visibility" value="public" checked onChange={handleChange}/>
              <label htmlFor="public">Public</label>
            </div>

            <div>
              <input type="radio" id="visibility" name="visibility" value="private" onChange={handleChange}/>
              <label htmlFor="private">Private</label>
            </div>

            <button className="button login__submit"
              onClick={(e) => {
                handleRegister(e);
              }}>
              <span className="button__text">Submit</span>
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
