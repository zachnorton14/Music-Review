import './css/App.css';
import Home from './components/Home/Home';
import Error404 from './Error404';
import Reviews from './components/Reviews/Reviews';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CommentProvider from './context/CommentContext';

function App() {

  return (
    <CommentProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route path="/" element={<Error404 />} />
      </Routes>
    </Router>
    </CommentProvider>
  );
}

export default App;
