

import "./Player.css";
import back_arrow_item from "../../assets/back_arrow_icon.png"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [movieApidata , setMovieApidata] = useState({
       name : "",
       key : "",
       published_at:"",
       typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWVkMDRmNjExYzBmYTA3YzNiY2ZhZWJlODI5MjBmMCIsIm5iZiI6MTcyNjk0OTkxNS44MTI2MTMsInN1YiI6IjY2ZWRhZGM4NjliOTY4NzA0ZGFkZDM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jf2wULZTd2HiyZQEvtxTp69G4eGonkNGrrQoSakm8d0'
    }
  };
  
    const  fetchmovieData = async() =>{
      try{
        const movieData = await  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      const movieResponse = await movieData.json();
      // console.log(movieResponse);
      setMovieApidata(movieResponse.results[0])
      }catch(err){
        console.error(err);
      }
     }


    useEffect(() => {
      fetchmovieData();
},[])


  return (
    <div className="player">

      <img src={back_arrow_item} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe src={`https://www.youtube.com/embed/${movieApidata.key}`} title="trailer" width="90%" height="90%" frameBorder="0" allowFullScreen> </iframe>
      {/* <iframe src="https://www.youtube.com/embed/cT4CCK3lxiI" title="trailer" width="90%" height="90%" frameBorder="0" allowFullScreen> </iframe> */}

      <div className="player-info">
        <p>{movieApidata.published_at.slice(0,10)}</p>
        <p>{movieApidata.name}</p>
        <p>{movieApidata.type}</p>
      </div>
    </div>
  )
}

export default Player