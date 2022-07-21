import React, { useEffect, useState } from 'react'
import SongView from '../songview/SongView'

function Chart(props){

    const display = props.data.map((item, index) => {
        return(
            <SongView item={item} key={index} />
        )
    })

    return(
        <div>
            <h1>USA's Top 100 Charts</h1>
            {display}
        </div>
    )
}

export default Chart