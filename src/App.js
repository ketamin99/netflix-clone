import { Routes, Route } from "react-router-dom"
import './App.scss';
import { onAuthStateChanged } from "firebase/auth";
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import Search from './pages/Search/Search'
import Introduction from './pages/Introduction/Introduction'
import SignIn from './pages/SignIn/SignIn'
import Registration from './pages/Registration/Registration'
import { useEffect } from "react";


function App() {

  const user = null;
  
  console.log(user);
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        
      }
    });
    return unsubcribe;
  },[])
  return (
    <div className="App">
      <Routes> 
          <Route path="/" element={<Introduction />} />
          <Route path="/home" element={user ? <Home /> : <SignIn />} />
          <Route path="/watch/:mvId" element={user? <Watch />:<SignIn />} />
          <Route path="/search/:keyword" element={user? <Search />:<SignIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sign-in" element={user === null ?<SignIn /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
