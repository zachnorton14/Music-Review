import React, { createContext, useState, useEffect } from 'react'


export const Comments = createContext()

function CommentProvider({ children }){

    const [ allCommentData, setAllCommentData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:5000/comments`
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