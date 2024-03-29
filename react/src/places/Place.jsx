import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../userContext";
import "leaflet/dist/leaflet.css";
import "../App.css";
import { ReviewsList } from "./reviews/ReviewsList";
import { addplacemark } from "../slices/placeMarkSlice";
import { ismarked } from "../slices/placeMarkSlice";
import { useDispatch, useSelector } from "react-redux";

import { getPlace, favourite, unfavourite, delPlace } from "../slices/places/thunks";

export const Place = () => {

  const { usuari, authToken } = useContext(UserContext);
  const { place, isLoading=true, favorites, favorited } = useSelector((state) => state.places);
  const dispatch = useDispatch();

  const { id } = useParams();
  const { pathname } = useLocation();
  const { placeMarks, isMarked } = useSelector((state) => state.placeMarks);

  const markPlace = (event) => {
    event.preventDefault();
    if(place.description.lenght <= 1) return;

    const placeMark = {
      id: place.id,
      name: place.name,
      description: place.description,
      ruta: pathname
    };

    console.log(placeMark)
    dispatch(addplacemark(placeMark))  
  };

  useEffect(() => {
    dispatch(getPlace(id, authToken));
    dispatch(ismarked(id));
  }, []);

  return (
    <>

      {isLoading ? (
        "Espera...."
      ) : (
        <>
          <div className="md:grid md:grid-col-1 md:grid-flow-row gap-4 md:mx-auto p-6 justify-center dark:bg-gray-900 dark:text-gray-100">
            <div className="relative overflow-hidden bg-no-repeat bg-cover col-span-1 ">
              <img
                src={
                  "https://backend.insjoaquimmir.cat/storage/" +
                  place.file.filepath
                }
                alt=""
                className=" col-span-1 w-200 h-96 items-center"
              />

              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-40 transition duration-300 ease-in-out bg-white"></div>
            </div>

            <div className="max-w-xl">
              <h2 className="bg-blue-300 col-span-1 text-xl font-semibold">
                {place.name}
              </h2>
              <span className="bg-blue-200 col-span-1 block pb-2 text-sm dark:text-gray-400">
                Enviada per: {place.author.name}
              </span>
              <span className="self-center   px-9 bg-gray-200 col-span-2 text-x2 font-semibold">
                Latitud: {place.latitude}{" "}
              </span>
              <span className="self-center px-7 bg-gray-200 text-x2 font-semibold">
                Longitud: {place.longitude}
              </span>

              <div className="bg-orange-100 py-3 text-x2 font-semibold">
                Descripció
              </div>
              <p className=" bg-yellow-100">{place.description}</p>
              <div className="mt-10 h-12 max-h-full md:max-h-screen">

                {place.author.email === usuari ? (
                  <>
                    <Link
                      to={"/places/edit/" + id}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-10 px-4 h-10 md:h-10 uppercase"
                    >
                      {" "}
                      Editar{" "}
                    </Link>
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 md:h-10 uppercase"
                      onClick={(e) => dispatch( delPlace(place, authToken)) }
                    >
                      {" "}
                      Esborrar
                    </a>
                  </>
                ) : (
                  <></>
                )}
                {isMarked ? (
                  <a
                    href="#"
                    
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 h-10 md:h-10 uppercase"
                  >
                    DESAT
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => markPlace(e)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 md:h-10 uppercase"
                  >
                    DESAR
                  </a>
                )}



                {favorited ? (
                  <a
                    href="#"
                    onClick={(e) => dispatch(unfavourite(id, authToken, favorites))}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 h-10 md:h-10 uppercase"
                  >
                    - ❤️ {favorites}
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => dispatch(favourite(id, authToken, favorites))}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 md:h-10 uppercase"
                  >
                    + ❤️ {favorites}
                  </a>
                )}

                <ReviewsList
                  id={place.id}
                  reviews_count={place.reviews_count}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};