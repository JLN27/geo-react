import React from 'react'
import { useState, useContext } from 'react';
import { UserContext } from '../userContext';

import { useForm } from "react-hook-form"; 
import { useLogin } from '../hooks/useLogin';

export const Register = ({ setLogin }) => {

    let [ error, setError2] = useState("");
    let { setAuthToken } = useContext(UserContext);

    const { checkAuthToken } = useLogin(); 

  const onSubmit = data => handleRegister(data);
  const { register, handleSubmit , formState: { errors }} = useForm();

    const handleRegister = async (data) => {
        let name = data.name;
        let email = data.email;
        let password = data.password;
        let password2 = data.password2;

        if (password !== password2)
        {
            alert ("Els passwords han de coincidir")
        }

        fetch("https://backend.insjoaquimmir.cat/api/register", {
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ name: name, email: email, password: password})

        })
        .then((data) => data.json())
        .then((resposta) => {
            console.log(resposta);
            if (resposta.success === true) {
                setAuthToken(resposta.authToken);
            }
            else
            { 
                setError2(resposta.message);
            }
        })
        .catch((data) => {
            console.log(data);
            alert("Catchch");
          });

        alert("He enviat les Dades:  " + email + "/" + password);

    }
    
  return (
   
    <section
            className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
            <div x-show="isLoginPage" className="space-y-4">
                <header className="mb-3 text-2xl font-bold">Crea Usuari</header>
                
                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">

                        <input {...register("name", {
                        required: "Aquest camp és obligatori",
                        minLength: {
                        value: 4,
                        message: "El nom ha de contenir minim 4 caràcters"
                        },
                        pattern: {
                        value: /^[a-zA-Z]+\s[a-zA-Z]+$/,
                        message:
                            "Has de escriure nom, espai, cognom"
                        }

                        })} 
                        type="text"  placeholder="Name" 
                        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                {errors.name && <p>{errors.name.message}</p>}

                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">

                    <input 
                        {...register("email", {
                            required: "Aquest camp és obligatori",
                            pattern: {
                              value: /^[a-zA-Z0-9._%+-]+@insjoaquimmir\.cat$/,
                              message:
                                "El correu ha de ser de la organització insjoaquimmir.cat"
                            }
                
                        })} 

                        type="text" placeholder="Email" 
                        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                {errors.email && <p>{errors.email.message}</p>}

                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">

                    <input 
                        {...register("password", {
                            required: "Aquest camp és obligatori",
                            minLength: {
                              value: 8,
                              message: "La contrasenya ha de tenir al menys 8 caràcters"
                            },
                            pattern: {
                              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
                              message:
                                "La contrasenya ha de contenir al menys una minúscula, una majúscula, un número i un caracter especial"
                            }
                          })} 

                        type="password" placeholder="Password" 
                        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                {errors.password && <p>{errors.password.message}</p>}

                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">

                    <input 
                        {...register("password2", {
                            required: "Aquest camp és obligatori",
                            minLength: {
                              value: 8,
                              message: "La contrasenya ha de tenir al menys 8 caràcters"
                            },
                            pattern: {
                              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
                              message:
                                "La contrasenya ha de contenir al menys una minúscula, una majúscula, un número i un caracter especial"
                            }
                          })} 
                        type="password2" placeholder="Repeat Password" 
                        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                {errors.password2 && <p>{errors.password2.message}</p>}
                <button 

                    onClick={handleSubmit(onSubmit)}
                    className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                    CREA COMPTE
                </button>

                <div className="mt-8 text-sm text-gray-400">
                    <button onClick={ ()=> setLogin(true) } className="underline">Ja registrat?</button>                    
                </div>
            </div>
    </section>

  )
}