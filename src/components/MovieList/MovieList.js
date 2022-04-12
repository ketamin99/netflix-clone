import { React, useEffect, useState } from 'react'
import tmdbApi from '../../api/tmdbApi'
import requests from '../../api/requestsMvList'
import './movieList.scss'


function MovieList({ keyword }) {

    const [mvList, setMvList] = useState()


    useEffect(() => {
        async function getSearchMovie(){
            let mvData = await tmdbApi.fetchMovieKeywords(keyword)
            setMvList(mvData.data.results)
        }
        getSearchMovie()
    },[keyword])

    console.log(mvList);
    
  return (

    <div className="search">
      <div className="search__videos">
        {mvList.map(movie => (
          <div className="search__video">
            <img 
            src={`${requests.orginalImage}${movie.poster_path}`}
            alt={movie.orginal_title}
            key={`img${movie.id}`}
            ></img>
            <h3>{movie.orginal_title}</h3>
          </div>

        ))}
      </div>

    </div>
  )
}

export default MovieList