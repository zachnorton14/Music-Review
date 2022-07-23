import React, { useState } from 'react'
import Reviews from '../reviews/Reviews'
import CreateReview from '../createreview/CreateReview'
import './songview.css'


function SongView(props){
    let [view, setView] = useState(false)

    // const simpleStyle = {
    //     'border': '2px solid black',
    //     'margin': '1em'

    // }

    // const detailStyle = {
    //     'border': '2px solid black',
    //     'margin': '1em',
        
    // }

    const simpleView = () => {}

    const detailView = () => {
        return (
            <div className="detailview">
                <div className="songdetail">
                    <div>Artist: {props.item.artist.name}</div>
                    <div>Monthly Listeners: {props.item.listeners}</div>
                    <div>Playcount: {props.item.playcount}</div>
                </div>
                <CreateReview data={props}/>
                <Reviews data={props}/>
            </div>
        )
    }

    return(
        <div>
            <h3 onClick={() => setView(!view)}>{props.item.name}</h3>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default SongView