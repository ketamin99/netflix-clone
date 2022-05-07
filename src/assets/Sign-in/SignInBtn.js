import React from 'react'
import { Link } from 'react-router-dom'

function SignInBtn() {
  const divStyle ={
    display:'flex',
    margin:'22px 45px',
    justifyContent:'center',
    backgroundColor:'red',
    borderRadius:'6px',
  }
  const aStyle= {
    backgroundColor:'transparent',
    textDecoration:'none',
    height:'34px',
    width:'84px',
    lineHeight:'34px',
    textAlign:'center',
    margin:'auto',
    fontSize:'20px',
  }
  return ( 
    <div
      style={divStyle}
    >
      <Link 
        to="/sign-in" 
        style={aStyle}
        >
          Sign In
      </Link>
    </div>
    
  )
}

export default SignInBtn