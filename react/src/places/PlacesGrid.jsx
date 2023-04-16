import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces } from "../slices/places/thunks";
import { PlaceGrid } from "./PlaceGrid";
import { Paginate } from "./Paginate";

export const PlacesGrid = () => {
  const { usuari, authToken } = useContext(UserContext);
  const { places = [], page, isLoading=true, filter } = useSelector((state) => state.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaces(authToken, page));
  }, [page, filter]);
  return (
    <>
      <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600 text-4x1">
              Llistat de Llocs
            </span>
          </div>
          <div className="block w-max mx-auto px-3 py-1.5">
            <Paginate/>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {isLoading ? "Espera..." : <>{places.map((v) => {
              return (
            
                <>
                { v.visibility.id == 1 || v.author.email == usuari ? (<PlaceGrid key={v.id} v={v}/>) : <></> }
            
                </>
                )   
            })}</>}

          </div>
          <div className="block w-max mx-auto px-3 py-1.5">
            <Paginate/>
          </div>
        </div>
      </div>
    </>
  );
};