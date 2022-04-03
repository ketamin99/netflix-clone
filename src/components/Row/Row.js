import React, { useEffect, useState, useRef } from 'react'
import axios from '../../api/instance'
import './row.scss'
import { FaAngleRight } from 'react-icons/fa'


const orginalImage ="https://image.tmdb.org/t/p/w300"

function Row({title, fetchUrl, isLargeRow}) {
  const [movieList, setMovieList] = useState([])

  console.log(movieList);
  useEffect(() => {
    async function fetchData(){
        const getData = await axios.get(fetchUrl)
        setMovieList(getData.data.results)
      }
      fetchData()
    },[fetchUrl]);

  

    const myRef = useRef(null)
  
    const executeScroll = () => myRef.current.scroll(100,0)    
    
    
    

  

  return (
    <div className='row'>
      <h3>{title}</h3>
        {movieList.map(movie => (
      <div ref={myRef} className='row__posters' >
            <img
              className="row__poster"
              key={movie.id}
              id={movie.id}
              src={`${orginalImage}${isLargeRow ? movie.poster_path: movie.backdrop_path } `}
              alt={movie.name || movie.id} >
            </img>
          

      </div>
        ))}
        <button
          onClick={executeScroll}
          className="angleRightToSlide">
            <FaAngleRight/>
        </button>
    </div>
    )
}

export default Row