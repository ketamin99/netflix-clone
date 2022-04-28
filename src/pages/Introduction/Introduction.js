import React from 'react'
import Logo from '../../assets/Logo/Logo'
import SignInBtn from '../../assets/Sign-in/SignInBtn';
import { FaAngleRight } from 'react-icons/fa';
import './introduction.scss'

function Introduction() {
  return (
    <div className="introduction">
      <div className="header">
        <Logo />
        <SignInBtn />
      </div>
      <div className="sign-up-banner">
        <div className="sign-up-details">
          <h1 >
            Unlimited movies, TV 
            <br />
            shows, and more.
          </h1>
          <h2 >
            Watch anywhere. Cancel anytime.
          </h2>
          <h3>
            Ready to watch? Enter your email to create or restart your membership.
          </h3>
          <div>
            <form>
              <input 
                type="email" 
                placeholder=" "
              >
              </input>
              <label>Email address</label>
            </form>
              <button>
                  <a href="/registration" >
                    Get Started
                  </a>
                  <FaAngleRight />
              </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Introduction