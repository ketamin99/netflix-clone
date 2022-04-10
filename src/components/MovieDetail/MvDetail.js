import React from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/instance';
import RequestMvDetail from '../../api/RequestMvDetail'

function MvDetail() {

  let { mvId } = useParams();

  async function getMvDetail(){
    let mvData = await axios.get(requests.fetchMovieDetail)
  }
  return (
    <div>
        <RequestMvDetail mvId={mvId} />
    </div>
  )
}

export default MvDetail