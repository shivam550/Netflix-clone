import { useEffect, useState } from "react"


import "./Movies.css"

const Movies = () => {

const [movieData,setMovieData] = useState([]);
const [topRatedMovies,setTopRatedMovies] = useState([]);
const [query , setQuery] = useState([]);
const [page,setPage] = useState(1);
const [loading , setLoading] = useState(false);
const [hasmore, setHasmore] = useState(true);

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWVkMDRmNjExYzBmYTA3YzNiY2ZhZWJlODI5MjBmMCIsIm5iZiI6MTcyNzExMzAzNC40ODIyNzksInN1YiI6IjY2ZWRhZGM4NjliOTY4NzA0ZGFkZDM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uyhCPb4gSkAOF4DCz1Oz8TipQ3alBbY5v-Yml6jMA8M'
    }
  };


const fetchallMovieData = async()=>{
  setLoading(true);
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, options)
      const value = await response.json();


      if(value.results.length > 0) {
        setMovieData((prevMovies)=> [...prevMovies, ...value.results]);
        setHasmore(page < value.total_pages);
      }else{
        setHasmore(false);
      }  
    }catch(err){
        console.log(err)
    }
    setLoading(false);
}



  const searchmovie = movieData.filter((item)=>item.title.toLowerCase().includes(query))

const handleFilter =() =>{
   const topMovies = movieData.filter(movie=>movie.vote_count >= 500)
   console.log(topMovies);
 setTopRatedMovies(topMovies)
}

useEffect(()=>{
   fetchallMovieData(page);
},[page])



const loadMoreMovies = () => {
  if(hasmore && !loading){
    setPage((prevPage) => prevPage + 1);
  }
}


useEffect(()=> {
  const handleScroll = () => {
    if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight -30)
      return loadMoreMovies();
  }
   window.addEventListener('scroll' , handleScroll);
   return ()=> window.removeEventListener('scroll',handleScroll)
},[])


  return (
    <div className="movies-page">
        <div className="movies-header">
         <input type="text" className="input-text" placeholder="Enter Movie Name.." onChange={(e)=>{setQuery(e.target.value.toLowerCase())}} />
        <button className="top-rated-btn" onClick={handleFilter}>Top Rated</button>
        </div>
        <div className="all-movies">
        {

            topRatedMovies.length > 0  ?(
                topRatedMovies.map((movie,index)=>(
                    <div className="movie-card" key={index}> 
                    <img src={`https://image.tmdb.org/t/p/w300/`+movie.backdrop_path} alt={movie.title}  className="movie-img"/>
                    <p className="movie-title">{movie.title}</p>
                    <p className="movie-overview">{movie.overview}</p>
                    <p className="movie-vote">{movie.vote_count} viewss </p>
                </div>
                ))
            ) :
             (
                searchmovie.map((movie,index) => (
                    <div className="movie-card" key={index}> 
                            <img src={`https://image.tmdb.org/t/p/w300/`+movie.backdrop_path} alt={movie.title}  className="movie-img"/>
                            <p className="movie-title">{movie.title}</p>
                            <p className="movie-overview">{movie.overview}</p>
                            <p className="movie-vote">{movie.vote_count}</p>
                        </div>
                ))
              )
        }
    </div>

    {/* <div className="Loadmore-container">
    {
      hasmore && !loading && (
        <button className="load-more-btn" onClick={loadMoreMovies}>Load More </button>
      )
    }
    </div> */}

    {loading && <p>Laoding....</p>}
    </div>
  )
}

export default Movies;