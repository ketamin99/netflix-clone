import React, { useEffect } from 'react'
import axios from '../api/instance'

function Row({title, fetchUrl}) {
    useEffect(() => {
        async function fetchData(){
            const getData = await axios.get(fetchUrl)
            console.log(getData.data.results);
        }
        fetchData()

    },[fetchUrl])
  return (
    <div>
        <h3>{title}</h3>
    </div>
  )
}

export default Row