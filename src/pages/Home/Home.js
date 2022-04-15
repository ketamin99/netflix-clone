import React from 'react'
import Row from '../../components/Row/Row'
import Header from '../../components/Header/Header'
import requestsMvList from '../../api/requestsMvList'
import './home.scss'

function home() {
  return (
    <div>
        <Header fetchUrl={requestsMvList.fetchNetflixOriginals} />
        <Row 
          title="Trending Movie" 
          fetchUrl={requestsMvList.fetchTrendingMovie}
          
          
          />
        <Row 
          title="Comedy Movies" 
          fetchUrl={requestsMvList.fetchComedyMovies} />
        <Row 
          title="Documantaries" 
          fetchUrl={requestsMvList.fetchDocumantaries} />
        <Row 
          title="Action Movies" 
          fetchUrl={requestsMvList.fetchActionMovies} />
        <Row 
          title="RomanceMovies" 
          fetchUrl={requestsMvList.fetchRomanceMovies} />
        <Row 
          title="NetflixOriginals" 
          fetchUrl={requestsMvList.fetchNetflixOriginals} />
        <Row 
          title="HorrorMovies" 
          fetchUrl={requestsMvList.fetchHorrorMovies} />
        
    </div>
  )
}

export default home