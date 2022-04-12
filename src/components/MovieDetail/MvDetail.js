import { React, useState, useEffect } from 'react'
import axios from '../../api/instance';
import requests from '../../api/requestsMvList';
import './mvDetail.scss'

function MvDetail({ movieId }) {

  const [movieVideos, setMovieVideos] = useState()

  const [movieDisplay, setMovieDisplay] = useState()


  const [movieDetails, setMovieDetails] = useState()

  useEffect(() => { 
    async function fetchMovieDetails(){
      let mvDetails = await axios.get(`movie/${movieId}?${requests.apiKey}`)
      setMovieDetails(mvDetails.data)
      return mvDetails.data
    }
    fetchMovieDetails()
  },[movieId])

  

  useEffect(() => {
    async function fetchMovieVideos(){
      let mvData = await axios.get(`/movie/${movieId}/videos?${requests.apiKey}`)
      setMovieVideos(mvData.data.results)
      return mvData.data.results
    }
    fetchMovieVideos()
  },[movieId])

  useEffect(() => {
    function handleMovieDisplay(){
      let mvDisplay = movieVideos?.slice(0,3)
      setMovieDisplay(mvDisplay) 
    }
    handleMovieDisplay()
  },[movieVideos])

  


  return (
    <div className='watch'>
      <div className='watch__details'>
        
      </div>
      <div className='watch__videos'>
        {movieDisplay?.map(movie =>(
          <>
            <iframe 
              src={`https://www.youtube-nocookie.com/embed/${movie.key}` }
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen"
              
              >
            </iframe>
          </>
        ))}
      </div>
     
    </div>
  )
}

export default MvDetail