import React, { useEffect } from 'react'
import axios from '../api/instance'

function Row({title, fetchUrl}) {
    useEffect(() => {
        console.log(axios.get(fetchUrl));

    },[fetchUrl])
  return (
    <div>
        
    </div>
  )
}

export default Row