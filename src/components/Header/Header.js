import { React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/instance'
import requests from '../../api/requestsMvList'
import tmdbApi from '../../api/tmdbApi'
import Logo from '../../assets/Logo/Logo'
import './header.scss'
import { BsSearch } from 'react-icons/bs'

function Header({ fetchUrl, movieId }) {
  const [keywords, setKeyWords] = useState('')

  const [movieData, setMovieData] = useState()


  useEffect(() => { 
    async function getMovieDetails(){
      let mvDetails = await tmdbApi.fetchMovieDetails(movieId)
      setMovieData(mvDetails)
      return mvDetails
    }
    getMovieDetails()
  },[movieId])

  useEffect(()=>{
    async function getMovieBanner(){
      const movieData = await axios.get(fetchUrl)
      let randomIndex = Math.floor(Math.random() * movieData.results.length) 
      setMovieData(movieData.results[randomIndex]);
    }
    getMovieBanner()
  },[fetchUrl])


  let navigate = useNavigate();
  
 
    function handleInputChange(e){
      setKeyWords(e.target.value)
    }
    
 
  function handleSearch(){
    navigate(`/search/${keywords}`)
    
  }
  

  return (
    <div className="header">
      <div className="navigation">
        
        <Logo  className="logo" />
        
        {movieData && 
        <form >
          <input 
            type="text" 
            placeholder="Search for..."
            onChange={handleInputChange}
            value={keywords}
          />
          <button onClick={handleSearch}>
            <BsSearch  />
          </button>
        </form>}
      </div>
      <div className="slideShow">
        
          {movieData && <div className="slideShow__img"> <img src={`${requests?.orginalImage}${movieData.backdrop_path || movieData.poster_path}`} alt={movieData.name}></img></div>}
        
        {movieData && <div 
          className="slideShow__description"  
        >
          <h2>{movieData.original_title || movieData.name }</h2>
          <br />
          <h4>{movieData.overview}</h4>
          <div>
            <a href={`/watch/${movieData.id}`}>Play Now</a>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Header