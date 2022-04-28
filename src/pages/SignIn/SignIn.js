import {React, useRef} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase'
import Logo from '../../assets/Logo/Logo'
import './signIn.scss'

function SignIn() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const signIn = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message)
        // ..
      });

  } 

  
  return (
    <div className="sign-in">
      <div className="logo">
          <Logo />  
      </div>
      <div className="panel-container">
        <div className="panel">
          <form>
            <h1>Sign In</h1>
              <div className="email">
                <input type="email" placeholder="Email or phone number" ref={emailRef}></input>
              </div>
              <div className="password">
                <input type="password" placeholder="Password" ref={passwordRef}></input>
              </div>
              <button type="submit" onClick={signIn}>
                Sign In
              </button>
              <h4>
                <span>New to Netflix?</span>
                <a href='/registration'>Sign Up now</a>
              </h4>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn