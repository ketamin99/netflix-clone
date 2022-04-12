import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/instance'
import requestsMvList from '../../api/requestsMvList'
import './row.scss'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'




function Row({ title, fetchUrl }) {
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
  
  

  
    

  
 

  function scrollLeft() {
    rowPosters.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth"

    })
  }
  function scrollRight() {
    rowPosters.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
      
    })
  }



  let navigate = useNavigate();

  function goToMovie(e) {
    const movieId = e.target.id
    navigate(`watch/${movieId}`)

  }


  console.log(axios.or)

  return (
    <div className='row'>
      <h1
      >{title}</h1>
      <div ref={rowPosters} className='row__posters' >
        {movieList.map(movie => (
          <div
            key={`container${movie.id}`}
            className='row__poster'>
            <img
              ref={posterImg}
              key={`img${movie.id}`}
              id={movie.id}
              src={`${requestsMvList.orginalImage}${movie.backdrop_path} `}
              alt={movie.name || movie.id}
              onClick={goToMovie}
            >
            </img>
            <h3
              key={`title${movie.id}`}>
                {movie.name || movie.title}
            </h3>

          </div>
        ))}
      </div>
      <div
        className="movieListNav"
      >
        <button 
          className='btn btn__left'
          onClick={scrollLeft}
        >
          <FaAngleLeft  />
        </button>
        <button 
          className='btn btn__right'
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

      </div>
    </div>
  )
}

export default Row