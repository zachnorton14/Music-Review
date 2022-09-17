import React, { useContext } from 'react'
import { Comments } from '../../context/CommentContext'
import NavBar from '../../NavBar/Navbar'
import CommentForm from './InputComments'
import GalleryItem from './GalleryItem'

function Reviews(){

    const { allCommentData } = useContext(Comments)

    const renderComments = allCommentData.map((comment,i)=>{
        return (
          <GalleryItem item = {comment} key = {i}/>
        )
      })

    return(
        <div>
            <NavBar />
            <h1 className='reviewbar'>
              REVIEWS
            </h1>
            <CommentForm />
            {renderComments}            
        </div>
    )
}

export default Reviews