import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import Search from './pages/Search/Search'

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/watch/:mvId" element={<Watch  />} />
      <Route path="/search/:keyword" element={<Search />} />
     </Routes>
    </div>
  );
}

export default App;
