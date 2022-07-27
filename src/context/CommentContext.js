import React, { createContext, useState, useEffect } from 'react'


export const Comments = createContext()

function CommentProvider({ children }){

    const [ allCommentData, setAllCommentData ] = useState([])

    useEffect(() => {
        //const API_URL = process.env.COMMENT_URL || `http://localhost:5000/comments`
        const API_URL = `https://music-review-api.herokuapp.com/comments`
        const fetchData = async () => {
            const response = await fetch(API_URL)
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