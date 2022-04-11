import { React, useState, useEffect } from 'react'
import axios from '../../api/instance';
import requests from '../../api/requestsMvList';
import './mvDetail.scss'

function MvDetail({ movieId }) {
  const [movieData, setMovieData] = useState()

  const [movieDisplay, setMovieDisplay] = useState()

  useEffect(() => {
    async function fetchMovieDetail(){
      let mvData = await axios.get(`/movie/${movieId}/videos?${requests.fetchMovieDetail}`)
      setMovieData(mvData.data.results)
      return mvData.data.results
    }
    fetchMovieDetail()
  },[movieId])

  useEffect(() => {
    function handleMovieDisplay(){
      let mvDisplay = movieData?.slice(0,5)
      setMovieDisplay(mvDisplay) 
    }
    handleMovieDisplay()
  },[movieData])

  


  return (
    <div className='watch'>
      <div className='watch__videos'>
        {movieDisplay?.map(movie =>(
          <>
            <iframe 
              src={`https://www.youtube-nocookie.com/embed/${movie.key}` }
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </>
        ))}
      </div>
     
    </div>
  )
}

export default MvDetail