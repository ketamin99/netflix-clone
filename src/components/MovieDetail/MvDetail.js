import { React, useState, useEffect } from 'react'
import tmdbApi from '../../api/tmdbApi';
import './mvDetail.scss'

function MvDetail({ movieId }) {

  const [movieVideos, setMovieVideos] = useState()

  const [movieDisplayQuantity, setMovieDisplayQuantity] = useState(3)


  useEffect(() => {
    async function getVideos(){
      let mvData = await tmdbApi.fetchMovieVideos(movieId)
      setMovieVideos(mvData.results)
      return mvData.results
    }
    getVideos()
  },[movieId])
  
  function handleShowMoreButton(){
    setMovieDisplayQuantity(movieDisplayQuantity+3)
  }

  return (
    <div className='watch'>
      <div className='watch__videos'>
        {movieVideos?.map((movie,index) =>(
          index < movieDisplayQuantity && 
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
        {movieDisplayQuantity >= movieVideos?.length ||
        <button
          type='button'
          onClick={handleShowMoreButton}
        >Show More
        </button>
        }
      </div>
     
    </div>
  )
}

export default MvDetail