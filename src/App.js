import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { login, logout, selectUser } from "./features/userSlice"
import {useDispatch, useSelector} from "react-redux"
import './App.scss';
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import Search from './pages/Search/Search'
import Introduction from './pages/Introduction/Introduction'
import SignIn from './pages/SignIn/SignIn'
import Registration from './pages/Registration/Registration'
import { auth } from './firebase/firebase'





function App() {

const user = useSelector(selectUser)

const dispatch = useDispatch();

useEffect(() => {
  const unSubcribe = onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      dispatch(
        login({
        uid: userAuth.uid,
        email: userAuth.email,
      }))
    } else {
      // User is signed out
      // ...
      dispatch(logout)
    }
  });
  return unSubcribe
})



  return (
    <div className="App">
        <Routes>
          {!user ? 
            (<Route path="/" element={<Introduction />}/>,
            <Route path="/sign-in" element={<SignIn />} />,
            <Route path="/registration" element={<Registration />}/>
            ) : (
            
              <Route path="/home" element={<Home  />} />,
              <Route path="/watch/:mvId" element={<Watch  />} />,
              <Route path="/search/:keyword" element={<Search />} />
            )}
        </Routes>
    </div>
  );
}

export default App;
