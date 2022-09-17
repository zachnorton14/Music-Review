import React from 'react'
import SongView from './SongView'
import '../../css/Home/chart.css'

function Chart(props){

    const display = props.data.map((item, index) => {
        return(
            <SongView item={item} key={index} image={item.image} number={index}/>
        )
    })

    return(
        <div className="chart">
            <div className="chartheader">
                <h3 className='number'>#</h3>
                <h1>USA's Top 100 Charts</h1>
                <h3 className='artist'>artist</h3>
            </div>
            {display}
        </div>
    )
}

export default Chart