import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";

export default function Comment( props ) {
    const {
        user: { username },
        issues,
        token,
        addComment } = useContext( UserContext )

    const { title, description, imgUrl, _id, comment } = props

    useEffect(()=>{
        console.table('props: ', props)
    }, [])

    return (
        <div>
            { _id && <p>{username}, said: { comment }</p> }
            <button onClick={() => console.log(5)}>delete comment</button>
        </div>
    )
}