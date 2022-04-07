import React, { useEffect, useState, useRef } from 'react'
import axios from '../../api/instance'
import './row.scss'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'


const orginalImage = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movieList, setMovieList] = useState([])


  useEffect(() => {
    async function fetchData() {
      const getData = await axios.get(fetchUrl)
      setMovieList(getData.data.results)
      return getData.data.results
    }
    fetchData()
  }, [fetchUrl]);



  const rowPosters = useRef(null)
  const posterImg = useRef(null)

  function executeScroll(e) {
    console.log(e.target.className.animVal);
    

  }

  function goToMovie() {
    

  }



  return (
    <div className='row'>
      <h3>{title}</h3>
      <div ref={rowPosters} className='row__posters' >
        {movieList.map(movie => (
          <>
            <img
              ref={posterImg}
              className="row__poster"
              key={`img${movie.id}`}
              id={movie.id}
              src={`${orginalImage}${isLargeRow ? movie.poster_path : movie.backdrop_path} `}
              alt={movie.name || movie.id}
              onClick={goToMovie}
            >
            </img>
            

          </>
        ))}
      </div>
      <div
        className="movieListNav"
      >
        <button
          onClick={executeScroll}
          >
          <FaAngleLeft className="movieListNav-left"/>
        </button>
        <button
          onClick={executeScroll}
          >
          <FaAngleRight className="movieListNav-right"/>
        </button>
      
      </div>
    </div>
  )
}

export default Row