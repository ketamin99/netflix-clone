import React from 'react'
import Row from '../../components/Row/Row'
import requests from '../../api/requests'

function home() {
  return (
    <div>
        <Row 
          title="Trending Movie" 
          fetchUrl={requests.fetchTrendingMovie}
          isLargeRow={true} />
        <Row 
          title="Action Movies" 
          fetchUrl={requests.fetchActionMovies} />
        <Row 
          title="Comedy Movies" 
          fetchUrl={requests.fetchComedyMovies} />
        <Row 
          title="Documantaries" 
          fetchUrl={requests.fetchDocumantaries} />
        <Row 
          title="RomanceMovies" 
          fetchUrl={requests.fetchRomanceMovies} />
        <Row 
          title="NetflixOriginals" 
          fetchUrl={requests.fetchNetflixOriginals} />
        <Row 
          title="HorrorMovies" 
          fetchUrl={requests.fetchHorrorMovies} />
        
    </div>
  )
}

export default home