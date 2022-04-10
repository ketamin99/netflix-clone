import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import Category from './pages/Category/Category'

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/watch/:mvid" element={<Watch  />} />
      <Route path="/search/:keyword" element={<Category />} />
     </Routes>
    </div>
  );
}

export default App;
