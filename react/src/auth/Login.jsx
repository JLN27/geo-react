import React, { useContext } from 'react'
import { UserContext } from '../userContext';
import { useLogin } from '../hooks/useLogin';
import { useForm } from "react-hook-form";

export const Login = ({ setLogin }) => {


const { register, handleSubmit, formState: { errors } } = useForm();

  const { doLogin, error, setError } = useLogin()
  const onSubmit = data => doLogin(data)

  return (
    
   <section
   className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
   

    <div x-show="!isLoginPage" className="space-y-4">
                <header className="mb-3 text-2xl font-bold">Log in</header>
                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="text" placeholder="Email or username" 
                 
                    {...register("email")}
                        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                {errors.email && <p>{errors.email.message}</p>}

                <div
                    className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="password" placeholder="Password" 
 

                    {...register("password")}
                        className="my-3 w-full border-none bg-transparent outline-none" />
                    <a href="#" className="font-medium text-gray-400 hover:text-gray-500">FORGOT?</a>
                </div>
                {errors.password && <p>{errors.password.message}</p>}

                <button 

                onClick={handleSubmit(onSubmit)}

                    className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                    LOG IN
                </button>
            </div>

            <footer>
                <div className="mt-8 text-sm text-gray-400">
                    By signing in to ********, you agree to our
                    <a href="#" className="font-medium text-gray-500">Terms</a> and
                    <a href="#" className="font-medium text-gray-500">Privacy Policy</a>.
                </div>
                <div className="mt-8 text-sm text-gray-400">
                    <button onClick={ ()=> setLogin(false) } className="underline">Not registered ?</button>
                </div>
            </footer>
   </section>
    
    
    
    
    
  )
}