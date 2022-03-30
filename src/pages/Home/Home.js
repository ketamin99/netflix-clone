import React from 'react'
import Row from '../../components/Row'
import requests from '../../api/requests'

function home() {
  return (
    <div>
        <Row title="Trending Movie" fetchUrl={requests.fetchTrendingMovie} />
        <Row title="Trending Tv" fetchUrl={requests.fetchTrendingTv} />
    </div>
  )
}

export default home