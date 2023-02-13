import './App.css';
import { useState } from 'react';
import { LoginRegister } from './auth/LoginRegister';
import { UserContext } from "./userContext";
import { Routes, Route, Router, useParams } from "react-router-dom";

import NotFound from "./NotFound";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import About from "./About";
import Post from "./posts/Post";
import PostAdd from "./posts/PostAdd";
import PostEdit from "./posts/PostEdit";
import PostsGrid from "./posts/PostsGrid";
import PostsList from "./posts/PostsList";
import PostsMenu from "./posts/PostsMenu";

import Places from "./places/Places";
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

              <Route path="/posts" element={<PostsMenu />} />
              <Route path="/posts/:id" element={ <> <PostsMenu/><Post/></> } /> 
              <Route path="/posts/add" element={ <> <PostsMenu/><PostAdd/> </>} /> 
              <Route path="/posts/edit/:id" element={ <> <PostsMenu/><PostEdit/> </>} /> 
              <Route path="/posts/grid" element={<> <PostsMenu/><PostsGrid /></>} />
              <Route path="/posts/list" element={ <> <PostsMenu/><PostsList/> </>} /> 


              <Route path="/places" element={<><PlacesMenu /><PlacesList /> </>} />
              <Route path="/places/:id" element={<><PlacesMenu /> <Place /></>} />
              <Route path="/places/add" element={<><PlacesMenu /><PlaceAdd /> </>} />
              <Route path="/places/edit/:id" element={<><PlacesMenu /><PlaceEdit /> </>} />
              <Route path="/places/grid" element={<><PlacesMenu /><PlacesGrid /> </>} />
              <Route path="/places/list" element={<><PlacesMenu /><PlacesList /> </>} />

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
