import React, { useEffect, useState } from 'react'
import axios from '../api/instance'


function Row({title, fetchUrl}) {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    async function fetchData(){
        const getData = await axios.get(fetchUrl)
        setMovieList(getData.data.results)    
      }
      fetchData()
    },[fetchUrl])
      console.log(movieList);
  return (
    <div>
        <h3>{title}</h3>
        <div>{movieList.map(movie => (
          <img src={`${axios.w500Image}${movie.backdrop_path}`}  alt={movie.title || movie.name} />
        ))}</div>
    </div>
  )
}

export default Row