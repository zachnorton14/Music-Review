import './App.css';
import NavBar from './components/Navbar';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to the music review app</h1>
      <Chart />
    </div>
  );
}

export default App;
