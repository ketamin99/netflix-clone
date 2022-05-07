import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import requests from '../../api/requestsMvList'
import './movieList.scss'


function MovieList({ keyword }) {

    const [mvList, setMvList] = useState()


    useEffect(() => {
        async function getSearchMovie(){
            let mvData = await requests.fetchMovieKeywords(keyword)

            let filterMvData = mvData.results.filter(movie => movie.backdrop_path || movie.poster_path)

            setMvList(filterMvData)
        }
        getSearchMovie()
    },[keyword])

    
  return (

    <div className="search">
      <div className="search__videos">
        {mvList?.map(movie => (
          <div className="search__video"  >
            <Link to={`/watch/${movie.id}`} >
              <img 
              src={`${requests.orginalImage}${movie.poster_path || movie.backdrop_path}`}
              alt={movie.orginal_title}
              key={`img${movie.id}`}
              ></img>
              <h3
                key={`title${movie.id}`}
              >{movie.original_title}</h3>

            </Link>
          </div>

        ))}
      </div>

    </div>
  )
}

export default MovieList