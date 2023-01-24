import './App.css'
import { useState } from 'react';
import { LoginRegister } from './auth/LoginRegister'
import { UserContext } from "./userContext";
import { Routes, Route, Router, useParams } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import About from "./About";
import Posts from "./posts/Posts";
import Places from "./places/Places";
import NotFound from "./NotFound";
import { PlaceEdit } from './places/PlaceEdit';
import { PlaceAdd } from './places/PlaceAdd';
import { Place } from './places/Place';
import { PlacesGrid } from './places/PlacesGrid';
import { PlacesList } from './places/PlacesList';

function App() {
  let [authToken, setAuthToken] = useState("");

  return (
    <>
    <UserContext.Provider
      value={{ authToken, setAuthToken }}
      // { authToken, setAuthToken } equival a  { authToken: authToken, setAuthToken:setAuthToken}
    >
     
      {authToken ? (
        <>
          <Header />
          <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Places />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/places" element={<Places/>} />
              
              <Route path="/places/:id" element={<Place />} />
              <Route path="/places/add" element={<PlaceAdd />} />
              <Route path="/places/edit/:id" element={<PlaceEdit />} />
              <Route path="/places/grid" element={<PlacesGrid />} />
              <Route path="/places/list" element={<PlacesList />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <LoginRegister />
      )}
    </UserContext.Provider>
    </>
  );
}

export default App
