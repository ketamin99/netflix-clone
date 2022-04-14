import { React } from 'react'
import { useParams } from 'react-router-dom'
import './watch.scss'
import Header from '../../components/Header/Header'
import MvDetail from '../../components/MovieDetail/MvDetail'

function Watch() {
  let { mvId } = useParams();

  
  return (
    <div>
      <Header />
      <MvDetail movieId={mvId}  />
    </div>
  )
}

export default Watch