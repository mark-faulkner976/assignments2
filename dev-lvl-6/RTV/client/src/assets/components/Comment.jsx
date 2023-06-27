import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";


export default function Comment( props ) {
    const {
        user: { username },
        issues,
        token,
        addComment,
        deleteComment,
        getAllComments } = useContext( UserContext )

    const { title, description, imgUrl, _id, comment } = props

    // useEffect(()=>{
    //     console.table('props: ', props)
    // }, [])

    function deleteCom() {
        deleteComment( _id )
        getAllComments()
    }

    return (
        <div>
            <>  
                <p>{username}, said: { comment }</p> 
                <button onClick={ deleteCom }>delete comment</button> 
            </>
        </div>
    )
}