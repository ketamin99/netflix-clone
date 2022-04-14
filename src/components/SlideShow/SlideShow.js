import {React, useEffect, useState} from 'react'
import axios from '../../api/instance'
import './slideShow.scss'

function SlideShow( {fetchUrl} ) {
  const [movieData, setMovieData] = useState()

  useEffect(()=>{
    async function getMovieBanner(){
      const movieData = await axios.get(fetchUrl)
      setMovieData(movieData.data.results);
      return movieData
    }
    getMovieBanner()
  },[fetchUrl])

  console.log(movieData);

  return (
    <div>SlideShow</div>
  )
}

export default SlideShow