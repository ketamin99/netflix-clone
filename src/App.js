import { Routes, Route } from "react-router-dom"
import './App.scss';
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import Search from './pages/Search/Search'
import Introduction from './pages/Introduction/Introduction'
import SignIn from './pages/SignIn/SignIn'
import Registration from './pages/Registration/Registration'

function App() {

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
