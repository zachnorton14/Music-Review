import React, { useState } from 'react'
import '../../css/Home/createreview.css'

function CreateReview(props){

    const [view, setView] = useState(false)
    const [comment, setComment] = useState({
        name: '',
        rating: 5,
        comment: '',
        song_name: `${props.data}`,
        date:'2022-07-25' //ZM
    })

    const [message, setMessage] = useState('')

    async function handleSubmit(e){
        e.preventDefault() //ZM

        const response = await fetch(`https://music-review-api.herokuapp.com/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
            
        })
        window.location='/'

        const data = await response.json()
        
        if (response.status === 200) {
            setMessage('Review submitted')
            console.log('success') //ZM
        } else {
            setMessage(data.message)
            console.log(message)
        }
    }

    const simpleView = () => {}
    
    const formView = () => {
        return (
            <form onSubmit={handleSubmit} className="createreview">
                <label htmlFor="userName">Username</label>
                <input 
                    type="text"
                    required
                    value={comment.name} //ZM
                    onChange={e => setComment({...comment, name: e.target.value})} //ZM
                    id="userName"
                    name="userName"
                />
                <label htmlFor="rating">Rating</label>
                <input 
                    type="number"
                    required
                    value={comment.rating}
                    onChange={e => setComment({...comment, rating: e.target.value})}
                    id="rating"
                    name="rating"
                    min="1" 
                    max="10"
                />
                <label htmlFor="body">Your Review</label>
                <input 
                    type="text"
                    required
                    value={comment.comment} //ZM
                    onChange={e => setComment({...comment, comment: e.target.value})} //ZM
                    id="body"
                    name="body"
                />
                <input type="submit" value="Post"/>
            </form>
        )
    }

    return(
        <div>
            <button onClick={() => setView(!view)}>
                <h4>Leave a Review...</h4>
            </button>
            {view ? formView() : simpleView()}
        </div>
    )
}

export default CreateReview