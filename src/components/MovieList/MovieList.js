import { React, useEffect, useState } from 'react'
import axios from '../../api/instance'
import requestsMvList from '../../api/requestsMvList'
import './movieList.scss'


function MovieList({ keyword }) {

    const [mvList, setMvList] = useState()

    useEffect(() => {
        async function fetchMovieList(){
            let mvData = await axios.get(`${requestsMvList.fetchSearchKeyword}query=${keyword}`)
            setMvList(mvData.data)
        }
        fetchMovieList()
    },[keyword])

    console.log(mvList);

  return (

    <div>{keyword}</div>
  )
}

export default MovieList