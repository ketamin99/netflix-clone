import {React, useEffect, useState} from 'react'
import axios from '../../api/instance'
import requests from '../../api/requestsMvList'
import './slideShow.scss'

function SlideShow( {fetchUrl} ) {
  const [movieData, setMovieData] = useState()

  useEffect(()=>{
    async function getMovieBanner(){
      const movieData = await axios.get(fetchUrl)
      let randomIndex = Math.floor(Math.random() * movieData.data.results.length) 
      setMovieData(movieData.data.results[randomIndex]);
    }
    getMovieBanner()
  },[fetchUrl])

console.log(movieData);

  return (
    <div className="slideShow">
      <img 
        src={`${requests?.orginalImage}${movieData?.backdrop_path}`} 
        alt={movieData?.name}> 
      </img>
      <></>
    </div>
  )
}

export default SlideShow