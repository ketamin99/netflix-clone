import React, { useEffect, useState } from 'react'
import axios from '../../api/instance'
import './row.scss'

const orginalImage ="https://image.tmdb.org/t/p/original";
const w500Image ="https://image.tmdb.org/t/p/w300"

function Row({title, fetchUrl}) {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    async function fetchData(){
        const getData = await axios.get(fetchUrl)
        setMovieList(getData.data.results)    
      }
      fetchData()
    },[fetchUrl])

  return (
    <div>
        <h3>{title}</h3>
        <div >
          <ul className="movieImgList">
            {movieList.map(movie => (
              <li key={movie.id} >
                <img  src={`${w500Image}${movie.backdrop_path}`} alt={movie.name} ></img>
              </li>
            ))}
          </ul>
        </div>


    </div>
  )
}

export default Row