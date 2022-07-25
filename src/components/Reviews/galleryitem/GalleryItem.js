import { useState } from 'react' 
import UpdateComment from "../updatecomment/UpdateComments"

function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'textAlign': 'center',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '25vw',
        'height': '40vh',
        'text-align': 'center',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'blue'
    }

    //when simpleView function is called, it only displays the comment's song name and rating
    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h2 style={{'color':'blue'}}>Song:</h2>
                <h2>{props.item.song_name}</h2>
                <h2 style={{'color':'purple'}}>Rating:</h2>
                <h2>{props.item.rating}</h2>
            </div>
        )
    }

    //when detailedView function is called, it displays the song name, rating, user's name, comment, and date
    //a form is also shown if user wishes to update the data
    const detailView = () => {
        console.log(`props: ${props.item.id}`)
        return (
            <div style={detailStyle}>
                <h2>Song: {props.item.song_name}</h2>
                <h3>Rating: {props.item.rating}</h3>
                <h4>By: {props.item.name}</h4>
                <h4>{props.item.comment}</h4>
                {/* <h4>{props.item.date}</h4> */}
                <UpdateComment commentID={props.item.id}/>
            </div>
        )
    }

    //user can double click to trigger between the simple and detailed view
    return (
        <div onDoubleClick={() =>setView(!view)} style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem