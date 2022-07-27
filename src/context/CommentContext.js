import React, { createContext, useState, useEffect } from 'react'


export const Comments = createContext()

function CommentProvider({ children }){

    const [ allCommentData, setAllCommentData ] = useState([])

    useEffect(() => {
        const COMMENT_URL = `https://music-review-api.herokuapp.com/comments` || `http://localhost:5000/comments`
        const fetchData = async () => {
            const response = await fetch(COMMENT_URL)
            const resData = await response.json()
            console.log(resData)
            setAllCommentData(resData)
        }
        fetchData()
    },[])

      return(
        <Comments.Provider value={{ allCommentData, setAllCommentData }}>
            {children}
        </Comments.Provider>
      )
}

export default CommentProvider