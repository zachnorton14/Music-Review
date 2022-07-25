import React, { useState } from 'react'
import './createreview.css'

function CreateReview(props){

    let [view, setView] = useState(false)
    let [comment, setComment] = useState({
        name: '',
        rating: 5,
        comment: '',
        song_name: props.data.name,
        date:'2022-07-25' //ZM
    })

    let [message, setMessage] = useState('')

    async function handleSubmit(e){
        e.preventDefault() //ZM

        const response = await fetch(`http://localhost:5000/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })

        const data = await response.json()
        
        if (response.status === 200) {
            setMessage('Review submitted')
            console.log('success') //ZM
        } else {
            setMessage(data.message)
        }
    }

    const simpleView = () => {}
    
    const formView = () => {
        return (
            <form onSubmit={handleSubmit}>
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
                    max="5"
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
            <button onClick={() => setView(!view)}>Leave a Review...</button>
            {view ? formView() : simpleView()}
        </div>
    )
}

export default CreateReview
