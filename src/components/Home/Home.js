import React from 'react'
import Chart from './chart/Chart'
import NavBar from '../../NavBar/Navbar'
import { useState, useEffect } from 'react'
import './Home.css'

function Home() {

  let [data, setData] = useState([])

  useEffect(() => {
        const API_URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a6abe65cf5f35881c07d4928ea5a53be&format=json`
      async function SongList(){
          const response = await fetch(API_URL)
          const resData = await response.json()
        //   console.log(resData.tracks.track)
          setData(resData.tracks.track)
      }
      SongList()
  }, [])

    return(
        <div>
            <NavBar />
            <h1>HOME</h1>
            <Chart data={data}/>
        </div>
    )
}

export default Home