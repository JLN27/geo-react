import React from 'react'
import { useContext, useState, useEffect } from "react";

export default function PostsAdd() {
  let {name,description,upload,latitude,longitude,visibility}=formulari;
  const postAdd = async(formData) => {
    let {name,description,upload,latitude,longitude,visibility}=formulari;
    navigator.geolocation.getCurrentPosition( (pos )=> {
      formData({
        ...formulari,
        latitude :  pos.coords.latitude,
        longitude: pos.coords.longitude

      })
      console.log("Latitude is :", pos.coords.latitude);
      console.log("Longitude is :", pos.coords.longitude);
    });

  }



  return (
  
    <div className="form">
        <div className="input-container ic2">
            <input id="email" name="email" className="input" type="text" placeholder=" "  />
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">Name</label>
        </div>
        <div className="input-container ic2">
            <input id="email" name="email" className="input" type="FILE" placeholder=" "  />
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">Email</label>
        </div>        
        <div className="input-container ic2">
            <input id="email" name="email" className="input" type="text" placeholder=" "  />
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">Email</label>
        </div>        <div className="input-container ic2">
            <input id="email" name="email" className="input" type="text" placeholder=" "  />
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">Email</label>
        </div>
        <button type="text" className="submit"
        onClick={(e) => {
          sendLogin(e);
        }}>
            LOG IN</button>
    </div>






  )
}
