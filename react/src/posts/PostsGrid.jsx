import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../userContext";
import editar from "../assets/editar.png";
import esborrar from "../assets/esborrar.png";
import { useFetch } from "../hooks/useFetch";

// Temporal
//import places from '../../json/places.json'
//import users from '../../json/users.json'
import { PostsAdd } from "./PostsAdd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PostGrid } from "./PostGrid";

export const PostsGrid = () => {
  // desa el retorn de dades de l'api places
  let [posts, setPosts] = useState([]);
  // Ho utilitzem per provar un refresc quan esborrem un element
  let [refresca, setRefresca] = useState(false);
  // Dades del context. Ens cal el token per poder fer les crides a l'api
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);

  const { data, error, loading} = useFetch("https://backend.insjoaquimmir.cat/api/posts", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + authToken,
    },
    method: "GET",
  })
  // Esborrar un element
  const deletePost = (id, e) => {
    e.preventDefault();

    let confirma = confirm("Estas  segur?");

    if (confirma) {
      fetch("https://backend.insjoaquimmir.cat/api/posts/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
        method: "DELETE",
      })
        .then((data) => data.json())
        .then((resposta) => {
          console.log("Posts:" + resposta);
          if (resposta.success == true) {
            console.log("OK");
            // provoca el refrescat del component i la reexecució de useEffect
            setRefresca(true);
          }
        });
    }
  };

  return (
    <>
      <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600 text-4x1">
              Llistat de Llocs
            </span>
            {/* <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Sharing is Caring</h2>
        <p className="lg:w-6/12 lg:mx-auto">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p> */}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {loading ? "Espera..." : <>{data.map((v) => {
              return (
                <>
                  { v.visibility.id == 1 || v.author.email == usuari ? (<PostGrid  deletePost={ deletePost } key={v.id} v={v}/>) : <></> }            
                </>
              )
            })}</>}

          </div>
        </div>
      </div>
    </>
  );
};
