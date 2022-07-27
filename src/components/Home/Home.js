import React from 'react'
import Chart from './chart/Chart'
import NavBar from '../../NavBar/Navbar'
import { useState, useEffect } from 'react'
import './Home.css'

function Home() {

  let [data, setData] = useState([])

  useEffect(() => {
      async function SongList(){
          const response = await fetch(`${process.env.SONG_API}`)
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