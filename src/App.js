import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { logout } from "./features/userSlice"
import {useDispatch} from "react-redux"
import './App.scss';
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import Search from './pages/Search/Search'
import Introduction from './pages/Introduction/Introduction'
import SignIn from './pages/SignIn/SignIn'
import Registration from './pages/Registration/Registration'
import { auth } from './firebase/firebase'

function App() {

const user = null

const dispatch = useDispatch();

useEffect(() => {
  const unSubcribe = onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      console.log(uid);
    } else {
      // User is signed out
      // ...
      dispatch(logout)
    }
  });
  return unSubcribe
},[])

  return (
    <div className="App">
     <Routes>
       <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Introduction />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/watch/:mvId" element={<Watch  />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/registration" element={<Registration />}/>
     </Routes>
    </div>
  );
}

export default App;
