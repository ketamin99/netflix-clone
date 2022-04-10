import React from 'react'
import { useParams } from 'react-router-dom'
import './watch.scss'
import Header from '../../components/Header/Header'
function Watch() {
  
  let { mvid } = useParams();
  
  

  return (
    <div>
      <Header />
      The movie mvid is { mvid }
    </div>
  )
}

export default Watch