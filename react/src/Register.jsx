import React from 'react'

export const Register = ({setLogin}) => {
  return (
    <div className="form">
        <div className="title">Create your profile</div>
        <div className="input-container ic1">
            <input id="age" className="input" type="number" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="age" className="placeholder">Age</label>
        </div>
        <div className="input-container ic2">
            <input id="name" className="input" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="name" className="placeholder">Name (optional)</label>
        </div>
        <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " />
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">Email</label>
        </div>
        <div className="input-container ic2">
            <input id="password" className="input" type="password" placeholder=" " />
            <div className="cut cut-short"></div>
            <label htmlFor="password" className="placeholder">Password</label>
        </div>
        <button type="text" className="submit">CREATE ACCOUNT</button>
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
