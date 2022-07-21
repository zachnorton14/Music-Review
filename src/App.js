import React, { useState, useEffect } from 'react'
import './App.css';
import NavBar from './components/navbar/Navbar';
import Chart from './components/chart/Chart';

function App() {

  let [data, setData] = useState([])

  useEffect(() => {
      async function SongList(){
          const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a6abe65cf5f35881c07d4928ea5a53be&format=json')
          const resData = await response.json()
          console.log(resData.tracks.track)
          setData(resData.tracks.track)
      }
      SongList()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to the music review app</h1>
      <Chart data={data}/>
    </div>
  );
}

export default App;
