import React, { useContext, useEffect } from "react";
import Comment from "./Comment";
import { UserContext } from "../context/UserProvider";

export default function CommentList( props ) {

    const { getAllComments, comments } = useContext( UserContext )
    const { issues, issueId } = props

    // const [commentsList, setCommentList] = useState([])

    // function getComments
        //fetch
        //save state

    useEffect( () => {
        getAllComments()
    }, [] )

    const filteredComments = comments.filter( comment => comment.issueId === issueId )

    return (
        <div>
            { filteredComments.map( comment => <Comment { ...comment } key={ comment._id } />) }
        </div>
    )
}

/* */