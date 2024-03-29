import { UserContext } from "../userContext";
import { useEffect, useContext } from "react";

export const useLogin = () => {

    let { usuari, setUsuari, setAuthToken, setIdUsuari } = useContext(UserContext);

    const checkAuthToken = () => {

        let token = localStorage.getItem("authToken") || ""
        if (token == ""){
            setAuthToken("");
        }else{
            fetch("https://backend.insjoaquimmir.cat/api/user",{
        
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,  
        },
        method: "GET",
            }).then( data => data.json() )
            .then((resposta) => {
                if (resposta.success === true) {
                    setAuthToken(token);
                    console.log("Token Correcte: " + token);
                    setUsuari(resposta.user.email);
                    setIdUsuari(resposta.user.id);
                }else{
                    setAuthToken("");
                }
            });
        }
    };

    const doLogin = async (data) => {
        let email = data.email;
        let password = data.password;
    
        console.log("Comprovant credencials....")
        fetch ("https://backend.insjoaquimmir.cat/api/login",{
            
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({ email, password })
        }
        ).then( data => data.json() )
        .then (resposta => { 
            
                console.log(resposta); 
                if (resposta.success == true )
                {
                    setAuthToken(resposta.authToken);
                    localStorage.setItem('authToken', resposta.authToken);
                    console.log(usuari)
                }
                else
                { 
                    setAuthToken("");
                    console.log(resposta)
                    alert(resposta.message);
                }
            } ) 
        .catch((data) => {
            console.log("Network error")
        });
    }

    useEffect(() => {
        checkAuthToken();
    })
    return { doLogin, checkAuthToken };
}