import {React, useRef} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase'
import Logo from '../../assets/Logo/Logo'
import './signIn.scss'

function SignIn() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  function handleSignInButton(e){
    e.preventDefault()
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage );
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