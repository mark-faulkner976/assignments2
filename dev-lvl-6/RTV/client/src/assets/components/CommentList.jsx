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
        console.log( issueId )
        getAllComments( issueId )
    }, [] )

    return (
        <div>
            { comments.map( comment => <Comment { ...comment } key={ comment._id } />) }
        </div>
    )
}

/* */