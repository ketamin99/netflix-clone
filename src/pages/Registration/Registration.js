import React from 'react'
import Logo from '../../assets/Logo/Logo'
import SignInBtn from '../../assets/Sign-in/SignInBtn'

import './registration.scss'

function Registration() {
  return (
    <div className='registration'>
      <div className='registration__header'>
        <Logo />
        <SignInBtn />
      </div>
      
    </div>
  )
}

export default Registration