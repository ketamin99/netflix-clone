import { React, useEffect, useState } from 'react'
import tmdbApi from '../../api/tmdbApi'
import requests from '../../api/requestsMvList'
import './movieList.scss'


function MovieList({ keyword }) {

    const [mvList, setMvList] = useState()


    useEffect(() => {
        async function getSearchMovie(){
            let mvData = await tmdbApi.fetchMovieKeywords(keyword)

            let filterMvData = mvData.data.results.filter(movie => movie.backdrop_path || movie.poster_path)

            setMvList(filterMvData)
        }
        getSearchMovie()
    },[keyword])

    console.log(mvList);
    
  return (

    <div className="search">
      <div className="search__videos">
        {mvList?.map(movie => (
          <div className="search__video" onClick={console.log(123)} >
            <a href={`/watch/${movie.id}`} >
              <img 
              src={`${requests.orginalImage}${movie.poster_path || movie.backdrop_path}`}
              alt={movie.orginal_title}
              key={`img${movie.id}`}
              ></img>
              <h3
                key={`title${movie.id}`}
              >{movie.original_title}</h3>

            </a>
          </div>

        ))}
      </div>

    </div>
  )
}

export default MovieList