import './App.css';
import { useState } from 'react';
import { LoginRegister } from './auth/LoginRegister';
import { UserContext } from "./userContext";
import { Routes, Route, Router, useParams } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import About from "./About";
import Posts from "./posts/Posts";
import NotFound from "./NotFound";
import { PlaceEdit } from './places/PlaceEdit';
import { PlaceAdd } from './places/PlaceAdd';
import { Place } from './places/Place';
import { PlacesGrid } from './places/PlacesGrid';
import { PlacesList } from './places/PlacesList';
import { PlacesMenu } from './places/PlacesMenu';
import { ReviewsList } from './places/reviews/ReviewsList';


function App() {
  let [authToken, setAuthToken] = useState("");
  let [userEmail, setUserEmail] = useState("");

  return (
    <>
    <UserContext.Provider
      value={{  userEmail, setUserEmail,authToken,setAuthToken}}
    >
     
      {authToken ? (
        <>
          <Header />
          <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<><PlacesMenu /><PlacesList /> </>} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/places" element={<><PlacesMenu /><PlacesList /> </>} />
              
              <Route path="/places/:id" element={<><PlacesMenu /> <Place /></>} />
              <Route path="/places/add" element={<><PlacesMenu /><PlaceAdd /> </>} />
              <Route path="/places/edit/:id" element={<><PlacesMenu /><PlaceEdit /> </>} />
              <Route path="/places/grid" element={<><PlacesMenu /><PlacesGrid /> </>} />
              <Route path="/places/list" element={<><PlacesMenu /><PlacesList /> </>} />

              {/* RUTA TEMPORAL PRUEBAS REVIEWS */}
              <Route path="/places/reviews" element={<><PlacesMenu /><ReviewsList /> </>} />

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
