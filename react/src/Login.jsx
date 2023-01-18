import React from 'react'

export const Login = ({setLogin}) => {
  return (
    <div className="form">
        <div className="title">Log in</div>
        <div className="input-container ic1">
            <input id="emailOrUsername" className="input" type="number" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="emailOrUsername" className="placeholder">EmailOrUsername</label>
        </div>
        <div className="input-container ic2">
            <input id="password" className="input" type="password" placeholder=" " />
            <div className="cut cut-short"></div>
            <label htmlFor="password" className="placeholder">Password</label>
        </div>
        <button type="text" className="submit">LOG IN</button>
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