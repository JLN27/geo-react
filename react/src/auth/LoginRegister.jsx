import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import React from 'react'
import { Login } from './Login'
import { Register } from './Register'

export const LoginRegister = () => {
    let [isLogin, setLogin] = useState(true);
  return (
    <div>
      {isLogin ? <Register setLogin={setLogin} /> : <Login setLogin={setLogin} />}
    </div>
  )
}