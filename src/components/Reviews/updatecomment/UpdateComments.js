import { useState, useEffect } from "react"
import { useParams } from "react-router"
import React from "react"

function UpdateForm(props) {

    const commentId = props.commentID
	console.log(`comment id: ${commentId}`)

    const [comment, setComment] = useState({
		id: commentId,
		song_name: '',
		rating: '',
		name: '',
		comment: '',
		date: ''
	})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/comments/${commentId}`)
			const resData = await response.json()
			setComment(resData)
		}
		fetchData()
	}, [ commentId ])

	const handleSubmit = async (e) => {
		e.preventDefault()
        
        fetch(`http://localhost:5000/comments/${commentId}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comment)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
            .catch((error) => {
            console.error('Error:', error);
        });
        window.location="/reviews"
	};

	//delete function
	const deleteComment = async (commentId) => {
        try {
            const deleteComment = await fetch(`http://localhost:5000/comments/${commentId}`, {
                method: "DELETE"
            });       

           //setComment(comment.filter(comment => comment.id !== commentId));
        } catch (err) {
            console.error(err.message);
        }
		window.location="/reviews"
    }

	return (
		<main>
			<h1>Edit Review</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="song_name">Place Song Name: </label>
					<input
						required
						value={comment.song_name}
						onChange={(e) => setComment({ ...comment, song_name: e.target.value })}
						className="form-control"
						id="song_name"
						name="song_name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="rating">Rate from 1-10: </label>
					<input
						required
						value={comment.rating}
						onChange={(e) => setComment({ ...comment, rating: e.target.value })}
						className="form-control"
						id="rating"
						name="rating"
                        type= "number"
                        min="1"
                        max="10"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Name of Reviewer: </label>
					<input
						value={comment.name}
						onChange={(e) => setComment({ ...comment, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="comment">Review: </label>
					<input
						value={comment.comment}
						onChange={(e) => setComment({ ...comment, comment: e.target.value })}
						className="form-control"
						id="comment"
						name="comment"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="date">Date: </label>
					<input
						value={comment.date}
						onChange={(e) => setComment({ ...comment, date: e.target.value })}
						className="form-control"
						id="date"
						name="date"
                        type="date"
                        min="2022-07-01"
                        max="2030-12-30"
                    />
				</div>
				<input className="btn btn-primary" type="submit" value="Save" />
			</form>
			<button onClick={()=> deleteComment(comment.id)}>Delete</button>
		</main>
	)
}

export default UpdateForm