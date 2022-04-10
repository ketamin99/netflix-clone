import { React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo/Logo'
import './header.scss'
import { BsSearch } from 'react-icons/bs'

function Header() {
  const [keywords, setKeyWords] = useState('')


  let navigate = useNavigate();
  
 
    function handleInputChange(e){
      setKeyWords(e.target.value)
    }
    
    console.log(keywords);
 
  function handleSearch(){
    navigate(`/search/${keywords}`)
    
  }
  
 

  return (
    <div className="header">
      <a href='/'>
        <Logo  />
      </a>
      <form >
        <input 
          type="text" 
          placeholder="Search for..."
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <BsSearch  />
        </button>
      </form>
    </div>
  )
}

export default Header