import Home from "./pages/Home/Home"

import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/Login/Login"
import Player from "./pages/Player/Player"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "./firebase"
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Movies from "./components/Movies/Movies"


const App = () => {

  const navigate = useNavigate();

useEffect(()=>{
  onAuthStateChanged(auth,async(user)=>{
   if(user){
    // console.log("Logged IN")
    if(window.location.pathname === "/login")
    navigate('/')
   }else{
    // console.log("logged out")
    if(window.location.pathname !== "/login")
    navigate('/login')
   }
  });

},[navigate])

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path ="/movies" element={<Movies />} />
      </Routes>
      
      
    </div>
  )
}

export default App