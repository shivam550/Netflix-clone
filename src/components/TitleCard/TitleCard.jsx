



import "./TitleCard.css"

// import card_data from "../../assets/cards/Cards_data";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const TitleCard = ({ title, category }) => {


  const [apiData , setApiData] = useState([])

  const cardsRef = useRef(null);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWVkMDRmNjExYzBmYTA3YzNiY2ZhZWJlODI5MjBmMCIsIm5iZiI6MTcyNjk0OTkxNS44MTI2MTMsInN1YiI6IjY2ZWRhZGM4NjliOTY4NzA0ZGFkZDM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jf2wULZTd2HiyZQEvtxTp69G4eGonkNGrrQoSakm8d0'
    }
  };
  

  const fetchData = async() => {
    try{
      const datavalue = await fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options);
    const responseValue = await datavalue.json()
    setApiData(responseValue.results);
    }catch(err){
      console.error(err);
    }
  }
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }


  useEffect(() => {

    fetchData();
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [category])




  return (
    <div className="titlecards">
      <h2>
        {title ? title : "Popular on Netflix"}
      </h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card) => {
            return <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt={card.original_title} />

              <p>{card.original_title}</p>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default TitleCard