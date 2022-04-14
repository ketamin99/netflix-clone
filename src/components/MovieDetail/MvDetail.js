import { React, useState, useEffect } from 'react'
import tmdbApi from '../../api/tmdbApi';
import requests from '../../api/requestsMvList';
import './mvDetail.scss'

function MvDetail({ movieId }) {

  const [movieVideos, setMovieVideos] = useState()

  const [movieDisplay, setMovieDisplay] = useState()


  const [movieDetails, setMovieDetails] = useState()

  useEffect(() => { 
    async function getMovieDetails(){
      let mvDetails = await tmdbApi.fetchMovieDetails(movieId)
      setMovieDetails(mvDetails.data)
      return mvDetails.data
    }
    getMovieDetails()
  },[movieId])

  useEffect(() => {
    async function getVideos(){
      let mvData = await tmdbApi.fetchMovieVideos(movieId)
      setMovieVideos(mvData.data.results)
      return mvData.data.results
    }
    getVideos()
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
        <img 
        src={`${requests.orginalImage}${movieDetails?.backdrop_path}`}
        alt={`${movieDetails?.original_title}`}>
        </img>
        <div>
          <h2>{movieDetails?.original_title}</h2>
          <br />
          <h4>{movieDetails?.overview}</h4>
        </div>
      </div>
      <div className='watch__videos'>
        {movieDisplay?.map(movie =>(
          <>
            <iframe 
              src={`https://www.youtube-nocookie.com/embed/${movie.key}` }
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen="allowFullScreen"
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