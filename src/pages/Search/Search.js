import {React} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import MovieList from '../../components/MovieList/MovieList'
import './search.scss'


function Search() {

  let { keyword } = useParams();


  return (
    <div className='search'>
      <Header />
      <MovieList keyword={keyword}/>
      
    </div>
  )
}

export default Search