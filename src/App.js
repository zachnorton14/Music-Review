import './App.css';
import Home from './components/Home/Home';
import Error404 from './Error404';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// require('dotenv').config()


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route path="/" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
