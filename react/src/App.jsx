import reactLogo from './assets/react.svg'
import './App.css'
import { LoginRegister } from './auth/LoginRegister'
import { useState } from 'react'

import { UserContext } from './userContext'
import { Routes,Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Places } from './places/Places'
import { Place } from './places/Place'
import { About } from './components/aplicacio/About'
import { NotFound } from './components/aplicacio/NotFound'
import { PlaceEdit } from './places/PlaceEdit'
import { PlacesAdd } from './places/PlacesAdd'
import { PlacesMenu } from './places/PlacesMenu'
import { PlaceGrid } from './places/PlaceGrid'
import { PlacesGrid } from './places/PlacesGrid'
import { PlacesList } from './places/PlacesList'


import { ToDos } from './todos/ToDos'
import PlaceMarks from './places/PlaceMarks';



// "leaflet": "^1.9.3",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-leaflet": "^4.2.0",
//     "react-leaflet-marker": "^2.1.0",
//     "react-router-dom": "^6.4.3"

function App() {
  

  let [usuari, setUsuari] = useState("");
  let [ authToken,setAuthToken] = useState("");
  let [idUsuari, setIdUsuari] = useState("");

  

  return (
   <>

    <UserContext.Provider value= { { usuari, setUsuari,authToken,setAuthToken, idUsuari, setIdUsuari }}>
      
      { authToken != "" ? (
      
        <>
        <Header/>
      
         <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Places />}/>
            <Route path="/places" element={<Places />} />
            <Route path="/places/list" element={ <><PlacesMenu/><PlacesList /></> } /> 
            <Route path="/places/grid" element={ <><PlacesMenu/><PlacesGrid /></> } /> 
            <Route path="/places/add" element={ <><PlacesMenu/><PlacesAdd /></> } /> 
            <Route path="/places/edit/:id" element={  <><PlacesMenu/><PlaceEdit /></> } />
            <Route path="/places/:id" element={ <><PlacesMenu/><Place /></> } /> 
            <Route path="/places/marks" element={<> <PlacesMenu/><PlaceMarks/></>} />


            
            
            
             {/* <Route path="/posts" element={ <Places />} />
            <Route path="/posts/:id" element={<Place />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/todos" element={<ToDos />} />
        </Routes>

        {/* <Footer/> */}
       </>

    ) :  <LoginRegister /> }
    
    </UserContext.Provider>

      {/* <LoginRegister/> */}
   </>
  
  )
}

export default App
