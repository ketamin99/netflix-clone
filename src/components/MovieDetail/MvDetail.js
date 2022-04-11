import { React, useState, useEffect } from 'react'
import axios from '../../api/instance';
import requests from '../../api/requestsMvList';
import './mvDetail.scss'

function MvDetail({ movieId }) {
  const [movieData, setMovieData] = useState()

  useEffect(() => {
    async function fetchMovieDetail(){
      let mvData = await axios.get(`/movie/${movieId}/videos?${requests.fetchMovieDetail}`)
      setMovieData(mvData.data.results)
      return mvData.data.results
    }
    fetchMovieDetail()
  },[movieId])

  return (
    <div>
      
        <iframe 
          src={`https://www.youtube-nocookie.com/embed/y_6aSG2yfe8`} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        
        
    </div>
  )
}

export default MvDetail