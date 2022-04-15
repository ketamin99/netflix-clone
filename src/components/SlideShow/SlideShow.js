import {React, useEffect, useState} from 'react'
import axios from '../../api/instance'
import './slideShow.scss'

function SlideShow( {fetchUrl} ) {
  const [movieData, setMovieData] = useState()

  useEffect(()=>{
    async function getMovieBanner(){
      const movieData = await axios.get(fetchUrl)
      let randomIndex = Math.floor(Math.random() * movieData.length)
      setMovieData(movieData[randomIndex]);
    }
    getMovieBanner()
  },[fetchUrl])


  console.log(movieData);

  return (
    <div>
      
    </div>
  )
}

export default SlideShow