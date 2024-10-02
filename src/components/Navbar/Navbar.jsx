


import "./Navbar.css"
import logo from "../../assets/logo.png"
import search from "../../assets/search_icon.svg"
import bell from "../../assets/bell_icon.svg"
import profile from "../../assets/profile_img.png"
import caret from "../../assets/caret_icon.svg"
import { useEffect, useRef } from "react"
import { logOut } from "../../firebase"
// import Movies from "../Movies/Movies"
import { Link } from "react-router-dom"



const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
   window.addEventListener('scroll' , ()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')
    }
   })
  },[])



  return (
    <div ref={navRef} className="navbar">
        <div className="navbar-left">
          <img src={logo} alt=""  className="logo"/>
          <ul>
            <li>Home</li>
            <li ><Link to="/movies" className="link">Movies</Link></li>
            <li>Tv series</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="navbar-right">
           <img src={search} alt="" className="search_logo" />
           <p>Childrean</p>
           <img src={bell} alt="" className="bell_logo" />
           <div className="navbar_profile">
           <img src={profile} alt="" className="profile" />
           <img src={caret} alt="" className="caret" />
            <div className="dropdown">
              <p onClick={()=>{logOut()}}>Sign out</p>
            </div>
           </div>

        </div>
    </div>
  )
}

export default Navbar