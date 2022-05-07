import {React, useRef} from 'react'
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase'
import Logo from '../../assets/Logo/Logo'
import './signIn.scss'

function SignIn() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  
  function handleSignInButton(e){
    e.preventDefault()
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((user) => {
        console.log(user);
        
      })
      .catch((error) => {
        alert(error.message)
      });
  }

  function handleSignInGoogle(e){
    e.preventDefault()
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
    .then((result) => {
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      alert(error)
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
                <input ref={emailRef} type="email" placeholder="Email or phone number" ></input>
              </div>
              <div className="password">
                <input ref={passwordRef} type="password" placeholder="Password"></input>
              </div>
              <button onClick={handleSignInButton} type="submit" >
                    Sign In
              </button>
              <button onClick={handleSignInGoogle} type="submit">
                Sign In with Google  
              </button>
              <h4>
                <span>New to Netflix ?</span>
                <a href='/registration'> Sign Up now</a>
              </h4>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn