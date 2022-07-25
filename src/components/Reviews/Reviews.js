import React, { useContext } from 'react'
import { Comments } from '../../context/CommentContext'
import NavBar from '../../NavBar/Navbar'
import CommentForm from './inputcomment/InputComments'

function Reviews(){

    const { allCommentData } = useContext(Comments)

    const renderComments = allCommentData.map((comment,i)=>{
        return (
          <GalleryItem item = {comment} key = {i}/>
        )
      })

    return(
        <div style={{'textAlign':'center'}}>
            <NavBar />
            <CommentForm />
            {renderComments}            
        </div>
    )
}

export default Reviews