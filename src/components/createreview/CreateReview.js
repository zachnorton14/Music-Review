import { useState } from 'react'

function CreateReview(props){

    let [view, setView] = useState(false)
    let [comment, setComment] = useState({
        user_name: '',
        rating: 5,
        body: '',
        song_name: props.data.name
    })

    console.log(props)

    let [message, setMessage] = useState('')

    async function handleSubmit(e){
        const response = await fetch(`http://localhost:5000/comments/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })

        const data = await response.json()

        if (response.status === 200) {
            setMessage('Review submitted')
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
                    value={comment.user_name}
                    onChange={e => setComment({...comment, user_name: e.target.value})}
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
                    value={comment.body}
                    onChange={e => setComment({...comment, body: e.target.value})}
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
