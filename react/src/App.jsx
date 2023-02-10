import './App.css'
import { useState } from 'react';
import { LoginRegister } from './auth/LoginRegister'
import { UserContext } from "./userContext";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import About from "./About";
import Posts from "./posts/Posts";
import Post from "./posts/Post";
import PostAdd from "./posts/PostAdd";
import PostEdit from "./posts/PostEdit";
import PostGrid from "./posts/PostsGrid";
import PostsGrid from "./posts/PostsGrid";
import PostsList from "./posts/PostsList";
import PostsMenu from "./posts/PostsMenu";

import Places from "./places/Places";
import NotFound from "./NotFound";

function App() {
  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");

  return (
    <>
    <UserContext.Provider
      value= { { usuari,setUsuari,authToken,setAuthToken }}
      // { authToken, setAuthToken } equival a  { authToken: authToken, setAuthToken:setAuthToken}
    >
     
      {authToken ? (
        <>
          <Header />
          <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<About />} />
              
              <Route path="/posts" element={<PostsMenu />} />
              <Route path="/posts/:id" element={ <> <PostsMenu/><Post/></> } /> 
              <Route path="/posts/add" element={ <> <PostsMenu/><PostAdd/> </>} /> 
              <Route path="/posts/edit/:id" element={ <> <PostsMenu/><PostEdit/> </>} /> 
              <Route path="/posts/grid" element={<> <PostsMenu/><PostsGrid /></>} />
              <Route path="/posts/list" element={ <> <PostsMenu/><PostsList/> </>} /> 


              <Route path="/places" element={<Places />} />
              

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
