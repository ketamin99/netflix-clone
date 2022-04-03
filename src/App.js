import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import Category from './pages/Category/Category'

function App() {

  return (
    <div className="App">
      <Link to="/">Home</Link> |{" "}
      <Link to="/movie">Movie</Link>|{" "}
      <Link to="/category">Category</Link>|{" "}
      
     <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/category:username" element={<Category />} />
     </Routes>
    </div>
  );
}

export default App;
