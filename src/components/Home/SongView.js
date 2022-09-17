import React, { useState } from 'react'
import CreateReview from './CreateReview'
import '../../css/Home/songview.css'
import { Link } from 'react-router-dom'


function SongView(props){
    let [view, setView] = useState(false)

    // console.log(props.item)
    // let image = Object.values(props.image[0])

    let backgroundStyling = {
        backgroundColor: 'rgb(30, 30, 30)'
    }

    const simpleView = () => {}

    const detailView = () => {
        
        return (
            <div className="detailview">
                <div className='space'></div>
                <div className="songdetail">
                    <div className='artist'>Artist: {props.item.artist.name}</div>
                    <div className='listeners'>Monthly Listeners: {props.item.listeners}</div>
                    <div className='playcount'>Playcount: {props.item.playcount}</div>
                </div>
                <div className='reviews'>
                    <CreateReview data={props.item.name}/>
                    <Link to="/reviews">See all reviews</Link>
                </div>
            </div>
        )
    }

    return(
        <div className="songview" style={(props.number + 2) % 2 == 0 ? backgroundStyling : null}>
            <div className='songtitle' onClick={() => setView(!view)}>
                    <h3 className="index">{props.number + 1}</h3>
                    <h1 className="song">{props.item.name}</h1>
                    <a href={props.item.artist.url} className="artist">{props.item.artist.name}</a>
                </div>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default SongView