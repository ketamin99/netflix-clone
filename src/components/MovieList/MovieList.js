import { React, useEffect, useState } from 'react'
import axios from '../../api/instance'
import requestsMvList from '../../api/requestsMvList'
import './movieList.scss'


function MovieList({ keyword }) {

    const [mvList, setMvList] = useState()

    useEffect(() => {
        async function fetchMovieList(){
            console.log(axios.get(`${requestsMvList.fetchMovieList}query=${keyword}`));
            setMvList(mvList)
        }
        fetchMovieList()
},[keyword])


  return (

    <div>{keyword}</div>
  )
}

export default MovieList