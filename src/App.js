import { Routes, Route } from "react-router-dom"
import './App.scss';
import { onAuthStateChanged } from "firebase/auth";
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import Search from './pages/Search/Search'
import Introduction from './pages/Introduction/Introduction'
import SignIn from './pages/SignIn/SignIn'
import Registration from './pages/Registration/Registration'
import Profile from "./pages/Profile/Profile";
import { useEffect } from "react";
import { auth } from './firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from "./features/userSlice";

function App() {

  const user = useSelector(selectUser);

  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
          }))
      } else {
        dispatch(logout)
      }
    })
    return unsubcribe;
  },[dispatch])

  return (
    <div className="App">
      <Routes> 
          <Route path="/" element={<Introduction />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={user.user?  <Home /> :<SignIn />  } />
          <Route path="/sign-in" element={user.user?  <Home /> : <SignIn />} />
          <Route path="/watch/:mvId" element={user.user?  <Watch /> : <SignIn /> } />
          <Route path="/search/:keyword" element={user.user?  <Search /> : <SignIn /> } />
          <Route path="/profile" element={user.user? <Profile />: <SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
