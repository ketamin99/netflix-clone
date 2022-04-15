import { React, useState, useEffect } from 'react'
import tmdbApi from '../../api/tmdbApi';
import './mvDetail.scss'

function MvDetail({ movieId }) {

  const [movieVideos, setMovieVideos] = useState()

  const [movieDisplay, setMovieDisplay] = useState()


  

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
      <div className='watch__videos'>
        {movieDisplay?.map(movie =>(
          <div 
            className='watch__video'
            key={`video${movie.id}`}
            >
            <iframe 
              key={`iframe${movie.id}`}
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
          </div>
        ))}
      </div>
     
    </div>
  )
}

export default MvDetail