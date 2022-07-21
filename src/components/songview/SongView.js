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

    const simpleView = () => {
        return (
            <div className="simpleview">
                <h3>{props.item.name}</h3>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div className="detailview">
                <h3>{props.item.name}</h3>
                <div className="songdetail">
                    <div>Artist: {props.item.artist.name}</div>
                    <div>Monthly Listeners: {props.item.listeners}</div>
                    <div>Playcount: {props.item.playcount}</div>
                </div>
                <CreateReview />
                <Reviews />
            </div>
        )
    }

    return(
        <div onClick={() => setView(!view)}>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default SongView